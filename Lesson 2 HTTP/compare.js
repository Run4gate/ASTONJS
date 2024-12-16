import isEqual from 'lodash/isEqual.js'
let compare = (value, other) => {
    return isEqual(value, other)
} // simply using lodash's isEqual method, i suspect it wasnt not the desired solution so providing my own compare2 function next 
let compare2 = (value, other) => {
        if (typeof value !== 'object') return value === other;
        let keys = Object.keys(value)
        for (let key of keys) {
            if (!compare2(value[key], other[key])) return false;
        }
        return true;
}