/* global describe, it */
'use strict';

(function(){
	describe("the input function", function(){
		it("should accept numbers as input and print it to the console", function(){
			var answer = 2;
            expect(2).to.be.type.of(answer);
		});

		it("should accept strings as input and print it to the console", function(){
			var answer = "";
            expect("").to.be.within(answer);
		});

	});
})