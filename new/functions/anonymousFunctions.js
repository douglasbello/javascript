// uma anonymous function é uma função sem nome
let show = function() {
    console.log('Anonymous function');
};

show();

// usando anonymous function como argumento de outra função

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);
