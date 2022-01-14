var maxSubArray = function (nums) {
	// 숫자가 하나일 경우 그 숫자가 결과값이 된다.
	let result = nums[0];
	// 처음 숫자가 음수면 최종합에서 제외시켜야된다.
	let current = Math.max(max, 0);

	// 배열의 두번째 요소부터 최댓값 비교를 시작한다.
	for (let i = 1; i < nums.length; i++) {
		// 현재까지 합에 다음 숫자를 더해준다.
		current += nums[i];
		result = Math.max(max, current);
		// 현재까지의 합이 음수면 최종합에 넣을 필요가 없으므로 current에 0을 할당한다
		current = Math.max(current, 0);
	}

	return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2, -3, -1, -2]));
