import { Button } from "@/components/ui/button";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-zinc-900">
          Componentes UI
        </h1>

        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-zinc-800">Button</h2>

          <div className="rounded-lg border border-zinc-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-medium text-zinc-500">
              Variantes
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-medium text-zinc-500">Tamanhos</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">Icon</Button>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-medium text-zinc-500">Estados</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
