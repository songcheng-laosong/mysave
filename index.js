console.log('hello ')
console.info('hello')

console.warn('hello ')
console.error('hello')

window.onload = function() {
    // alert("初始化加载");
}

function onAlert(e) {
    console.log(e);

    var target = e.target;
    console.log(target.innerText)
    alert(target.innerText);
}