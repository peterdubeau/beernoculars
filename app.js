const getOption = async () => {

  try {
    // accessing the BreweryDB API with an endpoint 
    // of "beers"
    const url = "http://api.brewerydb.com/v2/beers/?key=f5be82be5b9ee3151bbe291b9f9596fa"
    const res = await axios.get(url)
    styleList = (res.data.data)
    // console.log(styleList)
 
    const selectStyle = document.querySelector('#select-style')    // Logging the beers to make sure we have access
    
    let beerInfo = []

    // This block of code populates the Style Drop Down with "glass" value from API
    // I used glass value because it was much closer to an accurate style description.
    for (let i = 0; i < styleList.length; i++) {
      beerInfo = styleList[i].style
      const option = document.createElement('option') 
      option.value = `${beerInfo.shortName}`
      option.text = `${beerInfo.shortName}`
      selectStyle.append(option)
      console.log(beerInfo.name)
    }
  
  } catch (error) {
    console.log(`THERE WAS AN ERROR: ${error}`)
  }

}
getOption()

// Hard coding the ABV options into the 2nd drop down menu
// CLEAN THIS UP IN POST MVP
const selectABV = document.querySelector("#select-abv")  
  selectABV.options[selectABV.options.length] = new Option("Less than 5%", 1)
  selectABV.options[selectABV.options.length] = new Option("5% to 7%", 2)
  selectABV.options[selectABV.options.length] = new Option("7.1% to 9.9%", 3)
  selectABV.options[selectABV.options.length] = new Option("More than 10%", 4)
