const {sum} = require('./app.js') 

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(1500)
    const expected = 1500 * 106.58;
    expect(fromDollarToYen(1500)).toBe(159870);
})

test("One Pound should be 159.875 yens", function() {
    const { fromYenToPound } = require ('./app.js')
    const pounds = fromYenToPound(1279000)
    const expected = 1279000 / 159.875;
    expect(fromYenToPound(1279000)).toBe(8000);
})