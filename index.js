console.log('hello ')
console.info('hello')

console.warn('hello ')
console.error('hello')

window.onload = function() {
    // alert("初始化加载");

    var dom = document.getElementById('daohang');
    dom.addEventListener('click', function(e) {
        onAlert(e);
    });
}

function onAlert(e) {
    console.log(e);

    var target = e.target;
    console.log(target.innerText)
    alert(target.innerText);
}