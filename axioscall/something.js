
// let ul = document.querySelector("ul")
// let i = 0


class Pokemon {
  constructor(num) {
    this.num = num;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.num}/`)
      .then(response => {

          let data = response.data;
          this["name"] = data.forms[0].name;
          this["hp"] = data.stats[5].base_stat;
          this["attack"] = data.stats[4].base_stat;
          this["defense"] = data.stats[3].base_stat;
          this["abilities"] = [];

          data.data.abilites.forEach(ability => {
            this["abilities"].push(ability);
          });
          this["sprite"] = data.sprite.font_default;
        })
    }
}

class fullMetal {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  all() {
    return this.pokemon;
  }

  get(pokemon) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (pokemon === this.pokemon[i].name) {
        return pokemon[i];
      }
    }
}
}
