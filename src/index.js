
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
    let result = [];
    (arguments.length == 0 || matrix.length == 0) ? (result) : (
    
    matrix.forEach((element, index) => {
        (index != 0 && index % 2 != 0) ? (element.reverse()) : ('')
        console.log(element)
        element.forEach(i => {result.push(i)})
    })
    )
    
    return result

}

