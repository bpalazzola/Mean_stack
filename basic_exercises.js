var x = [];
x.push('coding','dojo','rocks');
x.pop();
console.log(x);

const y = [];
y.push(88);
console.log(y);

var x = [9,10,6,5,-1,20,13,2];
x.pop();
console.log(x);

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i = 0; i < names.length; i++) {
    if (names [i].length === 5){

        console.log(names [i]);
    }
}

function yell(string) {
   return string.toUpperCase();
};
console.log(yell("hello world"));