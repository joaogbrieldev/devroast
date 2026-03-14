individual exports** with component prefix (never dot notation):

```tsx
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const card = tv({ 
base: ["flex flex-col gap-3 p-5", "border border-border-primary"],
});

type CardRootProps = ComponentProps<"div">;

function CardRoot({ className, ...props }: CardRootProps) { 
return <div className={card({ className })} {...props} />;
}

type CardTitleProps = ComponentProps<"p">;

function CardTitle({ className, ...props }: CardTitleProps) { 
return ( 
<p 
className={tv({ base: "font-mono text-[13px] text-text-primary" })({ 
className, 
})} 
{...props} 
/> 
);
}

type CardDescriptionProps = ComponentProps<"p">;

function CardDescription({ className, ...props }: CardDescriptionProps) { 
return ( 
<p 
className={tv({ base: "text-xs leading-relaxed text-text-secondary" })({ 
className, 
})} 
{...props} 
/> 
);
}

export { 
CardRoot, 
CardTitle, 
CardDescription, 
card, 
type CardRootProps, 
type CardTitleProps, 
type CardDescriptionProps,
};
```

**Use:**

```tsx
<CardRoot> 
<Badge variant="critical">critical</Badge> 
<CardTitle>using var instead of const/let</CardTitle> 
<CardDescription>the var keyword is...</CardDescription>
</CardRoot>
```

## Component structure (simple primitive)

```tsx
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// 1. Define variants with tv()
const myComponent = tv({ 
base: [...], 
variants: { ... }, 
defaultVariants: { ... },
});

// 2. Extract type from variants
type MyComponentVariants = VariantProps<typeof myComponent>;

// 3. Combine with native HTML element props
type MyComponentProps = ComponentProps<"div"> & MyComponentVariants;

// 4. Implement the component
function MyComponent({ variant, size, className, ...props }: MyComponentProps) { 
return ( 
<div className={myComponent({ variant, size, className })} {...props} /> 
);
}

// 5. Named exports of everything
export { 
MyComponent, 
myComponent, 
type MyComponentProps, 
type MyComponentVariants,
};
```

## Checklist for new components

- [ ] Kebab-case file inside `src/components/ui/`
- [ ] Named exports (component, tv function, types)
- [ ] Native props extended via `ComponentProps<"element">`
- [ ] Variants defined with `tailwind-variants`
- [ ] `className` passed via `tv({ ..., className })` or `twMerge()` (never string interpolation)
- [ ] Colors via Tailwind canonical classes (`bg-accent-green`, `text-text-primary`)
- [ ] Native Tailwind classes when applicable (`text-white`, `bg-transparent`)
- [ ] Fonts via `font-sans` / `font-mono` (never custom classes)
- [ ] No hardcoded hex colors (except SVG attributes with `var(--color-*)`)
- [ ] No `export default`
- [ ] No `bg-(--color-*)` syntax — use canonical class
- [ ] Composition (sub-components) for components with 2+ distinct content areas
- [ ] Simple props for atomic primitives and numeric/functional configuration
- [ ] Add variant to examples page (`/components`)
