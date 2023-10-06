import Link from "next/link"

export default function MeuPrimeiroPost() {
  return (
    <>
      <div>
        <h1>Meu primeiro POST</h1>
        <div>
          <p><Link href="/posts/post1">Meu Post1...</Link></p>
          <p><Link href="/posts/post2">Meu Post2...</Link></p>
          <p><Link href="/posts/post3">Meu Post3...</Link></p>
          <p><Link href="/">Home</Link></p>
        </div>
      </div>
    </>
  )
}
