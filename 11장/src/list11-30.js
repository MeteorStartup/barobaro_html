var func1 = function(a, b) {
    return a + b;
}

var func2 = function(callback) {
    console.log(callback (1, 2));
}

func2(func1);