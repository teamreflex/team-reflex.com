'use client'

import Image from "next/image"
import { useState } from "react"

export default function Logo() {
  const [logo, setLogo] = useState('/logo.png')

  return (
    <a href="https://team-reflex.com">
      <Image
        onMouseEnter={() => setLogo('/logo-glow.png')}
        onMouseLeave={() => setLogo('/logo.png')}
        src={logo}
        alt="Reflex"
        className="animate-hue"
        width={200}
        height={200}
        priority
      />
    </a>
  )
}