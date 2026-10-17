'use client';

import { useSyncExternalStore } from 'react';
import { ExternalLink } from 'lucide-react';
import { isYouTubeLive } from '../lib/youtube-live';
import { YouTubeIcon } from './social-icons';

function subscribeToClock(onChange: () => void) {
  let timer: number;
  const schedule = () => {
    timer = window.setTimeout(() => {
      onChange();
      schedule();
    }, 60_000 - (Date.now() % 60_000));
  };
  schedule();
  window.addEventListener('focus', onChange);
  document.addEventListener('visibilitychange', onChange);
  return () => {
    window.clearTimeout(timer);
    window.removeEventListener('focus', onChange);
    document.removeEventListener('visibilitychange', onChange);
  };
}

function getServerSnapshot() {
  return false;
}

export function YouTubeLink({ href, handle, variant = 'hero' }: {
  href: string;
  handle: string;
  variant?: 'hero' | 'card';
}) {
  const live = useSyncExternalStore(subscribeToClock, isYouTubeLive, getServerSnapshot);
  const label = live ? 'YouTube ahora en vivo' : `YouTube: ${handle}`;
  const status = (
    <span className="youtube-live-status">
      <span className="youtube-live-dot" aria-hidden="true" />
      {variant === 'hero' ? 'YouTube ahora en vivo' : 'Ahora en vivo'}
    </span>
  );

  return (
    <a
      className={live ? 'youtube-live-link' : undefined}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (abre en una pestaña nueva)`}
      title={label}
      data-reveal={variant === 'card' ? true : undefined}
    >
      {variant === 'hero' ? (
        <><YouTubeIcon />{live && status}</>
      ) : (
        <>
          <span className="social-icon"><YouTubeIcon /></span>
          <span className="social-name">
            <small>YouTube</small>
            <strong>{live ? status : handle}</strong>
          </span>
          <ExternalLink className="social-arrow" aria-hidden="true" />
        </>
      )}
    </a>
  );
}
