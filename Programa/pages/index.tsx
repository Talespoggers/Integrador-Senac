import Style from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={Style.main}>
      <header className={Style.header}>

        <div className={Style.imagemLogo}>
          <h1>2 <span className={Style.span}> Momento profundo </span> RECEBA  AI</h1>
        </div>

        <div className={Style.pesquisar}>
          <input className={Style.input} type="text" placeholder="Pesquise Aqui"></input>
          <button className={Style.button}>pesquisar</button>
        </div>

        <div className={Style.produtos}>
          <button className={Style.button1}>home</button>
          <button className={Style.button1}>jogos Gratis</button>
          <button className={Style.button1}>Jogos buttonagos</button>
          <button className={Style.button1}>Acessorios</button>
          <button className={Style.button1}>colecionaveis</button>
        </div>

      </header>


    </main>
  );
}
