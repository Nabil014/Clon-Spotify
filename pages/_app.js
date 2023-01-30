import Head from "next/head";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clon Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-spotify-black min-h-screen text-gray-300">
        <Header />
        <Sidebar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
