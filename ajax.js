/* Tried to create my own FULL pokedex with all the pokemon(took about 9hours...zzz lol)
I tried two ways, thought process was target all pokemon name from the pokemon.api
and push the name into an array ==> then outputting name into a side div container that 
would ultimetely become a button that generated a new container that would hold the pokemon
being generated via calling on the index of the name + 1 and creating elementbyID and string.concat as you see below 
to output the info.. it would have been glorious!!!!!
*/

// let ul = document.querySelector("ul");

// class fullMetal {
//   constructor() {
//     this.all = [];
//   }
//   add(pokemon) {
//     this.all.push(pokemon);
//   }
// }

// class Pokemon {
//   constructor(name, hp, attack, defence) {
//     this.name = name;
//     this.hp = hp;
//     this.attack = attack;
//     this.defence = defence;
//   }
// }

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// class Pokemon {
//   constructor(index, name, hp, attack, defense, abilities) {
//     this.index = index;
//     this.name = name;
//     this.hp = hp;
//     this.attack = attack;
//     this.defense = defense;
//     this.abilities = abilities;
//   }
// }

// axios
//   .get("https://pokeapi.co/api/v2/pokemon/?limit=949")
//   .then(response => {
//       let pokemonName = [];

//       for (let i = 0; i < 2; i++) {
//       pokemonName.push(response.data.results[i].name)
//       console.log(pokemonName)
//       }
// axios
//   .get("https://pokeapi.co/api/v2/pokemon/")
//   .then(response => {
//     let data = response.data;

//     data.forEach(item => {
//       let li = document.createElement("li");

//       let pokemon = new Pokemon(
//         item["name"],
//         item["hp"],
//         item["attack"],
//         item["defence"]
//       );

//       fullMetal.add(pokemon);

//       for (let i = 0; i < data.length; i++) {
//         ul.innerHTML +=
//           "<li>" +
//           "Name:" +
//           " " +
//           pokemon.name
//             .concat(" HP: " + pokemon.hp)
//             .concat(" <br> Attack: " + pokemon.attack)
//             .concat(" <br> Defence: " + pokemon.defence) +
//           "</li>";
//         ul.appendChild(li);
//       }
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

//boring axios call

let ul = document.querySelector("ul");
class fullMetal {
  constructor() {
    this.all = [];
  }
  add(pokemon) {
    this.all.push(pokemon);
  }
}

class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

axios
  .get("https://pokeapi.co/api/v2/pokemon/791/")
  .then(response => {
    let data = response.data;
    let name = document.querySelector("#solname");
    let hp = document.querySelector("#solhp");
    let attack = document.querySelector("#solattack");
    let defence = document.querySelector("#soldefence");
    let ability1 = document.querySelector("#solability1");
    let ability2 = document.querySelector("#solability2");
    let ability3 = document.querySelector("#solability3");

    let solgaleo = new Pokemon();
    name.innerHTML = data.name;
    hp.innerHTML = "Hp: " + data.stats[5].base_stat;
    attack.innerHTML = "Attk: " + data.stats[4].base_stat;
    defence.innerHTML = "Def: " + data.stats[3].base_stat;
    ability1.innerHTML = data.abilities[0].ability.name;
    // ability2.innerHTML = data.abilities[1].ability.name;
    // ability3.innerHTML = data.abilities[2].ability.name;
  })
  .catch(error => {
    console.log(error);
  });

  axios
  .get("https://pokeapi.co/api/v2/pokemon/405/")
  .then(response => {
    let data = response.data;
    let name = document.querySelector("#luxname");
    let hp = document.querySelector("#luxhp");
    let attack = document.querySelector("#luxattack");
    let defence = document.querySelector("#luxdefence");
    let ability1 = document.querySelector("#luxability1");
    let ability2 = document.querySelector("#luxability2");
    let ability3 = document.querySelector("#luxability3");

    let luxray = new Pokemon();
    // name.innerHTML = data.name;
    hp.innerHTML = "Hp: " + data.stats[5].base_stat;
    attack.innerHTML = "Attk: " + data.stats[4].base_stat;
    defence.innerHTML = "Def: " + data.stats[3].base_stat;
    ability1.innerHTML = data.abilities[0].ability.name;
    // ability2.innerHTML = data.abilities[1].ability.name;
    // ability3.innerHTML = data.abilities[2].ability.name;
  })
  .catch(error => {
    console.log(error);
  });

  axios
  .get("https://pokeapi.co/api/v2/pokemon/658/")
  .then(response => {
    let data = response.data;
    // let name = document.querySelector("#gname");
    let hp = document.querySelector("#ghp");
    let attack = document.querySelector("#gattack");
    let defence = document.querySelector("#gdefence");
    let ability1 = document.querySelector("#gability1");
    let ability2 = document.querySelector("#gability2");
    let ability3 = document.querySelector("#gability3");

    let greninja = new Pokemon();
    name.innerHTML = data.name;
    hp.innerHTML = "Hp: " + data.stats[5].base_stat;
    attack.innerHTML = "Attk: " + data.stats[4].base_stat;
    defence.innerHTML = "Def: " + data.stats[3].base_stat;
    ability1.innerHTML = data.abilities[0].ability.name;
    // ability2.innerHTML = data.abilities[1].ability.name;
    // ability3.innerHTML = data.abilities[2].ability.name;
  })
  .catch(error => {
    console.log(error);
  });
