
window.Foo = (function() {

  function Foo() {

  	this.plusOne = function (x){

  		return x + 1;
  	};

  	this.sortArray = function (woop){

  		return woop.concat().sort();
  	};


  	this.hasValue = function(x, y){

 		return (x.indexOf(y) !== -1);

  	};

  	
  	Foo.greet = function (jav){

  		return "Hello, " + jav + "!";
  		
  	};


  }




  // Foo.prototype = {

  // };

  return Foo;

})();