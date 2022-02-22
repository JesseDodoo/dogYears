const dogYearsFunctions = require('./dogYears')

describe('test for output', () => {
    test('to see if 1 human years equates to 8', () => {
        expect(dogYearsFunctions.bulldog(1)).toEqual('Your Bulldog is 8 years old')
    })

    test('to see if 1 human years equates to 15', () => {
        expect(dogYearsFunctions.chihuahua(1)).toEqual('Your Chihuahua is 15 years old')
    })

    test('to see if 1 human years equates to 12', () => {
        expect(dogYearsFunctions.germanShepherd(1)).toEqual('Your German Shepherd is 12 years old')
    })

    test('to see if 1 human years equates to 12', () => {
        expect(dogYearsFunctions.dalmation(1)).toEqual('Your Dalmation is 12 years old')
    })
})


