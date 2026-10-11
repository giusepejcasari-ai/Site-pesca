# 🎣 Pesqueiro Água Viva — Site

Site institucional estático (HTML, CSS e JavaScript puros) do **Pesqueiro Água Viva**.
Apresenta informações, preços de pesca, cardápio, horários, regras e localização.

## ✨ Funcionalidades

- Página única responsiva (desktop, tablet e mobile)
- **Cardápio, preços e conteúdo controlados por um único arquivo** (`script.js` → objeto `CONFIG`)
- Seções: Início, Sobre, Preços, Alimentação, Bebidas, Serviços, Regras e Contato
- Abas (tabs) para separar Pesca / Alimentação / Bebidas / Serviços
- Links de contato (WhatsApp, Instagram, Facebook) e mapa do Google Maps
- Animações de entrada ao rolar a página e menu mobile

## 🚀 Como usar

Por ser um site estático, basta abrir o `index.html` no navegador.
Para servir localmente (opcional):

```bash
# Python 3
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## ✏️ Como editar o conteúdo

Todas as informações do estabelecimento (nome, horários, contato, preços,
cardápio, serviços e regras) ficam no objeto **`CONFIG`**, no topo do arquivo
[`script.js`](script.js). Edite apenas esse arquivo para atualizar o site,
sem precisar mexer no HTML ou no CSS.

## 📁 Estrutura

```
pesqueiro/
├── index.html          # Estrutura da página
├── style.css           # Estilos e design tokens
├── script.js           # CONFIG (conteúdo) + renderização e interações
└── assets/
    ├── images/         # Fotos (hero, equipamentos, comida)
    └── icons/          # Logotipos e ícones
```

---

© Pesqueiro Água Viva. Preços sujeitos a alteração sem aviso prévio.
