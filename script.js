// ============ DADOS ============
const STR = {
  navSobre:{pt:'Sobre',es:'Nosotros'},
  navPacotes:{pt:'Passeios',es:'Paseos'},
  navDepo:{pt:'Depoimentos',es:'Opiniones'},
  navContato:{pt:'Contato',es:'Contacto'},
  navWhats:{pt:'Fale conosco',es:'Fale conosco'},
  badge: {pt:'Tríplice Fronteira · Brasil · Argentina · Paraguai', es:'Triple Frontera · Brasil · Argentina · Paraguay'},
  heroTitlePlain:{pt:'Viva a Tríplice Fronteira com',es:'Viva la Triple Frontera con'},
  heroTitleAccent:{pt:'conforto, segurança e leveza',es:'confort, seguridad y tranquilidad'},
  heroSub:{pt:'Roteiros personalizados entre Brasil, Argentina e Paraguai — do primeiro contato até a última foto.',es:'Itinerarios personalizados entre Brasil, Argentina y Paraguay — desde el primer contacto hasta la última foto.'},
  ctaOrc:{pt:'Reserve Já',es:'Reserve Ya'},
  sobreLabel:{pt:'Sobre a DRGTUR',es:'Sobre DRGTUR'},
  sobreTitle:{pt:'Mais do que passeios, uma experiência cuidada do início ao fim',es:'Más que paseos, una experiencia cuidada de principio a fin'},
  sobreBody:{pt:'Trabalhamos com destinos no Brasil, Argentina e Paraguai, criando roteiros sob medida para o perfil de cada viajante. Nosso compromisso é com a praticidade, a segurança e a tranquilidade — para que cada experiência seja leve, especial e inesquecível.',es:'Trabajamos con destinos en Brasil, Argentina y Paraguay, creando itinerarios a medida según el perfil de cada viajero. Nuestro compromiso es con la practicidad, la seguridad y la tranquilidad — para que cada experiencia sea liviana, especial e inolvidable.'},
  sobreCta:{pt:'Ver passeios',es:'Ver paseos'},
  pacotesLabel:{pt:'Passeios em destaque',es:'Paseos destacados'},
  pacotesTitle:{pt:'Os favoritos de quem visita a Tríplice Fronteira',es:'Los favoritos de quienes visitan la Triple Frontera'},
  verMais:{pt:'Reserve já',es:'Reserve ya'},
  verMaisPasseios:{pt:'Ver mais passeios',es:'Ver más paseos'},
  verMenosPasseios:{pt:'Ver menos',es:'Ver menos'},
  depoLabel:{pt:'Depoimentos',es:'Opiniones'},
  depoTitle:{pt:'O que dizem nossos viajantes',es:'Lo que dicen nuestros viajeros'},
  faqLabel:{pt:'Dúvidas frequentes',es:'Preguntas frecuentes'},
  faqTitle:{pt:'Tudo o que você precisa saber antes de reservar',es:'Todo lo que necesita saber antes de reservar'},
  faqContactTitle:{pt:'Ainda com dúvidas?',es:'¿Aún tiene dudas?'},
  faqContactLink:{pt:'Fale conosco →',es:'Fale conosco →'},
  faqVerMais:{pt:'Ver mais perguntas',es:'Ver más preguntas'},
  faqVerMenos:{pt:'Ver menos',es:'Ver menos'},
  formLabel:{pt:'Vamos planejar sua viagem',es:'Planifiquemos su viaje'},
  formTitle:{pt:'Peça um orçamento sem compromisso',es:'Pida un presupuesto sin compromiso'},
  formSub:{pt:'Responda em poucos minutos e receba seu roteiro personalizado direto no WhatsApp.',es:'Responda en pocos minutos y reciba su itinerario personalizado directo por WhatsApp.'},
  fieldNome:{pt:'Nome completo',es:'Nombre completo'},
  fieldWhats:{pt:'WhatsApp',es:'WhatsApp'},
  fieldDestino:{pt:'Destino de interesse',es:'Destino de interés'},
  fieldPessoas:{pt:'Quantidade de pessoas',es:'Cantidad de personas'},
  fieldOutro:{pt:'Outro',es:'Otro'},
  fieldData:{pt:'Data prevista',es:'Fecha prevista'},
  fieldMsg:{pt:'Conte um pouco sobre sua viagem',es:'Cuéntenos un poco sobre su viaje'},
  submit:{pt:'Enviar solicitação',es:'Enviar solicitud'},
  sentMsg:{pt:'Recebido! Em breve falamos com você no WhatsApp.',es:'¡Recibido! Pronto le hablaremos por WhatsApp.'},
  footerLinks:{pt:'Links rápidos',es:'Enlaces rápidos'},
  footerContact:{pt:'Contato',es:'Contacto'},
  footerRights:{pt:'Todos os direitos reservados.',es:'Todos los derechos reservados.'},
  footerTagline:{pt:'Turismo na Tríplice Fronteira com quem entende do assunto.',es:'Turismo en la Triple Frontera con quien entiende del tema.'},
  instaTitle:{pt:'Já somos mais de 294 pessoas conectadas no Instagram!',es:'¡Ya somos más de 294 personas conectadas en Instagram!'},
  instaBody:{pt:'Acompanhe os bastidores dos nossos passeios pela Tríplice Fronteira: fotos reais de clientes, dicas de roteiro e novidades da DRGTUR direto no feed.',es:'Siga los bastidores de nuestros paseos por la Triple Frontera: fotos reales de clientes, consejos de itinerario y novedades de DRGTUR directo en el feed.'},
  instaCta:{pt:'Seguir Instagram',es:'Seguir Instagram'}
};

