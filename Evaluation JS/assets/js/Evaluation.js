// Total d'une commande
var button = document.getElementById("button1");
//déclaration de variable en recherche de l'id du boutton
button.addEventListener('click', Ex1);
//le onClick non intrusif

function Ex1(){
//prix unitaire
let pu = parseInt(prompt("Veuillez entrer le prix unitaire du produit."));
//quantité commandée
let qtecom = parseInt(prompt("Veuillez entrer la quantité du produit."));
//total de la multiplication
let pap = pu*qtecom;
//le port
let port = 0;
//la remise
let rem = 0;
//Prix à payer total
let tot = 0;
//traitement du frais de port
if (tot >= 500){
    port = 0;
}else{
    port = Math.max(6,pap*0.02);
//Si le nombre le plus grand (pap*0.02) est inférieur à 6, alors Math.max ecrira 6 (Math.max donne le max en commençant par la valeur la plus petite donnée)
}
//la remise
if (pap >= 100 && pap <= 200){
    rem = 5; //5%
}else if (pap > 200){
    rem = 10; //10%
}
//prix à payer = quantité*PU - la remise + les frais de port
tot = pap-(pap*(rem/100))+port;
console.log("Total "+tot);
console.log("Quantité*PU "+pap);
console.log("Port "+port);
console.log("Remise "+rem+"%");
console.log("Le prix total à payer est de "+tot+"€ prenant en compte "+pap*(rem/100)+"€ de remise et aussi "+port+"€ de frais de port.");
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Somme des entiers inférieurs à N
var button = document.getElementById("button2");
//déclaration de variable en recherche de l'id du boutton
button.addEventListener('click', Ex2);
//le onClick non intrusif

function Ex2(){

let N = parseInt(prompt("Ecrire le nombre souhaitez."))
let somme = 0;
for (i=0; i<N; i++){//i=0 psk on commence à zéro, i<=N psk on veux la liste avant le N tapé et i++ pour avoir une incrémentation de 0 à N
    console.log(i)//pour avoir la liste dans la page avec un espace (pour m'aider à verifier)
    somme +=i;//On ajoute I jusqu'à arriver à 0
}
console.log("Voici la somme des nombres précédent celui que vous avez tapé: "+somme);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mini et maxi
var button = document.getElementById("button3");
//déclaration de variable en recherche de l'id du boutton
button.addEventListener('click', Ex3);
//le onClick non intrusif

function Ex3(){
    let myTableau = new Array();
    let nombre;
    let i = 0;

    do {
        nombre = parseInt(prompt("Veuillez entrer un nombre. Pour arreter la saisie, taper 0."));
        myTableau.push(nombre);
        //pour faire les nombre à la queue
        i++;
        //i permet l'incrémentation des cases du tableau
    }while (nombre != 0);
    myTableau.pop();
    //le pop sert à enlever le zéro entré pour arréter la saisie
    let max = myTableau.reduce(function(a,b) {
        return Math.max(a, b);
      });
//.reduce : c'est le nom de la fonction
// Pas oubliez de fermer la parenthèse et le point-virgule après le croché de la fonction car ça ferme le .reduce (le let max par exemple quoi)
// a siginifie le début du tableau et b la fin
    let min = myTableau.reduce(function(a,b) {
        return Math.min(a, b);
      });
      console.log("Le minimum est: "+min+"\n"+"Le maximum est: "+max);
      console.log("Minimum: "+min);
      console.log("Maximum: "+max);
      console.log("Le Tableau: "+myTableau);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Calcul du nombre de jeunes, de moyens et de vieux
var button = document.getElementById("button4");
//déclaration de variable en recherche de l'id du boutton
button.addEventListener('click', Ex4);
//le onClick non intrusif

function Ex4(){
    let jeune = 0;
    // jeunes (- de 20)
    let moyen = 0;
    //moyenne d'age (20-40)
    let vieux = 0;
    //les anciens (+ de 40)
    let age = 0;
    //age demandé (le 0 pour initialiser la variable)

    while (age < 100){
        age = parseInt(prompt("Veuillez entrer l'age en finissant par la personne dépassant les 100 ans. "));
// rentré de l'information sous forme de liste d'age dans l'ordre
        if (age < 20){
            jeune += 1;
//compteur +1 quand y'a une personne inférieur a 20 ans
        }else if (age >= 20 && age <= 40){
            moyen += 1;
//compteur +1 quand y'a une personne entre 20 et 40 ans
        }else {
            vieux +=1;
//compteur +1 quand y'a une personne supérieur a 40 ans
        }
    }
    console.log("- de 20 ans: "+jeune);
    console.log("Entre 20 et 40 ans: "+moyen);
    console.log("+ de 40 ans: "+vieux);
    console.log("Vous venez de saisir "+jeune+" personne(s) d'âge inférieur à 20 ans, "+moyen+" personne(s) ayant entre 20 et 40 ans ainsi que "+vieux+" personne(s) d'âge supérieur à 40 ans (Centenaire inclu !).");
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Table de multiplication
var button = document.getElementById("button5");
//déclaration de variable en recherche de l'id du boutton
button.addEventListener('click', Ex5);
//le onClick non intrusif

function Ex5(){
    let chiffre = parseInt(prompt("Veuillez entrer le chiffre dont vous souhaitez la table."));
    let table = 0;

    console.log("Table de multiplication de "+chiffre);
    console.log("=============================");

    for (i=0; i<=10; i++){
//i=0 car une table commence à zéro, puis i<=10 car une table va jusqu'à 10 et i++ parce que c'est une incrémentation
        table = chiffre*i;
//table = chiffre souhaitez fois le multiplicateur i
        console.log(chiffre+" x "+i+" = "+table);
    }
    console.log("=============================");
    console.log("Fin de table et fin de boucle.");
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Recherche d'un prénom
var button = document.getElementById("button6");
//déclaration de variable en recherche de l'id du boutton
button.addEventListener('click', Ex6);
//le onClick non intrusif

function Ex6(){
    let myTableau = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    let prenom = prompt("Entrez le prénom souhaitez. /!\ N'oubliez pas la majuscule au début du prénom !");
    let position = myTableau.indexOf(prenom);
//recherche la position du prénom recherché

    if(position < 0 || position > 10){
//si -1 ou 11, sa sort du tableau puisque ma première case c'est 0 et ma dernière c'est 10 (vu que y'a 10 prénoms)
        console.log("Le prénom recherché n'est pas présent dans ce tableau");
    }else{
        myTableau.splice(position, 1);
// On supprimer 1 élément à partir de son indexOf (sa position)(On demande de supprimer une seul valeur qui est la position recherchée)
        myTableau.push(" ");
// on ajoute la ligne vide à la fin
        console.log(myTableau);
}
}