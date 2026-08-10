import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import fotoPerfil from "../assets/images/foto-perfil.jpeg";

const Index = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark">


      {/* MAIN */}
      <main className="flex-grow-1">
        <div className="container">
          <div className="row g-4">

            {/* PERFIL */}
            <div className="col-lg-3">

              <div className="card bg-black border-secondary shadow-sm h-100">

                <div className="card-body text-center text-light py-5">

                  <h4 className="mb-4">
                    Perfil
                  </h4>

                  <img
                    src={fotoPerfil}
                    className="rounded-circle mb-4"
                    id="img-perfil"
                    alt="Foto de perfil de Ramon Alves"
                  />

                  <h5 className="mb-3">
                    Ramon Alves
                  </h5>

                  <p className="mb-2">
                    🇧🇷 Brazil
                  </p>

                  <p className="mb-3">
                    • Estudante de Desenvolvimento de Sistemas
                  </p>

                  <hr />

                  <p>
                    Nasci e cresci em Botucatu. Atualmente, estou no último
                    ano do Ensino Médio no SESI, escola onde estudo desde o
                    1º ano. Nos momentos livres, gosto de treinar na academia
                    e me dedicar aos estudos musicais, uma das minhas maiores
                    paixões desde a infância.
                  </p>

                </div>

              </div>

            </div>


            {/* CONTEÚDO PRINCIPAL */}
            <div className="col-lg-9">

              {/* EXPERIÊNCIA */}
              <div className="card bg-black border-secondary text-light shadow-sm mb-4">

                <div className="card-body">

                  <h3 className="mb-4">
                    <i className="bi bi-briefcase-fill"></i>{" "}
                    Experiência Profissional
                  </h3>

                  <h5>
                    Estudante de Desenvolvimento de Sistema
                  </h5>

                  <p className="text-secondary">
                    SENAI • 2025 - Hoje
                  </p>

                  <p>
                    Desenvolvimento de aplicações web, bancos de dados e
                    projetos de software utilizando tecnologias modernas.
                  </p>

                </div>

              </div>


              {/* HABILIDADES */}
              <div className="card bg-black border-secondary text-light shadow-sm mb-4">

                <div className="card-body">

                  <h3 className="mb-4">
                    <i className="bi bi-code-slash"></i>{" "}
                    Habilidades
                  </h3>

                  <div
                    className="progress"
                    style={{ height: "35px" }}
                  >

                    <div
                      className="progress-bar bg-success"
                      style={{ width: "35%" }}
                      title="Python"
                    ></div>

                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "25%" }}
                      title="JavaScript"
                    ></div>

                    <div
                      className="progress-bar bg-info"
                      style={{ width: "15%" }}
                      title="HTML/CSS"
                    ></div>

                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "15%" }}
                      title="SQL"
                    ></div>

                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "10%" }}
                      title="Java"
                    ></div>

                  </div>


                  <div className="mt-3 d-flex flex-wrap gap-3 text-light">

                    <span>
                      <i className="bi bi-square-fill text-success"></i>{" "}
                      Python
                    </span>

                    <span>
                      <i className="bi bi-square-fill text-warning"></i>{" "}
                      JavaScript
                    </span>

                    <span>
                      <i className="bi bi-square-fill text-info"></i>{" "}
                      SQL
                    </span>

                    <span>
                      <i className="bi bi-square-fill text-primary"></i>{" "}
                      HTML/CSS
                    </span>

                    <span>
                      <i className="bi bi-square-fill text-danger"></i>{" "}
                      React
                    </span>

                  </div>

                </div>

              </div>


              {/* FORMAÇÃO */}
              <div className="card bg-black border-secondary text-light shadow-sm mb-4">

                <div className="card-body">

                  <h3 className="mb-4">
                    <i className="bi bi-mortarboard-fill"></i>{" "}
                    Formação e Conhecimentos
                  </h3>


                  <div
                    className="accordion"
                    id="educationAccordion"
                  >

                    {/* Formação */}
                    <div className="accordion-item bg-dark border-secondary">

                      <h2 className="accordion-header">

                        <button
                          className="accordion-button collapsed bg-dark text-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#formation"
                          aria-expanded="false"
                          aria-controls="formation"
                        >
                          Formação Acadêmica
                        </button>

                      </h2>

                      <div
                        id="formation"
                        className="accordion-collapse collapse"
                        data-bs-parent="#educationAccordion"
                      >

                        <div className="accordion-body text-light">

                          <h5>
                            Desenvolvimento de Sistemas
                          </h5>

                          <p className="text-secondary">
                            SENAI • 2025 - 2026
                          </p>

                          <p>
                            Formação voltada ao desenvolvimento de software,
                            bancos de dados e aplicações web.
                          </p>

                        </div>

                      </div>

                    </div>


                    {/* Tecnologias */}
                    <div className="accordion-item bg-dark border-secondary">

                      <h2 className="accordion-header">

                        <button
                          className="accordion-button collapsed bg-dark text-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#technologies"
                          aria-expanded="false"
                          aria-controls="technologies"
                        >
                          Tecnologias e Ferramentas
                        </button>

                      </h2>

                      <div
                        id="technologies"
                        className="accordion-collapse collapse"
                        data-bs-parent="#educationAccordion"
                      >

                        <div className="accordion-body text-light">

                          <p>
                            Experiência com IDEs como{" "}
                            <strong>Visual Studio Code</strong> e{" "}
                            <strong>IntelliJ IDEA</strong>.
                          </p>

                          <p>
                            Desenvolvimento utilizando{" "}
                            <strong>Java</strong>,{" "}
                            <strong>JavaScript</strong>,{" "}
                            <strong>Python</strong>,{" "}
                            <strong>HTML</strong>,{" "}
                            <strong>CSS</strong> e{" "}
                            <strong>MySQL</strong>.
                          </p>

                        </div>

                      </div>

                    </div>


                    {/* Frameworks */}
                    <div className="accordion-item bg-dark border-secondary">

                      <h2 className="accordion-header">

                        <button
                          className="accordion-button collapsed bg-dark text-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#frameworks"
                          aria-expanded="false"
                          aria-controls="frameworks"
                        >
                          Frameworks e Bibliotecas
                        </button>

                      </h2>

                      <div
                        id="frameworks"
                        className="accordion-collapse collapse"
                        data-bs-parent="#educationAccordion"
                      >

                        <div className="accordion-body text-light">

                          <ul>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>SQLAlchemy</li>
                            <li>Thymeleaf</li>
                          </ul>

                        </div>

                      </div>

                    </div>


                    {/* Modelagem */}
                    <div className="accordion-item bg-dark border-secondary">

                      <h2 className="accordion-header">

                        <button
                          className="accordion-button collapsed bg-dark text-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#modeling"
                          aria-expanded="false"
                          aria-controls="modeling"
                        >
                          Modelagem e Documentação
                        </button>

                      </h2>

                      <div
                        id="modeling"
                        className="accordion-collapse collapse"
                        data-bs-parent="#educationAccordion"
                      >

                        <div className="accordion-body text-light">

                          <p>
                            Experiência na criação de:
                          </p>

                          <ul>
                            <li>Diagramas de Casos de Uso</li>
                            <li>
                              Diagramas Entidade-Relacionamento (ER)
                            </li>
                            <li>Dicionários de Dados</li>
                          </ul>

                        </div>

                      </div>

                    </div>


                    {/* Outras formações */}
                    <div className="accordion-item bg-dark border-secondary">

                      <h2 className="accordion-header">

                        <button
                          className="accordion-button collapsed bg-dark text-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#english"
                          aria-expanded="false"
                          aria-controls="english"
                        >
                          Outras Formações
                        </button>

                      </h2>

                      <div
                        id="english"
                        className="accordion-collapse collapse"
                        data-bs-parent="#educationAccordion"
                      >

                        <div className="accordion-body text-light">

                          <p>
                            Cursos transversais:
                          </p>

                          <ul>
                            <li>Excel Básico</li>

                            <li>
                              Competência Transversal - Segurança no Trabalho
                            </li>

                            <li>
                              Fluência - Fundamentos da Inteligência
                              Artificial
                            </li>
                          </ul>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </main>


      {/* FOOTER */}
      <footer className="text-light py-5 mt-5">

        <div className="container text-center">

          <h5 className="mb-3">
            Contate-me
          </h5>

          <a
            href="https://wa.me/5514981808593"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-secondary me-3"
          >
            <i className="fa-brands fa-whatsapp"></i>{" "}
            WhatsApp
          </a>

          <a
            href="https://instagram.com/rram0n"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-secondary me-3"
          >
            <i className="bi bi-instagram"></i>{" "}
            Instagram
          </a>

          <a
            href="mailto:ramon.alves906900@gmail.com"
            className="text-decoration-none text-secondary me-3"
          >
            <i className="bi bi-envelope"></i>{" "}
            E-mail
          </a>

        </div>

      </footer>

    </div>
  );
};

export default Index;

