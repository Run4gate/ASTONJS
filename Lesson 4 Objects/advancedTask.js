const obj = { item: "some value" };
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
Function.prototype.polyfill = function(obj) {
    let fun = this
    return function() {
        return fun.apply(obj, arguments);
    }
}

let newlog = logger.polyfill(obj);
console.log(newlog) 
// i tried to read the ES6 specification to understand how to reassign logger's this to obj.this, but i haven't succeeded so that's is the best solution i came up with (also it seems like the native .bind method uses .call nethod under the hood as well)