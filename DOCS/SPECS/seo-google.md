# Spec — SEO do Google (referência normativa)

Documento de referência para o agente [agent-seo-google](../../AGENTS/agent-seo-google.md). Baseado no [Guia de introdução ao SEO do Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br) (pt-BR).

> Este spec resume as diretrizes oficiais aplicáveis a este projeto. Em caso de dúvida ou atualização da fonte, o guia oficial do Google prevalece — este documento deve ser revisado se a fonte mudar.

## 1. Descoberta e indexação

- O Google descobre páginas principalmente por rastreamento automatizado, seguindo links de páginas já conhecidas.
- Enviar um sitemap **acelera** a descoberta mas não é obrigatório.
- Verificação: usar o operador `site:dominio.com` na busca, ou a Ferramenta de Inspeção de URL no Search Console.

**Aplicação ao projeto:** considerar `app/sitemap.ts` (App Router) listando a URL da landing page; configurar o Google Search Console assim que o domínio de produção existir.

## 2. Organização do site

- **URLs descritivas**: incorporar palavras significativas no caminho (ex.: `/pets/cats.html`), evitando IDs opacos.
- **Estrutura de diretórios**: agrupar conteúdo similar ajuda o Google a entender a frequência de atualização — mais relevante em sites com muitas URLs.
- **Canonização**: eliminar conteúdo duplicado com `rel="canonical"` ou redirecionamentos 301 apontando para a versão preferencial.

**Aplicação ao projeto:** site é single-page (uma única rota `/`), então URL descritiva não é um problema hoje. Se novas páginas forem criadas (ex.: `/propostas`, `/imprensa`), seguir path descritivo em português.

## 3. Conteúdo útil e confiável

- Texto legível, bem organizado, sem erros ortográficos/gramaticais.
- Conteúdo exclusivo, não copiado de outros sites.
- Atualizado e relevante para quem busca.
- Antecipar variações de termos de busca que o público usaria — o Google já interpreta variações semânticas, não é necessário repetir sinônimos artificialmente.
- **Princípio central do guia**: "criar conteúdo que as pessoas consideram atraente e útil provavelmente influencia a presença nos resultados de pesquisa mais do que qualquer outra técnica."

**Aplicação ao projeto:** copy da campanha (história, trajetória, bandeiras) já é original e específica — manter esse padrão em qualquer conteúdo novo; revisar ortografia/gramática do pt-BR antes de publicar alterações de texto.

## 4. Metadados e aparência na busca

- **Title**: único, claro e conciso por página; incluir nome + proposta de valor (e localização, se aplicável).
- **Meta description**: resumo de 1–2 frases, único por página, cobrindo os pontos mais relevantes — usado para gerar o snippet nos resultados.

**Aplicação ao projeto:** já definidos em [app/layout.tsx](../../app/layout.tsx):
```ts
title: 'Marcos Adriano | Política com propósito'
description: 'Conheça a trajetória, as propostas e participe da construção de uma Bahia mais eficiente, justa e próxima.'
```
Revisar se ainda refletem o conteúdo atual da página ao alterar seções; manter únicos caso novas rotas sejam adicionadas.

## 5. Imagens

- Usar imagens de alta qualidade, posicionadas próximas ao texto relevante (o texto ao redor ajuda o Google a entender o contexto).
- **Alt text**: descrição curta e descritiva do conteúdo da imagem via atributo `alt` — essencial tanto para acessibilidade quanto para SEO.

**Aplicação ao projeto:** todas as `<img>` em [app/page.tsx](../../app/page.tsx) devem manter `alt` descritivo (já presente na maioria — ex. `"Marcos Adriano sorrindo com terno azul-marinho"`). Ao adicionar novas imagens, seguir o mesmo padrão descritivo, evitando `alt` vazio ou genérico ("imagem", "foto").

## 6. Links

- **Internos e externos**: conectar a recursos relevantes que corroboram o conteúdo.
- **Texto âncora**: descritivo, nunca "clique aqui".
- **Links não confiáveis / gerados por usuário**: usar `rel="nofollow"` ou `rel="ugc"` para evitar problemas de spam.

**Aplicação ao projeto:** links de redes sociais (Instagram, Facebook) já usam `rel="noreferrer"` — avaliar se `rel="nofollow"` faz sentido para links de saída que não são de autoridade da própria campanha. Texto âncora atual ("Seguir no Instagram", "Acompanhar no Facebook") já é descritivo — manter esse padrão.

## 7. Vídeos

- Conteúdo em vídeo de alta qualidade, em página própria quando fizer sentido, posicionado perto de texto relevante, com título/descrição seguindo as mesmas práticas de texto.

**Aplicação ao projeto:** não há vídeo na página atual; se adicionado (ex. depoimentos em vídeo), aplicar esta seção.

## 8. Dados estruturados

- Dados estruturados válidos habilitam recursos especiais nos resultados (estrelas, carrosséis, rich results).
- Validar sempre contra a galeria de tipos de resultado do Google antes de publicar.

**Aplicação ao projeto:** avaliar JSON-LD do tipo `Person` ou `GovernmentService`/`Organization` para o candidato, adicionado via `<script type="application/ld+json">` no layout — só implementar se o usuário confirmar que os dados (CNPJ, comitê etc.) já foram validados juridicamente, já que hoje são placeholders.

## 9. Aspectos técnicos

- CSS e JavaScript devem estar acessíveis ao rastreador do Google (não bloquear via robots.txt).
- Design **mobile-first** — o Google usa indexação prioritariamente móvel.
- Otimizar **Core Web Vitals** como parte da experiência de página (responsabilidade compartilhada com o agente [dev-front](../../AGENTS/dev_front.md)).
- `robots.txt` controla o acesso de rastreadores; sitemap lista URLs importantes (recomendado, não obrigatório).
- Canonização técnica via `rel="canonical"` para páginas duplicadas.

**Aplicação ao projeto:** o layout já é responsivo com breakpoints mobile (`800px`, `420px`). Nenhum `robots.txt` ou `sitemap.ts` existe ainda no App Router — avaliar necessidade quando o domínio de produção for definido.

## 10. O que evitar (equívocos comuns)

- Meta tag `keywords` — não é usada pelo Google, não adicionar.
- Excesso/repetição artificial de palavras-chave (keyword stuffing) — viola políticas antispam.
- Não existe comprimento mínimo/máximo "ideal" de conteúdo.
- Palavras-chave no domínio e o TLD (.com, .org etc.) têm impacto mínimo.
- Conteúdo duplicado é ineficiente, mas **não gera penalidade** — apenas dilui relevância.
- E-E-A-T não é um fator de ranking direto e isolado.

## 11. Promoção e descoberta

- Boca a boca, recomendações, engajamento em redes sociais e comunidade, material offline (cartões, panfletos) são estratégias legítimas de descoberta.
- Evitar qualquer prática de manipulação de resultados de busca (link farms, conteúdo enganoso, cloaking).

## 12. Monitoramento

- Configurar o Google Search Console para o domínio de produção assim que disponível.
- Revisar relatórios de desempenho, cobertura de indexação e Core Web Vitals regularmente.
- Acompanhar atualizações via Google Search Central (blog/redes oficiais), já que diretrizes de SEO evoluem.

---

**Fonte:** [Guia de introdução ao SEO — Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br), consultado em 2026-08-26.
