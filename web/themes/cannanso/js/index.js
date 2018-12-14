/**
 *  Closure Example
 */
function Person(name) {
  this.name = name;
  this.question = function() {  // closure
    return `Who is ${ this.name }?`;  // template literal
  }
}

let guy = new Person("Bobby");  // classical inheritance
console.log(guy.name);  // returns "Bobby"
console.log(guy.question());  // return "Who is Bobby?"


/**
 *  Event delegation Example
 */

let app = document.getElementById('main-menu');
app.addEventListener('click', function(event){
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    let item = event.target;
    console.log(item.innerHTML);
    // do whatever action
  }
});


/**
 *  Closure within a Loop Example
 *  Write a function that will loop through a list of integers and print the
 *  index of each element after a 3 second delay.
 */

let arr = [10, 20, 30, 40];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] + " is...").setTimeout(3000, function(){
    console.log("index " + i);
  });
}

