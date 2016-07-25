var quiztest = require("../js/quiztest.js");

	var userWeight = [
	    {number: 0, weight: [0, 0, 0, 1]},
	    {number: 1, weight: [0, 1, 0, 0, 0]},
	    {number: 2, weight: [1, 0, 0, 1, 0]},
	    {number: 3, weight: [0, 0, 0, 1, 0]},
	    {number: 4, weight: [0, 1, 0, 1, 1]},
	    {number: 5, weight: [0, 1, 1, 1, 1]},
		{number: 6, weight: [0, 0, 1, 0, 0]},
        {number: 7, weight: [0, 1, 0, 1]},
        {number: 8, weight: [0, 0, 0, 0, 1]},
	    {number: 9, weight: [0, 1, 1, 1, 0]}
	];


describe("quiztest", function() {
  it("prepareTestData()", function() {
    //prepare
    var result;

    //act
    result = quiztest.prepareTestData();

    //assert
    expect(result).toBeDefined();
  });

  it("countResult()", function() {
    //prepare
    var result;

    //act
    result = quiztest.countResult(quiztest.prepareTestData(), userWeight);

    //assert
    expect(result).toEqual(10);
  });

  it("getObjectLength()", function() {
    //prepare
    var result;

    //act
    result = quiztest.getObjectLength(userWeight[5].weight);

    //assert
    expect(result).toBe(5);
  });
});