const PACKAGES = [
  {name:'Cataratas do Iguaçu (Brasil)', img:'assets/cataratas-brasil.jpg', desc:{pt:'Vista panorâmica das quedas pelo lado brasileiro, com passarelas sobre o cânion.', es:'Vista panorámica de las cataratas desde el lado brasileño, con pasarelas sobre el cañón.'}},
  {name:'Cataratas del Iguazú (Argentina)', img:'assets/cataratas-argentina.webp', desc:{pt:'Trilhas argentinas bem próximas às quedas, com vista deslumbrante.', es:'Senderos argentinos muy cerca de las cataratas, con una vista deslumbrante.'}},
  {name:'Compras no Paraguai', img:'assets/compras-paraguai.webp', desc:{pt:'Ciudad del Este com tempo livre para compras e câmbio facilitado.', es:'Ciudad del Este con tiempo libre para compras y cambio facilitado.'}},
  {name:'By Night Argentina', img:'assets/by-night-argentina.jpg', desc:{pt:'Jantar e vida noturna em Puerto Iguazú, entre restaurantes e feirinhas.', es:'Cena y vida nocturna en Puerto Iguazú, entre restaurantes y ferias.'}},
  {name:'City Tour Foz do Iguaçu', img:'assets/city-tour-foz.jpg', desc:{pt:'Os principais pontos turísticos da cidade brasileira em um só dia.', es:'Los principales puntos turísticos de la ciudad brasileña en un solo día.'}},
  {name:'Parque das Aves', img:'assets/parque-das-aves.jpg', desc:{pt:'16 hectares de mata nativa com mais de 140 espécies de aves e répteis.', es:'16 hectáreas de bosque nativo con más de 140 especies de aves y reptiles.'}},
  {name:'Usina de Itaipu', img:'assets/usina-de-itaipu.webp', desc:{pt:'Uma das maiores usinas hidrelétricas do mundo, na fronteira Brasil–Paraguai.', es:'Una de las mayores centrales hidroeléctricas del mundo, en la frontera Brasil–Paraguay.'}},
  {name:'Marco das 3 Fronteiras', img:'assets/marco-3-fronteiras.jpg', desc:{pt:'O ponto turístico que marca o encontro entre Brasil, Argentina e Paraguai.', es:'El punto turístico que marca el encuentro entre Brasil, Argentina y Paraguay.'}},
  {name:'Transfer Aeroporto – Hotel', img:'assets/aeroporto.jpg', desc:{pt:'Transporte direto e confortável entre o aeroporto e seu hotel, a qualquer horário.', es:'Traslado directo y cómodo entre el aeropuerto y su hotel, a cualquier hora.'}},
  {name:'Dreams Park Show', img:'assets/dreams-park-show.jpg', desc:{pt:'Complexo de entretenimento com diversas atrações temáticas para todas as idades.', es:'Complejo de entretenimiento con diversas atracciones temáticas para todas las edades.'}},
  {name:'Wonder Park', img:'assets/wonder-park.jpg', desc:{pt:'Complexo temático com atrações internacionais e exclusivas para a família.', es:'Complejo temático con atracciones internacionales y exclusivas para la familia.'}},
  {name:'Voo de Helicóptero', img:'assets/voo-helicoptero.jpg', desc:{pt:'Vista aérea única sobre as Cataratas, uma das experiências mais marcantes da região.', es:'Vista aérea única sobre las Cataratas, una de las experiencias más impactantes de la región.'}},
  {name:'Aquário (AquaFoz)', img:'assets/aquafoz.webp', desc:{pt:'Biodiversidade dos rios locais em um aquário diferente dos tradicionais.', es:'Biodiversidad de los ríos locales en un acuario diferente de los tradicionales.'}},
  {name:'Roda Gigante (Yup Star)', img:'assets/yup-star.jpg', desc:{pt:'88 metros de altura no Marco das 3 Fronteiras, com vista para os 3 países.', es:'88 metros de altura en el Hito de las 3 Fronteras, con vista a los 3 países.'}},
  {name:'Templo Budista', img:'assets/templo-budista.jpg', desc:{pt:'O Templo Chen Tien, um dos maiores templos budistas da América Latina.', es:'El Templo Chen Tien, uno de los mayores templos budistas de América Latina.'}},
  {name:'Mesquita Omar Ibn Al-Khattab', img:'assets/mesquita-foz.webp', desc:{pt:'Um dos maiores centros islâmicos da América Latina, inaugurado em 1983.', es:'Uno de los mayores centros islámicos de América Latina, inaugurado en 1983.'}}
];

