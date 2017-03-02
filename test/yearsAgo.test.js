describe('yearsAgo', function(){
    it("should return '6' when given 'year.getFullYear() - date.getFullYear()' ", function(){
    assert.equal(yearsAgo('2016-01-25'),6);

    });
    it("should return '-3' when given 'year.getFullYear() - date.getFullYear()' ", function(){
    assert.equal(yearsAgo('2007-01-25'),-3);

    });
});
