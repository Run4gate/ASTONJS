async function delayedLogger(arr) {
  for (let i of arr) {
    await new Promise((res) => setTimeout(res, 3000));
    console.log(i);
  }
}

// the following will be logged in the second part of the task:
// 1 2 "A" 3 "B" 7 "C" 4 "B" 8 "C" 9 "D" 5 "C" 10 "D" 6
// i had 2 guesses initially but after looking it up in my IDE i deleted the first one,
// they both are incrorrect but this one is closer
