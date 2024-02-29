const {add ,sub , product , div} = require("../arithmetica");

test ('2+3 is equal to 5' ,() => {
    expect(add(2,3) ).toBe(5);
});

test ('2020 +3000000000 is equal to 3000002020' ,() => {
    expect(add(2020,3000000000) ).toBe(3000002020);
});

test ('100-10 is equal to 5' ,() => {
    expect(sub(100,10) ).toBe(90);
});

test ('100*10 is equal to 5' ,() => {
    expect(product(100,10) ).toBe(1000);
});

test ('100/10 is equal to 5' ,() => {
    expect(div(100,10) ).toBe(10);
});