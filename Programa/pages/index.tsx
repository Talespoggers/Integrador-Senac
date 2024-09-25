import Style from "@/styles/home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";

// Instanciar o Prisma Client aqui não é necessário; faça isso dentro da função getServerSideProps
const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async () => {
  // Instanciar o Prisma Client dentro da função getServerSideProps
  const prisma = new PrismaClient();
  try {
    // Busca todos os jogos no banco de dados
    const games = await prisma.game.findMany();
    return {
      props: {
        games,
      },
    };
  } finally {
    await prisma.$disconnect();
  }
};

interface Game {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  storeLink: string;
}

interface HomeProps {
  games: Game[];
}

export default function Home({ games }: HomeProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit() {
    console.log(`Termo pesquisado: ${searchTerm}`);
  }

  function applyFilter(filterType: string) {
    setFilter(filterType);
    console.log(`Filtro aplicado: ${filterType}`);
  }

  function clearFilter() {
    setFilter(null);
    console.log("Filtro limpo");
  }

  function handleExitButton() {
    router.push(`/user/login`);
  }

  function handleButtonRegister() {
    router.push(`/user/register`);
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

          <div className={Style.juntos}>
            <button className={Style.button} onClick={handleSearchSubmit}>
              Pesquisar
            </button>
            <button onClick={handleExitButton} className={Style.sair}>
              Sair
            </button>
            <button onClick={handleButtonRegister} className={Style.registrar}>
              Registrar
            </button>
          </div>
        </div>

        {/* Botões de Filtro */}
        <div className={Style.produtos}>
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
      </section>

      <h1>Loja de Jogos</h1>
      <div className={Style.grid}>
        {games.map((game) => (
          <div key={game.id} className={Style.card}>
            <img src={game.imageUrl} alt={game.name} className={Style.image} />
            <h3>{game.name}</h3>
            <p>Preço: R$ {game.price.toFixed(2)}</p>
            <Link href={game.storeLink} target="_blank" rel="noopener noreferrer">
              <button className={Style.button}>Comprar</button>
            </Link>
          </div>
        ))}
      </div>

      <footer className={Style.footer}>
  <p>&copy; {new Date().getFullYear()} Tales e Henrique. Todos os direitos reservados.</p>
  <div className={Style.footerLinks}>
    <a href="/about">Sobre Nós</a> | 
    <a href="/contact">Contato</a> | 
    <a href="/privacy">Política de Privacidade</a>
  </div>
</footer>
    </main>
  );
}
