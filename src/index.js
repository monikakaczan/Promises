const fetch = require("node-fetch");
const yearRange = require("./util");
const url = `https://grudwxjpa2.execute-api.eu-west-2.amazonaws.com/dev/`
const apiKey = API_KEY

const init = {
	method: 'GET',
	credentials: 'include',
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		'x-api-key': apiKey,
	}
}
// Get maximum temperate for a year - Must return a number
exports.getMaxTemperature = async ({location, year}) => {

	try {
		const response = await fetch(`${url}${location}/year/${year}`, init)

		if (response.status= 200) {
			const jsonResponse = await response.json()
			const data = jsonResponse.result.reduce((a, b) => a.temperature_max > b.temperature_max ? a : b)
			const maxValue = data.temperature_max

			if (typeof maxValue === 'number') {
				return maxValue
			}
		}
		throw new Error ('Request failed!')
	} catch (err) {
		return 0;
	}
}

// Get minimum temperature for a year - Must return a number
exports.getMinTemperate = async ({location, year}) => {

	try {
		const response = await fetch(`${url}${location}/year/${year}`, init)

		if (response.status= 200) {
			const jsonResponse = await response.json()
			const data = jsonResponse.result.reduce((a, b) => a.temperature_min < b.temperature_min ? a : b)
			const minValue = data.temperature_min

			if (typeof minValue === 'number') {
				return minValue
			}
		}
		throw new Error ('Request failed!')

	} catch (err) {
		return 0;
	}

}

// Get maximum temperate for all years - Must return a number
exports.getMaxTemperatureForLocation = async ({location}) => {
	
	try {
		const response = await fetch(`${url}${location}/years`, init)

		if (response.status = 200) {
			const jsonResponse = await response.json()
		
			const startYear =  jsonResponse.result.startYear
			const endYear = jsonResponse.result.endYear
			
			const years = yearRange(startYear, endYear)

			return Promise.all(years.map(year => this.getMaxTemperature({location, year})))
			.then(data => {
				const maxValue = Math.max(...data)

				if (typeof maxValue === 'number') {
					return maxValue
				} 
			})
		}
		throw new Error ('Request failed!')

	} catch (err) {
		return 0;
	}
	
}

// Get minimum temperature for all years - Must return a number
exports.getMinTemperateForLocation = async ({location}) => {
	
	try {
		const response = await fetch(`${url}${location}/years`, init)

		if (response.status = 200) {
			const jsonResponse = await response.json()
		
			const startYear =  jsonResponse.result.startYear
			const endYear = jsonResponse.result.endYear

			const years = yearRange(startYear, endYear)

			return Promise.all(years.map(year => this.getMinTemperate({location, year})))
			.then(data => {
				const minValue = Math.min(...data)

				if (typeof minValue === 'number') {
					return minValue
				}
			})
		}
		throw new Error ('Request failed!')

	} catch (err) {
		return 0;
	}

}

// Get average sun hours for a year - Must return a number
exports.getAverageSunHours = async ({location, year}) => {
	
	try {
		const response = await fetch(`${url}${location}/year/${year}`, init)

		if (response.status= 200) {
			const jsonResponse = await response.json()
			const responseData = jsonResponse.result

			const data= responseData.reduce((a,b) => ({ sun : a.sun + b.sun}))
			const average = data.sun / 12

			if (typeof average === 'number') {
				return average
			}
		}
		throw new Error ('Request failed!')

	} catch (err) {
		return 0;
	}
}

// Get average sun hours for all years - Must return a number
exports.getAverageSunHoursForLocation = async ({location}) => {

	try {
		const response = await fetch(`${url}${location}/years`, init)

		if (response.status = 200) {
			const jsonResponse = await response.json()
		
			const startYear =  jsonResponse.result.startYear
			const endYear = jsonResponse.result.endYear

			const years = yearRange(startYear, endYear)

			return Promise.all(years.map(year => this.getAverageSunHours({location, year})))
			.then(data => {
				const sunHours = data.reduce((a,b) => a + b, 0)
				const average = sunHours / years.length
				if (typeof average === 'number') {
					return average
				} 
			})
		}
		throw new Error ('Request failed!')

	} catch (err) {
		return 0
	}
}


