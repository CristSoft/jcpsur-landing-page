const churchTime = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Argentina/Buenos_Aires',
  weekday: 'short',
  hour: '2-digit',
  hourCycle: 'h23',
});

export function isYouTubeLive(date = new Date()): boolean {
  const parts = churchTime.formatToParts(date);
  return parts.some(({ type, value }) => type === 'weekday' && value === 'Sat')
    && parts.some(({ type, value }) => type === 'hour' && value === '10');
}
