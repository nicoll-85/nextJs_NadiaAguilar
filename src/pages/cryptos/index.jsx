import Head from "next/head";
import Link from "next/link";
import Container from "@/components/Container/Container";

export async function getStaticProps() {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const cryptos = await response.json();

  return {
    props: {
      cryptos: cryptos.data,
    },
  };
}

export default function Cryptos({ cryptos }) {
  console.log(cryptos);
  return (
    <>
      <Head>
        <title>Cryptos - mi cryptolist</title>
        <meta name="description" content="Este es mi cryptolist"></meta>
      </Head>
      <Container>
        <h1>Cryptolist</h1>
        <ul>
          {cryptos.map((crypto) => (
            <li key={crypto.id}>
              <Link href={`/cryptos/${crypto.id}`}>{crypto.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
