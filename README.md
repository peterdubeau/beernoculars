# Project Overview

## Beernoculars

## Project Description

An application that gives the user a list of beers they may like based on a few search criteria (style, ABV, ect.) The page will then display up to 4 beers that match the users request. The results will include: An image of the beer or its logo, ABV some additional information as selected in the dropdown menus. 

## API and Data Sample

[breweryDB](http://api.brewerydb.com/v2)

```json

    "data": [
        {
            "id": "c4f2KE",
            "name": "'Murican Pilsner",
            "nameDisplay": "'Murican Pilsner",
            "abv": "5.5",
            "glasswareId": 4,
            "styleId": 98,
            "isOrganic": "N",
            "isRetired": "N",
            "labels": {
                "icon": "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-icon.png",
                "medium": "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-medium.png",
                "large": "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-large.png",
                "contentAwareIcon": "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-contentAwareIcon.png",
                "contentAwareMedium": "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-contentAwareMedium.png",
                "contentAwareLarge": "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-contentAwareLarge.png"
            },
            "status": "verified",
            "statusDisplay": "Verified",
            "createDate": "2013-08-19 11:58:12",
            "updateDate": "2018-11-02 02:15:14",
            "glass": {
                "id": 4,
                "name": "Pilsner",
                "createDate": "2012-01-03 02:41:33"
            },
            "style": {
                "id": 98,
                "categoryId": 8,
                "category": {
                    "id": 8,
                    "name": "North American Lager",
                    "createDate": "2012-03-21 20:06:46"
                },
                "name": "American-Style Pilsener",
                "shortName": "American Pilsener",
                "description": "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
                "ibuMin": "25",
                "ibuMax": "40",
                "abvMin": "5",
                "abvMax": "6",
                "srmMin": "3",
                "srmMax": "6",
                "ogMin": "1.045",
                "fgMin": "1.012",
                "fgMax": "1.018",
                "createDate": "2012-03-21 20:06:46",
                "updateDate": "2015-04-07 15:40:08"
            }
        }
```

## Wireframes

[Wireframe Layout](https://wireframe.cc/pro/pp/54f2e6a19349492)

## MVP/Post MVP

#### MVP 

- Multiple drop down menus by search category (ABV & Style)
- Display Beer Image along with key information of up to 4 beers
- Show random beer button (Beer Roulette!)

#### PostMVP  

- Text search function. 
- additional search categories (SRM, Location, hops, yeast)
- Media query for dynamic viewing
- Add a "show 4 more" or next page button for results larger than 4.
- If there are less than 4 results, display additional beers of chosen style and note that they do not match selected ABV 
- Clickable link to google search or breweries Website 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt, WireFrame, Priority Matrix | Complete
|June 9| Core Application Structure (HTML, JavaScript, basic CSS & initial API setup)| Complete
|June 10| JavaScript and API  | Complete
|June 11| Initial Clickable Model  | Complete
|June 12| MVP & additional CSS styling | Complete
|June 15| Present | Incomplete

## Priority Matrix

[Priority-Matrix](https://app.conceptboard.com/board/aueq-65r2-izir-3ftc-qfpt)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 2hrs | 2hrs | 2hrs | 2hrs |
| Building base HTML & CSS | H | 4hrs | 3hrs | - |
| Adding Drop down menus | M | 5hrs| 4hrs | - |
| Working with API | H | 5hrs| | 5hrs | - |
| Rendering API to DOM | H | 6hrs| | 6hrs | - |
| Random Button | L | 3hrs | 2hrs | 3hrs |
| Fine Tuning CSS | M | 6hrs | - | - |
| Media Queries | L | 4hrs | - | -|
| Total | H | 35hrs| 2hr | 2hrs |

## Code Snippet

I was having issues getting beers without images to display a default image of my choice. In theory I knew how to get it working, but execution was a bit more tricky. I got about 90% of the way there with this bit of code:

```
const getImgUrl = function (beer) {
  if (beer.labels == null) {
    return "https://lh3.googleusercontent.com/bwwXynqbucYks7jO03GwEZnAg09dnZ9exhf0R2ZakWw_j2IHnK0NloicgoQaHx-XG17pbx4u0Fzz6RKJMWcdKDx41RbztnI=s750"
  }
  return beer.labels.medium
}
```

Then i discovered i could use a function WITHIN my string concatination to make the default image display:

```
listBeers.forEach((info) => {
    createRandomList.innerHTML += `
    <div class="beer-card">
      <img class="label" src="${getImgUrl(info)}" height = "200px">
```

After i got this function working I was able to re-purpose and use it several times throughout the project. 

## Change Log
- Minor changes due to restricted data in API (6/11/20)
    - Updated MVP. Will only display 4 beers now
    - Updated post MVP to display additional beers if no ABV requirements met
