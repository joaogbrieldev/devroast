# Padrões de Componentes UI

## Estrutura de Arquivos

Cada componente deve seguir esta estrutura:

```
src/components/ui/
├── index.ts          # Barrel exports
├── button.tsx        # Componente individual
└── agents.md         # Este arquivo
```

## Padrões de Criação

### 1. Named Exports
- **Sempre** usar named exports, nunca default exports
- Exportar o componente e as variantes separadamente

```tsx
// ✅ Correto
export { Button, buttonVariants };
export type { ButtonProps };

// ❌ Errado
export default Button;
```

### 2. Extensão de Props Nativas
- Estender as propriedades nativas do elemento HTML
- Usar `forwardRef` para permitir ref forwarding

```tsx
import { type ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return <button ref={ref} {...props} />;
  }
);
```

### 3. Tailwind Variants (tv)
- Usar `tailwind-variants` para criar variantes
- Usar `tailwind-merge` automaticamente via tv

```tsx
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'base classes shared',
  variants: {
    variant: {
      default: '...',
      primary: '...',
    },
    size: {
      sm: '...',
      md: '...',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
```

### 4. Arquivo index.ts
- Usar barrel exports para simplificar imports
- Exportar tipos primeiro, depois valores

```tsx
export type { ButtonProps } from './button';
export { Button, buttonVariants } from './button';
```

### 5. Biome/Linting
- Sempre formatar com `pnpm biome format --write`
- Verificar com `pnpm biome check`

## Checklist de Criação

- [ ] Criar arquivo `componente.tsx` em `src/components/ui/`
- [ ] Usar named exports
- [ ] Estender props nativas com `forwardRef`
- [ ] Implementar `tailwind-variants`
- [ ] Adicionar variantes no `src/components/ui/index.ts`
- [ ] Formatar com Biome
- [ ] Verificar com Biome

## Exemplo de Uso

```tsx
import { Button, buttonVariants } from '@/components/ui';

// Via componente
<Button variant="primary" size="md">Click me</Button>

// Via variantes (para composicao customizada)
<span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
```
