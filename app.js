/* ========= CONFIG (única fonte de verdade para textos e números) ========= */
const CFG={
  WA:'5586994662157',            // WhatsApp da bio (principal). (86) 98128-2906 = pendente de confirmação
  IG:'https://www.instagram.com/draluannefortes/',
  RQE_TEXT:'',                   // preencher quando a cliente confirmar. Vazio = oculto
  META_PIXEL_ID:'', GA4_ID:'',   // placeholders de tracking
  OPEN_AUTO_MS:6500
};
const TEMAS=[
 {k:'emag',chip:'Não consigo emagrecer',icon:'scales',orb:['Peso','que não desce'],frase:'quero entender por que não consigo emagrecer',soft:'Emagrecer bem vai além do número na balança. A consulta olha rotina, histórico e exames para pensar numa estratégia individual.'},
 {k:'lip',chip:'Pernas inchadas ou com dor',icon:'drop',orb:['Pernas','inchaço, dor'],frase:'pernas inchadas ou com dor (quero saber se pode ser lipedema)',soft:'Pernas pesadas podem ter várias causas, e lipedema e retenção de líquido às vezes se confundem. Só a avaliação médica diferencia.'},
 {k:'horm',chip:'Cansaço, sono ruim, libido, humor',icon:'moon',orb:['Cansaço','sono, humor'],frase:'cansaço, sono ruim, libido e humor (quero entender a parte hormonal)',soft:'Cansaço, sono, libido e humor têm muitas causas possíveis. Os hormônios fazem parte da conversa, sempre dentro de uma avaliação individual.'},
 {k:'long',chip:'Quero envelhecer bem',icon:'flower-lotus',orb:['Longevidade','envelhecer bem'],frase:'quero envelhecer bem (longevidade)',soft:'Longevidade é rotina, acompanhamento e prevenção ao longo do tempo. A consulta ajuda a organizar isso de forma individual.'},
 {k:'perf',chip:'Quero render mais no esporte',icon:'barbell',orb:['Esporte','render mais'],frase:'quero render mais no esporte',soft:'Quem treina também precisa de estratégia: energia, recuperação e composição corporal entram na conversa.'},
 {k:'rins',chip:'Exames alterados, saúde dos rins',icon:'heartbeat',orb:['Rins','exames'],frase:'exames alterados e saúde dos rins',soft:'Exames alterados merecem uma leitura cuidadosa e contextualizada. A nefrologia olha a saúde dos rins e a pressão arterial.'},
 {k:'nao',chip:'Ainda não sei',icon:'compass',orb:null,frase:'ainda não sei por onde começar',soft:'Tudo bem não saber por onde começar. Você pode contar o seu momento na consulta, no seu tempo.'}
];
const TEMPO=[
 {k:'a',chip:'Há pouco tempo',frase:'Isso me acompanha há pouco tempo.'},
 {k:'b',chip:'Há alguns meses',frase:'Isso me acompanha há alguns meses.'},
 {k:'c',chip:'Há anos',frase:'Isso me acompanha há anos.'},
 {k:'d',chip:'Prefiro explicar na consulta',frase:''}
];
const MODO=[{k:'p',chip:'Presencial',frase:'presencial'},{k:'o',chip:'Online',frase:'online'}];
function buildMsg(t,tp,m){return 'Olá, Dra. Luanne! Vim pelo seu Instagram. Meu momento é: '+t.frase+'. '+(tp.frase?tp.frase+' ':'')+'Gostaria de saber como funciona a consulta '+m.frase+'.'}
function waUrl(msg){return 'https://wa.me/'+CFG.WA+'?text='+encodeURIComponent(msg)}

