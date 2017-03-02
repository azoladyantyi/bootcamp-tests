
describe('greet', function(){
    it("should return 'Azola' when given 'Hi Azola'", function(){
      assert.equal(greet(' Azola'), 'Hi Azola')
    });
    it("should return 'Phuyolo' when given 'Hi Phuyolo'", function(){
      assert.equal(greet(' Phuyolo'), 'Hi Phuyolo')
    });
});
