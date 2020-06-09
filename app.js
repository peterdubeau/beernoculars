const getOption = async () => {
  

  try {
    
    const url = "http://api.brewerydb.com/v2/styles/?key=f5be82be5b9ee3151bbe291b9f9596fa"
    const res = await axios.get(url)
    styleList = (res.data.data)
    
    console.log(res)
    // console.log(styleList)
    const selectStyle = document.querySelector('#select-style')

    styleList.forEach((style) => {
      const option = document.createElement('option')
      for (let i = 0; i < styleList.length; i++) {
        option.value = `${style}`
        option.text = `${style}`
        selectStyle.append(option)
      }
    })
     
  } catch (error) {
    console.log(`THERE WAS AN ERROR: ${error}`)
  }

}
getOption()