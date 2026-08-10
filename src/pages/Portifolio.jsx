import { useState } from "react";
import projeto1 from "../assets/images/projeto1.png";
import projeto2 from "../assets/images/projeto2.png";
import projeto3 from "../assets/images/projeto3.png";
import projeto4 from "../assets/images/projeto4.png";
import projeto5 from "../assets/images/projeto5.png";
import projeto6 from "../assets/images/projeto6.png";
import projeto7 from "../assets/images/projeto7.png";
import projeto8 from "../assets/images/projeto8.png";
import projeto9 from "../assets/images/projeto9.png";
import projeto10 from "../assets/images/projeto10.png";
import "../index.css"; 
const projetos = [
  {
    id: 1,
    imagem: projeto1,
    titulo: "To Do List com JavaScript",
    descricao: (
      <>
        <p>
          Aplicação de lista de tarefas desenvolvida para praticar os
          conceitos fundamentais de HTML, CSS e JavaScript.
        </p>

        <p>
          O projeto permite adicionar, remover e organizar tarefas,
          proporcionando uma interface simples e intuitiva para o
          gerenciamento de atividades diárias.
        </p>
      </>
    ),
  },

  {
    id: 2,
    imagem: projeto2,
    titulo: "Registro de Parasita",
    descricao: (
      <>
        <p>
          Aplicação desenvolvida em React como parte dos estudos realizados
          durante o curso, com o objetivo de praticar conceitos fundamentais
          da biblioteca e o gerenciamento de estados em interfaces
          interativas.
        </p>

        <p>
          O projeto permite registrar informações sobre parasitas, como nome,
          tipo, profilaxia, filo, patogenia, transmissão e número de casos por
          ano, proporcionando uma experiência de manipulação de dados em React.
        </p>
      </>
    ),
  },

  {
    id: 3,
    imagem: projeto3,
    titulo: "Calculadora Simples",
    descricao: (
      <p>
        Projeto desenvolvido em React que realiza operações matemáticas
        básicas. Durante sua criação, foram aplicados conceitos de
        gerenciamento de estado e manipulação de eventos para atualização
        dinâmica da interface.
      </p>
    ),
  },

  {
    id: 4,
    imagem: projeto4,
    titulo: "Comunidade",
    descricao: (
      <p>
        Sistema desenvolvido em React Native que simula uma rede social,
        permitindo visualizar publicações, curtir posts e adicionar
        comentários. O projeto foi utilizado para praticar gerenciamento de
        estado, renderização de listas, componentes reutilizáveis e
        desenvolvimento de interfaces mobile interativas.
      </p>
    ),
  },

  {
    id: 5,
    imagem: projeto5,
    titulo: "Cadastro de pessoas",
    descricao: (
      <p>
        Sistema backend desenvolvido em Flask com Python para cadastro de
        pessoas (nome e CPF). Utiliza SQLAlchemy para persistência de dados e
        fornece uma API com métodos HTTP, além de configuração de CORS para
        integração com frontend. O projeto teve como foco o aprendizado de
        construção de APIs e manipulação de banco de dados.
      </p>
    ),
  },

  {
    id: 6,
    imagem: projeto6,
    titulo: "Monitoramento de Praga",
    descricao: (
      <p>
        Diagrama de casos de uso modelando um sistema de detecção de pragas
        em plantações. O projeto mapeia as interações entre dois atores
        (Funcionário e Empresa) e funcionalidades como cadastro, acionamento
        de robô autônomo, coleta de imagens, detecção de pragas e consulta de
        histórico. Foram aplicados relacionamentos de include e extend, além
        da definição de regras de negócio para controle de acesso e
        rastreabilidade dos processos.
      </p>
    ),
  },

  {
    id: 7,
    imagem: projeto7,
    titulo: "Tabela de Requisitos",
    descricao: (
      <p>
        Levantamento e classificação de requisitos para um sistema de
        detecção de pragas em plantações com robô autônomo e análise por IA.
        Foram mapeados 25 requisitos organizados por prioridade e divididos
        em Requisitos Funcionais (RF), Não Funcionais (RNF) e Regras de
        Negócio (RN), cobrindo desde o cadastro de usuário e captura de
        imagens até o rastreamento do robô, geração de relatórios e segurança
        dos dados via criptografia. O exercício envolveu a priorização e
        categorização correta de cada requisito, simulando uma etapa real de
        engenharia de software.
      </p>
    ),
  },

  {
    id: 8,
    imagem: projeto8,
    titulo: "To Do List com Python",
    descricao: (
      <p>
        Aplicação web de gerenciamento de usuários e tarefas desenvolvida
        com foco em boas práticas de back-end. O servidor foi construído em
        Python com SQLAlchemy para mapeamento e persistência dos dados, CORS
        para integração entre front-end e back-end, e JWT para autenticação e
        controle de acesso. O front-end consome a API e oferece
        funcionalidades completas de CRUD — cadastro, edição e exclusão de
        usuários — além de navegação entre Dashboard, Usuários, Status de
        Tarefas e Tarefas.
      </p>
    ),
  },

  {
    id: 9,
    imagem: projeto9,
    titulo: "Dados de Usuário",
    descricao: (
      <p>
        Tela simples desenvolvida para fins de aprendizado, com foco na
        comunicação entre front-end e back-end. O back-end foi construído com
        Flask (Python), utilizando CORS para liberar as requisições entre
        origens diferentes, e o front-end consome e exibe os dados retornados
        pela API. O exercício consolidou conceitos fundamentais de
        requisições HTTP e integração entre camadas de uma aplicação web.
      </p>
    ),
  },

  {
    id: 10,
    imagem: projeto10,
    titulo: "Relógio em tempo real",
    descricao: (
      <p>
        Um pequeno sistema que exibe um relógio em tempo real feito a partir
        de JavaScript.
      </p>
    ),
  },
];

