import "../index.css";
const Contato = () => {
  return (
    <>
      <div className="card bg-black border-secondary text-light shadow-lg">
        <main>


          <div className="card-body p-4">

            <h2 className="text-center mb-4">
              Avaliação do Portfólio
            </h2>

            <form
              action="https://formspree.io/f/xwvjaynb"
              method="POST"
            >

              {/* Nome */}
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>

                <input
                  type="text"
                  name="nome"
                  className="form-control bg-dark text-light border-secondary"
                  id="nome"
                  placeholder="Digite seu nome"
                />
              </div>

              {/* E-mail */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control bg-dark text-light border-secondary"
                  id="email"
                  placeholder="Digite seu e-mail"
                />
              </div>

              {/* Nota geral */}
              <div className="mb-3">
                <label htmlFor="nota" className="form-label">
                  Nota geral para o portfólio
                </label>

                <select
                  className="form-select bg-dark text-light border-secondary"
                  name="nota"
                  id="nota"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione uma nota
                  </option>

                  <option value="1">
                    1 - Muito Ruim
                  </option>

                  <option value="2">
                    2 - Ruim
                  </option>

                  <option value="3">
                    3 - Regular
                  </option>

                  <option value="4">
                    4 - Bom
                  </option>

                  <option value="5">
                    5 - Excelente
                  </option>
                </select>
              </div>

              {/* Aspectos avaliados */}
              <div className="mb-4">
                <label className="form-label">
                  O que mais chamou sua atenção?
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="atencao"
                    value="Design Gráfico"
                    type="checkbox"
                    id="design"
                  />

                  <label className="form-check-label" htmlFor="design">
                    Design Gráfico
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="atencao"
                    value="Projetos apresentados"
                    type="checkbox"
                    id="projetos"
                  />

                  <label className="form-check-label" htmlFor="projetos">
                    Projetos apresentados
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="atencao"
                    value="Tecnologias utilizadas"
                    type="checkbox"
                    id="tecnologias"
                  />

                  <label className="form-check-label" htmlFor="tecnologias">
                    Tecnologias utilizadas
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="atencao"
                    value="Organização do conteúdo"
                    type="checkbox"
                    id="organizacao"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="organizacao"
                  >
                    Organização do conteúdo
                  </label>
                </div>
              </div>

              {/* Recomendação */}
              <div className="mb-3">
                <label className="form-label">
                  Você recomendaria este portfólio?
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="recomendacao"
                    value="Sim"
                    id="sim"
                  />

                  <label className="form-check-label" htmlFor="sim">
                    Sim
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="recomendacao"
                    value="Não"
                    id="nao"
                  />

                  <label className="form-check-label" htmlFor="nao">
                    Não
                  </label>
                </div>
              </div>

              {/* Comentários */}
              <div className="mb-4">
                <label htmlFor="comentarios" className="form-label">
                  Comentários e sugestões
                </label>

                <textarea
                  className="form-control bg-dark text-light border-secondary"
                  id="comentarios"
                  name="comentarios"
                  rows="5"
                  placeholder="Escreva sua opinião sobre o portfólio"
                ></textarea>
              </div>

              {/* Botões */}
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  Enviar Avaliação
                </button>

                <button
                  type="reset"
                  className="btn btn-outline-secondary"
                >
                  Limpar
                </button>
              </div>

            </form>
          </div>

        </main >

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
    </>
  );
};
export default Contato;