const PHOTOS=['e1','e2','e3','e4','e5','l1','l2','l3','l4','l5','h1','h2','h3','h4','h5','v1','v2','v3','v4','v5','p1','p2','p3','p4','p5','p6','r1'];
const PATHS=[
 {k:'emag',icon:'scales',a:'Emagrecimento',b:'sem pressa',sub:'Do número à estratégia',imgs:'e',
  txt:'Emagrecer rápido e emagrecer bem não são a mesma coisa. Na nutrologia, o olhar vai para composição corporal, rotina, histórico e exames, e a estratégia é montada para a pessoa, não para a média.',
  piece:{type:'multi',title:'O que o peso não mostra',items:[['Músculo','O peso sozinho não separa massa magra de gordura.'],['Líquidos','Retenção de líquido muda o número sem mudar o corpo por inteiro.'],['Sono','Dormir mal pode interferir no apetite e na energia do dia.'],['Rotina','Horários e hábitos pesam tanto quanto o prato.']]},
  wa:'Emagrecimento'},
 {k:'lip',icon:'drop',a:'Lipedema',b:'ou retenção?',sub:'Entenda a diferença',imgs:'l',
  txt:'Pernas pesadas, dor ao toque e roxos com facilidade podem ter várias explicações. Lipedema e retenção de líquido às vezes são confundidos, e só a avaliação médica consegue diferenciar.',
  piece:{type:'one',title:'Como diferenciar',items:[['Retenção','Costuma oscilar: pesa mais ao fim do dia e melhora com descanso e pernas elevadas.'],['Inchaço que fica','Quando o inchaço e a dor continuam mesmo com descanso, vale levar essa dúvida para a consulta.']],note:'Esta leitura é informativa. O exame clínico é quem define.'},
  wa:'lipedema ou retenção de líquido'},
 {k:'horm',icon:'moon',a:'Terapia',b:'hormonal',sub:'Cansaço, sono, libido e humor',imgs:'h',
  txt:'Cansaço, sono ruim, libido e humor têm muitas causas possíveis. Os hormônios entram na investigação, sempre numa avaliação individual. Qualquer terapia hormonal só é considerada com indicação médica.',
  piece:{type:'one',title:'O que pode estar por trás',items:[['Cansaço','Sono, alimentação, rotina e exames podem pesar. A consulta organiza essa investigação.'],['Sono','O sono influencia energia, apetite e humor. Vale olhar o conjunto.'],['Libido','É um tema comum e legítimo de consulta, com várias causas possíveis.'],['Humor','Oscilações de humor também têm múltiplas explicações e pedem escuta individual.']],note:'Sinais isolados não diagnosticam nada.'},
  wa:'terapia hormonal'},
 {k:'long',icon:'flower-lotus',a:'Longevidade',b:'e vitalidade',sub:'Envelhecer bem, com acompanhamento',imgs:'v',
  txt:'Longevidade é construída no dia a dia: alimentação, movimento, sono e acompanhamento ao longo do tempo. A consulta ajuda a organizar essas peças de forma individual.',
  piece:{type:'one',title:'Quatro pilares',items:[['Sono','Descanso regular sustenta energia, humor e recuperação.'],['Movimento','Atividade física constante é parte do cuidado com o corpo.'],['Alimentação','Comer bem é qualidade, regularidade e contexto.'],['Exames','Acompanhar exames ao longo do tempo ajuda a enxergar tendências.']]},
  wa:'longevidade e vitalidade'},
 {k:'perf',icon:'barbell',a:'Performance',b:'e esporte',sub:'Treinar com estratégia',imgs:'p',
  txt:'Quem treina também precisa de estratégia: energia, recuperação, hidratação e composição corporal fazem parte da conversa. A Dra. Luanne também é corredora e conhece essa rotina por dentro.',
  piece:{type:'range',title:'Treino e recuperação',lo:'Mais treino',hi:'Mais recuperação',steps:['Muito treino e pouca recuperação pode bagunçar a energia e o rendimento.','Equilíbrio entre carga e descanso costuma ser o ponto de partida.','Recuperação demais, sem estímulo, também muda o resultado. O ajuste é individual.']},
  wa:'performance e esporte'},
 {k:'rins',icon:'heartbeat',a:'Rins e',b:'nefrologia',sub:'Exames, pressão e saúde renal',imgs:'r',
  txt:'A nefrologia cuida da saúde dos rins e acompanha temas como pressão arterial e exames de função renal. Se algum exame veio alterado, a consulta ajuda a entender o que ele significa para você.',
  piece:{type:'one',title:'O que os rins fazem',items:[['Filtram','Os rins filtram o sangue e eliminam o que o corpo não precisa.'],['Pressão','Participam da regulação da pressão arterial.'],['Equilíbrio','Ajudam a manter o equilíbrio de água e sais no corpo.']]},
  wa:'saúde dos rins e exames'}
];
const GAUGE=[['massa magra','O peso não diz quanto é músculo e quanto é gordura.'],['líquidos','Retenção pode mudar o número de um dia para o outro.'],['sono','Noites mal dormidas também pesam na rotina do corpo.'],['rotina','Horários, estresse e hábitos entram na conta.'],['exames','Exames mostram o que a balança não consegue mostrar.'],['hormônios','Os hormônios fazem parte do quadro, quando há indicação de investigar.']];
const CHAT=[
 ['u','Qual a diferença entre nutricionista e nutróloga?'],
 ['b','A nutricionista é graduada em Nutrição e trabalha o plano alimentar.'],
 ['b','A nutróloga é médica com especialização em Nutrologia. Avalia o quadro clínico como um todo e interpreta exames.'],
 ['u','Então uma substitui a outra?'],
 ['b','Não. São profissões diferentes e podem se complementar. Quem indica o caminho é a avaliação individual.']
];
const FAQ=[
 ['Como funciona a consulta?','A consulta é individual e pensada em torno do seu momento. Os detalhes de formato e agendamento são confirmados pelo WhatsApp.'],
 ['Atende online?','Há atendimento presencial e online. Peça os detalhes pelo botão de atendimento online no fim da página.'],
 ['O que é lipedema?','É uma condição que pode ser confundida com retenção de líquido ou ganho de peso. Só a avaliação médica diferencia.'],
 ['Existe indicação de medicação ou hormônio antes da consulta?','Não. Qualquer conduta só é definida depois da avaliação individual, e este site tem caráter informativo.'],
 ['Posso tirar dúvidas clínicas pelo WhatsApp?','O WhatsApp serve para agendamento e informações gerais. Orientações clínicas são dadas na consulta.'],
 ['Preciso levar exames?','Se tiver exames recentes, leve. A avaliação define se algum outro será necessário.']
];
const ICONS={"house": "<path d=\"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z\"/>", "path": "<path d=\"M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z\"/>", "scales": "<path d=\"M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z\"/>", "chat-circle-dots": "<path d=\"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z\"/>", "clock-counter-clockwise": "<path d=\"M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z\"/>", "whatsapp-logo": "<path d=\"M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z\"/>", "instagram-logo": "<path d=\"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z\"/>", "map-pin": "<path d=\"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z\"/>", "video-camera": "<path d=\"M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z\"/>", "copy": "<path d=\"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z\"/>", "arrow-up-right": "<path d=\"M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z\"/>", "check": "<path d=\"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z\"/>", "sparkle": "<path d=\"M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z\"/>", "drop": "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z\"/>", "heartbeat": "<path d=\"M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z\"/>", "barbell": "<path d=\"M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z\"/>", "hourglass": "<path d=\"M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z\"/>", "leaf": "<path d=\"M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z\"/>", "stethoscope": "<path d=\"M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z\"/>", "moon": "<path d=\"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z\"/>", "timer": "<path d=\"M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z\"/>", "signpost": "<path d=\"M246,106.65,212.33,69.3A16,16,0,0,0,200.44,64H136V32a8,8,0,0,0-16,0V64H40A16,16,0,0,0,24,80v64a16,16,0,0,0,16,16h80v64a8,8,0,0,0,16,0V160h64.44a16,16,0,0,0,11.89-5.3L246,117.35A8,8,0,0,0,246,106.65ZM200.44,144H40V80H200.44l28.8,32Z\"/>", "flower-lotus": "<path d=\"M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.51,73.51,0,0,0-22.17-2.22c4-19.85,1-35.55-2.06-44.86a16.15,16.15,0,0,0-18.79-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.48,94.48,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.15,16.15,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.51,73.51,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.27c3.39,12.57,13.8,36.48,45.33,55.32S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.32A16,16,0,0,0,245.83,121.63ZM59.14,72.14a.2.2,0,0,1,.23-.15A70.43,70.43,0,0,1,85.18,83.66,118.65,118.65,0,0,0,80,119.17c0,18.74,3.77,34,9.11,46.28A123.59,123.59,0,0,1,69.57,140C51.55,108.62,55.3,84,59.14,72.14Zm3,103.35C35.47,159.57,26.82,140.05,24,129.7a59.82,59.82,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4ZM170.82,83.66A70.43,70.43,0,0,1,196.63,72a.2.2,0,0,1,.23.15C200.7,84,204.45,108.62,186.43,140a123.32,123.32,0,0,1-19.54,25.48c5.34-12.26,9.11-27.54,9.11-46.28A118.65,118.65,0,0,0,170.82,83.66ZM232,129.72c-2.77,10.25-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z\"/>", "compass": "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z\"/>"};

