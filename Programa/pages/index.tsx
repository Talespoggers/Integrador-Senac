import Style from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className={Style.header}>

        <div className={Style.imagemLogo}>
          <h1>2 <span className={Style.span}> Momento profundo </span> RECEBA  AI</h1>
        </div>
        <button className={Style.button}>pesquisar</button>

        <div className={Style.produtos}>
          <p>home</p>
          <p>jogos Gratis</p>
          <p>Jogos Pagos</p>
          <p>Acessorios</p>
          <p>colecionaveis</p>
        </div>

      </header>

      <body>
        
      </body>
    </main>
  );
}
