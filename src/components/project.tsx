import { LinkIcon } from "lucide-react"
import Badge from "./badge"

export type Props = {
  name: string
  description: string
  link: string
  type: 'php' | 'ts' | 'vue' | 'react' | 'next' | 'svelte'
}

const mapping = {
  php: {
    color: 'bg-red-500',
    text: 'PHP',
  },
  ts: {
    color: 'bg-blue-500',
    text: 'TS',
  },
  vue: {
    color: 'bg-green-500',
    text: 'Vue',
  },
  react: {
    color: 'bg-blue-300',
    text: 'React',
  },
  next: {
    color: 'bg-black text-white',
    text: 'Next',
  },
  svelte: {
    color: 'bg-orange-600',
    text: 'Svelte',
  },
}

export default function Project({ name, description, link, type }: Props) {
  return (
    <a href={link} target="_blank" className="flex flex-col gap-2 hover:scale-105 transition">
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Badge text={mapping[type].text} color={mapping[type].color} />
          <h3 className="font-bold text-lg">{name}</h3>
        </div>

        <LinkIcon size={24} />
      </div>
      <p>{description}</p>
    </a>
  )
}