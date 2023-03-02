var listaFilmes =[ "https://br.web.img2.acsta.net/medias/nmedia/18/87/23/46/19873389.jpg",
"https://br.web.img3.acsta.net/pictures/15/09/18/19/45/208009.jpg",
"https://br.web.img3.acsta.net/pictures/20/01/22/18/59/2385080.jpg ",                 
           "https://br.web.img3.acsta.net/c_310_420/pictures/210/383/21038388_20130909204717612.jpg",
"https://br.web.img3.acsta.net/medias/nmedia/18/92/15/34/20183462.jpg",
"https://br.web.img2.acsta.net/medias/nmedia/18/87/22/91/19873330.jpg",];

var nomesFilmes = [
  "Velozes e Furiosos",
  "O Ultimo Hunter de bruxas",
  "Bloodshot",
  "Riddick",
  "TriploX",
  "O Vingador",
];

var i = 0
var j = 1
  document.write("<div class='posters'>");

 while (i < listaFilmes.length) {
   document.write("<figure>")
   document.write("<img src=" + listaFilmes[i] + ">")
   document.write("<figcaption class='subtitle'>" + nomesFilmes[i] + "</figcaption>")
   document.write("</figure>")
   i++;

   if(i == 3*j) {
    
    document.write("</div><br><div class='posters'>");
    j++;
    
  }
}

document.write("</div>")
  