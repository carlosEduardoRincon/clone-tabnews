function Home() {
  return (
    <div>
      <header>
        <div class="header-items">
          <ul>
            <li>
              <a href="#">Conteúdo</a>
            </li>
            <li>
              <a href="#">Colaborativa</a>
            </li>
            <li>
              <a href="#">Híbrida</a>
            </li>
          </ul>
        </div>
        <div class="header-title">
          <h1>
            <a>CineMind</a>
          </h1>
        </div>
      </header>

      <main>
        <div class="main-text-introdution">
          <h3>Insira suas preferências:</h3>
        </div>
        <div class="main-recommendation-form">
          <form id="recommendationForm">
            <label>Gênero:</label>
            <select
              name="generos"
              form="recommendationForm"
              required="required"
            >
              <option value="acao">Ação</option>
              <option value="romance">Romance</option>
              <option value="suspense">Suspense</option>
              <option value="terror">Terror</option>
            </select>
            <label>Atores:</label>
            <select name="atores" form="recommendationForm" required="required">
              <option value="ator1">Ator 1</option>
              <option value="ator2">Ator 2</option>
              <option value="ator3">Ator 3</option>
            </select>
            <label>Diretor:</label>
            <select
              name="diretores"
              form="recommendationForm"
              required="required"
            >
              <option value="director1">Diretor 1</option>
              <option value="director2">Diretor 2</option>
              <option value="director3">Diretor 3</option>
            </select>
            <label>Palavras Chaves:</label>
            <select
              name="keywords"
              form="recommendationForm"
              required="required"
            >
              <option value="amor">Amor</option>
              <option value="religião">Religião</option>
              <option value="casa">Casa</option>
            </select>
            <label>Produtora:</label>
            <select
              name="produtora"
              form="recommendationForm"
              required="required"
            >
              <option value="produtora1">Produtora 1</option>
              <option value="produtora2">Produtora 2</option>
              <option value="produtora3">Produtora 3</option>
            </select>
            <label>Adulto:</label>
            <input type="radio" name="adulto" id="sim" value="Sim" />
            <label for="sim">Sim</label>
            <input type="radio" name="adulto" id="nao" value="Não" checked />
            <label for="nao">Não</label>

            <button>Enviar</button>
          </form>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
