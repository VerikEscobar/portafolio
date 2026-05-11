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
          <h2>Proyectos</h2>
          <div className="row g-4">
            <Project
              title="Plataforma de Gestión de Tesis"
              text="Sistema web para gestionar trabajos finales y tesis universitarias, con roles, avances, revisiones, calendario, reportes y módulo antiplagio."
              tech="React · Node.js · MySQL · Docker"
            />
            <Project
              title="Inpulso"
              text="Plataforma administrativa para gestión de usuarios, roles, jerarquías y organización de datos en un entorno político-administrativo."
              tech="React · Node.js · MySQL"
            />
            <Project
              title="Sistemas Administrativos"
              text="Mantenimiento, consultas SQL, integración de funcionalidades y mejoras en sistemas de gestión documental y procesos internos."
              tech="PHP · Laravel · SQL"
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

export default App;