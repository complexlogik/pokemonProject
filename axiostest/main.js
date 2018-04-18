
let dataInsert = document.querySelector('.dataInsert')

let pokeballs = [1,2,3,4,5,6,7,8,9,10]


// 

// for (let i = 0;i < 949; i++)
pokeballs.forEach(index => {
    axios
.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
.then(response => {

let name = response.data.forms[0].name
let pUrl = response.data.forms.url

let sprite = response.data.sprites.front_default

dataInsert.innerHTML += `<li><a href='${pUrl}'> ${name}</a></li>`

    })
})
