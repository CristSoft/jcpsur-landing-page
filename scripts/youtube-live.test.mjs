import assert from 'node:assert/strict';
import test from 'node:test';
import { isYouTubeLive } from '../lib/youtube-live.ts';

const cases = [
  ['sábado a las 09:59:59', '2026-10-17T12:59:59Z', false],
  ['sábado a las 10:00', '2026-10-17T13:00:00Z', true],
  ['sábado a las 10:59:59', '2026-10-17T13:59:59Z', true],
  ['sábado a las 11:00', '2026-10-17T14:00:00Z', false],
  ['viernes a las 10:30', '2026-10-16T13:30:00Z', false],
  ['domingo a las 10:30', '2026-10-18T13:30:00Z', false],
  ['el sábado siguiente a las 10:30', '2026-10-24T13:30:00Z', true],
  ['fecha con otra zona horaria, sábado a las 10:30 en Buenos Aires', '2026-10-17T22:30:00+09:00', true],
];

for (const [label, timestamp, expected] of cases) {
  test(label, () => {
    assert.equal(isYouTubeLive(new Date(timestamp)), expected);
  });
}