/* ========= util ========= */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const utm=Object.fromEntries(new URLSearchParams(location.search));
function track(ev,p={}){try{(window.dataLayer=window.dataLayer||[]).push({event:ev,...p,utm_source:utm.utm_source||'bio',utm_medium:utm.utm_medium||'instagram'});if(window.fbq)fbq('trackCustom',ev,p);if(window.gtag)gtag('event',ev,p)}catch(e){}}
function icons(root=document){$$('i[data-i]',root).forEach(el=>{if(el.firstChild)return;const s=ICONS[el.dataset.i];if(s)el.innerHTML='<svg viewBox="0 0 256 256" aria-hidden="true">'+s+'</svg>'})}
function el(tag,cls,html){const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}

/* ========= fundo vivo ========= */
$$('.sec').forEach(s=>{s.prepend(el('span','bg','<i class="cone"></i><i class="bub b1"></i><i class="bub b2"></i><i class="bub b3"></i>'))});
icons();
if(CFG.RQE_TEXT){const r=$('#rqe');r.textContent=CFG.RQE_TEXT;r.hidden=false}

/* ========= abertura ========= */
const openEl=$('#open'),orbs=$('#orbs');let preset=null,openDone=false;
(function(){
  [[0,6,18,104,'6.5s','0s'],[1,62,10,96,'7.5s','.6s'],[2,32,36,124,'8s','1.1s'],[3,68,38,104,'6.8s','.3s'],[4,10,64,104,'7.2s','.9s'],[5,58,66,96,'6s','1.6s']].forEach(([i,l,t,sz,d,dl])=>{
    const T=TEMAS[i],b=el('button','orb','<span><b>'+T.orb[0]+'</b>'+T.orb[1]+'</span>');
    b.type='button';b.style.cssText='width:'+sz+'px;height:'+sz+'px;left:'+l+'%;top:'+t+'%;--d:'+d+';--dl:'+dl;
    b.setAttribute('aria-label',T.chip);b.onclick=()=>pickOrb(T,b);orbs.append(b)});
  const r1=el('i','o-ring');r1.style.cssText='width:300px;height:300px;left:45px;top:80px';const r2=el('i','o-ring');r2.style.cssText='width:200px;height:200px;left:95px;top:130px';orbs.prepend(r1,r2);
})();
orbs.addEventListener('pointermove',e=>{if(preset)return;$$('.orb',orbs).forEach(o=>{const r=o.getBoundingClientRect(),dx=r.left+r.width/2-e.clientX,dy=r.top+r.height/2-e.clientY,d=Math.hypot(dx,dy);if(d<130){const f=(130-d)/130*34;o.style.translate=(dx/d*f)+'px '+(dy/d*f)+'px'}else o.style.translate='0 0'})});
orbs.addEventListener('pointerleave',()=>$$('.orb',orbs).forEach(o=>o.style.translate='0 0'));
let autoT=setTimeout(()=>closeOpen(),CFG.OPEN_AUTO_MS);
async function pickOrb(T,b){if(openDone||preset)return;clearTimeout(autoT);preset=T;track('triagem_iniciada',{origem:'abertura'});track('triagem_tema_'+T.k);
  $$('.orb',orbs).forEach(o=>{if(o!==b)o.classList.add('gone')});b.classList.add('pick');$('#osay').textContent='Anotado: '+T.orb[0].toLowerCase()+'.';await sleep(1300);closeOpen()}
