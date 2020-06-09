const getOption = async () => {

  try {
    // accessing the BreweryDB API with an endpoint 
    // of "beers"
    const url = "http://api.brewerydb.com/v2/styles/?key=f5be82be5b9ee3151bbe291b9f9596fa"
    const res = await axios.get(url)
    styleList = (res.data.data)
    
 
    const selectStyle = document.querySelector('#select-style')    // Logging the beers to make sure we have access
    const selectABV = document.querySelector("#select-abv")         // console.log(Object.values(styleList))

    // Turning the list of beers into an array of objects
    // and adding to the drop down
    // styleList.forEach((style) => {
      const option = document.createElement('option')
    for (let i = 0; i < styleList.length; i++) {
      option.value = `${styleList.name}`
      option.text = `${styleList.name}`
      selectStyle.append(option)
    }
        
      
    // })
    // 
    // styleList.forEach((abv) => {
    //   const option = document.createElement('option')
    //     option.value = `${abv}`
    //     option.text = `${abv}`
    //     selectABV.append(option)
    // })


  } catch (error) {
    console.log(`THERE WAS AN ERROR: ${error}`)
  }

}
getOption()