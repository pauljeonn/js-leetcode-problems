// solution #1: brute force - O(n^2)
var twoSum = function (nums, target) {
	// 우선 비어있는 배열 또는 요소가 1개인 배열이면 바로 리턴하기
	if (nums.length === 0 || nums.length === 1) return null;

	for (let i = 0; i < nums.length; i++) {
		// i는 한번 검사하면 다음 loop에서 다시 체크할 필요 없으므로 j + 1
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
	return null;
};

// test #1
console.log(twoSum([2, 7, 1, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([], 6));
console.log(twoSum([1, 2, 3, 4, 5, 6], 100));

// solution #2: Hash table solution - O(n)
const twoSum2 = (nums, target) => {
	if (nums.length === 0 || nums.length === 1) return null;
	let hash = {};

	for (let i = 0; i < nums.length; i++) {
		const missingNumIdx = hash[nums[i]];

		// 인덱스 0이 존재할 수 있으니 Boolean 조건 체크 방식 지양
		if (missingNumIdx >= 0) {
			// 해시에 찾는 숫자가 존재하면 찾는 숫자의 인덱스와 현재 iteration 리턴하기
			return [missingNumIdx, i];
		} else {
			// 해시에 찾는 숫자가 없으면 찾는 숫자를 해시에 넣어주기
			const missingNum = target - nums[i];
			hash[missingNum] = i;
		}
	}
	return null;
};

// test #2
console.log(twoSum2([2, 7, 1, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([], 6));
console.log(twoSum2([1, 2, 3, 4, 5, 6], 100));
