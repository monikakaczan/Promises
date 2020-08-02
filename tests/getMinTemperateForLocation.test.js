const { getMinTemperateForLocation } = require('../src/index')

describe('getMinTemperateForLocation', () => {
    it('Successfully gets the min temperature for Oxford', async () =>{
		const location = 'oxford';

		const result = await getMinTemperateForLocation({location:location});

		expect(result).toEqual(-5.8)
	})
})