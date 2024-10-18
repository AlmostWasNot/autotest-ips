
function printSec(start: number, stop: number) {
    let sec = start

    setTimeout(function go() {
        console.log(sec)
        if (sec < stop) {
            setTimeout(go, 1000)
        }
        sec++
    }, 1000);
};

printSec(1, 10)

//использовать рекурсию