function closeOpen(){if(openDone)return;openDone=true;clearTimeout(autoT);openEl.classList.add('out');document.body.classList.add('go','seq');setTimeout(()=>document.body.classList.remove('seq'),8000);if(innerWidth>=1000)setTimeout(()=>$('#menu').classList.add('show'),4700);else $('#menu').classList.add('show');setTimeout(()=>{openEl.remove()},800);if(preset){state.t=preset;goStep(2)}}
$('#oskip').onclick=()=>closeOpen();
if(innerWidth>=1000)closeOpen();

/* ========= triagem ========= */
const state={t:null,tp:null,m:null},tri=$('#tri');tri.dataset.s=1;
function goStep(n){tri.dataset.s=n;$$('.tri-step',tri).forEach(s=>s.classList.toggle('on',+s.dataset.step===n));
  if(n===3){const msg=buildMsg(state.t,state.tp,state.m);$('#trimsg').textContent=msg;$('#trisoft').textContent=state.t.soft;$('#triwa').href=waUrl(msg)}
  if(n===2){$$('#chips2 .chip,#chips3 .chip').forEach(c=>c.classList.toggle('sel',c.dataset.k===(state.tp&&state.tp.k)||c.dataset.k===(state.m&&state.m.k)))}}
function mkChips(box,arr,fn,ic){arr.forEach((a,i)=>{const b=el('button','chip',(ic?'<i data-i="'+a.icon+'"></i>':'')+'<span>'+a.chip+'</span>');b.type='button';b.dataset.k=a.k;b.style.setProperty('--n',i);b.onclick=()=>fn(a,b);box.append(b)})}
let started=false;
mkChips($('#chips1'),TEMAS,(T,b)=>{if(!started){started=true;track('triagem_iniciada',{origem:'triagem'})}track('triagem_tema_'+T.k);state.t=T;$$('#chips1 .chip').forEach(c=>c.classList.toggle('sel',c===b));setTimeout(()=>goStep(2),260)},true);
mkChips($('#chips2'),TEMPO,(a,b)=>{state.tp=a;$$('#chips2 .chip').forEach(c=>c.classList.toggle('sel',c===b));ready()});
mkChips($('#chips3'),MODO,(a,b)=>{state.m=a;$$('#chips3 .chip').forEach(c=>c.classList.toggle('sel',c===b));ready()});
icons(tri);
function ready(){if(state.tp&&state.m)setTimeout(()=>goStep(3),280)}
$$('.back',tri).forEach(b=>b.onclick=()=>{if(b.closest('[data-step="3"]')){state.t=state.tp=state.m=null;$$('.chip',tri).forEach(c=>c.classList.remove('sel'))}goStep(+b.dataset.back)});
$('#tricopy').onclick=async()=>{const t=$('#trimsg').textContent,s=$('#tricopy span');try{await navigator.clipboard.writeText(t);s.textContent='Mensagem copiada'}catch(e){s.textContent='Selecione o texto acima e copie'}setTimeout(()=>s.textContent='Copiar mensagem',2200)};
window.__tri={TEMAS,TEMPO,MODO,buildMsg,waUrl,CFG};

