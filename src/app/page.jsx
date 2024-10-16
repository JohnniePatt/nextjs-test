import Image from "next/image";
import Header from "./components/Header";
import PokeData from "./components/PokeData";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <PokeData></PokeData>
      </main>
    </div>
  );
}
