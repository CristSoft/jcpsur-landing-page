import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Compass,
  ExternalLink,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Shirt,
  Users,
  Volleyball,
} from 'lucide-react';
import { MotionEffects } from '../components/motion-effects';
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YouTubeIcon } from '../components/social-icons';

const whatsappUrl = 'https://wa.me/5491169089232';
const bibleStudyUrl = `${whatsappUrl}?text=${encodeURIComponent('¡Hola! vengo de la página web de la iglesia. Me gustaría estudiar la biblia')}`;
const beliefsUrl = 'https://institucional.adventistas.org/es/nuestras-crencias/';

const otherChurches = [
  {
    name: 'José C. Paz Centro',
    address: 'Santiago de Compostela 477 · José C. Paz',
    map: 'https://www.google.com/maps/search/?api=1&query=Santiago%20de%20Compostela%20477%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires',
  },
  {
    name: 'Barrio Vucetich',
    address: 'Santa Marta 4279 · José C. Paz',
    map: 'https://www.google.com/maps/search/?api=1&query=Santa%20Marta%204279%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires',
  },
  {
    name: 'Croacia Norte',
    address: 'Alberti 4280 · José C. Paz',
    map: 'https://www.google.com/maps/search/?api=1&query=Alberti%204280%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires',
  },
  {
    name: 'Barrio Sagrada Familia',
    address: 'Uspallata 2024 · José C. Paz',
    map: 'https://www.google.com/maps/search/?api=1&query=Uspallata%202024%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires',
  },
  {
    name: 'Barrio Primavera',
    address: 'Adolfo Alsina 5989 · José C. Paz',
    map: 'https://www.google.com/maps/search/?api=1&query=Adolfo%20Alsina%205989%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires',
  },
  {
    name: 'Barrio Frino',
    address: 'Viena 2807 · José C. Paz',
    map: 'https://www.google.com/maps/search/?api=1&query=Viena%202807%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires',
  },
  {
    name: 'Barrio Santa Brígida',
    address: 'Pedro F. de Uriarte 3711 · San Miguel',
    map: 'https://www.google.com/maps/search/?api=1&query=Iglesia%20Adventista%20del%20S%C3%A9ptimo%20D%C3%ADa%20Barrio%20Santa%20Br%C3%ADgida%2C%20Pedro%20F.%20de%20Uriarte%203711%2C%20San%20Miguel%2C%20Buenos%20Aires',
  },
  {
    name: 'Barrio Máximo',
    address: 'Francisco Bilbao 10398 · Cuartel V, Moreno',
    map: 'https://www.google.com/maps/search/?api=1&query=Iglesia%20Adventista%20del%20S%C3%A9ptimo%20D%C3%ADa%20Barrio%20M%C3%A1ximo%2C%20Francisco%20Bilbao%2010398%2C%20Cuartel%20V%2C%20Moreno%2C%20Buenos%20Aires',
  },
  {
    name: 'Cuartel V',
    address: 'Miguel Gerónimo Galarza 5406 · Cuartel V, Moreno',
    map: 'https://www.google.com/maps/search/?api=1&query=Iglesia%20Adventista%20del%207%C2%BA%20D%C3%ADa%2C%20Miguel%20Ger%C3%B3nimo%20Galarza%205406%2C%20Cuartel%20V%2C%20Moreno%2C%20Buenos%20Aires',
  },
];

