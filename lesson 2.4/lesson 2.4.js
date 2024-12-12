//function declaration можно объявлять в любом месте
//function expression нельзя объявлять до инициализации

function foo(){
    console.log('Hello, world!');
}

foo()

const foo2 = function(){
    console.log('Hello world!');
}

foo2()
