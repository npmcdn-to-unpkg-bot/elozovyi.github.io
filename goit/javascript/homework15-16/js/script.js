// OOP

function Human(){

  this.name = 'Ivan';
  this.age = 18;
  this.sex = 'male';
  this.height = 1.82;
  this.weight = 65;
}

function Worker(placeOfWork){
  this.placeOfWork = placeOfWork;
  this.zp = 2000;
  this.work = function(){
    console.log('I am working');

  };

}

function Student() {
  this.placeOfStudy = 'Univer';
  this.grant = 100;
  this.action = function(){
    console.log('watch TV');

  };

}

var human1 = new Human();

Student.prototype = human1;
Worker.prototype = human1;

var worker1 = new Worker('city');
var worker2 = new Worker('village');
var student1 = new Student();
var student2 = new Student();

console.log('Worker 1 age = ' + worker1.age);
console.log('Worker 1 place = ' + worker1.placeOfWork);
console.log('Worker 2 age = ' + worker2.age);
console.log('Worker 2 place = ' + worker2.placeOfWork);
worker1.work();

console.log('Student 1 name = ' + student1.name);
console.log('Student 1 age = ' + student2.age);
student1.action();


// API
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

//Second call with this:
// Get object of URL parameters
var allVars = $.getUrlVars();

// Getting URL var by its nam
var keyword = $.getUrlVar('s');

if (keyword) {
    $('.search_input').val(keyword);
    search();
}

function search() {
    var params = {
        // Request parameters
        "tag": $('.search_input').val(),
        "limit": "10",
        "key": "LIVDSRZULELA"
    };

    $.ajax({
        url: "https://api.riffsy.com/v1/search?" + $.param(params),
        type: "GET"
    })
    .done(function(data) {
        console.log(data);
        var results = data.results,
            imageContainer = $('.wrapper-image');
        imageContainer.empty();   
        results.forEach(function(result) {
            imageContainer.append('<img src="' + result.url + '">');
        })
    })
    .fail(function() {
        alert("error");
    });
}

$(function() {
    $('.search_btn').click(search);
    $('.search_input').keyup(function(e) {
        var code = e.which;
        if (code == 13) {
            e.preventDefault();
            search();
        }
    });


});
