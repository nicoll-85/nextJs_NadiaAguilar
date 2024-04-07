import Head from "next/head";
import Link from "next/link";
import Container from "@/components/Container/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home -CriptoSite</title>
        <meta name="description" content="Bienvenido a mi Cripto site"></meta>
      </Head>
      <Container>
        <main>
          <h1>Bienvenido a mi Cripto site</h1>
          <p>
            Descubre el futuro del dinero con nuestro portal dedicado a las
            criptomonedas. Obtén información detallada sobre las principales
            monedas digitales, aprende sobre tecnología blockchain y mantente
            actualizado con las últimas noticias y análisis del mercado.
          </p>
          <h3>¡Únete a la revolución financiera hoy mismo!</h3>
          <Link href="/cryptos">Mi lista de Criptos</Link>
        </main>
      </Container>
    </>
  );
}
