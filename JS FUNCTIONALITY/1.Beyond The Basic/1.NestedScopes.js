/*
function foo(){
    var a = 1;

    function bar(){
        var b = 2;

        function baz(){
            var c = 3;
            console.log(a, b, c); // 1 2 3
        }
        baz();
        console.log(a, b); // 1 2
    }
    bar();
    console.log(a); // 1
}
foo();
*/


function makeAdder(x){
    //parameter 'x' is an inner variaible
    //inner function 'add()' uses 'x', so
    //it has a "closure" over it
    function add(y){
        return y + x;
    };
    return add;