import Style from "@/styles/home.module.css";
import Link from "next/link";
import { useState } from "react";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';


 

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(null); 


  function handleSearch(event:any) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit() {

    console.log(`Termo pesquisado: ${searchTerm}`);

  }

  function applyFilter(filterType:any) {
    setFilter(filterType);
    console.log(`Filtro aplicado: ${filterType}`);
   
  }


  function clearFilter() {
    setFilter(null);
    console.log("Filtro limpo");

  }

  return (
    <main className={Style.main}>
      <header className={Style.header}>
        <div className={Style.imagemLogo}>
          <h1>
            2 <span className={Style.span}>Momento profundo</span> RECEBA AI
          </h1>
        </div>

        {/* Campo de Pesquisa */}
        <div className={Style.pesquisar}>
          <input
            className={Style.input}
            type="text"
            placeholder="Pesquise Aqui"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className={Style.button} onClick={handleSearchSubmit}>
            Pesquisar
          </button>
        </div>

        {/* Botões de Filtro */}
        <div className={Style.produtos}>
          {/* Cada botão aplica um filtro diferente */}
          <button className={Style.button1} onClick={clearFilter}>
            Home
          </button>
          <button className={Style.button1} onClick={() => applyFilter("jogos-gratis")}>
            Jogos Grátis
          </button>
          <button className={Style.button1} onClick={() => applyFilter("jogos-pagos")}>
            Jogos Pagos
          </button>
          <button className={Style.button1} onClick={() => applyFilter("acessorios")}>
            Acessórios
          </button>
          <button className={Style.button1} onClick={() => applyFilter("colecionaveis")}>
            Colecionáveis
          </button>
        </div>
      </header>

      {/* Conteúdo Dinâmico Baseado no Filtro */}
      <section className={Style.content}>
        {filter ? (
          <p>Exibindo itens filtrados: {filter}</p>
        ) : (
          <p>Exibindo todos os itens</p>
        )}

        {/* Aqui você pode renderizar a lista de produtos/jogos com base no filtro */}
      </section>
    </main>
  );
}
