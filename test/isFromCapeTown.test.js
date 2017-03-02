describe('isFromCapeTown', function(){
    it("should return 'true' when given 'regNumber.startsWith('CA')' ", function(){
    assert.equal(isFromCapeTown('CA 123'), true);
    });

});
