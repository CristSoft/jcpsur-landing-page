import { constants } from 'node:fs';
import { access, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const projectDirectory = fileURLToPath(new URL('../', import.meta.url));
const credentialPath = fileURLToPath(
  new URL('../.secrets/firebase-hosting-deployer.json', import.meta.url),
);
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const firebaseCommand = process.platform === 'win32' ? 'firebase.cmd' : 'firebase';

function run(command, args, environment = process.env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: projectDirectory,
      env: environment,
      shell: process.platform === 'win32',
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} terminó con código ${code}`));
    });
  });
}

try {
  await access(credentialPath, constants.R_OK);
} catch {
  console.error(
    'Falta la credencial local .secrets/firebase-hosting-deployer.json.',
  );
  process.exit(1);
}

await run(npmCommand, ['run', 'build:firebase']);

const isolatedFirebaseConfig = await mkdtemp(join(tmpdir(), 'jcpsur-firebase-cli-'));
const deployEnvironment = {
  ...process.env,
  CI: 'true',
  GOOGLE_APPLICATION_CREDENTIALS: credentialPath,
  XDG_CONFIG_HOME: isolatedFirebaseConfig,
};
delete deployEnvironment.FIREBASE_TOKEN;

try {
  await run(
    firebaseCommand,
    [
      'deploy',
      '--only',
      'hosting',
      '--project',
      'adventistasjosecpaz',
      '--non-interactive',
    ],
    deployEnvironment,
  );
} finally {
  await rm(isolatedFirebaseConfig, { recursive: true, force: true });
}
