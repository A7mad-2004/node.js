
/**
 * 2 exec: sync , Async
 * 
 * 2 operation blocking , non- blocking
 */
/**
 * 4 type is Async
 * 1. timer
 * 2. lond-time process
 * 3. i/o operation: files , db , apis
 * 4. يدوي 
 */
console.log(1);
console.log(2);
const print = () => {
    console.log("Ahmad Qosa");
    
}
setTimeout(print, 1000)
console.log(3);
console.log(4);
