import Albums from "@/components/Albums";
import Footer from "@/components/Footer";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="pt-24 md:pl-72 p-8 bg-gradient-to-b from-spotify-gray to-spotify-black h-full">
      <Albums/>
      <Footer/>
    </div>
  );
}
