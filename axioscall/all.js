let div = document.querySelector("div");
let ul = document.querySelector("ul");
class Pokemon {
  constructor(index, name, hp, attack, defense, abilities) {
    this.index = index;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

axios
  .get("https://pokeapi.co/api/v2/pokemon/?limit=949")
  .then(response => {
      let pokemonName = [];

      for (let i = 0; i < 2; i++) {
      pokemonName.push(response.data.results[i].name)
      console.log(pokemonName)
      }


    // Im grabbing a bunch of tags by an id or class that I want to fill with the info from the API.
    // response.data.results.forEach((id) => {
    //     // console.log(response.data.results.name)
    //     pokemonName.push(id.name)
    //     console.log(pokemonName)
    // })
})


//   // retrieve data from hosted person-1 json file
// axios.get("https://pokeapi.co/api/v2/pokemon/50/")
// .then((response) => {
//   // console.log(response.data.abilities[1].ability.name)

//   response.data.abilities.forEach(ability => {
//     console.log(ability.ability.name)
//   })
        // let li = document.createElement("li")
        // let pokemon = new Pokemon(
        //     data["name"],
        //     data["hp"],
        //     data["attack"],
        //     data["defence"]
        //   )
        // //   pokemon.add(pokemon)

        //   for (let i = 0; i < data.length; i++) {
        //     ul.innerHTML += ('<li>'+ 'Name:'+ ' ' + pokemon.name.concat(' HP: ' + pokemon.hp)
        //      .concat(' <br> Attack: ' +pokemon.attack)
        //      .concat(' <br> Defence: ' + pokemon.defence) + '</li>');
        //      // appends created li to the html ul
        //      ul.appendChild(li)
        //   }
        // })


// }).catch((error) => {
//   // runs when there is an error
//   console.log(error)
// })
//     })
//     let index = document.querySelector("#id1");
//     let name = document.querySelector("#name1");
//     let hp = document.querySelector("#hp1");
//     let attack = document.querySelector("#attack1");
//     let defense = document.querySelector("#defense1");
//     let abl1 = document.querySelector(".abl1");
//     let abl2 = document.querySelector(".abl2");
//     let abl3 = document.querySelector(".abl3");
//     let abl4 = document.querySelector(".abl4");

//     // Here I ceate a new pokemon to fill in the info in the class Pokemon with API info.
//     let arcanine = new Pokemon(
//       // Here I write the source of the API information and link it to the position i want it to be displayed, so that it can correlate with the class Pokemon.
//       data.id,
//       data.name,
//       data.stats[5].base_stat,
//       data.stats[4].base_stat,
//       data.stats[3].base_stat,
//       data.abilities[0].ability.name,
//       data.abilities[1].ability.name,
//       data.abilities[2].ability.name,
//       data.moves[7].move.name
//     );

//     // Here I use the info I linked to the class and use it to display it in the HTML file with the querySelector that I grabbed earlier.
//     index.innerHTML = "#0" + data.id;
//     name.innerHTML = data.name;
//     hp.innerHTML = "HP: " + data.stats[5].base_stat;
//     attack.innerHTML = "ATK: " + data.stats[4].base_stat;
//     defense.innerHTML = "DEF: " + data.stats[3].base_stat;
//     abl1.innerHTML = data.abilities[0].ability.name;
//     abl2.innerHTML = data.abilities[1].ability.name;
//     abl3.innerHTML = data.abilities[2].ability.name;
//     abl4.innerHTML = data.moves[7].move.name;
//   })
//   .catch(error => {
//     console.log(error);
//   });

// // ul.innerHTML += ('<li>'+ 'Name:'+ ' ' + pokemon.name.concat(' HP: ' + pokemon.hp)
// //     .concat(' <br> Attack: ' +pokemon.attack)
// //     .concat(' <br> Defence: ' + pokemon.defence) + '</li>');
// //     // appends created li to the html ul
// //     ul.appendChild(li)
// }
