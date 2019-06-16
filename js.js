let os = document.querySelectorAll('.organela')
let hm = document.querySelector('.hoverMessage')
let main = document.querySelectorAll('main')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let celula = document.querySelector('.celula')
let fullscreen = document.querySelectorAll('.fullscreen')

let ct = ['eucariontes', 'procariontes', 'vegetais']

let informations = document.querySelector('.informations')
let iContainers = document.querySelectorAll('.iContainer')
let is = document.querySelectorAll('.i')
let h2 = document.querySelectorAll('h2')

let division2 = document.querySelector('.division2')
let displayInformation = document.querySelectorAll('.displayInformation')
let lis = document.querySelectorAll('.informations li')

let menuLis = document.querySelectorAll('.menuUl > li')


let textos = [
  {
    nome: 'Células',
    titulo: 'Células',
    texto: `<p>Células são unidades estruturais e funcionais, presentes em todos os seres vivos, e constituem a menor unidade viva de um ser. Carregam as informações genéticas do organismo e são capazes de se multiplicar.</p><p>Aqui, trataremos das <span class='link' data-link="eucariontes">eucariontes</span>, <span class='link' data-link="procariontes">procariontes</span>, <span class='link' data-link="animais">células animais</span> e <span class='link' data-link="vegetais">células vegetais</span>.</p>`,
    add: ``,
  },
  {
    nome: 'Citoplasma',
    titulo: 'Citoplasma',
    texto: `<p><strong>Porção gelatinosa que preenche o interior da célula</strong></p><p><strong>Localização:</strong></p><p><span class='link' data-link="procariontes">Células procarióticas</span>: representa todo o material que preenche o interior da célula;</p><p><span class='link' data-link="eucariontes">Células eucarióticas</span>: representa a porção localizada entre a membrana plasmática o núcleo.</p><p><strong>Componentes do citoplasma em células eucarióticas:</strong></p><p><span class='link' data-link="hialoplasma">Hialoplasma ou citosol</span>: água, íons e moléculas orgânicas;</p><p>Citoesqueleto: proteínas estruturais;</p><p><span class='link' data-link="Organelas">Orgânulos ou organelas</span>: estruturas com forma e função específicas;</p><p>Inclusões citoplasmáticas: gotículas e grãos de substâncias.</p>`,
    add: ``,
  },
  {
    nome: 'hialoplasma',
    titulo: 'Hialoplasma',
    texto: `<p><strong>Também conhecido como citozol, o hialoplasma é um líquido presente no interior das células dos seres vivos. É a parte solúvel do <span class='link' data-link="Citoplasma">citoplasma</span>.</strong></p><p><strong>Principais características:</strong></p>



<p>- Nas áreas periféricas do citoplasma (<span class='link' data-link="ectoplasma">ectoplasma</span>), apresenta-se como uma matéria coloidal (espécie de gel viscoso). Já na parte interna (<span class='link' data-link="endoplasma">endoplasma</span>), o &#160;hialoplasma apresenta uma consistência mais fluída;</p>



<p>- É composto por água, sais minerais, proteínas, açúcares e aminoácidos livres;</p>



<p>- Corresponde a cerca de 50% do volume da célula;</p>



<p><strong>Função:</strong></p>



<p>- O hialoplasma (citosol) é responsável por grande parte das reações químicas do metabolismo celular. É no hialoplasma que ocorre a glicólise e a biossíntese de açúcares.</p>



<p>- É no hialoplasma que ocorre a produção, através de reações químicas, de moléculas que formam as estruturas celulares.</p>



<p>- É no hialoplasma que ocorre o armazenamento de substâncias de reserva usadas pelas células</p>`,
    add: ``,
  },
  {
    nome: 'ectoplasma',
    titulo: 'Ectoplasma',
    texto: `<p>O ectoplasma, também chamado ectoplasto, ectossarco e exoplasma, é a parte periférica do citoplasma, formada pelo líquido citoplasmático, de consistência gelatinosa. É espessa e hialina e está limitada exteriormente pela membrana plasmática.</p>`,
    add: ``,
  },
  {
    nome: 'endoplasma',
    titulo: 'Endoplasma',
    texto: `<p>O endoplasma é a parte interna do citoplasma que circula o núcleo de uma célula. Ele corresponde à parte líquida da matriz citoplasmática ou "citosol", que tem consistência mais fluida e que se localiza na parte mais direcionada ao centro do citoplasma.</p>`,
    add: ``,
  },
  {
    nome: 'Organelas',
    titulo: 'Organelas Celulares',
    texto: `<p>Organelas são estruturas que ficam imersas no <span class='link' data-link="Citoplasma">citoplasma</span> celular, e são como pequenos órgãos que realizam funções essenciais para as células.</p><p>Existem <span class='link' data-link='membranosas'>organelas membranosas</span> e <span class='link' data-link='não membranosas'>organelas não membranosas</span>.</p>`,
    add: `<img src='imgs/organelas_animal.jpg'><img src='imgs/organelas_vegetal.jpg'>`,
  },
  {
    nome: 'não membranosas',
    titulo: 'Organelas não membranosas',
    texto: `<p>Organelas não membranosas são aquelas que não apresentam envoltório algum em sua estrutura. Exemplos: <span class='link' data-link="ribossomo">ribossomo</span>, <span class='link' data-link="centrossomo">centrossomo</span>, <span class='link' data-link="citoesqueleto">citoesqueleto</span> e <span class='link' data-link="centríolo">centríolo</span>.</p>`,
    add: ``,
  },
  {
    nome: 'membranosas',
    titulo: 'Organelas membranosas',
    texto: `<p>Organelas membranosas são aquelas que apresentam algum tipo de membrana biológica.</p><p>Uma das principais teorias que tentam explicar o surgimento dessas organelas é a teoria da Endossimbiose. Essa teoria afirma que essas organelas surgiram com a entrada de outros seres vivos no interior das células, estes que então assumiram uma função celular vital. Ocorreu então uma relação ecológica que beneficiou ambos os seres, e esta se perpetuou por toda a história evolutiva.</p><p>Alguns exemplos de organelas membranosas são: <span class='link' data-link="mitocôndria">mitocôndria</span>, <span class='link' data-link="cloroplasto">cloroplasto</span>, <span class='link' data-link="peroxissomo">peroxissomo</span>, <span class='link' data-link="lisossomo">lisossomo</span>, <span class='link' data-link="vacúolo">vacúolo</span>, <span class='link' data-link="complexo golgiense">complexo de Golgi</span> e <span class='link' data-link="retículo endoplasmático">retículo endoplasmático</span>.</p>`,
    add: ``,
  },
  {
    nome: 'retículo endoplasmático',
    titulo: 'Retículo Endoplasmático',
    texto: `<p>O retículo endoplasmático é uma organela que está relacionada com a síntese de moléculas orgânicas. Existem 2 tipos de retículos: o <span class='link' data-link="liso">liso</span> e o <span class='link' data-link="granuloso">rugoso</span>, que apresentam funções e formas diferentes.</p>`,
    add: `<img src='imgs/reticulo1.jpg'>`,
  },
  {
    nome: 'granuloso',
    titulo: 'Retículo Endoplasmático Rugoso (RER)',
    texto: `<p>Quando o retículo endoplasmático é associado aos <span class='link' data-link="ribossomo">ribossomos</span>, ele adquire uma aparência áspera, causa pelo qual é chamado de rugoso ou granuloso. Está localizado no <span class='link' data-link="Citoplasma">citoplasma</span>, próximo ao núcleo, sendo a sua membrana uma continuação da membrana nuclear externa. Sua função é a síntese e transporte de proteínas.</p><p>A proximidade com o núcleo torna a síntese de proteínas mais eficiente, uma vez que o RER pode enviar rapidamente um sinal para o núcleo iniciar o processo de transcrição do DNA.</p>`,
    add: `<img src='imgs/reticulo1.jpg'>`,
  },
  {
    nome: 'liso',
    titulo: 'Retículo Endoplasmático Liso (REL)',
    texto: `<p>O retículo endoplasmático liso não possui <span class='link' data-link="ribossomo">ribossomos</span> ligados à sua membrana e por isso tem aparência lisa. A sua função é, basicamente, participar da produção de moléculas de lipídios, em especial fosfolipídios, que irão compor a membrana das células. No entanto, dependendo do tipo de célula em que se encontra, o REL terá funções diferentes. Assim, por exemplo, ele pode estar mais envolvido na produção dos hormônios esteroides a partir do colesterol​, ou com a regulação dos níveis de cálcio no <span class='link' data-link="Citoplasma">citoplasma</span> de células musculares estriadas.</p>`,
    add: `<img src='imgs/reticulo1.jpg'>`,
  },
  {
    nome: 'mitocôndria',
    titulo: 'Mitocôndria',
    texto: `<p>As mitocôndrias são organelas que fazem parte apenas de <span class='link' data-link="eucariontes">células eucarióticas</span>. A sua função é produzir a maior parte da energia das células, através do processo de respiração celular. A forma, o tamanho, a distribuição e a quantidade das mitocôndrias variam de acordo com o tipo de célula. Elas ainda possuem o seu próprio material genético.</p><img src='imgs/mitocondria.jpg'><p>As mitocôndrias são formadas por duas membranas lipoproteicas, uma externa e outra interna:</p><p><strong>Membrana externa:</strong> semelhante a de outras organelas, lisa e composta de lipídeos e proteínas chamadas deporinas, que controlam a entrada de moléculas, permitindo a passagem de algumas relativamente grandes.</p><p>
<strong>Membrana interna:</strong> é menos permeável e apresenta numerosas dobras, chamadas de cristas mitocondriais.</p><p>No seu interior são encontrados os <span class='link' data-link="ribossomo">ribossomos</span>, organelas que produzem proteínas necessárias à mitocôndria. Eles são diferentes daqueles encontrados no <span class='link' data-link="Citoplasma">citoplasma</span> celular e mais parecidos com os das bactérias. Outra característica comum a bactérias e mitocôndrias é a presença de moléculas circulares de DNA.</p>`,
    add: ``,
  },
  {
    nome: 'complexo golgiense',
    titulo: 'Complexo golgiense',
    texto: `<p>O Complexo de Golgi, Aparelho de Golgi, ou ainda Complexo golgiense, é uma organela de <span class='link' data-link="eucarionte">células eucariontes</span>, composta de discos membranosos achatados e empilhados. Suas funções são modificar, armazenar e exportar proteínas sintetizadas no <span class='link' data-link="granuloso">retículo endoplasmático rugoso</span> e além disso, origina os <span class='link' data-link="lisossomo">lisossomos</span> e os acrossomos dos espermatozoides.</p><img src='imgs/golgi.jpg'><p>Na face cis da cisterna, as vesículas recebidas do <span class='link' data-link="granuloso">RER</span> contém proteínas (produzidas pelos <span class='link' data-link="ribossomo">ribossomos</span> associados ao retículo) que serão modificadas e dobradas. Algumas dessas proteínas são glicosiladas, ou seja, sofrem reação de adição de um açúcar no <span class='link' data-link="granuloso">RER</span>. Esse processo é completado no Complexo golgiense, caso contrário, essas proteínas podem se tornar inativas.</p><p>Na face trans, as proteínas são "empacotadas" em vesículas membranosas. Desse modo, são originadas muitas enzimas, bem como os <span class='link' data-link="lisossomo">lisossomos</span> primários e os <span class='link' data-link="peroxissomo">peroxissomos</span>.</p><p>Enquanto essas organelas ficam no <span class='link' data-link="Citoplasma">citoplasma</span> da célula, as proteínas são muitas vezes enviadas para fora dela.</p><p>Uma outra função do Complexo golgiense é a formação do acrossomo que se localiza na cabeça do espermatozoide. O acrossomo é o resultado da fusão de vários <span class='link' data-link="lisossomo">lisossomos</span> formando uma grande vesícula, que contem enzimas digestivas para auxiliar na perfuração da membrana do óvulo.</p>`,
    add: ``,
  },
  {
    nome: 'lisossomo',
    titulo: 'Lisossomo',
    texto: `<p>Os lisossomos são organelas membranosas presentes nas <span class='link' data-link="eucariontes">células eucariontes</span>, e são estruturas esféricas delimitadas por uma membrana formada por uma camada lipoproteica. Essas organelas contêm muitas enzimas que lhes permite degradar um grande número de substâncias. Como essas enzimas hidrolases funcionam em ambiente ácido, a digestão ocorre dentro dos lisossomos para não prejudicar a célula.</p><img src='imgs/lisossomo.jpg'><p>A função dos lisossomos é fazer a digestão intracelular, que pode ser por fagocitose ou autofagia.</p><p>Quando a célula precisa digerir substâncias vindas do meio externo, ela realiza a fagocitose. Por exemplo, no caso das células do sistema imunitário humano, que fagocitam microorganismos patógenos, chamados antígenos.</p><p>Quando as organelas se tornam envelhecidas, a célula passa por uma reciclagem e realiza o processo de autofagia, através do qual digere algumas das suas organelas que já não funcionam bem. Isso também pode acontecer em situações com poucos nutrientes, em que a célula realiza a autofagia para manter a homeostase (equilíbrio interno).</p>`,
    add: ``,
  },
  {
    nome: 'peroxissomo',
    titulo: 'Peroxissomo',
    texto: `<p>Peroxissomos são organelas celulares encontradas nas <span class='link' data-link="vegetais">células vegetais</span> e <span class='link' data-link="animais">animais</span>. Em formato de vesículas arredondadas, eles estão presentes no <span class='link' data-link="Citoplasma">citoplasma</span> da célula.</p><p>Os peroxissomos exercem funções importantes no interior das células, uma vez que apresentam enzimas digestivas responsáveis por oxidar substâncias orgânicas.</p><img src='imgs/peroxissomo.jpg'><p>A principal função do peroxissomos é digerir algumas substâncias. Isso porque em seu interior estão armazenadas as enzimas oxidases. Essas enzimas oxidam os ácidos graxos para a síntese de colesterol. Também são usados como matéria-prima na respiração celular com o intuito de obter energia. Nas reações de oxidação é produzido o peróxido de hidrogênio (H<sub>2</sub>O<sub>2</sub>), e por isso essa organela recebe esse nome.</p><p>Os peroxissomos também contêm a enzima catalase, que degrada substâncias tóxicas para as células, como o peróxido de hidrogênio ("água oxigenada") produzido em certas reações.</p>`,
    add: ``,
  },
  {
    nome: 'vacúolo',
    titulo: 'Vacúolo',
    texto: `<p>O vacúolo da célula vegetal é resultado de diversas bolsas unidas, que têm origem no <span class='link' data-link="retículo endoplasmático">retículo endoplasmático</span> e no <span class='link' data-link="complexo golgiense">Complexo de Golgi</span>. Ele é preenchido por água e algumas partículas dissolvidas nela, e é envolvido por uma membrana. Apresenta diversas funções, como: regular o PH celular, controlar a entrada e saída de água por osmorregulação, armazenar substâncias e fornecer proteínas para sementes em processos de maturação.</p>`,
    add: `<img src='imgs/vacuolo.jpg'>`,
  },
  {
    nome: 'cloroplasto',
    titulo: 'Cloroplasto',
    texto: `<p>Os cloroplastos são organelas presentes em <span class='link' data-link="vegetais">células vegetais</span>, nas regiões que ficam iluminadas. Possuem cor verde, devido à presença de clorofila, e são responsáveis pela realização da fotossíntese.</p><p>Geralmente, a forma do cloroplasto é arredondada e alongada, mas pode ter outros formatos. Possui membrana lipoproteica dupla, sendo que a mais interna das membranas forma lamelas, compostas por pilhas lamelares menores, cada uma como se fosse uma pequena bolsa achatada, chamada tilacoide. Os tilacoides são interligados e ficam empilhados.</p><p>A etapa clara (conversão da luz em energia) acontece na região das membranas dos tilacoides, onde está concentrada a clorofila. Entre as membranas dos tilacoides há um espaço preenchido por um fluido e enzimas, DNA, RNA e ribossomos, sendo denominado estroma. É no estroma que acontece a etapa escura, em que ocorre a produção dos açúcares (glicose).</p>`,
    add: `<img src='imgs/cloroplasto.jpg'>`,
  },
  {
    nome: 'ribossomo',
    titulo: 'Ribossomo',
    texto: `<p>Ribossomos são organelas que participam da síntese proteica nas células. São formados por duas partes arredondadas, que se dispõem uma sobre a outra.</p><p>Os ribossomos são constituídos, basicamante, por proteínas e por RNA ribossômico (RNAr). Podem ser encontrados dispersos no <span class='link' data-link="Citoplasma">citoplasma</span> ou associados ao <span class='link' data-link="retículo endoplasmático granuloso">retículo endoplasmático granuloso</span>.</p>`,
    add: `<img src='imgs/ribossomo.png'>`,
  },
  {
    nome: 'centrossomo',
    titulo: 'Centrossomo',
    texto: `<p>Centrossomo é o local de onde partem os microtúbulos do <span class='link' data-link="citoesqueleto">citoesqueleto</span>, e se encontra próximo ao núcleo. No seu interior se encontram os <span class='link' data-link="centríolos">centríolos</span>.</p><p>É uma estrutura essencial para a organização interna da célula, participando da manutenção do <span class='link' data-link="citoesqueleto">citoesqueleto</span> durante a migração celular, processo de deslocamento das células que está envolvido em diversos processos, como na defesa do organismo, na cicatrização e na modelagem óssea.</p>`,
    add: `<img src='imgs/centrossomo.jpg'>`,
  },
  {
    nome: 'centríolo',
    titulo: 'Centríolo',
    texto: `<p>Os centríolos são organelas citoplasmáticas presentes em <span class='link' data-link="eucariontes">células eucarióticas</span>, com exceção das células de fungos e das <span class='link' data-link="células vegetais">células vegetais</span> de angiospermas e gimnospermas.</p><p>Os centríolos são formados por nove conjuntos de três microtúbulos cada, e não são revestidos por membrana. Participam principalmente do processo de divisão celular, formando o fuso acromático, um conjunto de microtúbulos dispostos nos polos das células que levam à separação dos cromossomos durante os processos de mitose e meiose.</p><p>Em alguns casos, como nos protozoários, os centríolos também auxiliam na formação de cílios e flagelos.</p>`,
    add: `<img src='imgs/centriolo.jpg'>`,
  },
  {
    nome: 'citoesqueleto',
    titulo: 'Citoesqueleto',
    texto: `<p>O citoesqueleto é uma rede complexa de fibras e filamentos, encontrado nas <span class='link' data-link="eucariontes">células eucariontes</span>.</p><p>O citoesqueleto permite à celula adotar diversos formatos e executar movimentos amebóides, além de ser importante para garantir sua forma e sustentação, promover movimentos de organelas e vesículas e na contração celular.</p>`,
    add: `<img src='imgs/citoesqueleto.jpg'>`,
  },
  {
    nome: 'eucariontes',
    titulo: 'Células Eucariontes',
    texto: `<p>eucariontes aq</p>`,
    add: ``,
  },
  {
    nome: 'procariontes',
    titulo: 'Células Procariontes',
    texto: `<p>procariontes aq</p>`,
    add: ``,
  },
  {
    nome: 'animais',
    titulo: 'Células Animais',
    texto: `<p>animais aq</p>`,
    add: ``,
  },
  {
    nome: 'vegetais',
    titulo: 'Células Vegetais',
    texto: `<p>vegetais aq</p>`,
    add: ``,
  },
]

