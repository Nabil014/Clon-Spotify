import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="bg-red-300">Hola mundo</h1>
    </>
  );
}
