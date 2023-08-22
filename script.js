window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM entièrement chargé et analysé");
});

function addElement () {
  // crée un nouvel élément div
  let newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  let newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  let currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
}

const dayNames = ["Dimanche ","Lundi ", "Mardi ", "Mercredi ", "Jeudi ", "Vendredi ", "Samedi "
];

let dayLen = dayNames.length;

const monthNames = [" Janvier ", " Février ", " Mars ", " Avril ", " Mai ", " Juin ",
  " Juillet ", " Août ", " Septembre ", " Octobre ", " Novembre ", " Décembre "
];

function faisMoiLaSommeEtMoyenne(...nombres){
  console.log(nombres);
  let somme = 0;
  let moyenne = 0;
  for(let i = 0; i< nombres.length; i++){
    somme += nombres[i];
    moyenne = somme/5;
  }
  return `La somme est ${somme} et la moyenne est ${moyenne}`;
}

console.log(faisMoiLaSommeEtMoyenne(2, 13, 34, 60, 99));

let t2 = [0, -9, 2, 785, 6, 50]

let t3bis = t3.map(x => x*x)

console.log(t3)












const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]















let tdatas = [
  ['John', 'Doe', 'M', '1970-01-01']
  ['Harry', 'Potter', 'M', '1970-01-01']

]

















































