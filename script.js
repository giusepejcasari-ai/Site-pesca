/* =========================================================
   PESQUEIRO ÁGUA VIVA — Configuração Central
   =========================================================
   Edite este arquivo para atualizar preços, produtos e
   informações sem precisar alterar o HTML ou o CSS.
   ========================================================= */

const CONFIG = {

  /* ---- Identidade do estabelecimento ---- */
  nome: "Pesqueiro Água Viva",
  slogan: "Um lugar para descansar, pescar e saborear.",
  descricao: "Localizado em meio à natureza, o Pesqueiro Água Viva oferece estrutura completa para toda a família: lagos bem abastecidos, alimentação de qualidade e ambiente tranquilo para quem quer fugir da correria.",

  /* ---- Horários ---- */
  horarios: [
    { dia: "Segunda a Sexta", horario: "07h às 17h" },
    { dia: "Sábados",         horario: "06h às 18h" },
    { dia: "Domingos e Feriados", horario: "06h às 17h" },
  ],

  /* ---- Contato e localização ---- */
  contato: {
    whatsapp:        "5511997413788",       // Apenas números, com DDI e DDD
    whatsappTexto:   "(11) 99741-3788",
    whatsappMensagem: "Olá! Vim pelo site do Pesqueiro Água Viva e gostaria de mais informações. 🎣",
    instagram:  "pesqueiro.aguaviva",
    facebook:   "pesqueiroaguaviva",
    endereco:   "Estr. Rural, km 12 — Bairro Exemplo, Cidade/SP",
    mapasURL:   "https://maps.google.com/?q=Pesqueiro+%C3%81gua+Viva", // Substitua pelo link real
    mapasEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14647.391!2d-46.65!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU2FvIFBhdWxv!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  },

  /* ---- Regras gerais ---- */
  regras: [
    "É proibida a entrada de alimentos e bebidas externos.",
    "Crianças menores de 12 anos pagam meia entrada.",
    "Animais de estimação são bem-vindos com guia.",
    "Não é permitido o uso de iscas vivas.",
    "O pesqueiro se reserva o direito de encerrar a pesca em caso de tempestade.",
    "Estacionamento incluso para clientes.",
    "Capacidade máxima de visitantes: 200 pessoas.",
  ],

  /* =================================================================
     SEÇÃO: PESCA
     visible: true  → aparece no site | false → oculta a opção
     ================================================================= */
  pesca: {
    entradaPorPessoa: {
      visible: true,
      label: "Entrada por Pessoa",
      descricao: "Acesso ao lago e área de lazer (sem pesca).",
      preco: 20.00,
    },
    pescaEsportiva: {
      visible: true,
      label: "Pesca Esportiva",
      itens: [
        { label: "Período Manhã (06h–12h)", preco: 80.00 },
        { label: "Período Tarde (12h–17h)",  preco: 70.00 },
        { label: "Dia Inteiro",              preco: 130.00 },
      ],
    },
    pescaPorHora: {
      visible: true,
      label: "Pesca por Hora",
      preco: 25.00,
      unidade: "por hora",
    },
    pesqueEPague: {
      visible: true,
      label: "Pesque e Pague",
      descricao: "Modalidade em que você paga pelo peso do peixe capturado.",
      precos: [
        { especie: "Tilápia",    preco: 18.00, unidade: "kg" },
        { especie: "Tucunaré",   preco: 22.00, unidade: "kg" },
        { especie: "Pintado",    preco: 28.00, unidade: "kg" },
        { especie: "Bagre",      preco: 20.00, unidade: "kg" },
        { especie: "Pacu",       preco: 24.00, unidade: "kg" },
      ],
    },
    aluguelEquipamentos: {
      visible: true,
      label: "Aluguel de Equipamentos",
      itens: [
        { label: "Vara completa (linha + anzol)", preco: 15.00, unidade: "diária" },
        { label: "Vara premium",                  preco: 25.00, unidade: "diária" },
        { label: "Balde de isca",                 preco: 5.00,  unidade: "unidade" },
        { label: "Cadeira de pesca",              preco: 8.00,  unidade: "diária" },
      ],
    },
    iscasAcessorios: {
      visible: true,
      label: "Iscas e Acessórios",
      itens: [
        { label: "Isca artificial (minhoca)",  preco: 5.00,  unidade: "pacote" },
        { label: "Milho temperado",            preco: 4.00,  unidade: "pacote" },
        { label: "Massa de pão",               preco: 3.00,  unidade: "unidade" },
        { label: "Ração peletizada",           preco: 6.00,  unidade: "pacote" },
        { label: "Anzóis (kit 10 unidades)",   preco: 5.00,  unidade: "kit" },
        { label: "Linha de pesca (50m)",       preco: 8.00,  unidade: "rolo" },
      ],
    },
    taxasAdicionais: {
      visible: true,
      label: "Taxas Adicionais",
      itens: [
        { label: "Despesca (devolução do peixe vivo)", preco: 10.00 },
        { label: "Limpeza do peixe",                  preco: 5.00, unidade: "kg" },
        { label: "Embalagem a vácuo",                 preco: 8.00, unidade: "kg" },
      ],
    },
  },

  /* =================================================================
     SEÇÃO: ALIMENTAÇÃO
     available: true → disponível | false → marca como indisponível
     ================================================================= */
  alimentacao: {
    porcoes: {
      label: "Porções",
      itens: [
        { nome: "Porção de Frango Frito",       descricao: "Frango crocante frito na hora. Serve 2 pessoas.", preco: 45.00, available: true, imagem: null },
        { nome: "Porção de Calabresa",          descricao: "Calabresa acebolada na brasa. Serve 2 pessoas.",  preco: 40.00, available: true, imagem: null },
        { nome: "Porção de Mandioca Frita",     descricao: "Mandioca crocante com manteiga de alho.",         preco: 28.00, available: true, imagem: null },
        { nome: "Porção de Batata Frita",       descricao: "Batata palito crocante. Serve 1–2 pessoas.",      preco: 25.00, available: true, imagem: null },
        { nome: "Porção de Iscas de Peixe",     descricao: "Tilápia empanada, muito crocante. Serve 2.",      preco: 55.00, available: true, imagem: "assets/images/food-peixe.jpg" },
      ],
    },
    refeicoes: {
      label: "Refeições",
      itens: [
        { nome: "Peixe Grelhado Individual",  descricao: "Tilápia grelhada com arroz, salada e farofa.",     preco: 45.00, available: true, imagem: "assets/images/food-peixe.jpg" },
        { nome: "Peixe Assado Individual",    descricao: "Peixe assado temperado com ervas. Acompanha arroz e purê.", preco: 48.00, available: true, imagem: null },
        { nome: "Frango Grelhado",            descricao: "Filé de frango grelhado com salada e arroz.",      preco: 38.00, available: true, imagem: null },
        { nome: "Refeição para 2 pessoas",    descricao: "Peixe assado grande + arroz + salada + farofa.",   preco: 85.00, available: true, imagem: null },
        { nome: "Refeição Família (4–5 pax)", descricao: "Peixe assado inteiro + acompanhamentos variados.", preco: 160.00, available: true, imagem: null },
      ],
    },
    petiscos: {
      label: "Petiscos e Acompanhamentos",
      itens: [
        { nome: "Farofa Temperada",     descricao: "Farofa da casa com bacon e cheiro-verde.",  preco: 12.00, available: true, imagem: null },
        { nome: "Arroz",                descricao: "Porção de arroz branco.",                    preco: 8.00,  available: true, imagem: null },
        { nome: "Vinagrete",            descricao: "Vinagrete artesanal da casa.",               preco: 8.00,  available: true, imagem: null },
        { nome: "Pão de Alho",          descricao: "4 fatias de pão de alho assadas na brasa.", preco: 10.00, available: true, imagem: null },
      ],
    },
    lanches: {
      label: "Lanches",
      itens: [
        { nome: "X-Burguer",      descricao: "Hambúrguer artesanal com queijo e alface.",    preco: 22.00, available: true,  imagem: null },
        { nome: "X-Frango",       descricao: "Frango crocante com queijo e maionese.",       preco: 20.00, available: true,  imagem: null },
        { nome: "Hot Dog Simples",descricao: "Pão, salsicha, mostarda e ketchup.",           preco: 14.00, available: false, imagem: null },
        { nome: "Misto Quente",   descricao: "Pão de forma, presunto e queijo grelhados.",  preco: 12.00, available: true,  imagem: null },
      ],
    },
    sobremesas: {
      label: "Sobremesas",
      itens: [
        { nome: "Pudim de Leite",   descricao: "Pudim cremoso de leite condensado.",  preco: 12.00, available: true,  imagem: null },
        { nome: "Mousse de Maracujá",descricao: "Mousse leve e refrescante.",         preco: 10.00, available: true,  imagem: null },
        { nome: "Sorvete (2 bolas)",descricao: "Sabores: creme, chocolate ou morango.", preco: 10.00, available: false, imagem: null },
      ],
    },
  },

  /* =================================================================
     SEÇÃO: BEBIDAS
     ================================================================= */
  bebidas: {
    refrigerantes: {
      label: "Refrigerantes",
      itens: [
        { nome: "Coca-Cola",   volumes: [{ v: "350ml lata", preco: 6.00 }, { v: "2L",       preco: 14.00 }], available: true },
        { nome: "Guaraná",     volumes: [{ v: "350ml lata", preco: 5.00 }, { v: "2L",       preco: 12.00 }], available: true },
        { nome: "Sprite",      volumes: [{ v: "350ml lata", preco: 6.00 }],                                   available: true },
        { nome: "Fanta Laranja",volumes: [{ v: "350ml lata", preco: 6.00 }],                                  available: false },
      ],
    },
    agua: {
      label: "Água Mineral",
      itens: [
        { nome: "Água sem gás", volumes: [{ v: "500ml", preco: 3.00 }, { v: "1,5L", preco: 5.00 }], available: true },
        { nome: "Água com gás", volumes: [{ v: "500ml", preco: 4.00 }],                               available: true },
      ],
    },
    sucos: {
      label: "Sucos",
      itens: [
        { nome: "Suco de Laranja",   volumes: [{ v: "300ml", preco: 8.00  }], available: true  },
        { nome: "Suco de Maracujá",  volumes: [{ v: "300ml", preco: 8.00  }], available: true  },
        { nome: "Suco de Limão",     volumes: [{ v: "300ml", preco: 8.00  }], available: true  },
        { nome: "Suco de Caju",      volumes: [{ v: "300ml", preco: 9.00  }], available: false },
      ],
    },
    energeticos: {
      label: "Energéticos",
      itens: [
        { nome: "Red Bull",     volumes: [{ v: "250ml", preco: 14.00 }], available: true  },
        { nome: "Monster",      volumes: [{ v: "473ml", preco: 14.00 }], available: true  },
        { nome: "TNT",          volumes: [{ v: "350ml", preco: 9.00  }], available: false },
      ],
    },
    cervejas: {
      label: "Cervejas",
      itens: [
        { nome: "Heineken",     volumes: [{ v: "330ml long neck", preco: 10.00 }], available: true  },
        { nome: "Brahma",       volumes: [{ v: "350ml lata",      preco: 7.00  }, { v: "600ml garrafa", preco: 13.00 }], available: true },
        { nome: "Skol",         volumes: [{ v: "350ml lata",      preco: 6.00  }], available: true  },
        { nome: "Eisenbahn",    volumes: [{ v: "355ml long neck",  preco: 12.00 }], available: false },
      ],
    },
    outras: {
      label: "Outras Bebidas",
      itens: [
        { nome: "Café",          volumes: [{ v: "50ml", preco: 4.00  }], available: true },
        { nome: "Cappuccino",    volumes: [{ v: "200ml", preco: 8.00  }], available: true },
        { nome: "Leite Quente",  volumes: [{ v: "200ml", preco: 5.00  }], available: true },
        { nome: "Achocolatado",  volumes: [{ v: "200ml", preco: 6.00  }], available: true },
        { nome: "Chá (variados)",volumes: [{ v: "200ml", preco: 5.00  }], available: false },
      ],
    },
  },

  /* =================================================================
     SEÇÃO: SERVIÇOS ADICIONAIS
     ================================================================= */
  servicos: {
    estacionamento: {
      visible: true,
      label: "Estacionamento",
      descricao: "Estacionamento amplo e gratuito para clientes dentro do horário de funcionamento.",
      preco: 0,
      detalhe: "Gratuito",
    },
    quiosques: {
      visible: true,
      label: "Aluguel de Quiosques",
      descricao: "Quiosques cobertos com mesa, bancos e churrasqueira. Reserva antecipada recomendada.",
      itens: [
        { label: "Quiosque Pequeno (até 6 pessoas)",  preco: 60.00,  unidade: "diária" },
        { label: "Quiosque Médio (até 12 pessoas)",   preco: 100.00, unidade: "diária" },
        { label: "Quiosque Grande (até 20 pessoas)",  preco: 180.00, unidade: "diária" },
      ],
    },
    churrasqueiras: {
      visible: true,
      label: "Churrasqueiras Avulsas",
      descricao: "Churrasqueiras disponíveis para uso individual sem quiosque.",
      preco: 30.00,
      unidade: "diária",
    },
    tarifasCriancas: {
      visible: true,
      label: "Tarifas para Crianças",
      itens: [
        { label: "Até 4 anos",         preco: 0,    detalhe: "Grátis" },
        { label: "5 a 11 anos",        preco: 10.00, detalhe: "Meia entrada" },
        { label: "12 anos ou mais",    preco: null,  detalhe: "Tarifa normal de adulto" },
      ],
    },
    taxasEventos: {
      visible: true,
      label: "Eventos e Grupos",
      descricao: "Para grupos acima de 20 pessoas ou eventos privados, entre em contato para pacotes especiais.",
      itens: [
        { label: "Reserva do espaço (pacote mínimo)", preco: 800.00, unidade: "evento" },
        { label: "Taxa de montagem/desmontagem",       preco: 200.00, unidade: "evento" },
      ],
      contato: true,
    },
    regrasAlimentos: {
      visible: true,
      label: "Política de Alimentos Externos",
      regras: [
        "Não é permitida a entrada de alimentos ou bebidas externos.",
        "Coolers e marmitas não são permitidos nas áreas comuns.",
        "Exceção: alimentos para bebês e itens médicos (mediante solicitação).",
        "Utensílios de churrasco próprios são permitidos nos quiosques alugados.",
      ],
    },
  },
};