let mainAtual
for(let i = 0; i < main.length - 1; i++){
  mainAtual = i
  mostraInformacao(ct[i], 1)
}
mainAtual = 0
mudaMain(mainAtual)

main[mainAtual].style.height = window.innerHeight - (header.offsetHeight + footer.offsetHeight) + 'px'

function criaOs(x){
  for(let i = 0; i < x; i++){
    celula.innerHTML += `<img src="imgs/mitocondria.png" class='organela hoverable' data-type=0>`
  }
  os = document.querySelectorAll('.organela')
  for(let i = 0; i < os.length; i++){
    os[i].addEventListener('mouseover', (e) => hoverMessage(contents[e.currentTarget.dataset.type]))
    os[i].addEventListener('mouseout', () => hm.classList.add('oculto'))
  }
}

function posicionaOs(){
  os = document.querySelectorAll('.organela')
  for(let i = 0; i < os.length; i++){
    os[i].style.width = (Math.random() * 3) + 5 + "em"
    os[i].style.left = (Math.random() * 100) + "%"
    os[i].style.top = (Math.random() * 100) + "%"
  }
}

function mudaMain(x){
  mainAtual = x;
  for(let i = 0; i < main.length; i++){
    if(i != x) main[i].classList.add('oculto')
    else main[i].classList.remove('oculto')
  }
}

