import Container from "@/components/Container/Container";

export async function getStaticPaths() {
  const response = await fetch("https://api.coincap.io/v2/assets/");
  const cryptos = await response.json();

  const paths = cryptos.data.map((crypto) => ({
    params: { cryptoId: crypto.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cryptotResponse = await fetch(
    `https://api.coincap.io/v2/assets/${params.cryptoId}`
  );

  const crypto = await cryptotResponse.json();

  return {
    props: {
      crypto,
    },
  };
}

export default function Crypto({ crypto }) {
  return (
    <div>
      <Container>
        <h1>
          {crypto?.data?.name} - {crypto?.data?.symbol}
        </h1>
        <h2>USD {parseFloat(crypto?.data?.priceUsd).toFixed(2)}</h2>
      </Container>
    </div>
  );
}
