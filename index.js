console.log('hello ')
console.info('hello')

console.warn('hello ')
console.error('hello')

window.onload = function() {
    alert("初始化加载");
}

function onAlert(params) {
    console.log(params);
    alert(params);
}