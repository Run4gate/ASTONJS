const firstSum = (arr, total) => {
  const set = new Set(arr); // here i immediately increase space complexity to O(n) by creating a copy of the array
  for (let i of set) {
    // there i create a loop where i traverse the initial array, so now it's time complexity is O(n)
    if (set.has(total - i)) {
      // that's the second loop, where i traverse the set to check if it has the required element, so now it is O(n*n)
      return [i, total - i];
    }
  }
  return [];
}; // so, this function here has the worst case time complexity of O(n*n) and space complexity of O(n)
// Note: i dont have a clean picture of what complexity does set.has method has, so i assume it traverses all of the set looking for the specified value,
// as in for of loop, but some people on the internet are saying it's complexity is O(1), which i am sceptical of, but in such case it would be simple O(n) time complexity for all of my fucntion.

console.log(firstSum([1, 2, 3, 4, 5], 8)); // [3,5]
