


describe("Bar", function() {
 
 var bar;

 beforeEach(function(){

 	bar = new Bar();

 });

 describe('squared', function(){
 	it("is a method", function(){
 	expect( typeof bar.squared ).eq('function');
 	});
 
 	it('squares the number' , function(){
 		expect (  bar.squared(3) ).eq(9)
 	});

 });



describe('cubed', function(){
	it('is a method', function(){
		expect( typeof bar.cubed ).eq('function');
	});

	it('cubes the number' , function(){
		expect(  bar.cubed(3) ).eq(27);
	});

});


// describe('exponentOf', function(){
// 	it('is a method' , function(){
// 		expect( typeof bar.exponentOf ).eq('function');
// 	});

// 	it('multiplies to the nth power', function(){
// 		expect(  bar.exponentOf(2, 3) ).eq(8);
// 	});

// });


describe('reverseString', function(){
	it('reverses your string', function(){
		expect( typeof bar.reverseString ).eq('function');
	});

	it('reverses the string' , function(){
		expect( bar.reverseString('racecar') ).eq('racecar');
	});
});



describe('cipher', function () {
	it('should make a string funky', function () {
        expect( bar.cipher("hey") ).to.equal("ÌÉÝ");
      });
    });


describe('decipher', function () {
    it('unfunk a string', function () {
        expect( bar.decipher("ÌÉÝ") ).to.equal("hey");
      });
    });


describe('rot13', function(){
	it('makes your string even funkier', function(){
		expect( bar.rot13('chewbacca is way cooler than boba fett') ).to.equal('purjonppn vf jnl pbbyre guna obon srgg');
	});
});








});



