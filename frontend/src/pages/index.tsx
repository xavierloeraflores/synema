import Head from "next/head";
import Link from "next/link";
import Sandbox from "~/components/sandbox";

export default function Home() {
  return (
    <>
      <Head>
        <title>🍿 Synema</title>
        <meta name="description" content="Discover More." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        Index Page
        <Sandbox />
      </main>
    </>
  );
}
