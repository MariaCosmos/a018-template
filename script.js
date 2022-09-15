
// Array que retorna todos os numeros multiplicados por 3

const arraynum = [1, 8, 9, 13, 14, 25, 32]

function multiplicando (array){
  const arrayMultiplicada = []
  for(i in array){
    arrayMultiplicada.push(array[i]*3)
  }
  return arrayMultiplicada
}

console.log(multiplicando(arraynum))

// Array que retorna os numeros pares

function numerosPares (array){
  const arrayPares = []
  for(j in array){
    if(array[j] % 2 === 0){
      arrayPares.push(array[j])
    }
  }
  return arrayPares
}

console.log(numerosPares(arraynum))


// Criando uma função que recebe um array e uma função e imprimir os valores do novo array no console.

const novaFuncao = (array, funcao) =>{
  const arrayFuncao = funcao(array)
  console.log("resultado", arrayFuncao)
}

novaFuncao(arraynum, multiplicando)
novaFuncao(arraynum, numerosPares)

// Refazer a função de numeros pares usando filter()

const filterArray = arraynum.filter((elemento,indice,array)=>{
  if(elemento % 2 ===0){
    return elemento
  }
})
console.log(filterArray)

// Refazer a função de multiplicação usando map()

const mapArray = arraynum.map((elemento, indice, array)=>{
  return elemento * 3 
})
console.log(mapArray)

// Pra guardar na cabeça:

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

// Crie uma função que receba como parâmero o objeto pokemon, e que defina a propriedade vida do pokemon como 100

function vidaCheia (poke){
  poke.vida = 100
}


const pokemonVidaCheia = pokemons.map((elemento, indice, array)=>{
  vidaCheia(elemento)
  return elemento
})

console.log(pokemons)
