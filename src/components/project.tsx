import { LinkIcon } from "lucide-react"
import Badge from "./badge"

export type Props = {
  name: string
  description: string
  link: string
  type: 'php' | 'ts'
}

export default function Project({ name, description, link, type }: Props) {
  return (
    <a href={link} target="_blank" className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Badge text={type === 'php' ? 'PHP' : 'TS'} color={type === 'php' ? 'red' : 'blue'} />
          <h3 className="font-bold text-lg">{name}</h3>
        </div>

        <LinkIcon size={24} />
      </div>
      <p>{description}</p>
    </a>
  )
}