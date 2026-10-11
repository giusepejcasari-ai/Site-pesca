# 📦 Documento de Implantação — Site Pesqueiro Água Viva

Atualização focada em **aparência profissional, navegação clara e uma área
dedicada de Cardápios** com busca e filtros — tudo sem back-end, mantendo os
dados comerciais intactos.

> **Tecnologias:** HTML5, CSS3 e JavaScript puro. Compatível com GitHub Pages.

---

## 1. Arquivos modificados

| Arquivo | O que mudou |
|---|---|
| `index.html` | Navegação reorganizada (Início, Sobre, Pesca e Serviços, **Cardápios**, Informações, Contato); nova **seção Cardápios** com busca, filtros e catálogo; seção "Regras" renomeada para "Informações e Regras" (`#informacoes`); imagem "Sobre" adicionada; metadados OG/Twitter reforçados; número placeholder do link de horário corrigido. |
| `script.js` | Adicionado `IMAGENS_CATEGORIA` (placeholders por categoria) e `imagemItem()`; **render do Cardápios** (`coletarItensCardapio`, `renderChipsCardapio`, `renderResultadosCardapio`, `initCardapios`); busca sem acento + realce; **scroll-spy** no menu; `renderMenuSection` agora usa fallback de imagem e `width`/`height`/`decoding`. |
| `style.css` | Estilos da seção Cardápios (barra de busca, chips de filtro, catálogo, mensagem de vazio, realce `<mark>`); `.sobre-media`; destaque do link ativo (`.nav-link--active`); foco visível (acessibilidade); ajustes de responsividade do cardápio. |
| `README.md` | Atualizado com novas seções, aba Cardápios, busca/filtros e referências aos guias. |

## 2. Arquivos novos

| Arquivo | Finalidade |
|---|---|
| `IMAGENS-IA.md` | Guia com **prompts prontos** e caminhos exatos para gerar/substituir fotos por IA. |
| `IMPLANTACAO.md` | Este documento. |
| `assets/images/hero.svg` | Imagem principal (lago ao amanhecer) — ilustração vetorial leve. |
| `assets/images/sobre.svg` | Imagem da seção Sobre (família à beira do lago). |
| `assets/images/cat-pesca.svg` | Categoria Pesca. |
| `assets/images/cat-equipamentos.svg` | Equipamentos de pesca. |
| `assets/images/cat-servicos.svg` | Quiosques/churrasqueira. |
| `assets/images/cat-porcoes.svg` | Porções. |
| `assets/images/cat-refeicoes.svg` | Refeições (peixe). |
| `assets/images/cat-petiscos.svg` | Petiscos e acompanhamentos. |
| `assets/images/cat-lanches.svg` | Lanches. |
| `assets/images/cat-sobremesas.svg` | Sobremesas. |
| `assets/images/cat-bebidas.svg` | Refrigerantes / outras bebidas. |
| `assets/images/cat-agua.svg` | Água mineral. |
| `assets/images/cat-sucos.svg` | Sucos. |
| `assets/images/cat-energeticos.svg` | Energéticos. |
| `assets/images/cat-cervejas.svg` | Cervejas. |


---

## 3. Funcionalidades implementadas

### ✅ Aba Cardápios (área dedicada)
- Unifica **Alimentação + Bebidas** num catálogo consultável.
- **Busca** por nome/descrição, ignorando acentos e maiúsculas (com debounce).
- **Filtros por categoria** (chips) com **contagem** de itens disponíveis.
- **Categorias vazias são ocultadas** automaticamente nos chips.
- **Itens indisponíveis** (`available: false`) ficam **ocultos** no catálogo.
- **Mensagem de vazio** com botão "Limpar filtros" quando não há resultados.
- **Realce** do termo buscado (`<mark>`) nos nomes e descrições.
- Todos os itens vêm do objeto **`CONFIG`** (sem duplicar preços no HTML).

### ✅ Navegação e layout
- Menu reorganizado: **Início · Sobre · Pesca e Serviços · Cardápios · Informações · Contato**.
- **Scroll-spy** que destaca a seção visível no menu.
- Imagem de destaque no **Hero** e nova imagem na seção **Sobre**.
- Rodapé com navegação atualizada.

