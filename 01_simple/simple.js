const functions = {
    sum: function(a, b) {
        return a + b;
    },
    
    getObject: function(obj) {
        return obj;
    },
    
    loadData: function() {
        const completed = true;
        return completed;
    },

    signIn: function() {
        throw new Error("Unauthorized");
    }
};

module.exports = functions;