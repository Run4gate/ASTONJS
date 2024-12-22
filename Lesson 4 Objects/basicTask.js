// First task

// Arrays in JS are considered to be "abnormal" among their brethren in other languages
// due to the fact that essentially they are as flexible as JS itself 
// by being able to contain multiple different types of data,
// are instances of objects (using key:value pair under the hood),
// while being isntances of their own 'array' prototype at the same time,
// are combining behaviour of several different data structures:
// array proper (sequential index-based storage), stack (LIFO behaviour) and queue (FIFO behaviour)

// Second task

const obj = { item: 'some value' }
function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger = logger.bind(obj)
logger.apply(obj)
logger.call(obj)