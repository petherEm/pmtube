import Head from "next/head";
import Image from "next/image";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-200 h-full flex flex-col">
      <Head>
        <title>PM Tube</title>
        <meta name="description" content="The best web broadcast" />
      </Head>

      <Navbar />

      <div className="flex">
        <Menu />
        <Cards />
      </div>
      <Footer />
      
    </div>
  );
}
