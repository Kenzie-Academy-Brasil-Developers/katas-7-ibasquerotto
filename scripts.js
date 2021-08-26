// /**===================================================================================================================== 
//  * 
//  * forEach()  Executa uma função callback uma vez para cada elemento da matriz
// ========================================================================================================================*/


const arrayNum1 = [1, 2, 3, 4, 5]

function mostrarNum (el, i, array) {
    console.log(`${i} - ${el}`)
    console.log(array)
}
console.log("ForEach:")
arrayNum1.forEach(mostrarNum)

function newForEach(array, funCallback){
    for(let i = 0; i < array.length; i++ ){
        funCallback(array[i], i, array)
    }
}
console.log("NewForEach:")
newForEach(arrayNum1,mostrarNum)

console.log("==========================================================")
console.log("==========================================================")
// /**===================================================================================================================== 
//  * 
//  * fill() Altera os elementos de uma matriz para um valor X (value) do indice 0 (start) até o indice array.length (end)
// ========================================================================================================================*/

const arrayNum2 = [1, 2, 3, 4]
console.log(`Array original ${arrayNum2}`)

console.log(`Array com fill ${arrayNum2.fill(0, 2, 4)}`)

function newFill(value, start, end, array){
    for (let i = 0; i < array.length; i++){
        if (i >= start && i < end){
            array[i] = value
        }
    }
    console.log(`Array com newFill: ${array}`)
    return array
}

newFill(0, 2, 4, arrayNum2)


console.log("==========================================================")
console.log("==========================================================")
// /**===================================================================================================================== 
//  * 
//  * map() Cria uma nova matriz com os resultados da função callback em cada elemento da matriz
// ========================================================================================================================*/

const arrayNum3 = [1, 4, 9, 16]

function dobraValor(value){
    return value * 2
} 

const retornoMap = arrayNum3.map(dobraValor)

console.log(`Array original: ${arrayNum3}`)
console.log(`Array com map: ${retornoMap}`)

function newMap(array, funCallback){
    let output = []
    for (let i = 0; i < array.length; i++){
        output.push(funCallback(array[i]))
    }
    console.log(`Array com newMap: ${output}`)
    return output
}

newMap(arrayNum3, dobraValor)

console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * some() Testa se ao menos um elemento da matriz passa no teste da função callback
// ========================================================================================================================*/

const arrayNum4 = [1, 2, 3, 4, 5]

console.log(`Array original: ${arrayNum4}`)

function isEven(element){
    if (element % 2 === 0){
        return true
    }
}

console.log(`Resultado com Some: ${arrayNum4.some(isEven)}`)

function newSome(array, funCallback){
    
    let evens = 0

    for (let i = 0; i < array.length; i++ ){
        if (funCallback(array[i])){
            evens++
        }
    }
    
    if(evens >= 1){
        return true
    }
    return false
}
console.log (`Resultado com newSome: ${newSome(arrayNum4, isEven)}`)


console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * find() Retorna o primeiro elemento que satisfaça uma condição de teste fornecida
// ========================================================================================================================*/

const arrayNum5 = [5, 12, 8, 130, 44]
console.log(`Valor do Array: ${arrayNum5}`)

function maiorQueDez(value){
    if(value > 10){
        return value
    }
}
console.log (`Valor do Find: ${arrayNum5.find(maiorQueDez)}`)




function newFind(array, funCallback){
    for (let i = 0; i < array.length; i++){
        if(funCallback(array[i])){
            return array[i]
        }

    }
    return undefined
}

console.log(`Valor do NewFind: ${newFind(arrayNum5, maiorQueDez)}`)

console.log("==========================================================")
console.log("==========================================================")
// /**===================================================================================================================== 
//  * 
//  * findIndex() retorna o indice do primeiro elemento da matriz que satisfaz uma condição
// ========================================================================================================================*/

const arrayNum6 = [5, 12, 8, 130, 44]
console.log(`Valor do Array: ${arrayNum6}`)

function maiorQueTreze(value){
    if(value > 13){
        return value
    }
}
console.log (`Valor do findIndex: ${arrayNum6.findIndex(maiorQueTreze)}`)


