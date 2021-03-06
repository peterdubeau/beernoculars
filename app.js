const getOption = async () => {

  try {
    // accessing the BreweryDB API with an endpoint 
    // of "beers"
    const url = "http://api.brewerydb.com/v2/beers/?key=f5be82be5b9ee3151bbe291b9f9596fa"
    const res = await axios.get(url)
    styleList = (res.data.data)
    // console.log(styleList)
    // console.log(res)

    const selectStyle = document.querySelector('#select-style')    // Logging the beers to make sure we have access

    // This block of code populates the Style Drop Down with "glass" value from API
    // I used glass value because it was much closer to an accurate style description.
    for (let i = 0; i < styleList.length; i++) {
      beerInfo = styleList[i].style
      const option = document.createElement('option')
      option.value = `${beerInfo.category.id}`
      option.text = `${beerInfo.shortName}`
      selectStyle.append(option)
      // console.log(styleList)
    }
    console.log(beerInfo.shortName)
  } catch (error) {
    // console.log(`THERE WAS AN ERROR: ${error}`)
  }

}
getOption()

// Hard coding the ABV options into the 2nd drop down menu
const selectABV = document.querySelector("#select-abv")
selectABV.options[selectABV.options.length] = new Option("Less than 6% ABV", 5.9)
selectABV.options[selectABV.options.length] = new Option("More than 6% ABV", 6)

// take the beer style selected in
//the drop down and append to the DOM
const showBeer = document.querySelector("#show-beer")
showBeer.addEventListener('click', customBeers)

async function customBeers(e) {
  const url = "http://api.brewerydb.com/v2/beers/?key=f5be82be5b9ee3151bbe291b9f9596fa"
  const res = await axios.get(url)
  styleList = (res.data.data)

  // Filters out any beers that don't have style.
  // then returns beers based on the users choices. 
  e.preventDefault()
  const removeBeer = document.querySelector('#append-beer')
  const getBeer = document.querySelector('#select-style')
  const getABV = document.querySelector('#select-abv')
  // turns string `value` into a base10 integer
  const selectABV = parseInt(getABV.value, 10)
  const selectValue = parseInt(getBeer.value, 10) 


  let filteredList = styleList.filter(j => {
    return "style" in j
  }).filter(i => {
    return i.style.category.id === selectValue
  }).filter(k => {
    if (selectABV < 6) {
      return parseInt(k.abv, 10) < 5.9
    } else if (selectABV > 5.9) {
      return parseInt(k.abv, 10) > 6
    } else {
      console.log("oops")
    }
  })

  // appends the beer information to the DOM
  const createList = document.createElement('beer-list')
  clearList()
  // filteredList.length = 4 // Wont return more than 4 beers
  randomize(filteredList)
  filteredList.length = 4
  filteredList.forEach((info) => {
    createList.innerHTML += `
    <div class="beer-card">
    <img class="label" src="${getImgUrl(info)}" height = "200px">
      <p class="beer-name"><a target="blank" href="https://www.google.com/search?q=${info.name}">${info.name}<a/></p>
      <p>Style: ${info.style.shortName}</p>
      <p>ABV: ${info.abv}%</p>
      <p>${getDescription(info)}</p>
    </div>`
  })
  document.querySelector("#append-beer").append(createList)
}


// same as custom beers, but randomly generates the selection
const showRandomBeer = document.querySelector("#random-beer")
showRandomBeer.addEventListener('click', beerRoulette)


async function beerRoulette(e) {
  const url = "http://api.brewerydb.com/v2/beers/?key=f5be82be5b9ee3151bbe291b9f9596fa"
  const res = await axios.get(url)
  styleList = (res.data.data)


  e.preventDefault()
  // filters out any objects without STYLE array
  let filteredList = styleList.filter(j => {
    return "style" in j
  })

  const createRandomList = document.createElement('beer-list')
  clearList()
  let listBeers = randomize(filteredList)

  listBeers.length = 4 
  listBeers.forEach((info) => {
    createRandomList.innerHTML += `
    <div class="beer-card">
      <img class="label" src="${getImgUrl(info)}" height = "200px">
      <p class="beer-name"><a target="blank" href="https://www.google.com/search?q=${info.name}">${info.name}<a/></p>
      <p>Style: ${info.style.shortName}</p>
      <p>ABV:${info.abv}%</p>
      <p class="description">${getDescription(info)}</p>
    </div>`
  })

  document.querySelector("#append-beer").append(createRandomList)

}
//Removes the beer list when you click one of the buttons
function clearList() {
  const oldBeerList = document.querySelector(`#append-beer`)
  while (oldBeerList.lastChild) {
    oldBeerList.removeChild(oldBeerList.lastChild)
  } oldBeerList.innerHTML = `<h2 class= "dont-like"> Don't see anything you like?</h2> <h3 class ="dont-like">Hit "Show me some brews!" again for some more examples, or try "Beer Roulette" for a random selection! </h3>`
} 

const randomize = function (beers) {

  const randomBeers = beers
  let currentIndex = beers.length
  let temporaryValue = null
  let randomIndex = null
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    temporaryValue = randomBeers[currentIndex]
    randomBeers[currentIndex] = randomBeers[randomIndex]
    randomBeers[randomIndex] = temporaryValue
  }
  return beers
}

// Sort through the objects looking for the style array. If it's there 
// return the URL. If not, kick out a default URL
const getImgUrl = function (beer) {
  if (beer.labels == null) {
    return "https://lh3.googleusercontent.com/bwwXynqbucYks7jO03GwEZnAg09dnZ9exhf0R2ZakWw_j2IHnK0NloicgoQaHx-XG17pbx4u0Fzz6RKJMWcdKDx41RbztnI=s750"
  }
  return beer.labels.medium
}

const getDescription = function (beer) {
  if (beer.description == null) {
    return "Unfortunately we don't have much info on this beer. But if you're interested in it, click on it's name for a quick Google search."
  }
    return beer.description
}


//Fake view counter. Displays the current second for "Viewer Count"
// code found on stack overflow.
const d = new Date();
const n = d.getSeconds();
const counter = document.querySelector(".counter")
// console.log(counter)
const viewCount = document.createElement("viewer-count")
counter.append(viewCount)
viewCount.append(n + 223)