function fullScreen(e){
  let t = e.currentTarget
  if(t.src.substr(-24) == "imgs/enterfullscreen.png"){
    t.src = "imgs/exitfullscreen.png"
    main[mainAtual].style.height = '100%'
    header.style.display = 'none'
    footer.style.display = 'none'
  }
  else{
    main[mainAtual].style.height = window.innerHeight - (header.offsetHeight + footer.offsetHeight) + 'px'
    t.src = "imgs/enterfullscreen.png"
    header.style.display = ''
    footer.style.display = ''
  }
}

function findNSelect(n){
  let i = 0;
  for(let i = 0; i < lis.length; i++) lis[i].classList.remove('selected')
  for(;lis[i].innerHTML != n;i++);
  let el = lis[i]
  el.classList.add('selected')
  while(el.parentNode.classList[0] != 'informations'){
    el.parentNode.classList.remove('oculto')
    el = el.parentNode
  }
}

function find2(n){
  for(let i = 0; i < textos.length; i++){
    if(textos[i].titulo == n) return i;
  }
  return -1;
}

function find(n){
  for(let i = 0; i < textos.length; i++){
    if(textos[i].nome == n) return i;
  }
  return -1;
}

function mostraInformacao(x, qual = 2){
  if(qual == 2) findNSelect(x)
  let i = find(x)
  if(qual == 2) division2.innerHTML = '<h1>'+textos[i].titulo+'</h1>'+textos[i].texto+textos[i].add
  else displayInformation[mainAtual].innerHTML = '<h1>'+textos[i].titulo+'</h1>'+textos[i].texto+textos[i].add+'<button class=\'ipic\' data-x="'+textos[i].nome+'">Ir para Informações Completas</button>'
  let ls = document.querySelectorAll('.link')
  if(qual == 1){
    let ipic = document.querySelectorAll('.ipic')
    for(let j = 0; j < ipic.length; j++){
      ipic[j].addEventListener('click', () => {
        mudaMain(main.length - 1)
        findNSelect(textos[find(ipic[j].dataset.x)].nome)
        mostraInformacao(textos[find(ipic[j].dataset.x)].nome, 2)
      })
    }
  }
  for(let j = 0; j < ls.length; j++) ls[j].addEventListener('click', (e) => {
    if(qual == 1) mudaMain(main.length - 1)
    mostraInformacao(e.currentTarget.dataset.link)
  })
}

