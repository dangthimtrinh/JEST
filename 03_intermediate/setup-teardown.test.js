const functions = require("../01_simple/simple");

let animals = ['elephant', 'zebra', 'bear', 'tiger'];

//
// beforeAll(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// afterAll(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// afterEach(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

/** */
// beforeEach(() => {    
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];    
//     console.log("REMEMBER ME");
// });

describe("modify an array", () => {
    //Inside block
    // beforeEach(() => {    
    //     animals = ['elephant', 'zebra', 'bear', 'tiger'];    
    //     console.log("REMEMBER ME");
    // });

    it("should add animal to end of array", () => {
        animals.push("lion");
        expect(animals[animals.length - 1]).toBe("lion");
    });

    it("should add animal to beginning of array", () => {
        animals.unshift("eagle");
        expect(animals[0]).toBe("eagle");
    });

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    });
});

describe("simple test again", () => {
    it.only("shoud add 2 + 2 equal 4", () => {
        const result = functions.sum(2, 2);
        expect(result).toBe(4);
    });
});