/* =================================================================
   ÍCONES — centralize aqui os caminhos das imagens dos ícones
   ================================================================= */
const ICONS = {
  logo:         "assets/icons/logo.jpg",
  pesca:        "assets/icons/icon-pesca.jpg",
  alimentacao:  "assets/icons/icon-alimentacao.jpg",
  bebidas:      "assets/icons/icon-bebidas.svg",
  servicos:     "assets/icons/icon-servicos.svg",
  // Ícones de contato e sociais (SVG inline via data URI)
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.529 5.845L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.012-1.37l-.36-.214-3.76.892.952-3.664-.235-.376A9.818 9.818 0 012.182 12c0-5.421 4.397-9.818 9.818-9.818 5.42 0 9.818 4.397 9.818 9.818 0 5.421-4.398 9.818-9.818 9.818z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  phone:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>`,
  camera:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e6683c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  thumbsup:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>`,
  mappin:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#7a5c38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

/* Gera URL do WhatsApp com mensagem personalizada */
function buildWhatsAppURL() {
  const num = CONFIG.contato.whatsapp;
  const msg = encodeURIComponent(CONFIG.contato.whatsappMensagem || "");
  return `https://wa.me/${num}?text=${msg}`;
}

/* =================================================================
   UTILITÁRIOS
   ================================================================= */

function formatBRL(valor) {
  if (valor === 0) return "Grátis";
  if (valor === null || valor === undefined) return "—";
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function badge(available) {
  if (available) return `<span class="badge badge--on">Disponível</span>`;
  return `<span class="badge badge--off">Indisponível</span>`;
}

/* =================================================================
   RENDERIZADORES
   ================================================================= */

function renderHorarios() {
  const el = document.getElementById("horarios-list");
  if (!el) return;
  el.innerHTML = CONFIG.horarios.map(h => `
    <div class="horario-item">
      <span class="horario-dia">${h.dia}</span>
      <span class="horario-tempo">${h.horario}</span>
    </div>
  `).join("");
}

function renderPesca() {
  const container = document.getElementById("section-pesca-content");
  if (!container) return;
  const p = CONFIG.pesca;
  let html = "";

  // Entrada por pessoa
  if (p.entradaPorPessoa.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header">
          <span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M2 9a3 3 0 010-6h20a3 3 0 010 6"/><path d="M2 15a3 3 0 000 6h20a3 3 0 000-6"/><path d="M2 12h20"/></svg></span>
          <h3>${p.entradaPorPessoa.label}</h3>
        </div>
        <p class="price-card__desc">${p.entradaPorPessoa.descricao}</p>
        <div class="price-card__price">${formatBRL(p.entradaPorPessoa.preco)}<small>/pessoa</small></div>
      </div>`;
  }

  // Pesca esportiva
  if (p.pescaEsportiva.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header">
          <span class="price-card__icon"><img src="${ICONS.pesca}" alt="Pesca" width="36" height="36" style="border-radius:8px;object-fit:cover"/></span>
          <h3>${p.pescaEsportiva.label}</h3>
        </div>
        <ul class="price-list">
          ${p.pescaEsportiva.itens.map(i => `
            <li><span>${i.label}</span><strong>${formatBRL(i.preco)}</strong></li>
          `).join("")}
        </ul>
      </div>`;
  }

  // Pesca por hora
  if (p.pescaPorHora.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header">
          <span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
          <h3>${p.pescaPorHora.label}</h3>
        </div>
        <div class="price-card__price">${formatBRL(p.pescaPorHora.preco)}<small>/${p.pescaPorHora.unidade}</small></div>
      </div>`;
  }

  // Pesque e pague
  if (p.pesqueEPague.visible) {
    html += `
      <div class="price-card price-card--wide">
        <div class="price-card__header">
          <span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 9l4-4 4 4"/><path d="M17 9l4-4 4 4" transform="translate(-8 0)"/><path d="M5 9a7 7 0 0014 0"/><line x1="2" y1="21" x2="22" y2="21"/></svg></span>
          <h3>${p.pesqueEPague.label}</h3>
        </div>
        <p class="price-card__desc">${p.pesqueEPague.descricao}</p>
        <ul class="price-list">
          ${p.pesqueEPague.precos.map(i => `
            <li><span>${i.especie}</span><strong>${formatBRL(i.preco)}<small>/${i.unidade}</small></strong></li>
          `).join("")}
        </ul>
      </div>`;
  }

  // Aluguel de equipamentos
  if (p.aluguelEquipamentos.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header">
          <span class="price-card__icon"><img src="${ICONS.pesca}" alt="Equipamentos" width="36" height="36" style="border-radius:8px;object-fit:cover"/></span>
          <h3>${p.aluguelEquipamentos.label}</h3>
        </div>
        <ul class="price-list">
          ${p.aluguelEquipamentos.itens.map(i => `
            <li><span>${i.label}</span><strong>${formatBRL(i.preco)}<small>${i.unidade ? '/'+i.unidade : ''}</small></strong></li>
          `).join("")}
        </ul>
      </div>`;
  }

  // Iscas e acessórios
  if (p.iscasAcessorios.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header">
          <span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#7a5c38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M12 12c-2-2.5-4-3.5-4-5.5a4 4 0 018 0c0 2-2 3-4 5.5z"/><path d="M12 12c2 2.5 4 3.5 4 5.5a4 4 0 01-8 0c0-2 2-3 4-5.5z"/></svg></span>
          <h3>${p.iscasAcessorios.label}</h3>
        </div>
        <ul class="price-list">
          ${p.iscasAcessorios.itens.map(i => `
            <li><span>${i.label}</span><strong>${formatBRL(i.preco)}<small>${i.unidade ? '/'+i.unidade : ''}</small></strong></li>
          `).join("")}
        </ul>
      </div>`;
  }

  // Taxas adicionais
  if (p.taxasAdicionais.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header">
          <span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></span>
          <h3>${p.taxasAdicionais.label}</h3>
        </div>
        <ul class="price-list">
          ${p.taxasAdicionais.itens.map(i => `
            <li><span>${i.label}</span><strong>${formatBRL(i.preco)}${i.unidade ? '<small>/'+i.unidade+'</small>' : ''}</strong></li>
          `).join("")}
        </ul>
      </div>`;
  }

  container.innerHTML = html;
}

function renderMenuSection(dados, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  Object.values(dados).forEach(secao => {
    html += `<div class="menu-group">
      <h3 class="menu-group__title">${secao.label}</h3>
      <div class="menu-grid">`;
    secao.itens.forEach(item => {
      const indisponivel = item.available === false ? "menu-card--unavailable" : "";
      const imgHTML = item.imagem
        ? `<div class="menu-card__img"><img src="${item.imagem}" alt="${item.nome}" loading="lazy"/></div>`
        : `<div class="menu-card__img menu-card__img--placeholder">🍽️</div>`;

      // Volumes (bebidas)
      let precoHTML = "";
      if (item.volumes) {
        precoHTML = item.volumes.map(v =>
          `<span class="menu-card__vol">${v.v} — <strong>${formatBRL(v.preco)}</strong></span>`
        ).join("");
      } else if (item.preco !== undefined) {
        precoHTML = `<strong class="menu-card__price">${formatBRL(item.preco)}</strong>`;
      }

      html += `
        <div class="menu-card ${indisponivel}">
          ${imgHTML}
          <div class="menu-card__body">
            <div class="menu-card__top">
              <span class="menu-card__name">${item.nome}</span>
              ${badge(item.available)}
            </div>
            ${item.descricao ? `<p class="menu-card__desc">${item.descricao}</p>` : ""}
            <div class="menu-card__prices">${precoHTML}</div>
          </div>
        </div>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

function renderServicos() {
  const container = document.getElementById("section-servicos-content");
  if (!container) return;
  const s = CONFIG.servicos;
  let html = "";

  if (s.estacionamento.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header"><span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span><h3>${s.estacionamento.label}</h3></div>
        <p class="price-card__desc">${s.estacionamento.descricao}</p>
        <div class="price-card__price tag-gratis">${s.estacionamento.detalhe}</div>
      </div>`;
  }

  if (s.quiosques.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header"><span class="price-card__icon"><img src="${ICONS.servicos}" alt="Quiosques" width="36" height="36" style="border-radius:8px"/></span><h3>${s.quiosques.label}</h3></div>
        <p class="price-card__desc">${s.quiosques.descricao}</p>
        <ul class="price-list">
          ${s.quiosques.itens.map(i => `<li><span>${i.label}</span><strong>${formatBRL(i.preco)}<small>/${i.unidade}</small></strong></li>`).join("")}
        </ul>
      </div>`;
  }

  if (s.churrasqueiras.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header"><span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e8a020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-3.5-13z"/></svg></span><h3>${s.churrasqueiras.label}</h3></div>
        <p class="price-card__desc">${s.churrasqueiras.descricao}</p>
        <div class="price-card__price">${formatBRL(s.churrasqueiras.preco)}<small>/${s.churrasqueiras.unidade}</small></div>
      </div>`;
  }

  if (s.tarifasCriancas.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header"><span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2d7a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></span><h3>${s.tarifasCriancas.label}</h3></div>
        <ul class="price-list">
          ${s.tarifasCriancas.itens.map(i => `
            <li><span>${i.label}</span><strong>${i.preco !== null ? formatBRL(i.preco) : ""}${i.detalhe ? ' <small>('+i.detalhe+')</small>' : ''}</strong></li>
          `).join("")}
        </ul>
      </div>`;
  }

  if (s.taxasEventos.visible) {
    html += `
      <div class="price-card">
        <div class="price-card__header"><span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e8a020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span><h3>${s.taxasEventos.label}</h3></div>
        <p class="price-card__desc">${s.taxasEventos.descricao}</p>
        <ul class="price-list">
          ${s.taxasEventos.itens.map(i => `<li><span>${i.label}</span><strong>${formatBRL(i.preco)}<small>/${i.unidade}</small></strong></li>`).join("")}
        </ul>
        ${s.taxasEventos.contato ? `<a href="${buildWhatsAppURL()}" class="btn btn--whatsapp btn--sm" target="_blank"><span class="btn-icon">${ICONS.whatsapp}</span> Solicitar orçamento</a>` : ""}
      </div>`;
  }

  if (s.regrasAlimentos.visible) {
    html += `
      <div class="price-card price-card--wide price-card--rules">
        <div class="price-card__header"><span class="price-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#c49a6c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></span><h3>${s.regrasAlimentos.label}</h3></div>
        <ul class="rules-list">
          ${s.regrasAlimentos.regras.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>`;
  }

  container.innerHTML = html;
}

function renderRegras() {
  const el = document.getElementById("regras-list");
  if (!el) return;
  el.innerHTML = CONFIG.regras.map(r => `<li>${r}</li>`).join("");
}

function renderContato() {
  const waURL = buildWhatsAppURL();
  // WhatsApp link — com mensagem personalizada
  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    el.href = waURL;
    if (el.dataset.texto) el.textContent = CONFIG.contato.whatsappTexto;
  });
  // Instagram
  document.querySelectorAll("[data-instagram]").forEach(el => {
    el.href = `https://instagram.com/${CONFIG.contato.instagram}`;
    el.textContent = "@" + CONFIG.contato.instagram;
  });
  // Facebook
  document.querySelectorAll("[data-facebook]").forEach(el => {
    el.href = `https://facebook.com/${CONFIG.contato.facebook}`;
    el.textContent = CONFIG.contato.facebook;
  });
  // Endereço
  document.querySelectorAll("[data-endereco]").forEach(el => {
    el.textContent = CONFIG.contato.endereco;
  });
  // Mapa link
  document.querySelectorAll("[data-mapa-link]").forEach(el => {
    el.href = CONFIG.contato.mapasURL;
  });
  // Ícones SVG nos botões sociais
  const waBtn = document.getElementById("btn-social-wa");
  const igBtn = document.getElementById("btn-social-ig");
  const fbBtn = document.getElementById("btn-social-fb");
  if (waBtn) waBtn.innerHTML = `<span class="btn-icon">${ICONS.whatsapp}</span> WhatsApp`;
  if (igBtn) igBtn.innerHTML = `<span class="btn-icon">${ICONS.instagram}</span> Instagram`;
  if (fbBtn) fbBtn.innerHTML = `<span class="btn-icon">${ICONS.facebook}</span> Facebook`;
  // Ícones nos itens de contato
  const phoneIcon = document.getElementById("ci-phone-icon");
  const igIcon    = document.getElementById("ci-ig-icon");
  const fbIcon    = document.getElementById("ci-fb-icon");
  const pinIcon   = document.getElementById("ci-pin-icon");
  if (phoneIcon) phoneIcon.innerHTML = ICONS.phone;
  if (igIcon)    igIcon.innerHTML    = ICONS.camera;
  if (fbIcon)    fbIcon.innerHTML    = ICONS.thumbsup;
  if (pinIcon)   pinIcon.innerHTML   = ICONS.mappin;
  // Mapa embed
  const mapFrame = document.getElementById("mapa-embed");
  if (mapFrame) mapFrame.src = CONFIG.contato.mapasEmbed;
}

function renderNome() {
  document.querySelectorAll("[data-nome]").forEach(el => {
    el.textContent = CONFIG.nome;
  });
  document.querySelectorAll("[data-slogan]").forEach(el => {
    el.textContent = CONFIG.slogan;
  });
  document.querySelectorAll("[data-descricao]").forEach(el => {
    el.textContent = CONFIG.descricao;
  });
  document.title = CONFIG.nome + " — Preços e Cardápio";
}

/* =================================================================
   NAVEGAÇÃO COM ABAS
   ================================================================= */
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove("tab-btn--active"));
      panels.forEach(p => p.classList.remove("tab-panel--active"));
      tab.classList.add("tab-btn--active");
      const panel = document.getElementById("tab-" + target);
      if (panel) panel.classList.add("tab-panel--active");
    });
  });
}

/* =================================================================
   MENU MOBILE
   ================================================================= */
function initMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("nav-links--open");
    toggle.setAttribute("aria-expanded", open);
    toggle.classList.toggle("nav-toggle--open", open);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-links--open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.classList.remove("nav-toggle--open");
    });
  });
}

/* =================================================================
   SCROLL SUAVE & NAVBAR SCROLL
   ================================================================= */
function initScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > 60);
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* =================================================================
   ANIMAÇÕES DE ENTRADA (IntersectionObserver)
   ================================================================= */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
}

/* =================================================================
   BOTÃO VOLTAR AO TOPO
   ================================================================= */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("back-to-top--visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =================================================================
   INICIALIZAÇÃO
   ================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderNome();
  renderHorarios();
  renderPesca();
  renderMenuSection(CONFIG.alimentacao, "section-alimentacao-content");
  renderMenuSection(CONFIG.bebidas, "section-bebidas-content");
  renderServicos();
  renderRegras();
  renderContato();
  initTabs();
  initMobileMenu();
  initScroll();
  initAnimations();
  initBackToTop();
});