const SOBRE_BULLETS = [
  {title:{pt:'Rede de parceiros locais',es:'Red de socios locales'}, body:{pt:'Atuação nos 3 países da fronteira.', es:'Presencia en los 3 países de la frontera.'}},
  {title:{pt:'Acompanhamento em tempo real',es:'Seguimiento en tiempo real'}, body:{pt:'Você sabe onde está o grupo a qualquer momento.', es:'Usted sabe dónde está el grupo en todo momento.'}},
  {title:{pt:'Suporte 24 horas',es:'Soporte las 24 horas'}, body:{pt:'Time disponível antes, durante e depois do passeio.', es:'Equipo disponible antes, durante y después del paseo.'}}
];

const DIFF_ICONS = {
  roteiro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6-13l6 3m0 13l5.447-2.724A1 1 0 0 0 21 16.382V5.618a1 1 0 0 0-1.447-.894L15 7m0 13V7m0 0L9 4"></path></svg>',
  guia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"></path></svg>',
  seguranca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"></path><path d="m9.5 12 1.8 1.8L15 10"></path></svg>',
  idioma: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.6 4 5.9 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.9-4-9s1.5-6.4 4-9z"></path></svg>'
};

const DIFFS = [
  {icon:'roteiro', title:{pt:'Roteiros personalizados',es:'Itinerarios personalizados'}, body:{pt:'Cada viagem é desenhada para o seu perfil e tempo disponível.', es:'Cada viaje está diseñado según su perfil y tiempo disponible.'}},
  {icon:'guia', title:{pt:'Guias experientes',es:'Guías con experiencia'}, body:{pt:'Equipe local que conhece cada detalhe dos três países.', es:'Equipo local que conoce cada detalle de los tres países.'}},
  {icon:'seguranca', title:{pt:'Segurança e conforto',es:'Seguridad y confort'}, body:{pt:'Transporte confiável e suporte do início ao fim do passeio.', es:'Transporte confiable y soporte de principio a fin del paseo.'}},
  {icon:'idioma', title:{pt:'Atendimento bilíngue',es:'Atención bilingüe'}, body:{pt:'Suporte em português e espanhol para receber quem vem de longe.', es:'Soporte en portugués y español para recibir a quienes vienen de lejos.'}}
];

