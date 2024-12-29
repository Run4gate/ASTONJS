async function delayedLogger(arr) {
  for (let i of arr) {
    await new Promise((res) => setTimeout(res, 3000));
    console.log(i);
  }
}

// either the following will be logged in the second part of the task:
// 1 2 "A" 3 "B" 7 "C" 8 "C" 4 "B" 9 "D" 10 "D" 5 "B" 6
// or the following:
// 1 2 "A" 3 "B" 7 "C" 4 "B" 8 "C" 9 "D" 5 "C" 10 "D" 6