import sum from "./sum.js";

describe("sum test",()=>{
    test("2+2 is 4",()=>{
        expect(sum(2,2)).toBe(4);
    });

    test("10+10 is 20",()=>{
        expect(sum(10,10)).toBe(20);
    });
})