/* ========= caminhos ========= */
const pbox=$('#paths');
PATHS.forEach((P,idx)=>{
  const photos=PHOTOS.filter(n=>n[0]===P.imgs);
  const strip=photos.concat(photos).map(n=>'<img src="img/'+n+'.jpg" alt="" loading="eager" decoding="async">').join('');
  const art=el('article','path');art.dataset.k=P.k;
  const msg='Olá, Dra. Luanne! Vim pelo seu Instagram. Gostaria de saber mais sobre '+P.wa+'.';
  art.innerHTML='<button class="p-h" type="button" aria-expanded="false"><span class="p-ic"><i data-i="'+P.icon+'"></i></span><span class="p-t"><span class="a">'+P.a+'</span><span class="b">'+P.b+'</span><small>'+P.sub+'</small></span><span class="p-pl" aria-hidden="true"></span></button>'+
  '<div class="p-b"><div class="p-in"><div class="p-pad"><div class="strip-w"><div class="strip">'+strip+'</div></div><p class="p-txt">'+P.txt+'</p><div class="piece"><h4>'+P.piece.title+'</h4><div class="pc"></div></div>'+
  '<a class="btn wa p-wa" href="'+waUrl(msg)+'" target="_blank" rel="noopener" data-ev="whatsapp_click"><i data-i="whatsapp-logo"></i><span>Falar sobre isso</span></a><p class="p-note">Conteúdo informativo. Não substitui consulta médica.</p></div></div></div>';
  pbox.append(art);
  const pc=$('.pc',art),pi=P.piece;
  if(pi.type==='multi'||pi.type==='one'){
    pc.innerHTML='<div class="tgs"></div><div class="meter"><i></i></div><p class="out"></p>'+(pi.note?'<p class="p-note">'+pi.note+'</p>':'');
    const on=new Set();
    pi.items.forEach(([lab,txt],i)=>{const t=el('button','tg',lab);t.type='button';t.onclick=()=>{
      if(pi.type==='one'){on.clear();$$('.tg',pc).forEach(x=>x.classList.remove('on'))}
      if(on.has(i)&&pi.type==='multi'){on.delete(i);t.classList.remove('on')}else{on.add(i);t.classList.add('on')}
      const o=$('.out',pc);o.textContent=on.has(i)?txt:'';o.classList.remove('sw');void o.offsetWidth;o.classList.add('sw');
      $('.meter i',pc).style.setProperty('--w',(on.size/pi.items.length*100)+'%')};$('.tgs',pc).append(t)})
  }else{
    pc.innerHTML='<input class="p-rng" type="range" min="0" max="2" step="1" value="1" aria-label="'+pi.title+'"><div class="meter"><i style="--w:50%"></i></div><p class="out">'+pi.steps[1]+'</p><p class="p-note">'+pi.lo+' &larr; &rarr; '+pi.hi+'</p>';
    const r=$('input',pc);r.oninput=()=>{$('.out',pc).textContent=pi.steps[r.value];$('.meter i',pc).style.setProperty('--w',(r.value/2*100||8)+'%')}
  }
  $('.p-h',art).onclick=()=>{const o=!art.classList.contains('open');$$('.path.open').forEach(p=>{if(p!==art){p.classList.remove('open');$('.p-h',p).setAttribute('aria-expanded','false')}});art.classList.toggle('open',o);$('.p-h',art).setAttribute('aria-expanded',o);if(o)track('caminho_aberto',{caminho:P.k})};
});
icons(pbox);

