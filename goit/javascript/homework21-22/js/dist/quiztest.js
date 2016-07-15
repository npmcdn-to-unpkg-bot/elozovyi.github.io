"use strict";

var quiztest = {
	prepareTestData: function prepareTestData() {
	/** sourceTest.weight[i] - 0, if sourceTest.answers[i] is incorrect;
	/*- 1, if sourceTest.answers[i] is correct.*/

		var sourceTest = [
			{number: 0,
			question: "How would you write 'a very nice friend'?",
			answers: ["zelene derevo - зелене дерево", "visotna budіvlja - висотна будівля", "duzhe starij cholovіk - дуже старий чоловік", "duzhe horoshij drug - дуже хороший друг"],
			weight: [0, 0, 0, 1]},

			{number: 1,
			question: "Which one of the following means 'square':",
			answers: ["kruglij - круглий", "kvadratnij - квадратний", "trikutnij - трикутний", "solodkij - солодкий", "glibokij - глибокий"],
			weight: [0, 1, 0, 0, 0]},

			{number: 2,
			question: "Which one of the following means 'red':",
			answers: ["rudyj - рудий", "sinіj - синій", "zhovtij - жовтий", "chervonij - червоний", "chornij - чорний"],
			weight: [1, 0, 0, 1, 0]},

			{number: 3,
			question: "Which one of the following means 'today':",
			answers: ["negajno - негайно", "vchora - вчора", "zavtra - завтра", "sjogodnі - сьогодні", "vzhe - вже"],
			weight: [0, 0, 0, 1, 0]},

			{number: 4,
			question: "What's 'nose' in Ukrainian?",
			answers: ["pleche - плече", "nіs - ніс", "vuho - вухо", "vystezhuvaty - вистежувати", "nyukh - нюх"],
			weight: [0, 1, 0, 1, 1]},

			{number: 5,
			question: "How would you write 'raining?'",
			answers: ["padaє snіg - падає сніг", "doshtitj - дощить", "krapaty - крапати", "sypaty - сипати", "sypatysia - сипатися"],
			weight: [0, 1, 1, 1, 1]},

			{number: 6,
			question: "How would you write 'aunt?'",
			answers: ["babusja - бабуся", "dochka - дочка", "tіtka - тітка", "medsestra - медсестра", "druzhina - дружина"],
			weight: [0, 0, 1, 0, 0]},

			{number: 7,
			question: "How would you write 'congratulations?'",
			answers: ["do pobachennja - до побачення", "Vіtaju - Вітаю", "vibachte - вибачте", "Pozdorovlyayu - поздоровляю"],
			weight: [0, 1, 0, 1]},

			{number: 8,
			question: "How would you write 'how much is this?'",
			answers: ["De zh vіn? - Де ж він?", "shto ce take? - що це таке?", "naskіljki vіn velikij? - наскільки він великий?", "naskіljki ce daleko? - наскільки це далеко?", "Skіljki ce koshtuє? - Скільки це коштує?"],
			weight: [0, 0, 0, 0, 1]},

			{number: 9,
			question: "How would you write 'quickly?'",
			answers: ["povіljno - повільно", "shvidko - швидко", "mershchenʹko - мерщенько", "sporo - споро", "majzhe - майже"],
			weight: [0, 1, 1, 1, 0]}
		];

		return sourceTest;
	},

	countResult: function countResult(sourceTest, userWeight) {
		var userResult = 0;

		for (var i = 0; i < sourceTest.length; i++) {
			if (userWeight[i].weight.join() == sourceTest[i].weight.join()) userResult++;
		}

		return userResult;
	},

	getObjectLength: function getObjectLength(obj) {
		return obj.length;
	}
};

try {
	module.exports = quiztest;
} catch (e) {}
