'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BookOpen, ChevronUp, Gift, X } from 'lucide-react';

const bookUrl = 'https://libro.esperanzaweb.com/cuenta-regresiva/';

export function FeaturedNews({ whatsappUrl }: { whatsappUrl: string }) {
  const [collapsed, setCollapsed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const requestUrl = `${whatsappUrl}?text=${encodeURIComponent(
    '¡Hola! Vengo de la página de la iglesia y me gustaría pedir un ejemplar físico totalmente GRATIS del libro Cuenta Regresiva. ¿Cómo puedo recibirlo?',
  )}`;

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        '--featured-news-height',
        `${Math.ceil(banner.getBoundingClientRect().height)}px`,
      );
    };
    const observer = new ResizeObserver(updateHeight);
    observer.observe(banner);
    updateHeight();

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--featured-news-height');
    };
  }, []);

  return (
    <>
      <div className="featured-news-space" aria-hidden="true" />
      <div className="featured-news-dock" ref={bannerRef}>
        <aside
          className={`featured-news${collapsed ? ' featured-news-collapsed' : ''}`}
          aria-label="Noticias destacadas"
        >
          <button
            className="featured-news-toggle"
            type="button"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? 'Ver invitación a leer Cuenta Regresiva' : 'Minimizar noticia destacada'}
            aria-expanded={!collapsed}
            aria-controls="featured-news-content"
          >
            {collapsed ? <><BookOpen aria-hidden="true" /><span>Cuenta Regresiva · GRATIS</span><ChevronUp aria-hidden="true" /></> : <X aria-hidden="true" />}
          </button>
          <div id="featured-news-content" className="featured-news-content" hidden={collapsed}>
            <a className="featured-news-invitation" href={bookUrl} target="_blank" rel="noreferrer">
              <Image
                className="featured-news-cover"
                src="/img/cuenta-regresiva.webp"
                alt="Portada de Cuenta Regresiva, de Alejandro Bullón"
                width={527}
                height={775}
                unoptimized
              />
              <div className="featured-news-copy">
                <span className="featured-news-kicker">Lectura destacada <span>GRATIS</span></span>
                <h2>Cuenta Regresiva</h2>
                <p>Un libro para descubrir esperanza. ¡Te invitamos a leerlo!</p>
              </div>
            </a>
            <div className="featured-news-actions">
              <a className="featured-news-read" href={bookUrl} target="_blank" rel="noreferrer">
                <BookOpen aria-hidden="true" /> Leer online
              </a>
              <a className="featured-news-request" href={requestUrl} target="_blank" rel="noreferrer">
                <Gift aria-hidden="true" />
                <span>Pedir libro físico<small>Totalmente GRATIS</small></span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
