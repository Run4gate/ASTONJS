const getLength = (any) => {
    let type = typeof any
    let length = 0
    switch (type) {
        case 'object':
            if (Array.isArray(any)) {
                length = any.length
            } else if (any.length) {
                length = any.length
            } else if (any instanceof Map || any instanceof Set) {
                length = any.size
            } 
            break
        case 'string':
        case 'function':
            length = any.length
            break
        default:
            break
    }
    console.log(length)
    return ''
}; 