function newFindIndex(array, funCallback){
    for (let i = 0; i < array.length; i++){
        if(funCallback(array[i])){
            return i
        }
    }
    return undefined
}

console.log(`Valor do NewFindIndex: ${newFindIndex(arrayNum6, maiorQueTreze)}`)

console.log("==========================================================")
console.log("==========================================================")
// /**===================================================================================================================== 
//  * 
//  * every() Verifica se todos os elmentos do array satisfazem a condição da função callback
// ========================================================================================================================*/

const arrayNum7 = [1, 30, 39, 29, 10, 13]
console.log(`Array: ${arrayNum7}`)

function abaixoLimite(value){
    if (value < 40){
        return true
    }
}

console.log(`Resultado com every: ${arrayNum7.every(abaixoLimite)}`)

function newEvery(array, funCallback){
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (funCallback(array[i])){
            count++
        }
    }
    if (count === array.length){
        return true
    }
    return false
}

console.log(`Resultado com newEvery: ${newEvery(arrayNum7, abaixoLimite)}`)


console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * filter() Cria um novo array com todos os elementos que passarem no teste da callback
// ========================================================================================================================*/

const words = ['spray', 'limit', 'elit', 'exuberant', 'destruction', 'present'];

console.log(`Usando o Filter: ${words.filter(maisDeSeisLetras)}`)


function maisDeSeisLetras(string) {
    if(string.length > 6 ){
        return true
    }
    return false

}

function newFilter(array, funCallback){
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if(funCallback(array[i])){
            novoArray.push(array[i])
        }
    }
    return novoArray
}

console.log(`Usando o newFilter ${newFilter(words, maisDeSeisLetras)}`)

console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * concat() mescla 2 ou mais arrays
// ========================================================================================================================*/

const array01 = ['a', 'b', 'c']
const array02 = ['d', 'e', 'f', 'g']

const array03 = array01.concat(array02)

console.log(array01)
console.log(array02)
console.log(`Usando concat: ${array03}`)

function newConcat(array1, array2){
    let novoArray = []
    for(let i = 0; i < array1.length; i++){
        novoArray.push(array1[i])
    }
    for(let j = 0; j < array2.length; j++){
        novoArray.push(array2[j])
    }
    return novoArray
}

console.log(`Usando newConcat: ${newConcat(array01, array02)}`)

console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * includes() verifica se existe o valor dentro da matriz retorna true or false
// ========================================================================================================================*/

const arrayNum8 = [1, 2, 3]
console.log(arrayNum8)

console.log(`Usando o includes: ${arrayNum8.includes(2)}`)

function newIncludes(array, value){
    for (let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true
        }
    }
    return false
}

console.log(`Usando newIncludes: ${newIncludes(arrayNum8, 2)}`)

console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * indexOf()
// ========================================================================================================================*/

const arrayNum9 = [5, 12, 8, 130, 44]
console.log(`Valor do Array: ${arrayNum9}`)

console.log (`Usando indexOf: ${arrayNum9.indexOf(12)}`)

function newIndexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i
        }
    }
    return -1
}

console.log(`Usndo NewIndexOf: ${newIndexOf(arrayNum9, 12)}`)
console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * join()
// ========================================================================================================================*/

const elements = ['Fire', 'Air', 'Water']
console.log(elements)

console.log(`Usando join: ${elements.join()}`)

function newJoin (array, separator){
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if(separator === undefined){
            novoArray.push(array[i])
        }
        else{
            novoArray.push(array[i]+separator)
            
        }

    }
    return novoArray.toString()
}

console.log(`Usando newJoin: ${newJoin(elements)}`)

console.log("==========================================================")
console.log("==========================================================")

// /**===================================================================================================================== 
//  * 
//  * reduce()
// ========================================================================================================================*/
const array10 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(`Usando reduce: ${array10.reduce(reducer)}`)

function newReduce(array, accumulator){
    if(accumulator === undefined){
        accumulator = 0
    }
    let sum = accumulator
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(`Ùsando newReduce: ${newReduce(array10)}`)


console.log("==========================================================")
console.log("==========================================================")