import PrimeiroComponente from "./components/PrimeiroComponent"
import MeuBotao from "./components/MeuBotao"
import MeuContador from "./components/MeuContador"
import MinhaLista from "./components/MinhaLista"
import EfeitosColaterais from "./components/EfeitosColaterais"
import BuscandoAPI from "./components/BuscandoAPI"

export default function App() {

  return (
    <div className="container">
      <h1>Primeiro projeto em React</h1>
      <PrimeiroComponente />

      <MeuBotao conteudo='Me clique' />

      <MeuBotao conteudo='depois aqui' />

      <MeuBotao conteudo='e por fim aqui' />

      <MeuContador />

      <h2>Listas com React</h2>
      <MinhaLista></MinhaLista>

      <h2>Efeitos colaterais em lista</h2>
      <EfeitosColaterais />

      <h2>Buscando dados de uma API com React</h2>
      <BuscandoAPI />
    </div>
  )

}