function hoverMessage(content){
  hm.classList.remove('oculto')
  hm.innerHTML = '<p>'+content+'</p>'
  addEventListener('mousemove', (e) => {
    hm.style.left = e.pageX + 10 + 'px'
    hm.style.top = e.pageY - 32 + 'px'
  })
}

for(let i = 0; i < is.length; i++) is[i].addEventListener('click', (e) => mostraInformacao(e.currentTarget.innerHTML, 2))
for(let i = 0; i < h2.length; i++) h2[i].addEventListener('click', (e) => e.currentTarget.nextSibling.nextSibling.classList.toggle('oculto'))
for(let i = 0; i < fullscreen.length; i++) fullscreen[i].addEventListener('click', (e) => fullScreen(e));
for(let i = 0; i < menuLis.length; i++) menuLis[i].addEventListener('click', () => mudaMain(i))
for(let i = 0; i < iContainers.length; i++) iContainers[i].addEventListener('click', (e) => {if(e.currentTarget.nextSibling.nextSibling.classList[0] == 'oculto' || e.currentTarget.nextSibling.nextSibling.classList[0] != 'oculto' && e.currentTarget.classList[1] == 'selected') e.currentTarget.nextSibling.nextSibling.classList.toggle('oculto')})
for(let i = 0; i < iContainers.length; i++) iContainers[i].addEventListener('click', (e) => {mostraInformacao(e.currentTarget.innerHTML, 2);})
for(let i = 0; i < os.length; i++){
  os[i].addEventListener('mouseover', (e) => hoverMessage(textos[find(e.currentTarget.dataset.name)].titulo))
  os[i].addEventListener('mouseout', () => hm.classList.add('oculto'))
  os[i].addEventListener('click', (e) => mostraInformacao(e.currentTarget.dataset.name, 1))
}