const TESTIMONIALS = [
  {quote:{pt:'Conforto, segurança e atenção em cada detalhe. Recomendo para quem quer conhecer os 3 países sem preocupação.', es:'Confort, seguridad y atención en cada detalle. Lo recomiendo para quienes quieren conocer los 3 países sin preocupaciones.'}, name:'Rosália A.'},
  {quote:{pt:'Foi uma viagem marcante, a pontualidade e o atendimento humanizado fizeram toda a diferença. Com certeza indicaremos para amigos e familiares.', es:'Fue un viaje memorable, la puntualidad y la atención humanizada marcaron la diferencia. Sin duda lo recomendaremos a amigos y familiares.'}, name:'Gilberto M.'},
  {quote:{pt:'Tudo ocorreu exatamente como combinado: serviço de confiança, veículo confortável e equipe muito prestativa durante toda a viagem.', es:'Todo ocurrió exactamente como se acordó: servicio de confianza, vehículo cómodo y equipo muy atento durante todo el viaje.'}, name:'Emerson S.'}
];

const FAQ = [
  {q:{pt:'Quais documentos posso usar para entrar na Argentina?', es:'¿Qué documentos puedo usar para entrar a Argentina?'}, a:{pt:'Você pode apresentar um dos seguintes: RG emitido há menos de 10 anos, Passaporte válido ou CNH física dentro da validade.', es:'Puede presentar uno de los siguientes: documento de identidad emitido hace menos de 10 años, pasaporte válido o licencia de conducir física vigente.'}},
  {q:{pt:'Os transportes da DRGTUR têm fila preferencial para entrar na Argentina?', es:'¿Los transportes de DRGTUR tienen fila preferencial para entrar a Argentina?'}, a:{pt:'Sim! Nossos veículos têm preferência na fila de imigração. Confirme sua reserva e aproveite melhor o seu tempo de passeio.', es:'¡Sí! Nuestros vehículos tienen preferencia en la fila de inmigración. Confirme su reserva y aproveche mejor su tiempo de paseo.'}},
  {q:{pt:'E para entrar no Paraguai, é o mesmo processo?', es:'¿Y para entrar a Paraguay es el mismo proceso?'}, a:{pt:'Não é necessário o mesmo procedimento de imigração da Argentina. Porém, para realizar compras em determinadas lojas, é preciso apresentar RG ou passaporte.', es:'No es necesario el mismo procedimiento de inmigración que en Argentina. Sin embargo, para realizar compras en determinadas tiendas, es necesario presentar documento de identidad o pasaporte.'}},
  {q:{pt:'Qual a cota de compras no Paraguai?', es:'¿Cuál es la cuota de compras en Paraguay?'}, a:{pt:'US$ 500 por pessoa.', es:'US$ 500 por persona.'}},
  {q:{pt:'É possível conhecer os 3 países em um único dia?', es:'¿Es posible conocer los 3 países en un solo día?'}, a:{pt:'Sim, é possível! Conte com a DRGTUR e venha desbravar a Tríplice Fronteira com quem entende do assunto.', es:'¡Sí, es posible! Cuente con DRGTUR y venga a descubrir la Triple Frontera con quien entiende del tema.'}},
  {q:{pt:'A DRGTUR também emite ingressos para os atrativos?', es:'¿DRGTUR también emite entradas para las atracciones?'}, a:{pt:'Sim! Ao fechar seu transporte conosco, a emissão de ingressos é cortesia — cuidamos de tudo para você, inclusive com sugestões de horários e melhor logística do dia.', es:'¡Sí! Al contratar su transporte con nosotros, la emisión de entradas es cortesía — cuidamos de todo por usted, incluso con sugerencias de horarios y la mejor logística del día.'}},
  {q:{pt:'A DRGTUR tem roteiro fixo? Vou com pessoas desconhecidas?', es:'¿DRGTUR tiene un itinerario fijo? ¿Voy con personas desconocidas?'}, a:{pt:'Não! Você escolhe os atrativos que quer conhecer e montamos um roteiro 100% personalizado para você e seu grupo.', es:'¡No! Usted elige las atracciones que quiere conocer y armamos un itinerario 100% personalizado para usted y su grupo.'}},
  {q:{pt:'Como funcionam os transportes da DRGTUR?', es:'¿Cómo funcionan los transportes de DRGTUR?'}, a:{pt:'São todos privativos — exclusivos para você, seguindo o roteiro que vocês escolherem. Conte com nossa equipe para dicas e o melhor aproveitamento do seu passeio!', es:'Son todos privados — exclusivos para usted, siguiendo el itinerario que ustedes elijan. ¡Cuente con nuestro equipo para consejos y el mejor aprovechamiento de su paseo!'}},
  {q:{pt:'É necessário levar capa de chuva para as Cataratas?', es:'¿Es necesario llevar impermeable para las Cataratas?'}, a:{pt:'A melhor sugestão é levar uma muda de roupa: assim você sente a energia das cataratas e pode se molhar à vontade!', es:'La mejor sugerencia es llevar una muda de ropa: ¡así siente la energía de las cataratas y puede mojarse a gusto!'}},
  {q:{pt:'Quantos dias preciso para conhecer todos os atrativos da região, incluindo Argentina e Paraguai?', es:'¿Cuántos días necesito para conocer todas las atracciones de la región, incluyendo Argentina y Paraguay?'}, a:{pt:'O ideal são 5 dias, para aproveitar com calma e sem correria.', es:'Lo ideal son 5 días, para aprovechar con calma y sin apuros.'}},
  {q:{pt:'Qual a melhor época para visitar Foz do Iguaçu?', es:'¿Cuál es la mejor época para visitar Foz de Iguazú?'}, a:{pt:'De setembro a abril, o clima é mais quente. De maio a agosto, as temperaturas ficam mais amenas. A região pode ser visitada o ano inteiro!', es:'De septiembre a abril, el clima es más cálido. De mayo a agosto, las temperaturas son más suaves. ¡La región puede visitarse todo el año!'}},
  {q:{pt:'Qual é a melhor vista das Cataratas: brasileira ou argentina?', es:'¿Cuál es la mejor vista de las Cataratas: brasileña o argentina?'}, a:{pt:'As duas são imperdíveis e falam por si só! No lado brasileiro, você tem uma vista panorâmica impressionante. No lado argentino, uma passarela imersiva leva até a famosa Garganta del Diablo. Viva as duas experiências — você não vai se arrepender!', es:'¡Las dos son imperdibles y hablan por sí solas! Del lado brasileño, tiene una vista panorámica impresionante. Del lado argentino, una pasarela inmersiva lleva hasta la famosa Garganta del Diablo. ¡Viva las dos experiencias — no se va a arrepentir!'}}
];

