import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa6";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark custom-nav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Verik<span>.</span>
          </a>
          <div className="d-flex gap-3">
            <a href="#projects">Proyectos</a>
            <a href="#about">Acerca de</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container text-center">
          <p className="tag">Full Stack Developer</p>
          <h1>
            Desarrollo plataformas web modernas,
            <span> escalables y funcionales.</span>
          </h1>
          <p className="hero-text">
            Experiencia en React, Node.js, MySQL, Docker y Laravel. También en
            traducción de inglés a español para documentación y contenido técnico.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a href="#projects" className="btn-main">Ver proyectos</a>
            <a href="#contact" className="btn-outline">Contactarme</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>Acerca de mí</h2>
          <p className="section-text">
            Soy desarrollador Full Stack con experiencia en la creación de
            plataformas web, sistemas administrativos y soluciones enfocadas en
            automatizar procesos. Me gusta construir aplicaciones claras,
            eficientes y pensadas para resolver problemas reales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Tecnologías</h2>
          <div className="row g-4">
            <Tech icon={<FaCode />} title="Frontend" text="React, Vite, Bootstrap" />
            <Tech icon={<FaServer />} title="Backend" text="Node.js, Express, Laravel" />
            <Tech icon={<FaDatabase />} title="Base de datos" text="MySQL, SQL" />
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Proyectos y experiencia</h2>

          <div className="row g-4">
            <FlipProject
              title="Plataforma de Gestión de Tesis"
              logo="/logos/default.png"
              text="Sistema web académico para la gestión de trabajos finales y tesis universitarias. Incluye autenticación, roles, gestión de avances, revisión de documentos, calendario, formatos, aranceles y módulo antiplagio."
              tech="React · Node.js · Express · MySQL · Docker · Firebase"
            />

            <FlipProject
              title="Inpulso"
              logo="/logos/default.png"
              text="Plataforma administrativa orientada a la gestión de usuarios, roles, jerarquías y organización de datos, pensada para centralizar información y facilitar el control de perfiles dentro de una estructura organizativa."
              tech="React · Node.js · Express · MySQL · JWT"
            />

            <FlipProject
              title="SGR.PY"
              logo="/logos/default.png"
              text="Sistema relacionado con la gestión y seguimiento de reclamos, solicitudes y datos administrativos. Participación en ajustes de funcionalidades, integración de datos y mejoras en procesos internos."
              tech="PHP · JavaScript · MySQL · SQL"
            />

            <FlipProject
              title="SysRec"
              logo="/logos/default.png"
              text="Sistema administrativo orientado a la gestión de registros, consultas, documentos, solicitudes y procesos internos. Experiencia en mantenimiento, filtros, reportes, validaciones y ajustes funcionales."
              tech="PHP · Laravel · JavaScript · MySQL · PostgreSQL"
            />

            <FlipProject
              title="Página Web Oficial"
              logo="/logos/default.png"
              text="Participación en tareas relacionadas con mantenimiento, ajustes de contenido, funcionalidades web y soporte técnico para una página institucional oficial."
              tech="PHP · HTML · CSS · JavaScript"
            />

            <FlipProject
              title="DGREC Sistema de Soporte"
              logo="/logos/default.png"
              text="Sistema de soporte utilizado para la gestión, seguimiento y atención de solicitudes internas. Experiencia en revisión de datos, consultas, reportes y mejoras en módulos administrativos."
              tech="PHP · Laravel · SQL · JavaScript"
            />

            <FlipProject
              title="SysCVT Sistema de Valores"
              logo="/logos/default.png"
              text="Sistema orientado a la gestión de valores, certificados o procesos administrativos relacionados. Participación en consultas, mantenimiento, validaciones y mejoras de funcionalidades internas."
              tech="PHP · Laravel · MySQL · JavaScript"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contacto</h2>
          <p>Disponible para proyectos, colaboraciones y oportunidades laborales.</p>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a href="mailto:TU_CORREO" className="social"> <FaEnvelope /> Email </a>
            <a href="TU_LINKEDIN" className="social"> <FaLinkedin /> LinkedIn </a>
            <a href="TU_GITHUB" className="social"> <FaGithub /> GitHub </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Tech({ icon, title, text }) {
  return (
    <div className="col-md-4">
      <div className="card-custom">
        <div className="icon">{icon}</div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Project({ title, text, tech }) {
  return (
    <div className="col-md-4">
      <div className="card-custom project-card">
        <h4>{title}</h4>
        <p>{text}</p>
        <span>{tech}</span>
      </div>
    </div>
  );
}

function FlipProject({ title, logo, text, tech }) {
  return (
    <div className="col-md-4">
      <div className="flip-card" tabIndex="0">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={logo} alt={title} className="project-logo" />
            <h4>{title}</h4>
            <p>Click para ver más</p>
          </div>

          <div className="flip-card-back">
            <h4>{title}</h4>
            <p>{text}</p>
            <span>{tech}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;