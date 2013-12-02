var assert = require("assert");
var theory = require("../theory");

describe("Theory",function(){
    var S1 = [[1,2,2,1],[9,1,9,9],[9,9,1,9],[8,9,9,9]];
    describe("naive recurrence relation",function(){
        it("should be D(1,3)=3",function(){
            assert.equal(3,theory.naive(S1)(1,3));
        });
        it("should be D(1,1)=5",function(){
            assert.equal(5,theory.naive(S1)(1,1));
        });
    });
});
