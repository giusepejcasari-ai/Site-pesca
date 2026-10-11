# 🖼️ Guia de Imagens com IA — Pesqueiro Água Viva

> **Status:** o ambiente de desenvolvimento usado **não possui** nenhuma ferramenta de
> geração de imagens por IA (sem CLI, app, biblioteca `diffusers`/`torch`, chaves de API
> OpenAI/Stability/Replicate/HuggingFace, ou conversores como `cwebp`/ImageMagick).
>
> Por isso, o site já usa **ilustrações vetoriais (SVG) de alta qualidade** como
> placeholders — são imagens reais, leves e nítidas, e o layout já está 100% preparado
> para receber fotografias. **Não é obrigatório trocar nada para o site funcionar.**
>
> Quando quiser elevá-lo ao nível "fotográfico", gere as fotos com a IA de sua
> preferência e **substitua os arquivos nos caminhos indicados abaixo**, mantendo o
> mesmo nome (ou atualizando o caminho no `script.js`). Nada mais precisa ser alterado.

---

## ✅ Como substituir uma imagem

1. Gere a imagem com a IA (prompt sugerido abaixo).
2. Exporte em **WebP** (ou JPG) otimizado, no tamanho sugerido.
3. Coloque o arquivo em `assets/images/` com o **mesmo nome** listado abaixo
   (troque a extensão para `.webp` se preferir e atualize o caminho no `script.js`).
4. Faça o commit/publish (ou rode `atualizar-github.command`).

> Dica: o site já aplica `loading="lazy"`, `alt` descritivo e `width`/`height` para
> evitar "pulo" de layout — ao trocar a imagem, mantenha a proporção indicada.

---

## A. Imagem principal (Hero) — `assets/images/hero.jpg` (ou `hero.webp`)

- **Proporção/tamanho:** 1600×900 (16:9). Peso-alvo < 250 KB.
- **Prompt sugerido:**
  > "Wide realistic photograph of a Brazilian fishing lake (pesqueiro) at golden hour
  > sunrise, calm natural water reflecting warm light, organized grassy margins, lush
  > green tropical vegetation and trees framing the scene, a wooden covered kiosk on the
  > right, a fishing rod on the left, tranquil and inviting family-friendly atmosphere,
  > soft natural lighting, professional landscape photography, high detail, no text,
  > no logos, no watermark."

## B. Imagem "Sobre" — `assets/images/sobre.jpg` (ou `sobre.webp`)

- **Proporção/tamanho:** 800×600 (4:3). Peso-alvo < 150 KB.
- **Prompt sugerido:**
  > "Realistic photo of a happy family relaxing at the edge of a Brazilian fishing lake,
  > one person fishing with a rod, green nature around, warm daylight, cozy and peaceful
  > mood, professional lifestyle photography, no text, no watermark."

---

## C. Alimentação (por produto cadastrado)

Use fotos gastronômicas realistas, fundo neutro, luz suave. Tamanho 800×600 (4:3).
Substitua o campo `imagem` de cada item no `script.js` (hoje vários estão como um
placeholder por categoria). Exemplos de prompt por produto:

| Produto (CONFIG) | Arquivo sugerido | Prompt (resumo) |
|---|---|---|
| Porção de Frango Frito | `assets/images/frango-frito.jpg` | "Crispy fried chicken pieces (frango a passarinho) on a white plate, rustic wooden table, appetizing, food photography" |
| Porção de Calabresa | `assets/images/calabresa.jpg` | "Grilled sliced calabresa sausage with onions, sizzling skillet, Brazilian petisco, food photography" |
| Porção de Mandioca Frita | `assets/images/mandioca.jpg` | "Crispy fried cassava (mandioca frita) with garlic butter, bowl, food photography" |
| Porção de Batata Frita | `assets/images/batata.jpg` | "Golden french fries in a basket, food photography" |
| Porção de Iscas de Peixe | `assets/images/iscas-peixe.jpg` | "Breaded fried tilápia strips (iscas de peixe), lemon, food photography" |
| Peixe Grelhado Individual | `assets/images/peixe-grelhado.jpg` | "Grilled whole tilápia with rice, salad and farofa, plate, food photography" |
| Peixe Assado Individual | `assets/images/peixe-assado.jpg` | "Oven-baked seasoned fish with rice and purée, plate, food photography" |
| Frango Grelhado | `assets/images/frango-grelhado.jpg` | "Grilled chicken breast with salad and rice, healthy plate, food photography" |
| Refeição para 2 / Família | `assets/images/refeicao-familia.jpg` | "Large baked fish platter for family with sides, generous portion, food photography" |
| Farofa Temperada | `assets/images/farofa.jpg` | "Seasoned farofa with bacon and herbs, bowl, food photography" |
| Pão de Alho | `assets/images/pao-alho.jpg` | "Grilled garlic bread slices, food photography" |
| X-Burguer / X-Frango / Misto | `assets/images/x-burguer.jpg` etc. | "Brazilian artisan cheeseburger, food photography" |
| Pudim / Mousse / Sorvete | `assets/images/pudim.jpg` etc. | "Brazilian milk pudding dessert, food photography" |

## D. Bebidas (por categoria)

| Categoria (CONFIG) | Arquivo sugerido | Prompt (resumo) |
|---|---|---|
| Refrigerantes | `assets/images/refrigerantes.jpg` | "Ice-cold soda cans and bottles with condensation, refreshing, product photography" |
| Água Mineral | `assets/images/agua.jpg` | "Cold mineral water bottles with droplets, clean, product photography" |
| Sucos | `assets/images/sucos.jpg` | "Fresh orange juice glass with oranges, bright, food photography" |
| Energéticos | `assets/images/energeticos.jpg` | "Cold energy drink cans, dark dramatic lighting, product photography" |
| Cervejas | `assets/images/cervejas.jpg` | "Ice-cold beer bottles and glass with foam, refreshing, product photography" |

## E. Pesca e equipamentos

| Uso | Arquivo sugerido | Prompt (resumo) |
|---|---|---|
| Equipamentos | `assets/images/equipamentos.jpg` | "Fishing rods, reels and gear neatly arranged by a lake, morning light, outdoor photography" |
| Pesca esportiva | `assets/images/pesca-esportiva.jpg` | "Angler fishing at a calm lake at dawn, rod in water, serene, professional photography" |
| Peixe no natural | `assets/images/peixe-natural.jpg` | "Tilápia fish in clear natural water, underwater style, realistic" |

## F. Serviços

| Uso | Arquivo sugerido | Prompt (resumo) |
|---|---|---|
| Quiosques | `assets/images/quiosques.jpg` | "Covered wooden kiosk with table, benches and grill at a fishing lake, daytime, photography" |
| Churrasqueira | `assets/images/churrasqueira.jpg` | "Grill with skewers and fire at an outdoor kiosk, warm, photography" |

---

### Nota sobre marcas
Os placeholders são ilustrações **genéricas** (não reproduzem embalagens de marcas).
Ao gerar fotos de bebidas, evite retratar marcas específicas de forma proeminente para
não induzir que um produto exclusivo é oferecido — prefira latas/garrafas genéricas.

