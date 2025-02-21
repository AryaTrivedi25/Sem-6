/*
1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.
*/

function debounce(fn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        // exhaust hone ke pehle call ho gaya to timer clear kar do.
        clearTimeout(timer);
        // delay ke baad hi fn chalega.
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const print = () => console.log('Hello World');
const debouncedPrint = debounce(print, 2000);
debouncedPrint();
debouncedPrint(); // Hello World will be printed only once after 300ms.