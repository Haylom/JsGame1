let fleche = document.querySelector(".aro");
let attack = document.querySelector("#boutatack")
let special = document.querySelector("#boutspecial")


while (fleche < 10) {
  resultat++;
  fleche.setAttribute("id", "rotated-imagetres");
 ;
}

function randomplayer(min, max)
{
 let random = Math.round(Math.random()*100)
  console.log(random);
 if(random < 50){
  fleche.setAttribute("id", "rotated-image");
 }else{
  fleche.setAttribute("id", "rotated-imagedos")
 }
}

randomplayer();
