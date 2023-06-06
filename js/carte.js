function carteCre(){


//Selecte l'element appelé ListeArticle
let ArticlesSection = document.getElementById("article");

//Créer un <div></div>
let Div = document.createElement('div');
//Rajoute la classe du div avec "articles"
Div.className = "parent";

let mage = document.createElement("img");
mage.className = "image";
mage.src = "../images/ACCEUIL.jpg";
mage.alt = "chien qui prend cbd";

let enfant = document.createElement('div');
enfant.className = "child";

let intertitre = document.createElement('h3');
intertitre.className = "intertitre";
intertitre.textContent="intertitre";

let chapeau = document.createElement('p');
chapeau.className = "chapeau";
chapeau.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit Velit fugit fuga minus ipsum. Unde fuga, voluptates mollitia ab eveniet velit enim ratione, fugiat sapiente libero, ex nobis excepturi non obcaecati?";

ArticlesSection.appendChild(Div);
Div.appendChild(mage);
Div.appendChild(enfant);
enfant.appendChild(intertitre);
enfant.appendChild(chapeau);

let bouton = document.createElement('button')
bouton.className = "bouton"
enfant.appendChild(bouton)
}

carteCre();
carteCre();
