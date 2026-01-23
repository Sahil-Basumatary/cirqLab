import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          CirqLab
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Predicting extrachromosomal DNA dynamics
        </p>
      </div>
    </main>
  )
}
