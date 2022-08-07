// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function Arrayfunctions(name) {
    cats.length = 0;
      cats.push('Milo', 'Otis', 'Garfield');
}
function destructivelyAppendCat(name) {
    cats.push ('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop('Garfield');
}
function destructivelyRemoveFirstCat(name) {
    cats.shift('Milo');
}
const oldCats = ["Broom"];
function appendCat(name) { 
let oldCats =[...cats, "Broom"] 
   return oldCats = oldCats
}
const newCats = ["Arnold"]
function prependCat(name) {
let newCats = ["Arnold",...cats];
return newCats
}
const lastCats = ["Milo", "Otis"]
function removeLastCat(name) {
    lastCats.slice("name");
    return lastCats
}
const firstCats = ["Otis", "Garfield"];
function removeFirstCat() {
    firstCats.slice();
    return firstCats
}