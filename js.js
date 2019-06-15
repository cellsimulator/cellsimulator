let os = document.querySelectorAll('.organela')
let hm = document.querySelector('.hoverMessage')
let main = document.querySelectorAll('main')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let celula = document.querySelector('.celula')
let fullscreen = document.querySelectorAll('.fullscreen')
let mainAtual = 2
mudaMain(mainAtual)

let informations = document.querySelector('.informations')
let iContainers = document.querySelectorAll('.iContainer')
let is = document.querySelectorAll('.i')
let h2 = document.querySelectorAll('h2')

let division2 = document.querySelector('.division2')
let lis = document.querySelectorAll('.informations li')

let menuLis = document.querySelectorAll('.menuUl > li')

let textos = [
  {
    nome: 'Organelas',
    titulo: 'Organelas Celulares',
    texto: `<p>São as organelas lá das celulas lá.</p><p>Existem <span class='link' data-link='não membranosas'>organelas não-membranosas</span> e <span class='link' data-link='membranosas'>organelas membranosas</span>.</p>`,
  },
  {
    nome: 'não membranosas',
    titulo: 'Organelas não membranosas',
    texto: `<p>São as organelas lá das celulas lá.</p>`,
  },
  {
    nome: 'membranosas',
    titulo: 'Organelas membranosas',
    texto: `<p>São as organelas lá das celulas lá.</p>`,
  },
]

main[mainAtual].style.height = window.innerHeight - (header.offsetHeight + footer.offsetHeight) + 'px'

let contents = [
  `<p>Nome: Mitocôndria</p><p>Função: sla</p>`,
]

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
    os[i].style.width = (Math.random() * 0.6) + 0.4 + "em"
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
  console.log(i);
  let el = lis[i]
  console.log(el);
  el.classList.add('selected')
  while(el.parentNode.classList[0] != 'informations'){
    el.parentNode.classList.remove('oculto')
    el = el.parentNode
  }
}

function find(n){
  for(let i = 0; i < textos.length; i++){
    if(textos[i].nome == n) return i;
  }
  return -1;
}

function mostraInformacao(x){
  findNSelect(x)
  let i = find(x)
  division2.innerHTML = '<h1>'+textos[i].titulo+'</h1>'+textos[i].texto
  let ls = document.querySelectorAll('.link')
  for(let j = 0; j < ls.length; j++) ls[j].addEventListener('click', (e) => {
    mostraInformacao(e.currentTarget.dataset.link)
  })
}

function hoverMessage(content){
  console.log('opa');
  hm.classList.remove('oculto')
  hm.innerHTML = '<p>'+content+'</p>'
  addEventListener('mousemove', (e) => {
    hm.style.left = e.pageX + 10 + 'px'
    hm.style.top = e.pageY - 32 + 'px'
  })
}

for(let i = 0; i < iContainers.length; i++) iContainers[i].addEventListener('click', (e) => {mostraInformacao(e.currentTarget.innerHTML);})
for(let i = 0; i < is.length; i++) is[i].addEventListener('click', (e) => mostraInformacao(e.currentTarget.innerHTML))
for(let i = 0; i < h2.length; i++) h2[i].addEventListener('click', (e) => e.currentTarget.nextSibling.nextSibling.classList.toggle('oculto'))
for(let i = 0; i < fullscreen.length; i++) fullscreen[i].addEventListener('click', (e) => fullScreen(e));
for(let i = 0; i < menuLis.length; i++) menuLis[i].addEventListener('click', () => mudaMain(i))
for(let i = 0; i < iContainers.length; i++) iContainers[i].addEventListener('click', (e) => e.currentTarget.nextSibling.nextSibling.classList.toggle('oculto'))
for(let i = 0; i < os.length; i++){
  os[i].addEventListener('mouseover', (e) => hoverMessage(contents[e.currentTarget.dataset.type]))
  os[i].addEventListener('mouseout', () => hm.classList.add('oculto'))
}
