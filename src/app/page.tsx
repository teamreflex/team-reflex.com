import Logo from '@/components/logo'
import Project, { Props as ProjectItem } from '@/components/project'
import { GithubIcon, TwitterIcon } from 'lucide-react'

const projects: ProjectItem[] = [
  {
    name: 'Collect',
    description: 'Track your kpop album & photocard collection',
    link: 'https://collect.jinsoul.tv/',
    type: 'ts',
  },
  {
    name: 'fab-fetch',
    description: 'Fetch and archive content from Fab',
    link: 'https://github.com/teamreflex/fab-fetch',
    type: 'ts',
  },
  {
    name: 'Objekts',
    description: 'View ARTMS & tripleS Objekt NFTs',
    link: 'https://objekts.jinsoul.tv/',
    type: 'ts',
  },
  {
    name: 'ChallongePHP',
    description: 'Package for interfacing with the Challonge API',
    link: 'https://github.com/teamreflex/ChallongePHP',
    type: 'php',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center justify-center bg-slate-900">
      <Logo />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-8">
        {projects.map((project, index) => <Project key={index} {...project} />)}
      </div>

      <div className="flex flex-row gap-6 items-center justify-center">
        <a href="https://github.com/teamreflex">
          <GithubIcon size={48} />
        </a>
        <a href="https://twitter.com/Reflexgg">
          <TwitterIcon size={48} />
        </a>
      </div>
    </main>
  )
}
