const RandomArrayIndex = (prevColor: int, prevColor2: int, arrayLength: int) => {
    let newColor = prevColor
    while (newColor == prevColor || newColor == prevColor2) {
        newColor = (Math.floor(Math.random() * arrayLength))
    }
    return newColor
}

export default RandomArrayIndex