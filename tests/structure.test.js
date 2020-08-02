const { getMaxTemperature, 
	getMinTemperate, 
	getMaxTemperatureForLocation, 
	getMinTemperateForLocation,
	getAverageSunHours,
	getAverageSunHoursForLocation } = require('../src/index')

const LOCATION = 'oxford';
const YEAR = 2018;

describe('The exported function', ()=> {
	it('getMaxTemperature returns a number', async () => {
		const result = await getMaxTemperature({location: LOCATION, year: YEAR})
		expect(typeof result).toEqual('number')
	})
	it('getMinTemperate returns a number', async () => {
		const result = await getMinTemperate({location: LOCATION, year: YEAR})
		expect(typeof result).toEqual('number')
	})
	it('getMaxTemperatureForLocation returns a number', async () => {
		const result = await getMaxTemperatureForLocation({location: LOCATION})
		expect(typeof result).toEqual('number')
	})
	it('getMinTemperateForLocation returns a number', async () => {
		const result = await getMinTemperateForLocation({location: LOCATION})
		expect(typeof result).toEqual('number')
	})
	it('getAverageSunHours returns a number', async () => {
		const result = await getAverageSunHours({location: LOCATION, year: YEAR})
		expect(typeof result).toEqual('number')
	})
	it('getAverageSunHoursForLocation returns a number', async () => {
		const result = await getAverageSunHoursForLocation({location: LOCATION})
		expect(typeof result).toEqual('number')
	})
})