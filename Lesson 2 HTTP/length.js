const getLength = (any) => {
    let type = typeof(any)
    switch (type) {
        case 'object':
            if (Array.isArray(any)) {
                return any.length
            } else {
                return 0
            }
        case 'string':
        case 'function':
            return any.length
        default:
            return 0
    }
}
