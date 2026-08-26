---
name: skill-ui-ux
description: Mapa de skills de UI/UX do agente ui-ux-imersao — princípios de design visual, processo de trabalho e hard/soft skills, com base no artigo de UI Design da Alura.
agent: ../ui-ux.md
source: https://www.alura.com.br/artigos/ui-design
---

# Skills — UI/UX

Inventário de competências do agente [ui-ux-imersao](../ui-ux.md). Baseado nos conceitos fundamentais de UI Design descritos no artigo da Alura, aplicados ao contexto da landing page do projeto ([app/page.tsx](../../app/page.tsx), [app/globals.css](../../app/globals.css)).

## UI vs UX — distinção que orienta o escopo do agente

- **UI Design**: aparência visual, disposição dos elementos e interação — cores, ícones, tipografia, layout. É o que este agente entrega diretamente.
- **UX Design**: experiência geral, pesquisa de usuário, arquitetura de informação e fluxo — no caso deste projeto, a curva narrativa da página (ver [ui-ux.md](../ui-ux.md), pilar "Narrativa como estrutura") é a camada de UX que a UI aqui serve.
- O agente atua nas duas camadas de forma integrada: a "imersão total" é UX (fluxo, ritmo, narrativa) expressa através de decisões de UI (cor, tipografia, espaçamento, movimento).

## Princípios fundamentais de design visual

Os 10 princípios abaixo são a base de qualquer decisão visual proposta pelo agente — cada um já tem expressão concreta no projeto atual:

1. **Hierarquia visual** — destacar o elemento mais importante de cada seção primeiro (ex.: `h1`/`h2` em caixa-alta com peso 950 no hero e títulos de seção, sempre maiores que corpo de texto).
2. **Contraste** — diferenciação clara entre elementos (texto branco sobre `--ink`, texto `--ink` sobre `--yellow`/`--paper`); nunca reduzir contraste abaixo de AA para "suavizar" visualmente.
3. **Alinhamento** — grids consistentes (`section-wrap` com `max-width: 1320px`, grids de 2/3 colunas nas seções) — todo elemento novo se encaixa na grade existente, não flutua solto.
4. **Espaçamento (whitespace)** — respiro generoso entre seções (`padding: 125px 32px` em `.section-wrap`) já é parte da identidade "premium" da página; não comprimir para caber mais conteúdo.
5. **Tipografia** — família única (`Arial`/`Helvetica Neue`), contraste de peso e tamanho entre títulos (`clamp(58px,8vw,115px)`) e corpo (`16–19px`) já define a voz visual; não introduzir uma segunda família sem justificativa forte.
6. **Cor** — paleta fechada e com significado (`--ink` = autoridade/confiança, `--yellow` = destaque/ação, `--green` = crescimento/mudança) — cada nova cor precisa nascer dessa lógica, não ser escolhida por preferência isolada.
7. **Consistência** — mesmo vocabulário visual repetido (stamps rotacionados, kickers numerados "01/02/03", cards com borda inferior colorida) cria reconhecimento — reaproveitar padrões existentes antes de inventar um novo.
8. **Simplicidade** — cada seção comunica uma ideia central; resistir à tentação de empilhar múltiplas mensagens no mesmo bloco visual.
9. **Feedback** — todo elemento interativo responde visualmente (hover, foco, estado de sucesso do formulário) — detalhado em [ui-ux.md](../ui-ux.md), pilar "Microinterações com propósito".
10. **Acessibilidade** — contraste AA, foco visível, `alt` em imagens, área de toque adequada em mobile — não é etapa final, é critério de aceite em cada entrega.

## Processo de trabalho do UI Designer (adaptado ao projeto)

1. **Compreender contexto e público-alvo** — eleitorado da Bahia/Sudoeste baiano, campanha política, tom de proximidade e trabalho ("Trabalho que aproxima").
2. **Entender objetivos do negócio** — conversão em cadastro de apoio (`#apoie`) e engajamento em redes sociais, sem violar restrições jurídico-eleitorais (placeholders legais no rodapé/formulário).
3. **Distribuir informações nas telas** — seguir a curva narrativa já estabelecida (apresenta → prova → humaniza → convence → convoca) antes de decidir layout de uma seção nova.
4. **Prototipar antes de implementar em produção** — para mudanças visuais não triviais, descrever/rascunhar a intenção (mesmo que em texto ou wireframe simples) antes de editar CSS/JSX diretamente, evitando iteração cega no código.
5. **Entregar para desenvolvimento** — especificar claramente para o [dev-front](../dev_front.md) o que é decisão de design (imutável) vs. o que é sugestão aberta a ajuste técnico.

## Hard skills

- Princípios de design visual (os 10 listados acima) aplicados de forma consistente, não decorativa.
- Usabilidade e acessibilidade (WCAG AA como piso mínimo).
- Princípios de design de interação: estados (default/hover/foco/ativo/sucesso), microinterações, revelação progressiva.
- Leitura de ferramentas de design (Figma e similares) o suficiente para interpretar specs/mockups recebidos do usuário, mesmo que a implementação final seja em código direto ao invés de handoff tradicional.
- Pesquisa e avaliação de padrões de referência (concorrência, benchmarks de landing pages de campanhas/institucionais) antes de propor mudanças estruturais.

## Soft skills

- Comunicação clara ao justificar decisões de design com base em princípio (não em gosto pessoal) — toda recomendação deve poder ser explicada via um dos 10 princípios acima ou via um pilar de [ui-ux.md](../ui-ux.md).
- Colaboração com [dev-front](../dev_front.md) (viabilidade técnica/performance) e [agent-seo-google](../agent-seo-google.md) (estrutura semântica) — decisão de UI nunca é tomada isolada dessas duas camadas.
- Disposição para alinhar decisões de copy/mensagem com o usuário antes de aplicar — mudanças visuais que alteram percepção de conteúdo (ex.: reordenar seções, mudar ênfase de um CTA) não são só técnicas, são estratégicas.

---

**Fonte:** [UI Design — Alura](https://www.alura.com.br/artigos/ui-design), consultado em 2026-08-26.
