const {getMaxTemperature} = require('../src/index')

describe('getMaxTemperature', () => {
	it('Successfully gets the max temperate for oxford 2018', async () =>{
		const location = 'oxford';
		const year = 2018;

		const result = await getMaxTemperature({location:location, year:year});

		expect(result).toEqual(27.4)
	})
})