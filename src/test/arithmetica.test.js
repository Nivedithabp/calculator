const {add} = require("../arithmetica");

test ('2+3 is equal to 5' ,() => {
    expect(add(2,3) ).toBe(5);
});

test ('2020 +3000000000 is equal to 3000002020' ,() => {
    expect(add(2020,3000000000) ).toBe(3000002020);
});