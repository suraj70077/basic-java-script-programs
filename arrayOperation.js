// reverse the given array

function arrayReverse(arr){
    console.log("arr ##", arr)
    let temp = []
    for (let i = arr.length -1; i >= 0; i--) {
         
        temp.push(arr[i])
    }
    console.log("temp ##", temp)
     
}

let arr = [1,2,3,4,5,6,7]
const result = arrayReverse(arr)