/* ========= balança ========= */
(function(){
  const svg=$('#gsvg'),N=GAUGE.length,arcs=[];
  const pol=(a,r)=>[120+r*Math.cos(a*Math.PI/180),120+r*Math.sin(a*Math.PI/180)];
  for(let i=0;i<N;i++){const a0=-90+i*60+6,a1=a0+48,[x0,y0]=pol(a0,100),[x1,y1]=pol(a1,100);
    const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M'+x0+' '+y0+' A100 100 0 0 1 '+x1+' '+y1);p.setAttribute('class','seg');svg.append(p);arcs.push(p)}
  const rng=$('#grng');const upd=()=>{const n=+rng.value;arcs.forEach((a,i)=>{a.classList.toggle('on',i<n);a.classList.toggle('cur',i===n-1)});
    $('#gnum').textContent=n?GAUGE[n-1][0]:'um número';$('#gtxt').textContent=n?'entra na conta':'arraste o controle';$('#gnote').textContent=n?GAUGE[n-1][1]:'O peso resume o corpo em um único valor. A consulta olha o conjunto.'};
  rng.oninput=upd;upd();
})();

/* ========= conversa + faq ========= */
const chat1=$('#chat1');let chatRun=false;
async function playChat(){if(chatRun)return;chatRun=true;chat1.innerHTML='';
  for(const [w,t] of CHAT){if(w==='b'){const ty=el('div','typing','<i></i><i></i><i></i>');chat1.append(ty);await sleep(reduce?50:900);ty.remove()}else await sleep(reduce?50:500);
    const m=el('div','msgb '+w,'');m.textContent=t;chat1.append(m);await sleep(reduce?20:400)}
  const rp=el('button','btn ghost replay','<i data-i="sparkle"></i><span>Ver de novo</span>');rp.type='button';rp.onclick=()=>{chatRun=false;playChat()};chat1.append(rp);icons(chat1)}
const faq=$('#faq');
FAQ.forEach(([q,a],i)=>{const d=el('div','qa');d.innerHTML='<button class="q" type="button" aria-expanded="false"><span>'+q+'</span><span class="sw"></span></button><div class="ans"><div><p></p></div></div>';
  const p=$('p',d);[...a].forEach((ch,j)=>{const s=document.createElement('span');s.style.setProperty('--c',j);s.textContent=ch;p.append(s)});
  $('.q',d).onclick=()=>{const o=!d.classList.contains('open');d.classList.toggle('open',o);$('.q',d).setAttribute('aria-expanded',o)};faq.append(d)});
let faqAuto=false;

/* ========= reveals, menu, timeline ========= */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.id==='chat1')playChat();if(e.target===faq&&!faqAuto){faqAuto=true;setTimeout(()=>$('.q',faq.children[1]).click(),500)}}}),{threshold:.15});
$$('.sh,.path,#chat1,#faq,.tlfoto,.camdeco,.bscale').forEach(x=>io.observe(x));
const secs=$$('main .sec'),links=$$('#menu a');let cur='inicio';
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;$('#menu').style.setProperty('--prog',h>0?y/h:0);
  const mid=y+innerHeight*.35;let c=secs[0];secs.forEach(s=>{if(s.offsetTop<=mid)c=s});
  if(c.id!==cur){cur=c.id;links.forEach(a=>a.classList.toggle('on',a.dataset.s===cur))}
  const tl=$('#tl'),r=tl.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.65-r.top)/r.height));tl.style.setProperty('--tl',p);
  $$('li',tl).forEach(li=>{const lr=li.getBoundingClientRect();li.classList.toggle('on',lr.top<innerHeight*.7)})}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();links[0].classList.add('on');
