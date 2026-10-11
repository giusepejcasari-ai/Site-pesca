# 🎣 Pesqueiro Água Viva — Site

Site institucional estático (HTML, CSS e JavaScript puros) do **Pesqueiro Água Viva**.
Apresenta informações, pesca e serviços, cardápio completo com busca e filtros,
horários, regras e localização.

## ✨ Funcionalidades

- Página única responsiva (mobile-first: celulares, tablets e desktops)
- **Cardápio, preços e conteúdo controlados por um único arquivo** (`script.js` → objeto `CONFIG`)
- **Navegação reorganizada:** Início · Sobre · Pesca e Serviços · **Cardápios** · Informações · Contato
- **Aba Cardápios dedicada** (alimentação + bebidas) com:
  - Campo de **busca** por nome/descrição (ignora acentos)
  - **Filtros por categoria** com contagem de itens
  - Cards modernos com imagem, nome, descrição, preço e volume
  - Ocultação automática de itens **indisponíveis** e de categorias **vazias**
  - Mensagem amigável quando nenhum produto é encontrado
  - Realce do termo buscado nos resultados
- Abas (tabs) para Pesca / Alimentação / Bebidas / Serviços
- **Scroll-spy:** destaca automaticamente a seção visível no menu
- Links de contato (WhatsApp, Instagram, Facebook) e mapa do Google Maps
- Animações sutis de entrada, menu mobile e botão voltar ao topo
- Acessibilidade: textos alternativos, foco visível por teclado, `aria` nos filtros

## 🚀 Como usar

Por ser um site estático, basta abrir o `index.html` no navegador.
Para servir localmente (recomendado):

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## ✏️ Como editar o conteúdo

Todas as informações do estabelecimento (nome, horários, contato, preços,
cardápio, serviços e regras) ficam no objeto **`CONFIG`**, no topo do arquivo
[`script.js`](script.js). Edite apenas esse arquivo para atualizar o site,
sem precisar mexer no HTML ou no CSS.

- Para **adicionar/remover produtos**, edite `CONFIG.alimentacao` e `CONFIG.bebidas`.
- Cada item pode ter `imagem` (URL). Se não tiver, usa um **placeholder por categoria**.
- Itens com `available: false` aparecem nas abas como "Indisponível" e ficam
  **ocultos** na aba Cardápios.

## 🖼️ Imagens

O projeto já inclui **ilustrações vetoriais (SVG) profissionais** como imagens
de categoria, hero e seção Sobre — leves e nítimas. Para trocar por **fotos
geradas por IA**, siga o guia completo em [`IMAGENS-IA.md`](IMAGENS-IA.md)
(prompts prontos + caminhos exatos dos arquivos).

## 📁 Estrutura

```
pesqueiro/
├── index.html          # Estrutura da página (navegação + seções)
├── style.css           # Estilos, design tokens e responsividade
├── script.js           # CONFIG (conteúdo) + renderização, busca e filtros
├── IMAGENS-IA.md       # Guia de imagens com IA (prompts e caminhos)
├── IMPLANTACAO.md      # Documento de implantação e testes
└── assets/
    ├── images/         # Hero, sobre e placeholders SVG por categoria
    └── icons/          # Logotipos e ícones
```

---

© Pesqueiro Água Viva. Preços sujeitos a alteração sem aviso prévio.