### ✅ Responsividade e acessibilidade
- Mobile-first; cards e busca adaptados a telas pequenas (≤680px e ≤380px).
- **Foco visível** por teclado em links, botões e campos.
- Campo de busca com `<label>`; filtros com `aria-pressed`; imagens com `alt`.
- Contraste e hierarquia mantidos (paleta verde/bege/branco).

---

## 4. Testes executados (com evidências)

Como o ambiente **não possui** navegador nem runtime JS (Node/Deno), os testes
foram feitos por **validação estática + simulação da lógica + servidor HTTP local**:

| # | Teste | Resultado |
|---|-------|-----------|
| 1 | Página e recursos carregam (HTTP) | ✅ `index.html`, `style.css`, `script.js` e todas as imagens retornaram **200** |
| 2 | Sintaxe/balanceamento do JavaScript | ✅ Chaves/colchetes/parênteses balanceados (validador próprio) |
| 3 | Estrutura do HTML | ✅ Sem erros de aninhamento; nenhuma tag aberta |
| 4 | Links internos | ✅ Todas as âncoras (`#cardapios`, `#informacoes`, etc.) têm destino |
| 5 | IDs usados no JS existem no HTML | ✅ Nenhum ID órfão (inclui os novos do cardápio) |
| 6 | SVGs são XML válido | ✅ 15/15 SVGs válidos |
| 7 | Lógica do Cardápio (dados reais) | ✅ 43 itens; **36 disponíveis / 7 ocultos**; busca, filtro e sem-acento corretos |
| 8 | Ocultação de desativados | ✅ Hot Dog, Sorvete, Fanta, etc. **não** aparecem no catálogo |
| 9 | Categorias vazias | ✅ Nenhuma categoria vazia; 11 categorias com itens |
| 10 | Acessibilidade | ✅ 0 imagens sem `alt`; label no campo de busca; `aria-pressed` nos filtros |
| 11 | Dados comerciais preservados | ✅ Preços, contatos, horários, endereço e regras **inalterados** (CONFIG intacto) |

---

## 5. Problemas encontrados e correções

| Problema | Correção |
|---|---|
| Número placeholder `(11) 99999-9999` na seção Contato | Corrigido para `(11) 99741-3788` |
| Número placeholder no link do horário (`5511999999999`) | Corrigido para `5511997413788` |
| Imagens JPG muito pesadas (hero ~863 KB) | Hero passa a usar SVG leve (3 KB) com fallback para o JPG |
| **Sem ferramenta de IA no ambiente** | Criadas ilustrações SVG profissionais + guia `IMAGENS-IA.md` com prompts prontos |
| Ausência de runtime JS para teste automatizado | Validação por simulação da lógica em Python + servidor HTTP |

---

## 6. Pendências / opcionais (não bloqueiam a publicação)

- **Trocar placeholders SVG por fotos de IA** (ver `IMAGENS-IA.md`) — melhoria
  visual opcional; o site já está completo e profissional com os vetores.
- Converter fotos finais para **WebP** ao substituí-las (menor peso).
- Revisar o link real do **Google Maps** (`CONFIG.contato.mapasURL` / `mapasEmbed`).
- Teste manual em navegador/dispositivos (recomendado antes de divulgar).

---

## 7. Como visualizar localmente

```bash
cd pesqueiro
python3 -m http.server 8000
# abra http://localhost:8000
```

## 8. Como publicar no GitHub Pages

O site é estático e já está no repositório `giusepejcasari-ai/Site-pesca`.

1. Acesse **Settings → Pages** no repositório.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione o branch **`main`** e a pasta **`/ (root)`** → **Save**.
4. Aguarde ~1 min e acesse: **https://giusepejcasari-ai.github.io/Site-pesca/**

### Atualizando o site depois
- **No Mac:** dê duplo clique em `atualizar-github.command` (faz commit + push).
- **Manualmente:** `git add -A && git commit -m "..." && git push`.
