function toggleMode() {
 const html = document.documentElement
 html.classList.toggle("dia")

 const img = document.querySelector("#profile img")
  //pegar a tag img
  if (html.classList.contains("dia"))
  //subistituir a imagem
  img.setAttribute("src", "./assets/avtar-dia.png")
 else
   //se tiver no modo dia, usar a imagem dia
  img.setAttribute ("src", "./assets/avtar.png")
   //se tiver no modo noite, usar imagem normal

  const alt = document.querySelector ("#profile")
  if (html.classList.contains("dia"))
  img.setAttribute("alt", "O Astro que vagou pela noite e se econtrou brilho da escuridão")
  else
  img.setAttribute("alt", "O Astro que viajou ate o sol e descobriu a verdadeira luz do seus olhos")

}
  //if(html.classList.contains('dia')) {
  // html.classList.remove ('dia')
  //} else {
  //   html.classList.add ('dia')

 
