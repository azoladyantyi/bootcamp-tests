describe('isFromBellville', function(){
    it("should return 'true' when given 'regNumber.startsWith('CY')' ", function(){
    assert.equal(isFromBellville('CY 123'), true);
    });
});
