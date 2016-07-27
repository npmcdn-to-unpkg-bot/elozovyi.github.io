"use strict";
$(function() {

  /** sourceTest.weight[i] - 0, if sourceTest.answers[i] is incorrect;
  /*                       - 1, if sourceTest.answers[i] is correct.*/

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

  //........... LOCALSTORAGE ..............
  sourceTest = JSON.stringify(sourceTest);
  localStorage.setItem("ukrainianTest", sourceTest);
  sourceTest = localStorage.getItem("ukrainianTest");
  sourceTest = JSON.parse(sourceTest);

  //........... RENDERING ..............
  var $container = $(".container");
  $("#tmpl").tmpl(sourceTest).appendTo($container);

  //........... BUTTON ..............
  var $div = $('<div></div>').appendTo($container).addClass('button-wrapper');
  var $button = $('<button>Check my results!</button>')
    .addClass('button')
    .attr('type', 'button');
  $div.append($button);

  //........... CHECK RESULTS ...........
  $button.on('click', function(event) {

    var userWeight = [];
    var userResult = 0;

    for(var i = 0; i < sourceTest.length; i++) {

      userWeight.length = 0;
      for (var j = 0; j < sourceTest[i].answers.length; j++) {
        userWeight[j] = +$("." + [i] + "-" + [j]).is(':checked');
      }

      if (userWeight.join() == sourceTest[i].weight.join()) {
        userResult++;
        $(".question" + i).addClass("right");
      } else {
        $(".question" + i).addClass("wrong");
      }
    };

    $(".result").text(userResult + " from " + sourceTest.length);
    showModal(event);
  });


  function showModal(event) {
    event.preventDefault();
		$('.overlay').fadeIn(400,
		  function() {
				$('.modal')
					.css('display', 'block')
					.animate({opacity: 1, top: '45%'}, 200);
        $('.modal-close').css('display', 'block');
		});
  }

  $('.modal-close, .overlay').click( function() {
		$('.modal')
			.animate( {
        opacity: 0, top: '30%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
		});

    $("input[type='checkbox']").removeAttr('checked');
    $('h4').removeClass("wrong");
    $('h4').removeClass("right");
	});
})
