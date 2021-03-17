//1. feladat - tetszőleges object

/*
let person = {
    name: 'Ferenc',
    age: 42,
    isMale: true
}

person.name = 'Gábor';
person.age += 5;
person.isMale = false;
*/

//2. Különbség while és do while között:

    /*Míg az előltesztelő ciklus először a feltételt vizsgálja meg és ha az igaz, végre hajtja a kódblokkban foglaltakat, addig az utántesztelő
    először lefuttatja a kódblokkot, majd vizsgálja a feltételt. */

//3. Érték és referencia szerinti paraméterátadás

    /*Érték szerinti referenciaátadáskor az értéket a függvényen belül lehet átadni, változtatni, de az eredeti érték változatlan marad,
    míg a referencia szerinti átadás esetében az eredeti értéket a függvényen belüli változtatás módosítja.

//érték szerinti

    let a = 2;

    const test1 = (a) =>{
        a += 1;
        console.log(a);
    }
    test1(a);
    console.log(a);


// referencia szerinti

    let a = [2];

    const test1 = (a) =>{
    a[0] += 1;
    console.log(a[0]);
    }
    test1(a);
    console.log(a[0]);
    */

/*4. Készíts egy függvényt, amely egy számokat tároló tömböt, és egy számot
vár paraméterül, és visszaadja a keresett elem indexét, ha benne van a
tömbben. Ha nincs, akkor –1 legyen a visszatérési érték!*/

/*const indexOfElement = (nums, num) =>{
    let index = [];
    for (let i = 0; i < nums.length; i++){
        if (num === nums[i]){
            index.push(i);
        }
    } if (index[0]){
         return index;
    } else {
        return -1;
    }
};
console.log(indexOfElement([1,2,3,4,5], 2));*/

/*Készíts egy függvényt, ami egy ilyen objectekkel feltöltött tömböt vár
paraméterül: { planet: ‘Venus’, diameter: 7000}! A függvény adja vissza a
tömbben található legkisebb átmérőjű bolygó nevét!*/


/*const smallestPlanet = (planets) =>{
    for (let i = 0; i < planets.length; i++){
        for (let j = 0; j < planets.length; j++){
            if (planets[j].diameter < planets[i].diameter){
                let temp = planets[i];
                planets[i] = planets[j];
                planets[j] = temp;
            }
        }
    }
    return planets;
};
console.log(smallestPlanet([planets]));*/

/*Írd le az únió tételét vagy egyéb algoritmust, mely két tömb únióját
számolja ki! (10p)*/
/*
const unio = (array1, array2) =>{
    let unionArray = [];
    for (let i = 0; i < array1.length; i++){
        if (unionArray.includes(array1[i]) === false){
            unionArray.push(array1[i]);
        }
    }
    for (let j = 0; j < array2.length; j++){
        if (unionArray.includes(array2[j]) === false){
                unionArray.push(array2[j]);
        }
    }
    return unionArray;
};
*/

/*7.

const aritmetic = require('./aritmetic');
*/
