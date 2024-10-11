import { useState } from 'react'
import Link from 'next/link'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link href="/sobre">
        <a>Sobre</a>
      </Link>
      <Link href="/tempo">
        <a>Tempo</a>
      </Link>
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adcionadrContador() {
    setContador(contador + 1);
  }

  function resetContador() {
    setContador(1);
  }

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={adcionadrContador}>
        Adicionar
            </button>
      <button onClick={resetContador}>
        Reset
            </button>
    </div>
  )
}

export default Home
