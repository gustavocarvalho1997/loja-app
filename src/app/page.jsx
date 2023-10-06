import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <p><Link href="/posts">Meu Post...</Link></p>
      </div>
    </div>
  )
}
