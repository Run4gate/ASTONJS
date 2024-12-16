import isEqual from 'lodash/isEqual.js'
let compare = (value, other) => {
    return isEqual(value, other)
}
let compare2 = (value, other) => {
        if (typeof value !== 'object') return value === other;
        let keys = Object.keys(value)
        for (let key of keys) {
            if (!compare2(value[key], other[key])) return false;
        }
        return true;
}
let tree1 = {
    value: 1,
    left: {
      value: 2,
      left: undefined,
      right: undefined
    },
    right: {
      value: 3,
      left: undefined,
      right: {
        value: 4,
        left: undefined,
        right: undefined
      }
    }
}
let tree2 = {
    value: 1,
    left: {
      value: 2,
      left: undefined,
      right: undefined
    },
    right: {
      value: 4,
      left: undefined,
      right: {
        value: 4,
        left: undefined,
        right: undefined
      }
    }
}
console.log(compare(tree1, tree2))
console.log(compare2(tree1, tree2))