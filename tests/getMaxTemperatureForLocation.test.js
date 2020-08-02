const { getMaxTemperatureForLocation } = require('../src/index')

describe('getMaxTemperatureForLocation', () => {
	it('Successfully gets the max temperature for Heathrow', async () =>{
		const location = 'heathrow';

		const result = await getMaxTemperatureForLocation({ location:location });

		expect(result).toEqual(28.3)
	})
})