const FLAG_PT = '<svg width="100%" height="100%" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid slice"><path d="m18 36c9.9411 0 18-8.0589 18-18 0-9.94113-8.0589-18-18-18-9.94113 0-18 8.05887-18 18 0 9.9411 8.05887 18 18 18z" fill="#009b3a"></path><path d="m18 7.04297 14.87 10.95703-14.87 10.957-14.87-10.957z" fill="#fedf00"></path><path d="m18 24.261c3.4579 0 6.261-2.8031 6.261-6.261 0-3.4578-2.8031-6.261-6.261-6.261-3.4578 0-6.261 2.8032-6.261 6.261 0 3.4579 2.8032 6.261 6.261 6.261z" fill="#f0f0f0"></path><path clip-rule="evenodd" d="m24.261 18c-.0002.4028-.039.8047-.116 1.2v.011c-2.349-2.428-5.639-3.94-9.275-3.94-.8812-.0006-1.7601.0892-2.623.268.958-2.24 3.173-3.8 5.753-3.8 1.6606-.0003 3.2533.6593 4.4275 1.8335s1.8338 2.7669 1.8335 4.4275zm-12.519.073c1.0129-.3143 2.0675-.4737 3.128-.473l-.001.008c3.2159-.0003 6.2563 1.4661 8.258 3.983-1.132 1.614-3.007 2.67-5.127 2.67-3.4286-.0009-6.2186-2.7596-6.258-6.188z" fill="#002776" fill-rule="evenodd"></path></svg>';
const FLAG_ES = '<svg width="100%" height="100%" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid slice"><path d="m0 256c0 31.314 5.633 61.31 15.923 89.043l240.077 22.261 240.077-22.261c10.29-27.733 15.923-57.729 15.923-89.043s-5.633-61.31-15.923-89.043l-240.077-22.261-240.077 22.261c-10.29 27.733-15.923 57.729-15.923 89.043z" fill="#ffda44"></path><g fill="#d80027"><path d="m496.077 166.957c-36.171-97.484-130.006-166.957-240.077-166.957s-203.906 69.473-240.077 166.957z"></path><path d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957z"></path></g></svg>';

