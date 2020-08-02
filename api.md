# API 

## URL
The base URL for the weather API is:

`https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/`

## Authentication
The weather API requires an API key, this needs to be sent for every request.

It needs to be sent as a header called: 

`x-api-key`

Your personal API key should have been given to you in an email. 
If you haven't received an API key please reach out to the recruitment team.

Please don't share it with anyone else.

## Endpoints

The weather API support 2 GET endpoints.

The weather API support 2 locations:

1. heathrow
2. oxford

### Get Years
This returns the amount of years that are available for that locations.

#### URL
This endpoint is available at - `{location}/years`

An example would be: `https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/oxford/years`

#### Example response
The following is an example response from the API:

```
{
    "result": {
        "startYear": 1853,
        "endYear": 2018
    }
}
```

### Get Data
This returns the weather data for that year and location.

#### Note
Some fields inside the results objects can return `null`. This means that data isn't available for that field in that month/year.

#### URL
This endpoint is available at - `{location}/year/{year}`

An example would be: `https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/oxford/year/1853`

#### Example response
The following is an example response from the API:

```
{
    "result": [
        {
            "year": 1853,
            "month": 1,
            "temperature_max": 8.4,
            "temperature_min": 2.7,
            "ad_days": 4,
            "rain": 62.8,
            "sun": null
        },
        {
            "year": 1853,
            "month": 2,
            "temperature_max": 3.2,
            "temperature_min": -1.8,
            "ad_days": 19,
            "rain": 29.3,
            "sun": null
        },
        {
            "year": 1853,
            "month": 3,
            "temperature_max": 7.7,
            "temperature_min": -0.6,
            "ad_days": 20,
            "rain": 25.9,
            "sun": null
        },
        {
            "year": 1853,
            "month": 4,
            "temperature_max": 12.6,
            "temperature_min": 4.5,
            "ad_days": 0,
            "rain": 60.1,
            "sun": null
        },
        {
            "year": 1853,
            "month": 5,
            "temperature_max": 16.8,
            "temperature_min": 6.1,
            "ad_days": 0,
            "rain": 59.5,
            "sun": null
        },
        {
            "year": 1853,
            "month": 6,
            "temperature_max": 20.1,
            "temperature_min": 10.7,
            "ad_days": 0,
            "rain": 82,
            "sun": null
        },
        {
            "year": 1853,
            "month": 7,
            "temperature_max": 21.2,
            "temperature_min": 12.2,
            "ad_days": 0,
            "rain": 86.2,
            "sun": null
        },
        {
            "year": 1853,
            "month": 8,
            "temperature_max": 20.2,
            "temperature_min": 10.8,
            "ad_days": 0,
            "rain": 72.3,
            "sun": null
        },
        {
            "year": 1853,
            "month": 9,
            "temperature_max": 17.3,
            "temperature_min": 8.4,
            "ad_days": 0,
            "rain": 51.3,
            "sun": null
        },
        {
            "year": 1853,
            "month": 10,
            "temperature_max": 13.9,
            "temperature_min": 7.4,
            "ad_days": 0,
            "rain": 102.3,
            "sun": null
        },
        {
            "year": 1853,
            "month": 11,
            "temperature_max": 8.7,
            "temperature_min": 2.3,
            "ad_days": 10,
            "rain": 49.6,
            "sun": null
        },
        {
            "year": 1853,
            "month": 12,
            "temperature_max": 3.7,
            "temperature_min": -1.3,
            "ad_days": 19,
            "rain": 10.7,
            "sun": null
        }
    ]
}
```