document.addEventListener('click',e=>{const a=e.target.closest('[data-ev]');if(a)track(a.dataset.ev,{alvo:a.id||a.textContent.trim().slice(0,24)})});

/* ========= ripple + parallax ========= */
document.addEventListener('pointerdown',e=>{const t=e.target.closest('.btn,.chip,.tg,.q,.o-skip');if(!t)return;const r=t.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,d=el('span','rip');d.style.cssText='width:'+s+'px;height:'+s+'px;left:'+(e.clientX-r.left-s/2)+'px;top:'+(e.clientY-r.top-s/2)+'px';if(getComputedStyle(t).position==='static')t.style.position='relative';t.append(d);setTimeout(()=>d.remove(),720)});
addEventListener('scroll',()=>{document.documentElement.style.setProperty('--py',Math.min(1,scrollY/500))},{passive:true});


/* ===== palco desktop ===== */
(function(){const hero=document.getElementById('inicio');function fit(){const w=innerWidth;if(w>=1000){const k=w/1920,H=Math.max(1080*k,innerHeight);hero.style.setProperty('--k',k);hero.style.setProperty('--oy',(H-1080*k)/2+'px');hero.style.height=H+'px'}else{hero.style.removeProperty('--k');hero.style.removeProperty('--oy');hero.style.height=''}}
fit();addEventListener('resize',fit)})();