// ============ ESTADO ============
let lang = 'pt';
let showAllPackages = false;
let showAllFaq = false;
let faqOpen = 0;

function t(key){ return STR[key][lang]; }

// ============ RENDER ============
function renderAll(){
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll('.drg-lang-flag').forEach(el => { el.innerHTML = lang === 'pt' ? FLAG_PT : FLAG_ES; });
  document.querySelectorAll('.drg-flag-pt').forEach(el => { el.innerHTML = FLAG_PT; });
  document.querySelectorAll('.drg-flag-es').forEach(el => { el.innerHTML = FLAG_ES; });
  renderPackages();
  renderFaq();
  renderTestimonials();
  renderDiffs();
  renderSobreBullets();
  renderDestinoOptions();
  document.querySelectorAll('.drg-outline-btn[data-toggle-packages]').forEach(btn => {
    btn.innerHTML = showAllPackages
      ? `${t('verMenosPasseios')} ↑`
      : `${t('verMaisPasseios')} (+${PACKAGES.length - 8}) ↓`;
  });
  document.querySelectorAll('[data-faq-toggle-label]').forEach(btn => {
    btn.textContent = showAllFaq ? t('faqVerMenos') : t('faqVerMais');
  });
}

function renderDiffs(){
  const wrap = document.getElementById('diffsBar');
  wrap.innerHTML = DIFFS.map(d => `
    <div class="drg-diff">
      <div>${DIFF_ICONS[d.icon]}</div>
      <div class="drg-diff-title">${d.title[lang]}</div>
      <div class="drg-diff-body">${d.body[lang]}</div>
    </div>`).join('');
}

function renderSobreBullets(){
  const wrap = document.getElementById('sobreBullets');
  wrap.innerHTML = SOBRE_BULLETS.map(b => `
    <div class="drg-bullet">
      <div class="drg-bullet-icon"><div></div></div>
      <div>
        <div class="drg-bullet-title">${b.title[lang]}</div>
        <div class="drg-bullet-body">${b.body[lang]}</div>
      </div>
    </div>`).join('');
}

function renderPackages(){
  const wrap = document.getElementById('pacotesGrid');
  const list = showAllPackages ? PACKAGES : PACKAGES.slice(0, 8);
  wrap.innerHTML = list.map(p => `
    <div class="drg-card">
      <div class="drg-card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="drg-card-body">
        <div class="drg-card-name">${p.name}</div>
        <div class="drg-card-desc">${p.desc[lang]}</div>
        <a class="drg-card-link" href="#form">${t('verMais')} →</a>
      </div>
    </div>`).join('');
}

function renderTestimonials(){
  const wrap = document.getElementById('marqueeTrack');
  const all = TESTIMONIALS.concat(TESTIMONIALS);
  wrap.innerHTML = all.map(tm => `
    <div class="drg-testimonial-card">
      <div class="drg-testi-top">
        <div class="drg-testi-avatar"><span>foto</span></div>
        <div>
          <div class="drg-testi-name">${tm.name}</div>
          <div class="drg-testi-stars">★★★★★</div>
        </div>
      </div>
      <div class="drg-testi-quote">"${tm.quote[lang]}"</div>
    </div>`).join('');
}

function renderFaq(){
  const wrap = document.getElementById('faqList');
  const list = showAllFaq ? FAQ : FAQ.slice(0, 7);
  wrap.innerHTML = list.map((f, i) => `
    <div class="drg-faq-item ${i === faqOpen ? 'open' : ''}" data-faq-index="${i}">
      <div class="drg-faq-q"><span>${f.q[lang]}</span><span class="drg-faq-sign">+</span></div>
      <div class="drg-faq-a-wrap"><div class="drg-faq-a">${f.a[lang]}</div></div>
    </div>`).join('');
  wrap.querySelectorAll('.drg-faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const i = Number(item.dataset.faqIndex);
      faqOpen = faqOpen === i ? -1 : i;
      renderFaq();
      setTimeout(() => window._drgFaqHeightSync && window._drgFaqHeightSync(), 60);
    });
  });
}

