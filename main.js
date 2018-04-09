let dataInsert = document.querySelector('ul');
//build trainer class & pokemon class

class fullMetal {
    constructor() {
        this.pokemon = []
    }
    all() {
        this.pokemon.push(pokemon);
    }
    get(name) {
        for (let i = 0; i < this.pokemon.length; i++) {
            if ((name) === this.pokemon[i].name) {
                return this.pokemon[i]
            }
        }
    }
}

class pokemon {
    constructor(index, name, hp, attack, defence, spAttack, spDefence, abilites) {
        this.index = index
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defence = defence
        this.spAttack = spAttack
        this.spDefence = spDefence
        this.abilites = []
    }
    addAbility(ability) {
        this.abilites.push(ability)
    }
}


//need to 
let pokeballs = [1,2,3,4,5,6]

pokeballs.forEach(index => {
    axios
.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
.then(response => {

    
    let data = response.data.games_indeces.index

    // data.forEach(name => {

  console.log(data.forms.name)
  //${response.data.forms.name}`)

    })
})

// axios
// .get(`https://pokeapi.co/api/v2/pokemon/+${pokeballs}/+`)
// .then(response => {
//     // let pokemonHolder = [];
//     let data = response.data;

//     data.forEach(name => {

//   console.log(name)
//         //(still putting our multiple objects how do i grab just 1 of each instance?)
//         //name.name pulls up name and name.url pulls up each url in relation to the index
//         //so i need to link name to the nav bar right (if im still going for that approach)
//         //and use name.url to do another axios call right after to gather rest of the information
//         //for a pokedex ==> take all the info and plug it in as a string with string .concat (can i use `? lets try!)


//     })
// })

// axios
//   .get("https://pokeapi.co/api/v2/pokemon/?limit=949")
//   .then(response => {
//     let pokemonName = [];
//     response.data.results.forEach((id) => {
//         pokemonName.push(id.name)
//         console.log(pokemonName)
//     })
// })



