let arr=[34,20,8,5,100]

const find = (arr) => {
    let largest=arr[0]
    let second_largest
    for(let i=0;i<arr.length;i++){
        for(let j=i+1 ; j<arr.length;j++){
            if(arr[i]>arr[j]){
                largest = arr[i]
                console.log(arr[j])
            }
        }

       
        // if(arr[i]>largest){
        //    second_largest=largest
        //     largest = arr[i]
        // }
    }
    // console.log(second_largest)
}

find(arr)