const socialMedia = [
  {
    name: 'YouTube',
    handle: '@IASDJoséC.PazSur',
    href: 'https://www.youtube.com/@IASDJos%C3%A9C.PazSur',
    Icon: YouTubeIcon,
  },
  {
    name: 'Instagram',
    handle: '@iasdjosecpazsur',
    href: 'https://www.instagram.com/iasdjosecpazsur/',
    Icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    handle: 'IASD José C. Paz Sur',
    href: 'https://www.facebook.com/IASDJoseCPazSur',
    Icon: FacebookIcon,
  },
];

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Iglesia Adventista Del Séptimo Día, José C. Paz Sur, inicio">
          <img src="/logo-adventista.png" alt="" />
          <span>
            <strong>Iglesia Adventista<br />Del Séptimo Día</strong>
            <small>José C. Paz Sur</small>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#redes">Redes sociales</a>
        </nav>
        <a className="header-cta" href="#ubicacion">
          Cómo llegar <MapPin aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Un lugar para vos</p>
          <h1>¡Te estábamos<br /><em>esperando!</em></h1>
          <div className="hero-socials" aria-label="Seguinos en redes sociales">
            {socialMedia.map(({ name, handle, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name}: ${handle} (abre en una pestaña nueva)`}
                title={`${name}: ${handle}`}
              >
                <Icon />
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp: Contactanos (abre en una pestaña nueva)"
              title="Escribinos por WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
          <p className="hero-lead">
            Contactate con nosotros, dejanos tu pedido de oración, solicitá un estudio de la Biblia o acercate a nuestra iglesia.
            <strong> Siempre sos bienvenido.</strong>
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#servicios">
              Ver días y horarios <CalendarDays aria-hidden="true" />
            </a>
            <a className="primary-link" href={bibleStudyUrl} target="_blank" rel="noreferrer">
              Quiero estudiar la biblia <WhatsAppIcon />
            </a>
            <a className="text-link" href="#nosotros">
              Conocé nuestra historia <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="next-meeting" aria-label="Próximas reuniones">
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
          <img src="/logo-adventista.png" alt="" />
        </div>
        <a className="scroll-cue" href="#nosotros" aria-label="Continuar hacia nuestra historia">
          <span /> Seguí descubriendo
        </a>
      </section>

      <section className="welcome" id="nosotros">
        <p className="section-kicker" data-reveal>Desde 1987 en José C. Paz</p>
        <div className="welcome-grid" data-reveal>
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
            <div className="welcome-actions">
              <a className="primary-link" href={beliefsUrl} target="_blank" rel="noreferrer">
                Nuestras creencias <ExternalLink aria-hidden="true" />
              </a>
              <a className="welcome-text-link" href="#ubicacion">Vení a conocernos <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="services-heading" data-reveal>
          <div>
            <p className="section-kicker">Durante toda la semana</p>
            <h2>Servicios y actividades<br />de nuestra iglesia</h2>
          </div>
          <p>
            Espacios para adorar, aprender, orar, ayudar y crecer en comunidad. Elegí el que
            quieras compartir con nosotros.
          </p>
        </div>
        <div className="services-grid">
          <article className="service-card service-featured" data-reveal data-pointer-card>
            <img className="service-image" src="/img/01_sermon.png" alt="" aria-hidden="true" />
            <span className="service-icon"><MessageCircle aria-hidden="true" /></span>
            <p>Sábados · 10:00 hs</p>
            <h3>Sermón</h3>
            <span>Conferencia bíblica</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image" src="/img/02_escuela_sabatica.png" alt="" aria-hidden="true" />
            <span className="service-icon"><BookOpen aria-hidden="true" /></span>
            <p>Sábados · 11:30 hs</p>
            <h3>Escuela Sabática</h3>
            <span>Escuela bíblica</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image service-image-children" src="/img/09_clases_biblicas_ninos.png" alt="" aria-hidden="true" />
            <span className="service-icon"><BookOpen aria-hidden="true" /></span>
            <p>Sábados · 11:30 hs</p>
            <h3>Clases bíblicas para niños</h3>
            <span>Estudio de la Biblia por grupos de edad</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image" src="/img/03_reunion_de_oracion.png" alt="" aria-hidden="true" />
            <span className="service-icon"><HeartHandshake aria-hidden="true" /></span>
            <p>Miércoles · 18:00 hs</p>
            <h3>Reunión de oración</h3>
            <span>19:00 hs en verano</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image" src="/img/04_ASA.png" alt="" aria-hidden="true" />
            <span className="service-icon"><Users aria-hidden="true" /></span>
            <p>Miércoles · 16:00 hs</p>
            <h3>ASA</h3>
            <span>Asistencia Social Adventista</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image" src="/img/05_ropero_solidario.png" alt="" aria-hidden="true" />
            <span className="service-icon"><Shirt aria-hidden="true" /></span>
            <p>Miércoles por medio · 16:00 hs</p>
            <h3>Ropero Solidario</h3>
            <span>Ayuda abierta a la comunidad</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image" src="/img/06_reunion_joven.png" alt="" aria-hidden="true" />
            <span className="service-icon"><Users aria-hidden="true" /></span>
            <p>Sábados · 18:00 hs</p>
            <h3>Reunión Joven</h3>
            <span>19:00 hs en verano</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image" src="/img/07_voley_abierto.png" alt="" aria-hidden="true" />
            <span className="service-icon"><Volleyball aria-hidden="true" /></span>
            <p>Sábados · 20:00 a 23:00 hs</p>
            <h3>Vóley abierto</h3>
            <span>Actividad deportiva abierta a la comunidad.</span>
          </article>
          <article className="service-card" data-reveal data-pointer-card>
            <img className="service-image" src="/img/08_club_de_conquistadores.png" alt="" aria-hidden="true" />
            <span className="service-icon"><Compass aria-hidden="true" /></span>
            <p>Sábados 16:30 y Domingos 10:30 hs</p>
            <h3>Club de Conquistadores</h3>
            <span>Actividades tipo scouts para niños y adolescentes</span>
          </article>
        </div>
      </section>

      <section className="location" id="ubicacion">
        <div className="location-copy" data-reveal>
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
        <div className="location-side">
          <div className="address-card" data-reveal data-pointer-card>
            <span className="pin"><MapPin aria-hidden="true" /></span>
            <small>Nuestra dirección</small>
            <strong>Av. Gaspar Campos 5738</strong>
            <span>José C. Paz, Buenos Aires</span>
            <div className="address-times">
              <p><b>Sábados</b><span>10:00 y 18:00 hs</span></p>
              <p><b>Miércoles</b><span>18:00 hs</span></p>
            </div>
          </div>

          <div className="other-churches" data-reveal>
            <div className="other-churches-heading">
              <p className="section-kicker">Cerca tuyo</p>
              <h3>Otras iglesias adventistas en José C. Paz y alrededor</h3>
            </div>
            <div className="church-list">
              {otherChurches.map((church) => (
                <a key={church.name} href={church.map} target="_blank" rel="noreferrer">
                  <span><strong>{church.name}</strong><small>{church.address}</small></span>
                  <ExternalLink aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="social-section" id="redes" aria-labelledby="social-title">
        <div className="social-heading" data-reveal>
          <p className="section-kicker">Conectados toda la semana</p>
          <h2 id="social-title">Seguinos en redes.</h2>
          <p>Encontrá transmisiones, novedades y momentos de nuestra comunidad.</p>
        </div>
        <nav className="social-links" aria-label="Redes sociales de José C. Paz Sur">
          {socialMedia.map(({ name, handle, href, Icon }, index) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ '--social-delay': `${index * 70}ms` } as React.CSSProperties}
              aria-label={`${name}: ${handle} (abre en una pestaña nueva)`}
            >
              <span className="social-icon"><Icon /></span>
              <span className="social-name"><small>{name}</small><strong>{handle}</strong></span>
              <ExternalLink className="social-arrow" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <img src="/logo-adventista.png" alt="" />
          <span><strong>Iglesia Adventista<br />Del Séptimo Día</strong><small>José C. Paz Sur</small></span>
        </a>
        <p>Fe, esperanza y encuentro.</p>
        <a href="#inicio">Volver arriba <ArrowRight aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
