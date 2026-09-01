import { cp, mkdir, rm } from 'node:fs/promises';

const outputDirectory = new URL('../dist/firebase/', import.meta.url);
const clientDirectory = new URL('../dist/client/', import.meta.url);
const prerenderDirectory = new URL('../dist/server/prerendered-routes/', import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });
await cp(new URL('index.html', prerenderDirectory), new URL('index.html', outputDirectory));
await cp(new URL('404.html', prerenderDirectory), new URL('404.html', outputDirectory));
