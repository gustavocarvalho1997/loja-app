import Link from 'next/link';
import "./Cabecalho.scss";


export default function Cabecalho() {
  return (
    <header className='cabecalho'>
        <nav>
          <Link href="/login">LOGIN</Link>
          <Link href="/produtos/calca">CALCA</Link>
          <Link href="/produtos/camisa">CAMISA</Link>
          <Link href="/produtos/meia">MEIA</Link>
          <Link href="/produtos/tenis">TÊNIS</Link>
          <Link href="/tabela/queijo">QUEIJOS</Link>
        </nav>
    </header>
  )
}