---
name: skill-dev-front
description: Mapa de skills técnicas do agente dev-front — tecnologias, práticas e nível de proficiência esperado para HTML, CSS, JavaScript/TypeScript, React, Next.js, React Native e GraphQL.
agent: ../dev_front.md
---

# Skills — Dev Front-End

Inventário de competências do agente [dev-front](../dev_front.md). Cada skill lista o que o agente deve saber aplicar na prática, não apenas conhecer em teoria. Onde relevante, aponta o que já é usado neste projeto.

## HTML

- Semântica correta (`header`, `nav`, `main`, `section`, `article`, `footer`) para acessibilidade e SEO — base do que já é usado em [app/page.tsx](../../app/page.tsx).
- Formulários acessíveis: `label` associado por `htmlFor`/`id`, tipos de input corretos (`email`, `tel`), atributos de validação nativa (`required`, `pattern`) antes de recorrer a JS.
- Atributos de acessibilidade (`aria-label`, `aria-expanded`, `aria-hidden`) em elementos interativos custom (menu, ícones decorativos).
- Meta tags essenciais (`viewport`, `charset`, Open Graph/Twitter Card quando aplicável).

## CSS

- CSS moderno puro: Grid, Flexbox, `clamp()`, `min()`/`max()`, custom properties (`--var`), `@media` e `@container` queries — é o padrão usado hoje em [app/globals.css](../../app/globals.css), sem depender de framework.
- Responsividade mobile-first e mobile-last conforme o caso; domínio dos breakpoints já estabelecidos no projeto (`800px`, `420px`).
- Animações performáticas via `transform`/`opacity`, `@keyframes`, `prefers-reduced-motion` (já usado em `.hero-ribbon`).
- Tailwind CSS v4 (configurado via `components.json`/`postcss.config.mjs` neste projeto, embora não usado em `page.tsx` hoje) — saber quando propor migração e quando preservar CSS manual.
- Metodologia de nomenclatura consistente (o projeto usa classes semânticas tipo BEM-like: `.timeline-card`, `.timeline-card-top`) — seguir o padrão existente em vez de introduzir um novo.
- Design tokens via custom properties (`--ink`, `--yellow`, `--green`, `--background`) — estender o sistema existente, não hardcodar cores novas.

## JavaScript / TypeScript

- ES2020+: módulos, destructuring, optional chaining, array/object methods funcionais (`map`, `filter`, `reduce`).
- TypeScript: tipagem de props, `Readonly<>`, tipos utilitários, inferência — o projeto roda em modo `strict` ([tsconfig.json](../../tsconfig.json)) apesar de `ignoreBuildErrors` no build do Next.
- APIs de navegador relevantes para landing pages: `IntersectionObserver` (já usado no hook `useReveal`), `FormData`, eventos de formulário controlado vs. não controlado.
- Boas práticas de performance de JS: debounce/throttle quando necessário, evitar handlers pesados em `scroll`/`resize`, lazy loading de código não crítico.

## React

- Componentização com Server Components vs. Client Components (`'use client'`) — ver critério de uso no [dev_front.md](../dev_front.md).
- Hooks: `useState`, `useEffect` com cleanup correto (o `useReveal` retorna `observer.disconnect()`), `useMemo`/`useCallback` quando justificado por custo real, não por hábito.
- Formulários controlados em React (`onSubmit`, `preventDefault`, estado de sucesso) — padrão já usado no formulário de apoio da página.
- Composição de componentes reutilizáveis via props e `children`, evitando duplicação de JSX (o projeto já usa esse padrão para `milestones`/`priorities` mapeados).
- React 19: novas convenções de `ref` como prop, Actions/`useActionState` quando o projeto evoluir para formulários com submissão real a um backend.

## Next.js

- App Router: estrutura de `app/`, `layout.tsx`, `page.tsx`, `metadata`/`generateMetadata`, `viewport`.
- Server Components por padrão, Client Components isolados ("ilhas") para interatividade.
- Otimizações nativas: `next/image` (avaliar uso vs. `images.unoptimized: true` já configurado em [next.config.mjs](../../next.config.mjs)), `next/font`, code-splitting automático por rota.
- Arquivos especiais do App Router relevantes para uma landing page: `robots.ts`, `sitemap.ts`, `not-found.tsx`, `loading.tsx` — usar conforme necessidade do agente [agent-seo-google](../agent-seo-google.md).
- Deploy/build na Vercel: entender impacto de `next build`, analytics (`@vercel/analytics`, já integrado em [app/layout.tsx](../../app/layout.tsx)).

## React Native

- Fundamentos de componentes nativos (`View`, `Text`, `ScrollView`, `FlatList`) e diferenças de layout (`Flexbox` como único sistema, sem CSS Grid).
- Navegação (React Navigation ou Expo Router) e gerenciamento de estado compartilhado com uma eventual versão web.
- Adaptação de design system entre web e mobile nativo quando o projeto expandir para app — reaproveitar tokens de design (`--ink`, `--yellow`, `--green`) como valores compartilhados, não reimplementar do zero.
- Não aplicável ao estado atual deste repositório (site web puro) — manter como competência disponível caso o projeto ganhe um app companion.

## GraphQL

- Consumo de API GraphQL a partir do front (Apollo Client, urql ou `fetch` direto) — não há backend GraphQL neste projeto hoje.
- Escrita de queries/mutations tipadas, fragments para reuso, cache normalizado.
- Geração de tipos TypeScript a partir do schema (ex. GraphQL Code Generator) quando o projeto integrar um backend real (ex.: envio do formulário de apoio para uma API).
- Não aplicável ao estado atual (formulário ainda é local/sem submissão real) — competência a ativar se/quando o backend for definido.

## Transversal (todas as camadas)

- Performance web (Core Web Vitals) e acessibilidade (WCAG AA) como critérios de aceite, não extras — detalhado em [dev_front.md](../dev_front.md).
- Controle de versão e diffs pequenos e revisáveis; não misturar refactor com feature.
- Ler a stack real do projeto antes de aplicar um padrão "de livro" — este repositório específico usa CSS manual em vez de Tailwind na página principal, por exemplo, e isso deve ser respeitado até decisão explícita de mudança.
