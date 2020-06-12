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
      // console.log(beerInfo)
    }
    console.log(beerInfo.shortName)
  } catch (error) {
    console.log(`THERE WAS AN ERROR: ${error}`)
  }

}
getOption()

// Hard coding the ABV options into the 2nd drop down menu
// CLEAN THIS UP IN POST MVP
const selectABV = document.querySelector("#select-abv")
// selectABV.options[selectABV.options.length] = new Option("Less than 4%", 3.9)
selectABV.options[selectABV.options.length] = new Option("below 6", 5.9)
selectABV.options[selectABV.options.length] = new Option("More than 6", 10)
// selectABV.options[selectABV.options.length] = new Option("More than 10%", 4)

// Now I have to take the beer style selected in
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
  const selectABV = parseInt(getABV.value, 10)
  const selectValue = parseInt(getBeer.value, 10) // turns string `value` into a base10 integer
  // console.log(selectValue, selectABV)
  let filteredList = styleList.filter(j => {
    return "style" in j
  }).filter(i => {
    return i.style.category.id === selectValue
  }).filter(k => {
    return i.abv >= selectABV || i.abv < selectAbv // Maybe this will work? 
  })

  // appends the beer information to the DOM
  const createList = document.createElement('beer-list')
  clearList()
  // randomBeers.length = 4 // Wont return more than 4 beers
  filteredList.forEach((info) => {
    createList.innerHTML += `
    <div class="beer-card">
      <p>${info.name}</p>
      <p>Style: ${info.style.shortName}</p>
      <p>ABV: ${info.abv}%</p>
    </div>`
  })
  document.querySelector("#append-beer").append(createList)

  //Removes the beer list when you click "show brews"


}

function clearList() {
  const oldBeerList = document.querySelector(`#append-beer`)
   while (oldBeerList.lastChild) {
     oldBeerList.removeChild(oldBeerList.lastChild)
   }
 }

// same as custom beers, but randomly generates the selection
const showRandomBeer = document.querySelector("#random-beer")
showRandomBeer.addEventListener('click', randomBeers)
async function randomBeers(e) {
  const url = "http://api.brewerydb.com/v2/beers/?key=f5be82be5b9ee3151bbe291b9f9596fa"
  const res = await axios.get(url)
  styleList = (res.data.data)

  e.preventDefault()
  // const removeBeer = document.querySelector('#append-beer')

  let filteredList = styleList.filter(j => {
    return "style" in j
  })

  const createRandomList = document.createElement('beer-list')
  clearList()
  let randomBeers = randomize(filteredList)
  randomBeers.length = 4
  randomBeers.forEach((info) => {
    createRandomList.innerHTML += `
    <div class="beer-card">
      <p>Style: ${info.style.shortName}</p>
      <p>${info.name}</p>
      <p>ABV: ${info.abv}%</p>
    </div>`
  })
  
  document.querySelector("#append-beer").append(createRandomList)

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

//testing the image library. Will probably be removed before MVP
async function getImage(image) {
  try {

    const url = "http://api.brewerydb.com/v2/beers/?key=f5be82be5b9ee3151bbe291b9f9596fa"
    const res = await axios.get(url)
    const imageList = (res.data.data)
    //How to traverse the API objects down to their images. 
    let beerImg = []
    let noImg = []
    for (let i = 0; i < imageList.length; i++) {
      if (imageList[i].labels == null) {
        noImg.push("USELESS")
      } else {
        beerImg.push(imageList[i].labels.icon)
      }
    } console.log(beerImg)
  } catch (error) {
    console.log(`THERE WAS AN ERROR: ${error}`)
  }
}

// getImage()


// ATTEMPT TO BUILD RANDOM LIST -- WORKS BUT NOT REALLY
// let filteredList = styleList.filter(j => {
//   return "style" in j
// })

// const createRandomList = document.createElement('beer-list')
// clearList()
// let randomBeer = Math.floor(Math.random() * filteredList.length)
// filteredList.length = 4
// filteredList.forEach((info) => {
//   createRandomList.innerHTML += `
//   <div class="beer-card">
//     <p>${info.name}</p>
//     <p>Style: ${info.style.shortName}</p>
//     <p>ABV: ${info.abv}%</p>
//   </div>`
// })


// async function getBeerImg(beer) {
//   try {
//     const res = await axios.get(`"http://api.brewerydb.com/v2/beers/?key=f5be82be5b9ee3151bbe291b9f9596fa"`)
//     let img = res.data.data
//     const beerURL = res.data.data
//     beerPic(beerURL)
//     console.log(beerURL)
//   } catch (error) {
//     console.log(`ERROR: ${error}`)
//   } 

// }
// getBeerImg()


// function optionValue(e) {
  //   e.preventDefault()
  //   const getOption = document.querySelector('#select-style')
  //   const selectValue = getOption.value
  //     console.log(selectValue)
  //     // console.log(getOption)
  //     // const getOption = document.querySelector('form')
  //   getBeer(selectValue)

  // }  

  // const showBeer = document.querySelector('show-beer')
  // showBeer.addEventListener('submit', optionValue)