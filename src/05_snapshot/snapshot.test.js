describe("snapshot test", () => {
    let tree;

    beforeEach(() => {    
        tree = "<div>Facebook</div>";
    });

    it('correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});
