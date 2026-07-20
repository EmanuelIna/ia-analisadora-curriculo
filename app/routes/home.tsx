import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Currats" },
    { name: "description", content: "Análise modo ATS para seu currículo" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading">
        <h1>Verifique a nota do seu currículo</h1>
        <h2>Seu currículo avaliado por IA para cada vaga</h2>
      </div>
    </section>


  </main>
}
