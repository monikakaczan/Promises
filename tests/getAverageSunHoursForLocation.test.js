const { getAverageSunHoursForLocation } = require('../src/index')

describe('getAverageSunHoursForLocation', () => {
	it('Successfully gets average sun hours for Heathrow', async () =>{
		const location = 'heathrow';

		const result = await getAverageSunHoursForLocation({location:location});

		expect(result).toEqual(112.82218309859152)
	})
})