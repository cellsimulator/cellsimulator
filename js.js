let os = document.querySelectorAll('.organela')
let hm = document.querySelector('.hoverMessage')
let main = document.querySelectorAll('main')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let celula = document.querySelector('.celula')
let fullscreen = document.querySelectorAll('.fullscreen')
let mainAtual = 0
mudaMain(mainAtual)

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
    texto: `<p>Células são unidades estruturais e funcionais, presentes em todos os seres vivos, e constituem a menor unidade viva de um ser. Carregam as informações genéticas do organismo e são capazes de se multiplicar.</p><p>Aqui, trataremos das <span class='link' data-link="eucariontes">células eucariontes</span>, <span class='link' data-link="procariontes">células procariontes</span>, <span class='link' data-link="animais">células animais</span> e <span class='link' data-link="vegetais">células vegetais</span>.</p>`,
    add: ``,
  },
  {
    nome: 'Organelas',
    titulo: 'Organelas Celulares',
    texto: `<p>Organelas são estruturas que ficam imersas no <span class='link' data-link="citoplasma">citoplasma</span> celular, e são como pequenos órgãos que realizam funções essenciais para as células.</p><p>Existem <span class='link' data-link='membranosas'>organelas membranosas</span> e <span class='link' data-link='não membranosas'>organelas não membranosas</span>.</p>`,
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
    texto: `<p>Organelas membranosas são aquelas que apresentam algum tipo de membrana biológica.</p><p>Uma das principais teorias que tentam explicar o surgimento dessas organelas é a teoria da Endossimbiose. Essa teoria afirma que as organelas surgiram com a entrada de outros seres vivos no interior das células, estes que então assumiram uma função celular vital. Ocorreu então uma relação ecológica que beneficiou ambos os seres, e esta se perpetuou por toda a história evolutiva.</p><p>Alguns exemplos de organelas membranosas são: <span class='link' data-link="mitocôndria">mitocôndria</span>, <span class='link' data-link="cloroplasto">cloroplasto</span>, <span class='link' data-link="peroxissomo">peroxissomo</span>, <span class='link' data-link="lisossomo">lisossomo</span>, <span class='link' data-link="vacúolo">vacúolo</span>, <span class='link' data-link="complexo golgiense">complexo de Golgi</span> e <span class='link' data-link="retículo endoplasmático">retículo endoplasmático</span>.</p>`,
    add: ``,
  },
  {
    nome: 'retículo endoplasmático',
    titulo: 'Retículo Endoplasmático',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'granuloso',
    titulo: 'Retículo Endoplasmático Granuloso',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'liso',
    titulo: 'Retículo Endoplasmático Liso',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'mitocôndria',
    titulo: 'Mitocôndria',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'complexo golgiense',
    titulo: 'Complexo golgiense',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'lisossomo',
    titulo: 'Lisossomo',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'peroxissomo',
    titulo: 'Peroxissomo',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'vacúolo',
    titulo: 'Vacúolo',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'cloroplasto',
    titulo: 'Cloroplasto',
    texto: `<p>nada</p>`,
    add: ``,
  },
  {
    nome: 'ribossomo',
    titulo: 'Ribossomo',
    texto: `<p>Ribossomos são organelas que participam da síntese proteica nas células. São formados por duas partes arredondadas, que se dispõem uma sobre a outra.</p><p>Os ribossomos são constituídos, basicamante, por proteínas e por RNA ribossômico (RNAr). Podem ser encontrados dispersos no <span class='link' data-link="citoplasma">citoplasma</span> ou associados ao <span class='link' data-link="retículo endoplasmático granuloso">retículo endoplasmático granuloso</span>.</p>`,
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
    texto: `<p>O citoesqueleto é uma rede complexa de fibras e filamentos, encontrado nas <span class='link' data-link="eucariontes">eucariontes</span>.</p><p>O citoesqueleto permite à celula adotar diversos formatos e executar movimentos amebóides, além de ser importante para garantir sua forma e sustentação, promover movimentos de organelas e vesículas e na contração celular.</p>`,
    add: `<img src='imgs/citoesqueleto.jpg'>`,
  },
  {
    nome: 'eucariontes',
    titulo: 'Células Eucariontes',
    texto: `<p>Células são unidades estruturais e funcionais, presentes em todos os seres vivos, e constituem a menor unidade viva de um ser. Carregam as informações genéticas do organismo e são capazes de se multiplicar.</p><p>Aqui, trataremos das <span class='link' data-link="células eucariontes">células eucariontes</span>, <span class='link' data-link="células procariontes">células procariontes</span>, <span class='link' data-link="células animais">células animais</span> e <span class='link' data-link="células vegetais">células vegetais</span>.</p>`,
    add: ``,
  },
  {
    nome: 'procariontes',
    titulo: 'Células Procariontes',
    texto: `<p>Células são unidades estruturais e funcionais, presentes em todos os seres vivos, e constituem a menor unidade viva de um ser. Carregam as informações genéticas do organismo e são capazes de se multiplicar.</p><p>Aqui, trataremos das <span class='link' data-link="células eucariontes">células eucariontes</span>, <span class='link' data-link="células procariontes">células procariontes</span>, <span class='link' data-link="células animais">células animais</span> e <span class='link' data-link="células vegetais">células vegetais</span>.</p>`,
    add: ``,
  },
  {
    nome: 'animais',
    titulo: 'Células Animais',
    texto: `<p>Células são unidades estruturais e funcionais, presentes em todos os seres vivos, e constituem a menor unidade viva de um ser. Carregam as informações genéticas do organismo e são capazes de se multiplicar.</p><p>Aqui, trataremos das <span class='link' data-link="células eucariontes">células eucariontes</span>, <span class='link' data-link="células procariontes">células procariontes</span>, <span class='link' data-link="células animais">células animais</span> e <span class='link' data-link="células vegetais">células vegetais</span>.</p>`,
    add: ``,
  },
  {
    nome: 'vegetais',
    titulo: 'Células Vegetais',
    texto: `<p>Células são unidades estruturais e funcionais, presentes em todos os seres vivos, e constituem a menor unidade viva de um ser. Carregam as informações genéticas do organismo e são capazes de se multiplicar.</p><p>Aqui, trataremos das <span class='link' data-link="células eucariontes">células eucariontes</span>, <span class='link' data-link="células procariontes">células procariontes</span>, <span class='link' data-link="células animais">células animais</span> e <span class='link' data-link="células vegetais">células vegetais</span>.</p>`,
    add: ``,
  },
]

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
  findNSelect(x)
  let i = find(x)
  if(qual == 2) division2.innerHTML = '<h1>'+textos[i].titulo+'</h1>'+textos[i].texto+textos[i].add
  else displayInformation[mainAtual].innerHTML = '<h1>'+textos[i].titulo+'</h1>'+textos[i].texto+textos[i].add+'<button class=\'ipic\' data-x='+textos[i].titulo+'>Ir para Informações Completas</button>'
  let ls = document.querySelectorAll('.link')
  if(qual == 1){
    let ipic = document.querySelectorAll('.ipic')
    for(let j = 0; j < ipic.length; j++){
      ipic[j].addEventListener('click', () => {
        mudaMain(2)
        console.log(ipic[j].dataset.x);
        console.log(find2(ipic[j].dataset.x));
        findNSelect(textos[find2(ipic[j].dataset.x)].nome)
        mostraInformacao(textos[find2(ipic[j].dataset.x)].nome, 2)
      })
    }
  }
  for(let j = 0; j < ls.length; j++) ls[j].addEventListener('click', (e) => {
    if(qual == 1) mudaMain(2)
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