const Index = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const abrirModal = (projeto) => {
    setProjetoSelecionado(projeto);
  };

  const fecharModal = () => {
    setProjetoSelecionado(null);
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark">


      {/* MAIN */}
      <main className="text-light flex-grow-1">
        <div className="container-fluid text-center">

          <h2 className="mb-5">
            Meus Projetos
          </h2>


          {/* CARROSSEL */}
          <div
            id="carrossel-portifolio"
            className="carousel slide"
            data-bs-ride="carousel"
          >

            {/* INDICADORES */}
            <div className="carousel-indicators">

              {projetos.map((projeto, index) => (
                <button
                  key={projeto.id}
                  type="button"
                  data-bs-target="#carrossel-portifolio"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}

            </div>


            {/* SLIDES */}
            <div className="carousel-inner">

              {projetos.map((projeto, index) => (
                <div
                  key={projeto.id}
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <img
                    src={projeto.imagem}
                    className="d-block w-100"
                    alt={projeto.titulo}
                    onClick={() => abrirModal(projeto)}
                  />
                </div>
              ))}

            </div>


            {/* BOTÃO ANTERIOR */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carrossel-portifolio"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">
                Anterior
              </span>
            </button>


            {/* BOTÃO PRÓXIMO */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carrossel-portifolio"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">
                Próximo
              </span>
            </button>

          </div>
        </div>
      </main>


      {/* MODAL */}
      {projetoSelecionado && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          onClick={fecharModal}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-light border-secondary">

              <div className="modal-header">

                <h5 className="modal-title">
                  {projetoSelecionado.titulo}
                </h5>

                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={fecharModal}
                  aria-label="Fechar"
                />

              </div>


              <div className="modal-body">

                {projetoSelecionado.descricao}

              </div>


              <div className="modal-footer">

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={fecharModal}
                >
                  Fechar
                </button>

              </div>

            </div>
          </div>
        </div>
      )}


      {/* BACKDROP DO MODAL */}
      {projetoSelecionado && (
        <div
          className="modal-backdrop fade show"
          onClick={fecharModal}
        ></div>
      )}


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
