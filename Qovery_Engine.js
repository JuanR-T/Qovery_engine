// Initialisation de variables
let btn = document.getElementById('Salaire');
let btn2 = document.getElementById('Factures');
let btn3 = document.getElementById('Couts');
let counterphrase = document.getElementById('counterid');
var app = document.getElementById('root');
let filename;
let newkey;
let list;
let counter;
let textcounter;

// Création d'une variable qui rajoute une liste UL, et l'associe à la div "root" stockée dans la variable "app"
list =document.createElement('ul');
app.appendChild(list);
// Création d'une variable qui rajoute un titre H3  ², et l'associe à la div "counterid" stockée dans la variable "counterphrase"
textcounter=document.createElement('h3');
textcounter.setAttribute('class','textcounter')
counterphrase.appendChild(textcounter);
// Création d'une fonction associée à une action (clic)
btn.addEventListener('click', () => {
    // Réinitialisation du compteur de liste, à chaque clic
    counter = 0;
    list.innerHTML='';

    // Récupération de l'api d'askolga contenant les données exploitables par la fonction for in
    fetch('https://secure.askolga.fr/bucket/9ebbc5967b911c0c6cf407e7209bee9809923831641679c306cf63ff9e69fe485fe9f28d378a1/search/321cd4c6b809149425a6a20e7f5c2a5740955a710e7747bc97a89808ab6677a55fe9f392484bb-show.json')
    .then(response => response.json())
    .then((data) => {
        // Création d'une boucle for in permettant à la variable key de navigué dans l'Array, de façon à en extraire l'information voulue, ici le "filename"
        for (let key in data.documents){
            // On stock l'action décrite ci-dessus dans une variable "newkey", puis on l'associe à une variable "card" permettant de créer une liste dans le dom. Card sera associée à "list"
            newkey = data.documents[key].filename
            const card = document.createElement('li')
            card.setAttribute('class', 'card')
            card.textContent = newkey
            list.appendChild(card)
            // On calcul le nombre d'entrées trouvées par "key" à chaque tour, puis on lui ajoute 1 unité supplémentaire
            counter++
        }
        // On donne la quantité d'entrés trouvés qui correspondent à notre recherche, ici "filename", que l'on stock dans la variable textcounter afin de l'afficher sous forme de texte
        textcounter.textContent = counter + " documents trouvés";
    });
})
// On recommence avec deux autres boutons que l'on associe à deux autres api contenant des informations différentes. A l'aide de for in, on recherche la même chose dans des api différentes.
btn2.addEventListener('click', () => {
    counter = 0;
    list.innerHTML='';

    fetch('https://secure.askolga.fr/bucket/9ebbc5967b911c0c6cf407e7209bee9809923831641679c306cf63ff9e69fe485fe9f28d378a1/search/5709862eab153b00caa043c7ac80e358bf37a056f2aec0baf4d41ef114e609175ff489b3b307f-show.json')
    .then(response => response.json())
    
    .then((data) => {
        for (let key in data.documents){
            newkey = data.documents[key].filename
            const card = document.createElement('li')
            card.setAttribute('class', 'card')
            card.textContent = newkey
            list.appendChild(card)
            counter++
        }
        textcounter.textContent = counter + " documents trouvés";
    });
})

btn3.addEventListener('click', () => {
    counter = 0;
    list.innerHTML='';

    fetch('https://secure.askolga.fr/bucket/9ebbc5967b911c0c6cf407e7209bee9809923831641679c306cf63ff9e69fe485fe9f28d378a1/search/389418f1225f269282ba2bf4e8c749d5e2a5430630bd94446b3bbf96276d2f6c5ff4a0783d81e-show.json')
    .then(response => response.json())
    
    .then((data) => {
        for (let key in data.documents){
            newkey = data.documents[key].filename
            const card = document.createElement('li')
            card.setAttribute('class', 'card')
            card.textContent = newkey
            list.appendChild(card)
            counter++
        }
        textcounter.textContent = counter + " documents trouvés";
    });
})