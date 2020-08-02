const { getMinTemperate } = require('../src/index')

describe('getMaxTemperature', () => {
	it('Successfully gets the min temperature for oxford 2018', async () =>{
		const location = 'oxford';
		const year = 2018;

		const result = await getMinTemperate({location:location, year:year});

		expect(result).toEqual(0.3)
	})
})