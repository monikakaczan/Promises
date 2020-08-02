const { getAverageSunHours } = require('../src/index')

describe('getAverageSunHours', () => {
	it('Successfully gets average sun hours for oxford 1999', async () =>{
		const location = 'oxford';
		const year = 1950;

		const result = await getAverageSunHours({location:location, year:year});

		expect(result).toEqual(124.64999999999999)
	})
})