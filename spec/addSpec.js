// Here we are Creating TestSuite

describe("AddTestSuite", function() {

    // var NODE_JS = typeof process !== 'undefined' && process.versions && typeof process.versions.node === 'string';
  
    it("should be add two numbers", function() {
        var expectedresult = 30;
        var result = add(10,20);
        expect(result).toBe(expectedresult);
    });
    // it("should be add two string"),function(){
    //     var expectedresult = 130;
    //     var result = add("10","20");
    //     expect(result).toBe(expectedresult);
    // });
    it("should be add two string", function() {
        var expectedresult = 30;
        var result = add("10","20");
        expect(result).toBe(expectedresult);
    });
});