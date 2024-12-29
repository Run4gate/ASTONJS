// 1st will log 1 6 2 5 3 4

// 2nd either will log nothing if promise stops execution on resolve('a'),
// the same way as a function would do in case of return,
// or will log 1 3 2

// 3rd will log concatenation of first two thens:
// .finally logs nothing since it is a side-effect,
// .catch gets ingored since we dont return an error,
// so it will be just 'bc'

// 4th will log 1 123 2 123 3 321 4 and maybe undefined instead of c

// 5th will return 1 4 3 2 since setTimeout is a macrotask and promise is a microtask