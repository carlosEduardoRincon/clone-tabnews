function Home() {
  return (
    <div>
      <header>
        <nav class="menu">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Portfólio</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main class="apresentation">
        <section class="apresentation__initial">
          <div class="header-text">
            <h1 class="apresentation__initial__title">
              Carlos Eduardo Rincon Junior
            </h1>
            <h1 class="site-subtitle">Backend developer</h1>
          </div>
          <div class="header-img">
            <img src="my-img.png" width="150px" alt="Minha Imagem" />
          </div>
          <div class="about-me">
            <h2>Sobre mim</h2>
            <p class="apresentation__initial__text">
              Atuo como analista de desenvolvimento de sistemas em uma empresa
              líder no mercado de telecomunicações, meu foco principal é
              desenvolver e aprimorar API's, além de auxiliar em todo o processo
              de desenvolvimento de diferentes projetos. Com uma base sólida em
              Java, que venho aprimorando desde 2021, estou bem preparado para
              enfrentar qualquer projeto. A combinação da minha formação
              acadêmica com a experiência profissional me tornou um profissional
              capacitado para lidar com desafios diários. Como disse Max Weber,
              "O homem não teria alcançado o possível se, repetidas vezes, não
              tivesse tentado o impossível." É nesse espírito que me dedico
              diariamente a buscar soluções inovadoras e eficientes para os
              projetos que participo.
            </p>
          </div>
        </section>
        <section class="apresentation__experiences">
          <div>
            <h2>Experiências</h2>
            <h3>OpenLabs</h3>
            <p>
              Em minha posição atual na OpenLabs, atuo como profissional de
              desenvolvimento de software, trazendo consigo uma ampla
              experiência na implementação de aplicações web escaláveis.
            </p>
            <ul>
              <li>Principais Projetos e Contribuições:</li>
              <li>
                Projeto SIGO: desempenho um papel crucial no desenvolvimento das
                novas APIs Java no projeto SIGO, além da utilização de PL/SQL no
                banco Oracle.
              </li>
              <li>
                OiPlay: contribuição significativa para o desenvolvimento do
                aplicativo de streaming. Manutenção e implementação de novas
                funcionalidades, incluindo API de avaliação, API de cancelamento
                de conta, API de compra de produtos nova fibra, introdução do
                MongoDB para escalabilidade horizontal, controle máximo de
                dispositivos, sistema de campanhas, regionalização de canais e
                melhoria dos logs. Junto a isso forneci suporte para os erros
                reportados pela equipe e KT's sobre a aplicação.
              </li>
              <li>
                Projeto de Streaming Genérico: liderança na transformação de um
                monólito em uma arquitetura baseada em microsserviços em Java.
                Divisão e estruturação completa do sistema para proporcionar
                maior escalabilidade e modularidade.
              </li>
              <li>
                Projeto de Migração de Fibra Óptica: concepção e desenvolvimento
                desde a base de um projeto em Node.js para gerenciar a migração
                de fibra óptica para um ISP. Utilização de banco e lambdas AWS.
              </li>
              <li>
                Projeto para Integração de Aplicações Legadas: assistência
                crucial na implementação da monitoria de logs através do
                Logstash, melhorando significativamente a capacidade de
                monitoramento da aplicação.
              </li>
            </ul>
          </div>
          <div class="skills">
            <h2>Principais Habilidades:</h2>
            <span>Java</span>
            <span>Back-end</span>
            <span>API</span>
            <span>SQL</span>
          </div>
        </section>
        <section class="apresentation__utils">
          <div class="utils">
            <a href="https://github.com/carlosEduardoRincon">Github</a>
            <a href="https://www.linkedin.com/in/carloseduardorincon/">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
