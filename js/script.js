//Como declarar o array ? a id a ser consultada para innerHTML é declarationOfArrays
var fruits =
    ["Maçã",
        "Laranja",
        "Manga",
        "Maracuja",
        "Uva",
        "Pera",
        "Abacaxi",
        "Graviola",
        "Figo",
        "Tomate"];
console.log(fruits);
document.getElementById("declarationofArrays").innerHTML = fruits;

//Como buscar o primeiro elemento do array ? a id a ser consultada para innerHTML é accessFirstElement
var firstFruit = fruits[0];
console.log(firstFruit);
document.getElementById("accessFirstElement").innerHTML = firstFruit;

//Como buscar o segundo elemento do array ? a id a ser consultada para innerHTML é accessSecondElement
var secondFruit = fruits[1];
console.log(secondFruit);
document.getElementById("accessSecondElement").innerHTML = secondFruit;

//Como buscar o terceiro elemento do array ? a id a ser consultado para innerHTML é accessThirdElement
var thirdFruit = fruits[2];
console.log(thirdFruit);
document.getElementById("accessThirdElement").innerHTML = thirdFruit;

//Como Como obter o comprimento do Array ?
document.getElementById("arraylength").innerHTML = `${fruits.length} Frutas`;

//Como utilizar o loop através do Array ?
let i = 0
while (i < fruits.length) {
    document.getElementById("arrayloopwhile").innerHTML += `- ${fruits[i]} `;
    i++//  ou i+=1
}

//Como adicionar o elemento ao final do Array ?
fruits.push("Melancia")
document.getElementById("arrayadicionar").innerHTML = fruits;

//Como adicionar mais elementos ao final do Array ?
let fruits_2 = ["Amora", "Morango", "Carambola", "Damasco", "Framboesa", "Guarana", "Jaca"]
document.getElementById("arrayconcat").innerHTML = fruits.concat(fruits_2).sort();

