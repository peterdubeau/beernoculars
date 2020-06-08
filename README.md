# Project Overview

# Beernoculars

## Project Description

An application that gives the user a list of beers they may like based on a few search criteria (style, ABV, SRM, region, ect.) The page will then display up to 10 beers that match the users request. The results will include: An image of the beer or its logo, a brief description and some additional information as selected in the dropdown menus. 

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

#### MVP 

- Multiple drop down menus by search category (ABV & Style)
- Display Beer Image along with key information of up to 8 beers
- Show random beer button (Beer Roulette!)
- Media query for dynamic viewing
- Clickable link to google search or breweries Website

#### PostMVP  

- Text search function. 
- additional search categories (SRM, Location, hops, yeast)
- Add a "show 8 more" or next page button for results larger than 8.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt, WireFrame, Priority Matrix | Incomplete
|June 9| Core Application Structure (HTML, JavaScript & basic CSS, etc.)| Incomplete
|June 10| JavaScript and API  | Incomplete
|June 11| Initial Clickable Model  | Incomplete
|June 12| MVP & additional CSS styling | Incomplete
|June 15| Present | Incomplete

## Priority Matrix

[Priority-Matrix](https://app.conceptboard.com/board/aueq-65r2-izir-3ftc-qfpt)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | | 2hrs | 2hrs | 2hrs |
| Building base HTML & CSS | H | 3hrs | - |
| Adding Drop down menus | M | 4hrs|  | - |
| Working with API | H | 6hrs| | - |
| Random Button | L | 3hrs | - |
| Fine Tuning CSS | M | 6hrs | - |
| Media Queries | L | 4hrs | - |
| Total | H | 29hrs| 2hr | 2hrs |

## Code Snippet

```
Coming soon to a proposal near you
}
```

## Change Log

