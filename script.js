const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, max) => {
  let currentSum=0;
   let subArray=[];
	let result=[];

	for(const num of arr){
		if(currentSum+num<=max){
			subArray.push(num);
			currentSum+=num;
		}else{
			result.push(subArray);
			subArray=[num];
			currentSum=num;
		}
	}

	result.push(subArray);
	return result;
};

const n = prompt("Enter n: ")
alert(JSON.stringify(divide(arr, n)));
