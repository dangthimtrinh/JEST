const axios = require("axios");

const fetchData = async (id) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return result.data;
};

const loop = (items, callback) => {
    items.forEach(i => callback(i))
};

describe("mock test", () => {
    const array = [0, 1];
    const mockCalledBack = jest.fn(i => i + 10);
    loop(array, mockCalledBack);

    it("should number of calls equal to array length", () => {
        expect(mockCalledBack.mock.calls.length).toBe(2);
    }); 

    it("should mock's param matches array elemient", () => {
        expect(mockCalledBack.mock.calls[0][0]).toBe(0);
        expect(mockCalledBack.mock.calls[1][0]).toBe(1);
    }); 

    it("should add 10 to each item", () => {
        expect(mockCalledBack.mock.results[0].value).toBe(10);
        expect(mockCalledBack.mock.results[1].value).toBe(11);
    });    
});

describe("mock with spy", () => {
    it("mock axios", async () => {
        jest.spyOn(axios, "get").mockReturnValueOnce({
            data: {
                id: 1,
                todo: "Pass exam"
            }
        });

        const result = await fetchData(1);
        expect(result.todo).toBe("Pass exam");
    });
});