function renderDestinoOptions(){
  const sel = document.getElementById('fieldDestinoSelect');
  sel.innerHTML = PACKAGES.map(p => `<option>${p.name}</option>`).join('') + `<option>${t('fieldOutro')}</option>`;
}

// ============ INTERAÇÕES ============
function initNav(){
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
  document.querySelectorAll('.drg-mobile-menu a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
  });

  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = btn.nextElementSibling;
      const chevron = btn.querySelector('.drg-lang-chevron');
      const willOpen = !menu.classList.contains('open');
      document.querySelectorAll('.drg-lang-menu').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.drg-lang-chevron').forEach(c => c.classList.remove('open'));
      if (willOpen) { menu.classList.add('open'); chevron.classList.add('open'); }
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.drg-lang-menu').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.drg-lang-chevron').forEach(c => c.classList.remove('open'));
  });
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.setLang;
      document.querySelectorAll('.drg-lang-menu').forEach(m => m.classList.remove('open'));
      renderAll();
    });
  });
}

function initPackagesToggle(){
  document.querySelectorAll('[data-toggle-packages]').forEach(btn => {
    btn.addEventListener('click', () => { showAllPackages = !showAllPackages; renderAll(); });
  });
}

function initFaqToggle(){
  document.querySelectorAll('[data-faq-toggle-label]').forEach(btn => {
    btn.addEventListener('click', () => { showAllFaq = !showAllFaq; faqOpen = 0; renderFaq(); renderAll(); setTimeout(() => window._drgFaqHeightSync && window._drgFaqHeightSync(), 60); });
  });
}

function initReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('drg-in');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.drg-reveal').forEach(el => observer.observe(el));
}

function initForm(){
  document.getElementById('drgForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('fieldNome').value.trim();
    const whats = document.getElementById('fieldWhats').value.trim();
    const destino = document.getElementById('fieldDestinoSelect').value;
    const pessoas = document.getElementById('fieldPessoas').value;
    const data = document.getElementById('fieldData').value;
    const msg = document.getElementById('fieldMsg').value.trim();
    const lines = [
      'Olá! Vim pelo site da DRGTUR e gostaria de um orçamento.',
      nome ? `Nome: ${nome}` : '',
      whats ? `WhatsApp: ${whats}` : '',
      destino ? `Destino de interesse: ${destino}` : '',
      pessoas ? `Quantidade de pessoas: ${pessoas}` : '',
      data ? `Data prevista: ${data}` : '',
      msg ? `Mensagem: ${msg}` : ''
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5545988135191?text=${text}`, '_blank');
    document.querySelector('.drg-form-card').classList.add('hide');
    document.querySelector('.drg-form-sent').classList.add('show');
  });
}

function initHeroVideo(){
  const v = document.getElementById('heroVideo');
  if (!v) return;
  v.muted = true;
  v.loop = true;
  v.playsInline = true;
  const tryPlay = () => v.play().catch(() => {});
  tryPlay();
  v.addEventListener('loadeddata', tryPlay);
}

function initFaqHeightSync(){
  const photo = document.getElementById('faqPhoto');
  const questions = document.getElementById('faqQuestions');
  if (!photo || !questions) return;
  const sync = () => {
    if (window.innerWidth <= 900) { photo.style.height = ''; return; }
    const h = Math.min(questions.scrollHeight, 420);
    if (photo.style.height !== h + 'px') photo.style.height = h + 'px';
  };
  new ResizeObserver(sync).observe(questions);
  window.addEventListener('resize', sync);
  setTimeout(sync, 50);
  window._drgFaqHeightSync = sync;
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initNav();
  initPackagesToggle();
  initFaqToggle();
  initReveal();
  initForm();
  initHeroVideo();
  initFaqHeightSync();
});
