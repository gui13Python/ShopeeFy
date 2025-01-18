document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('product-grid');

  const featuredProducts = [
    {
      // XIOMNE 13C
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-m0c6s8s0yizk84.webp',
      name: 'Smartphone Xiaomi 13C',
      discount: '40% OFF',
      originalPrice: 'R$ 1.999,00',
      salePrice: 'R$ 1.199,00',
      link: 'https://s.shopee.com.br/6AVSdFvEzw'
    },
    {
      // MOCHILA ROSA
      img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrs6qnhzwke35b.webp',
      name: 'Kit Material Escolar Feminino Completo Mochila  Rosa',
      discount: '35% OFF',
      originalPrice: 'R$ 250,00',
      salePrice: 'R$129,70',
      link: 'https://s.shopee.com.br/6AVSdKLGEf'
    },
    { 
      // PROJETOR//
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-lvm98b66j9zyb5.webp',
      name: 'Projetor 4K HD 150 Polegadas , Wifi HY300 Pro...',
      discount: '50% OFF',
      originalPrice: 'R$ 500,00',
      salePrice: 'R$200,00',
      link: 'https://s.shopee.com.br/60C2RdrhlJ'
    },
    {
      // MOCHILA2
      img: 'https://down-zl-br.img.susercontent.com/sg-11134201-7rd74-lw8kc001adera0.webp',
      name: "Stitch Large Capacity Children's Light mochila meninas luz mochila impermeável",
      discount: '45% OFF',
      originalPrice: 'R$ 100,00',
      salePrice: 'R$39,00',
      link: 'https://s.shopee.com.br/4AkOHP1CqF'
    },
    {
      // XIOME12
      img: 'https://down-zl-br.img.susercontent.com/sg-11134201-7rcdj-lrhu4q51kfzud8.webp',
      name: "Celular Xiaomi Redmi 12 256GB/ 128GB Dual Sim 8GB / 4GB Ram Global",
      discount: '45% OFF',
      originalPrice: 'R$ 2.500,00',
      salePrice: 'R$ 1.700,00',
      link: 'https://s.shopee.com.br/8AGX2GXhMC'
    },
    {
      // PANELA
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-ls8ixg60z09w46.webp',
      name: "Jogo De Panelas Sartin Tampa De Vidro Com Revestimento Cerâmico...",
      discount: '45% OFF',
      originalPrice: 'R$ 500,00',
      salePrice: 'R$ 290,00',
      link: 'https://s.shopee.com.br/9Ulud7IWXA'
    },
    // ########################################NOVOS ############################################################


    {
      // CONJUNTO MOVEIS
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-lsvnk9garz0t3d.webp',
      name: "Conjunto Para Quarto Cabeceira Julia 1.60 Cama Queen com 2 Mesas de Cabeceira Madero",
      discount: '45% OFF',
      originalPrice: 'R$ 500,00',
      salePrice: 'R$ 319,90',
      link: 'https://s.shopee.com.br/7KhQ5DShHZ'
    },
    {
      // MOCHILA3
      img: 'https://down-zl-br.img.susercontent.com/sg-11134201-7rd6r-lupk652vaf8108.webp',
      name: "One Piece Mochila Escolar Com Interface USB Anime  Prova D' Água...",
      discount: '45% OFF',
      originalPrice: 'R$ 250,00',
      salePrice: 'R$ 139,00',
      link: 'https://s.shopee.com.br/2AzJw3lRej'
    },
    {
      // NOTEBOOK
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-luy634usqyl02a.webp',
      name: "notebook core i5 bom e barato 4 GB RAM 120 GB SSD.",
      discount: '45% OFF',
      originalPrice: 'R$ 2.000,00',
      salePrice: 'R$ 799,99',
      link: 'https://s.shopee.com.br/5AcvVqqORR'
    },
    {
      // LIXEIRA IA
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-lv205cqzejdp98.webp',
      name: "Lixeira com Sensor Automático Inteligente...",
      discount: '45% OFF',
      originalPrice: 'R$ 150,00',
      salePrice: 'R$79,00',
      link: 'https://s.shopee.com.br/9Ulud7IWXA'
    },
    {
      //Kit Material Escolar Feminino Completo 43
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-lr8df9vm1ezo4d.webp',
      name: "Kit Material Escolar Feminino Completo 43 Itens Volta As Aulas 2024 Menina",
      discount: '45% OFF',
      originalPrice: 'R$ 150,00',
      salePrice: 'R$ 93,70',
      link: 'https://s.shopee.com.br/4fgevLQCAC'
    },
    {
      // GATO ARRANHA
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-lwzsy8h9u5z388.webp',
      name: "Arranhador Para Gato Parede Sisal 50x20 Grande Brinquedo Pet...",
      discount: '45% OFF',
      originalPrice: 'R$ 90,00',
      salePrice: 'R$ 34,99',
      link: 'https://s.shopee.com.br/6AVSiLHaVc'
    },
    {
      // MATERIAL ESCOLAR
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-m3cys49wnpkl28.webp',
      name: "Celular Xiaomi Redmi 12 256GB/ 128GB Dual Sim 8GB / 4GB Ram Global",
      discount: '45% OFF',
      originalPrice: 'R$ 101,00',
      salePrice: 'R$ 48,90',
      link: 'https://s.shopee.com.br/2qF0kYRQpu'
    },
    {
      // CREATINA
      img: 'https://down-cvs-br.img.susercontent.com/sg-11134201-7rccx-lqyuf42z2ejtd1.webp',
      name: "Creatina Monohidratada Pote 300g - 100% Pura Importada - Soldiers Nutrition...",
      discount: '45% OFF',
      originalPrice: 'R$ 90,00',
      salePrice: 'R$ 63,90',
      link: 'https://s.shopee.com.br/9A94ILgRgj'
    },
    {
      //VAP
      img: 'https://down-cvs-br.img.susercontent.com/sg-11134201-7rdyw-m00iepjgdn1lff.webp',
      name: "Lavadora de Alta Pressão Potente 1000w 1305PSI Carro Moto TEPW1600 Toyama",
      discount: '45% OFF',
      originalPrice: 'R$ 590,00',
      salePrice: 'R$ 299,99',
      link: 'https://s.shopee.com.br/20ftlLU5Tl'
    },
    {
      // tv smart
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lukqws4dn82cf9.webp',
      name: "Smart Tv LED Hd 32 Polegadas AOC Sistema Roku TV Wi-Fi HDMI...",
      discount: '45% OFF',
      originalPrice: 'R$ 1,500,00',
      salePrice: 'R$ 969,99',
      link: 'https://s.shopee.com.br/60C2WqCSgi'
    },
    {
      // CANETINHA
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lvvuekrop46uec.webp',
      name: "Kit Caneta 2 em 1 Brush Lettering e Ponta Fina Dual Pen Canetinha Colorir Desenho",
      discount: '45% OFF',
      originalPrice: 'R$ 65,00',
      salePrice: 'R$ 15,90',
      link: 'https://s.shopee.com.br/9UluhR2ezN'
    },
    {
      // POCO
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lyduhowvy3fpe7.webp',
      name: "Poco X6 Pro 512GB / 256GB 5G Dual Sim Global NFC Original NFe Pronta Entrega",
      discount: '45% OFF',
      originalPrice: 'R$ 2.099,00',
      salePrice: 'R$ 1.890,00',
      link: 'https://s.shopee.com.br/8fCni3lQoM'
    },
    {
      // REGATA
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lvsz37yg70tic5.webp',
      name: "Kit com 3 Camisetas Regatas Masculina Longline Dry com Capuz Lisa Sem Estampa Básica Secagem Rápida",
      discount: '45% OFF',
      originalPrice: 'R$100,00',
      salePrice: 'R$ 59,70',
      link: 'https://s.shopee.com.br/8KZxJlRQF6'
    },
    {
      // BCA
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-ltbcurg53fts2f.webp',
      name: "Kit Whey Protein Concentrado 500g + BCAA 100g + Creatina 100g + Coqueteleira...",
      discount: '45% OFF',
      originalPrice: 'R$100,00',
      salePrice: 'R$ 62,90',
      link: 'https://s.shopee.com.br/2LIkAsp1of'
    },
    {
      // FONE OUVIDO
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lomqjeb9ouk2cc.webp',
      name: "Fone Bluetooth Sem Fio De Ouvido P9 TWS Macaron Headphone Fone de Ouvido Envio Imediato",
      discount: '45% OFF',
      originalPrice: 'R$ 100,00',
      salePrice: 'R$ 31,90',
      link: 'https://s.shopee.com.br/50JVM7EnJe'
    },
    {
      // APPLE
      img: 'https://down-cvs-br.img.susercontent.com/cn-11134211-7qukw-ljo1hiuqnz0455.webp',
      name: "Apple iPhone 14 Pro Max (A2896) 256GB...",
      discount: '45% OFF',
      originalPrice: 'R$ 10.268,35',
      salePrice: 'R$ 7.000,00',
      link: 'https://s.shopee.com.br/7zx6vnLKhz'
    },
    {
      //ROPA ACADEMIA
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98q-lmbxtu1wqv3q80.webp',
      name: "Conjunto Fitness feminino Academia Short+ Top (ref01..",
      discount: '45% OFF',
      originalPrice: 'R$ 100,00',
      salePrice: 'R$ 39,90',
      link: 'https://s.shopee.com.br/3LBHNSnOu3'
    },
    {
      // FONE ROXO
      img: 'https://down-cvs-br.img.susercontent.com/cn-11134207-7r98o-lw9n3cix7ccl75.webp',
      name: "Fone De Ouvido Sem Fio Bluetooth 5.0 Estéreo Esportivo Para iPhone Android",
      discount: '45% OFF',
      originalPrice: 'R$ 35,00',
      salePrice: 'R$ 16,90',
      link: 'https://s.shopee.com.br/1qMTb2YfNT'
    },
    {
      // GALAX A0
      img: 'https://down-cvs-br.img.susercontent.com/sg-11134201-7rcfb-ls03ztp12jaw4f.webp',
      name: "Smartphone Samsung Galaxy A05s 6,7...",
      discount: '45% OFF',
      originalPrice: 'R$ 1.000,00',
      salePrice: 'R$ 879,90',
      link: 'https://s.shopee.com.br/upPptCmP'
    },
    {
      // TOALHA KIT
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7qukw-lh6kwmoanu2z04.webp',
      name: "Kit 05 Toalhas de Banho Banhão Macia Gigante Grossa Felpuda Algodão Fofa",
      discount: '45% OFF',
      originalPrice: '100,00',
      salePrice: 'R$ 71,99',
      link: 'https://s.shopee.com.br/8KZxLPYcHx'
    },
    {
      // KIT SMALTE
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lzuvucojrbr52c.webp',
      name: "Kit 20 Esmalte Impala Cremoso Hipoalergenico Cor da Sua Moda esmalte Kit Manicure Completo",
      discount: '45% OFF',
      originalPrice: 'R$ 65,60',
      salePrice: 'R$ 28,49',
      link: 'https://s.shopee.com.br/5fZCAhr7VY'
    },
    {
      // Kit Desmaia Cabelo
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-m0ygq2a5rw0na5.webp',
      name: "Kit Desmaia Cabelo Completo Forever Liss...",
      discount: '45% OFF',
      originalPrice: 'R$ 200,00',
      salePrice: 'R$ 148,99',
      link: 'https://s.shopee.com.br/6fRjMm6opK'
    },
    {
      // kit crianca
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lz814wn9exq932.webp',
      name: "Kit Sortido 6 Peças de Roupas Infantil Menino 3 Camisetas + 3 Bermudas...",
      discount: '45% OFF',
      originalPrice: 'R$ 150,00',
      salePrice: 'R$ 53,30',
      link: 'https://s.shopee.com.br/LXfpNy4Gg'
    },
    {
      // XINELO
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-m2wablqo1pfp57.webp',
      name: "Kit 3 Pares Papete Sandália Infantil Menino e Chinelo...",
      discount: '45% OFF',
      originalPrice: 'R$ 149,90',
      salePrice: 'R$ 69,90',
      link: 'https://s.shopee.com.br/5fZCBOQx1A'
    },
    {
      // Smartphone Samsung Galaxy A06
      img: 'https://down-zl-br.img.susercontent.com/sg-11134201-7rffs-m35asiwtxws2ce.webp',
      name: "Smartphone Samsung Galaxy A06 128GB 4GB RAM 6,7 Azul Escuro",
      discount: '45% OFF',
      originalPrice: 'R$ 1.000,00',
      salePrice: 'R$ 779,90',
      link: 'https://s.shopee.com.br/6fRjNQd3eA'
    },
    {
      // CAIXA SOM
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-lwij444zijki93.webp',
      name: "[ORIGINAL] Caixa de Som Booms Box 2 GRANDE 33cm Bluetooth Portátil Sem Fio - Pen Drive...",
      discount: '45% OFF',
      originalPrice: 'R$ 500,00',
      salePrice: 'R$ 298,90',
      link: 'https://s.shopee.com.br/AKL1kMd5WE'
    },
    {
      // CAIXA CERVEJA
      img: 'https://down-zl-br.img.susercontent.com/sg-11134201-22100-ozllsjslg7iv5b.webp',
      name: "Caixa Térmica Unitermi Cooler Floripa Com Alça...",
      discount: '45% OFF',
      originalPrice: 'R$ 105,30',
      salePrice: 'R$ 72,48',
      link: 'https://s.shopee.com.br/5KwLnMI4ri'
    },
    {
      // PANELA arroz
      img: 'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-lnke09th32ks43.webp',
      name: "Panela Elétrica de Arroz 5 xícaras 1L - Com legumeira - Multifuncional - In Brasil...",
      discount: '45% OFF',
      originalPrice: 'R$ 250,00',
      salePrice: 'R$ 157,00',
      link: 'https://s.shopee.com.br/2qF0p2JUSS'
    },
    {
      // XIOME12 F
      img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lv3v999zspm148',
      name: "Celular Xiaomi Redmi 12 256GB/ 128GB Dual Sim 8GB / 4GB Ram Global",
      discount: '45% OFF',
      originalPrice: 'R$ 2.500,00',
      salePrice: 'R$ 1.500,00',
      link: 'https://s.shopee.com.br/8AGX2GXhMC'
    },
    {
      // CARREGADOR 
      img: 'https://down-cvs-br.img.susercontent.com/sg-11134201-7rdww-lyzcn9lwv2ai63.webp',
      name: "Carregador Portátil Power Bank 20.000mah 959 JorgeStore...",
      discount: '45% OFF',
      originalPrice: 'R$ 109,00',
      salePrice: 'R$ 52,99',
      link: 'https://s.shopee.com.br/6pl9afazcl'
    },
    {
      // Tênis Para Caminhada Feminino 
      img: 'https://down-cvs-br.img.susercontent.com/3a2913875c8b4fbb8b59d0a1a7df9a4d.webp',
      name: "Tênis Para Caminhada Feminino Academia Trança Confortável Leve Novidade",
      discount: '45% OFF',
      originalPrice: 'R$ 169,00',
      salePrice: 'R$ 61,90',
      link: 'https://s.shopee.com.br/5AcvbkW8ky'
    },
    {
      // kit cuecas e meias
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-m29m4t3pyibq61.webp',
      name: "Kit 10 Cuecas Boxer Microfibra Adulto + 12 Pares Meias Algodão",
      discount: '45% OFF',
      originalPrice: '100,00',
      salePrice: 'R$ 65,99',
      link: 'https://s.shopee.com.br/5AcvbymU2y'
    },
    {
      // BRINQUEDO CARANGUEJO
      img: 'https://down-cvs-br.img.susercontent.com/sg-11134201-7rfhj-m3wt0ai14kgt68.webp',
      name: "Caranguejo Brinquedo Fujão Som Luz E Movimento Maluco Siri Carangueijo Musical...",
      discount: '45% OFF',
      originalPrice: 'R$ 60,00',
      salePrice: 'R$ 24,80',
      link: 'https://s.shopee.com.br/7ANzzqMp6L'
    },
    {
      // KIT MEIAS
      img: 'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lvl1humlnbgp91.webp',
      name: "Kit 12 Pares de Meias Soquete Unissex Cano curto",
      discount: '45% OFF',
      originalPrice: '50,80',
      salePrice: 'R$ 10,97',
      link: 'https://s.shopee.com.br/3VUhdK7tHf'
    },
    {
      // TENIS MASCULINO
      img: 'https://down-zl-br.img.susercontent.com/sg-11134201-7rdyv-lxu9mzzs60m721.webp',
      name: "Tênis DC Shoes Anvil TX LA - Preto+Branco - Em estoque ENVIO 24 HORAS",
      discount: '45% OFF',
      originalPrice: 'R$ 112,90',
      salePrice: 'R$ 64,90',
      link: 'https://s.shopee.com.br/9ziBNSn67Y'
    },
    {
      // BATONS
      img: 'https://down-zl-br.img.susercontent.com/cn-11134301-7r98o-lop81m85v24x5d.webp',
      name: "6 Conjunto de batom fosco Brilho labial fosco Veludo Brilho labial fosco...",
      discount: '45% OFF',
      originalPrice: 'R$ 69,00',
      salePrice: 'R$ 19,62',
      link: 'https://s.shopee.com.br/5Acvd1ME8U'
    },

  ];

  function renderProducts() {
    if (productGrid) {
      productGrid.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
          <img src="${product.img}" alt="${product.name}" class="product-image" />
          <h3>${product.name}</h3>
          <p class="discount-badge">${product.discount}</p>
          <p><s>${product.originalPrice}</s></p>
          <p class="sale-price">${product.salePrice}</p>
          <a href="${product.link}" class="product-link">Comprar Agora</a>
        </div>
      `).join('');
    }
  }

  renderProducts();
});
