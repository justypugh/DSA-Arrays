function arrayProduct(arr) {
    const product = arr.map((num, i) => {
        const otherNums = arr.slice(0, 1).concat(arr.slice((i + 1), (arr.length)))
        return otherNums.reduce((acc, cur) => acc * cur)
    })
    return product
}

arrayProduct([1, 3, 9, 4])