/* ===== desktop: enfeites animados ===== */
(function(){
const NS='http://www.w3.org/2000/svg',$q=s=>document.querySelector(s);
/* caminhos: trilha com 6 nós */
const cd=$q('#camdeco'),cp=$q('#campath');
if(cd&&cp){const L=cp.getTotalLength(),lab=[['scales','Peso'],['drop','Pernas'],['moon','Cansaço'],['flower-lotus','Longevidade'],['barbell','Esporte'],['heartbeat','Rins']];
 lab.forEach(([ic,t],i)=>{const pt=cp.getPointAtLength(L*(.04+i*.184)),n=el('div','cn');n.style.left=(pt.x/520*100)+'%';n.style.top=(pt.y/220*100)+'%';n.style.setProperty('--i',i);n.innerHTML='<b><i data-i="'+ic+'"></i></b><span>'+t+'</span>';cd.append(n)});icons(cd)}
/* balança: pílulas no anel, balança de braços e partículas */
const g=$q('.gauge'),rng=$q('#grng'),bs=$q('.bscale'),sec=$q('#balanca');
if(g&&rng&&bs){
 const ring=el('div','gpills');g.append(ring);const pills=[],wr=[];
 GAUGE.forEach((G,i)=>{const w=el('div','gp'),sp=el('span','gps',G[0]);w.append(sp);ring.append(w);pills.push(sp);wr.push(w)});
 const gsv=$q('#gsvg');let R=0;
 const gr=()=>{R=g.offsetWidth*.4167};gr();addEventListener('resize',gr);
 if(!reduce){gsv.style.animation='none';const t0=performance.now();(function loop(t){const th=((t-t0)/80000*360)%360;gsv.style.transform='rotate('+th+'deg)';wr.forEach((w,i)=>{const a=(-90+i*60+30+th)*Math.PI/180;w.style.transform='translate('+(R*Math.cos(a))+'px,'+(R*Math.sin(a))+'px)'});requestAnimationFrame(loop)})(t0)}
 else wr.forEach((w,i)=>{const a=(-90+i*60+30)*Math.PI/180;w.style.transform='translate('+(R*Math.cos(a))+'px,'+(R*Math.sin(a))+'px)'});
 const tok=$q('#btok'),T=[[-24,76],[0,76],[24,76],[-12,54],[12,54],[0,32]],toks=T.map(([x,y],i)=>{const c=document.createElementNS(NS,'circle');c.setAttribute('cx',x);c.setAttribute('cy',y);c.setAttribute('r',11);c.setAttribute('class','bs-tok');c.style.setProperty('--d',i);tok.append(c);return c});
 const bl=$q('#bpl'),br=$q('#bpr'),bb=$q('#bbeam');
 function sc(n){const th=-9+n*3,r=th*Math.PI/180;bb.style.transform='rotate('+th+'deg)';
  bl.style.transform='translate('+(260-180*Math.cos(r))+'px,'+(70-180*Math.sin(r))+'px)';br.style.transform='translate('+(260+180*Math.cos(r))+'px,'+(70+180*Math.sin(r))+'px)';
  toks.forEach((c,i)=>c.classList.toggle('on',i<n));pills.forEach((p,i)=>{p.classList.toggle('on',i<n);p.classList.toggle('cur',i===n-1)})}
 rng.addEventListener('input',()=>sc(+rng.value));sc(+rng.value);
 for(let i=0;i<16;i++){const d=el('i','bdot');d.style.cssText='left:'+(Math.random()*100)+'%;--s:'+(3+Math.random()*5)+'px;--t:'+(14+Math.random()*16)+'s;--dl:-'+(Math.random()*20)+'s';sec.append(d)}}
})();
