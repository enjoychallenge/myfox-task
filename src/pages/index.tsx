import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyFox demo</title>
        <meta name="description" content="MyFox demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Demo MyFox</h1>
        <ul>
          <li><Link href="/reservations">Moje rezervace</Link></li>
        </ul>
      </main>
    </>
  );
}
