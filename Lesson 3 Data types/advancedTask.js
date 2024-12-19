function reverseStr(str) {
    return Array.from(str).reduceRight((acc, val) => acc.concat(val)).toString();
}
const deepEqual = (value, other) => {
    if (typeof value !== "object") return value === other;
    let keys = Object.keys(value);
    for (let key of keys) {
      if (!deepEqual(value[key], other[key])) return false;
    }
    return true;
};
