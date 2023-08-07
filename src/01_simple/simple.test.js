const functions = require("./simple");

describe("simple test", () => {

    //toBe, toBeGreaterThan, toBeLessThan, toBeGreaterThanOrEqual, toBeLessThanOrEqual
    it("shoud add 2 + 2 equal 4", () => {
        const result = functions.sum(2, 2);
        expect(result).toBe(4);
        expect(result).toBeGreaterThan(3);
        expect(result).toBeLessThan(5);
        expect(result).toBeGreaterThanOrEqual(4);
        expect(result).toBeLessThanOrEqual(4);
    });
    
    //toEqual
    it("object assignment", () => {
        const result = functions.getObject({});
        expect(result).toEqual({});
    });

    //toBeCloseTo
    it("adding floats", () => {
        const result = functions.sum(0.2, 0.21);
        //expect(result).toBe(0.41);
        //expect(result).toBeCloseTo(0.4);
        expect(result).toBeCloseTo(0.409);
        expect(result).toBeCloseTo(0.4, 1);
    });

    //toBeTruthy, toBeFalsy, toBeNull, toBeUndefined
    it("completed shoud be true atfer data loaded", () => {
        const result = functions.loadData();
        //expect(result).toBeNull();
        //expect(result).toBeUndefined();
        //expect(result).toBeFalsy();
        expect(result).toBeTruthy();        
    });

    //toMatch
    it("there is no 'me' in 'Hello World'", () => {
        expect('Hello World').not.toMatch(/me/);
    });

    //toContain
    it("string array", () => {
        const fruits = ['apple', 'banana', 'mango', 'kiwi', 'grape']
        expect(fruits).toContain('kiwi');
    });

    //toThrow
    // it("throw error", () => {
    //     expect(() => functions.signIn()).toThrow(Error);
    // });
});