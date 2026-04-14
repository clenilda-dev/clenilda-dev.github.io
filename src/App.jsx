import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("tema") === "dark";
  });

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const projetos = [
    {
      titulo: "Projeto 01 - Portfólio",
      descricao: "Meu portfólio de apresentação.",
      link: "https://github.com/clenilda-dev/c-portfolio.git"
    }
  ];

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("tema", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("tema", "light");
    }
  }, [dark]);

  function alternarTema() {
    setDark(!dark);
  }

  function validarFormulario(e) {
    e.preventDefault();

    if (nome === "" || email === "" || msg === "") {
      alert("Preencha todos os campos.");
    } else {
      alert(`Obrigado, ${nome}!`);
      setNome("");
      setEmail("");
      setMsg("");
    }
  }

  return (
    <>
      <header>
        <h1>Meu Portfólio</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li>
              <button id="btn-tema" onClick={alternarTema}>
                {dark ? "Claro" : "Escuro"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <img src="/perfil13.png" alt="Clenilda" />
          <p>Hello, World! Meu nome é Clenilda e sou iniciante em desenvolvimento web.</p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="projetos-container">
            {projetos.map((p, i) => (
              <article className="card-projeto" key={i}>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <a href={p.link} target="_blank">Ver no GitHub</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <form onSubmit={validarFormulario}>
            <div className="campo">
              <label>Nome:</label>
              <input value={nome} onChange={(e)=>setNome(e.target.value)} />
            </div>

            <div className="campo">
              <label>E-mail:</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="campo">
              <label>Mensagem:</label>
              <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} />
            </div>

            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Clenilda</p>
      </footer>
    </>
  );
}

export default App;