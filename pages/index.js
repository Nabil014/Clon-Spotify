import Albums from "@/components/Albums";
import Footer from "@/components/Footer";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="pt-20 md:pl-72 p-8 bg-gradient-to-b from-spotify-gray to-spotify-black h-full">
      <Albums/>
      <Footer/>
      <a className="flex justify-end bottom-0 hover:underline" href="https://nabil-allis.vercel.app/">
      Creado con ❤ por Nabil Allis.
      </a>
    </div>
  );
}
