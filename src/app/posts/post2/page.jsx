import Image from "next/image"
import Link from "next/link"

export default function Post2() {
  return (
    <div>
      <h1>Post 2</h1>
      <div>
        <figure>
          <Image src="/img/calo-img.png" alt="Calo Next" width={500} height={500}></Image>
          <figcaption><p><Link href="/">Home</Link></p></figcaption>
        </figure>
      </div>
    </div>
  )
}
