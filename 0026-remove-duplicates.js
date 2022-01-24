var removeDuplicates = function (nums) {
	let uniqueNums = 0;

	for (let i = 0; i < nums.length; i++) {
		// 만약 현재 숫자가 이전 숫자와 다르면
		if (nums[i] !== nums[i - 1]) {
			// 현재 숫자를 배열의 유니크 개수 인덱스로 설정하여 저장한다.
			nums[uniqueNums++] = nums[i];
		}
	}

	return uniqueNums;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 2, 3, 3]));
