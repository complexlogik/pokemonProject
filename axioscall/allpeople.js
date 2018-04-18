
let ul = document.querySelector("ul")

class fullMetal {
  constructor() {
    this.all = []
  }
  add(pokemon) {
    this.all.push(pokemon)
  }
}


class Pokemon {
  constructor(name, hp, attack, defence) {
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defence = defence
  }
}


axios.get("https://pokeapi.co/api/v2/pokemon/")
.then((response) => {
  let data = response.data


  data.forEach((item) => {

    let li = document.createElement("li")


    let pokemon = new Pokemon(
      item["name"],
      item["hp"],
      item["attack"],
      item["defence"]
    )

    fullMetal.add(pokemon)


    for (let i = 0; i < data.length; i++) {
   ul.innerHTML += ('<li>'+ 'Name:'+ ' ' + pokemon.name.concat(' HP: ' + pokemon.hp)
    .concat(' <br> Attack: ' +pokemon.attack)
    .concat(' <br> Defence: ' + pokemon.defence) + '</li>');
    ul.appendChild(li)
}


  })

}).catch((error) => {

  console.log(error)
})
