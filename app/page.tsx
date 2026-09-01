import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Iglesia Adventista José C. Paz Sur, inicio">
          <img src="/logo-jcp-sur.svg" alt="" />
          <span>
            <strong>José C. Paz Sur</strong>
            <small>Iglesia Adventista del Séptimo Día</small>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#horarios">Horarios</a>
          <a href="#biblia">Conocé más</a>
        </nav>
        <a className="header-cta" href="#ubicacion">
          Cómo llegar <MapPin aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Una comunidad para vos</p>
          <h1>Un lugar para<br /><em>encontrarnos.</em></h1>
          <p className="hero-lead">
            Compartimos la fe, estudiamos la Biblia, oramos y crecemos juntos como familia.
            <strong> Todos son bienvenidos.</strong>
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#horarios">
              Ver días y horarios <CalendarDays aria-hidden="true" />
            </a>
            <a className="text-link" href="#nosotros">
              Conocé nuestra historia <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="next-meeting" id="horarios" aria-label="Próximas reuniones">
          <div className="meeting-topline">
            <span>Nos encontramos</span>
            <Clock3 aria-hidden="true" />
          </div>
          <div className="meeting-main">
            <span className="day">Sábados</span>
            <strong>10:00 <small>hs</small></strong>
          </div>
          <div className="meeting-secondary">
            <div><span>Culto de tarde</span><strong>18:00 hs</strong></div>
            <div><span>Miércoles</span><strong>18:00 hs</strong></div>
          </div>
          <p>En verano, las reuniones de la tarde comienzan a las 19:00 hs.</p>
          <a href="#ubicacion"><MapPin aria-hidden="true" /> Av. Gaspar Campos 5738</a>
        </aside>

        <div className="hero-watermark" aria-hidden="true">
          <img src="/logo-jcp-sur.svg" alt="" />
        </div>
      </section>

      <section className="welcome" id="nosotros">
        <p className="section-kicker">Desde 1987 en José C. Paz</p>
        <div className="welcome-grid">
          <h2>Fe, esperanza<br />y <em>comunidad.</em></h2>
          <div className="welcome-copy">
            <p>
              Somos una comunidad cristiana de la Iglesia Adventista del Séptimo Día, presente
              en José C. Paz desde 1987.
            </p>
            <p>
              Desde 1991 nos reunimos en nuestro templo de Av. Gaspar Campos 5738 para compartir
              la fe, estudiar la Biblia, orar y crecer juntos como familia.
            </p>
            <a href="#ubicacion">Vení a conocernos <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="bible-section" id="biblia">
        <div className="bible-inner">
          <div className="bible-heading">
            <span className="bible-icon"><BookOpenText aria-hidden="true" /></span>
            <p className="section-kicker">Un camino para descubrir</p>
            <h2>¿Querés conocer más sobre la Biblia?</h2>
            <p>
              Podés empezar a estudiarla a tu ritmo o acercarte para compartir preguntas,
              aprender y conversar con nosotros.
            </p>
          </div>
          <div className="resource-list">
            <a href="https://www.adventistas.org/es/estudios-biblicos/" target="_blank" rel="noreferrer">
              <span><small>Recursos en línea</small><strong>Estudios bíblicos</strong></span>
              <ExternalLink aria-hidden="true" />
            </a>
            <a href="https://institucional.adventistas.org/es/nuestras-crencias/" target="_blank" rel="noreferrer">
              <span><small>Conocé nuestra fe</small><strong>Creencias adventistas</strong></span>
              <ExternalLink aria-hidden="true" />
            </a>
            <a className="resource-local" href="#ubicacion">
              <span><small>De manera presencial</small><strong>Estudiá con nosotros</strong></span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="location" id="ubicacion">
        <div className="location-copy">
          <p className="section-kicker">Te esperamos</p>
          <h2>Encontranos en<br />José C. Paz.</h2>
          <p>
            No hace falta conocer a nadie ni avisar antes. Acercate como estés: siempre hay un
            lugar para vos.
          </p>
          <a
            className="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Av.%20Gaspar%20Campos%205738%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires"
            target="_blank"
            rel="noreferrer"
          >
            Abrir en Google Maps <ExternalLink aria-hidden="true" />
          </a>
        </div>
        <div className="address-card">
          <span className="pin"><MapPin aria-hidden="true" /></span>
          <small>Nuestra dirección</small>
          <strong>Av. Gaspar Campos 5738</strong>
          <span>José C. Paz, Buenos Aires</span>
          <div className="address-times">
            <p><b>Sábados</b><span>10:00 y 18:00 hs</span></p>
            <p><b>Miércoles</b><span>18:00 hs</span></p>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <img src="/logo-jcp-sur.svg" alt="" />
          <span><strong>José C. Paz Sur</strong><small>Iglesia Adventista del Séptimo Día</small></span>
        </a>
        <p>Fe, esperanza y encuentro.</p>
        <a href="#inicio">Volver arriba <ArrowRight aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
