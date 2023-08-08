const featchData = require("./async");

describe("async test", () => {
    it("should return correct id using then", () => {
        // const result = featchData(1);
        // expect(result.id).toBe(1);

        featchData(1).then((result) => {
            expect(result.id).toBe(1);
        });        
    }); 
});

it("should return correct id using async-await", async () => {
    const result = await featchData(1);
    expect(result.id).toBe(1);        
});