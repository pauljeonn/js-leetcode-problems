// solution #1: brute force - O(n^2)
var maxArea = function (height) {
	if (height.length === 0 || height.length === 1) return 0;
	let max = 0;

	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			// 높이는 i번째 요소와 j번째 요소중 더 낮은 높이이다
			let h = Math.min(height[i], height[j]);
			// 넓이는 j와 i의 간격이다
			let w = j - i;
			//물의 부피 구하기
			let v = h * w;
			// 최댓값 구하기
			max = Math.max(max, v);
		}
	}
	return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(
	maxArea([
		8361, 5302, 8672, 2400, 56665, 582, 60656, 6799, 4341831, 2940, 6963, 8128,
		6520, 3393, 86785, 1530, 5259, 123, 112421, 12321, 12321, 1231, 123, 999912,
	])
);

// solution #2: O(n)
var maxArea2 = function (height) {
	if (height.length === 0 || height.length === 1) return 0;

	let max = 0;
	let i = 0;
	let j = height.length - 1;

  // 두 요소 사이의 간격이 1이 될때까지 반복한다
	while (j - i > 0) {
		let a = height[i];
		let b = height[j];
		let v = Math.min(a, b) * (j - i);
    // 최댓값을 매번 구한다
		max = Math.max(max, v);

    // 더 작은 요소를 이동시킨다
		if (a <= b) {
			i++;
		} else {
			j--;
		}
	}
	return max;
};

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea2([1, 1]));
console.log(
	maxArea2([
		8361, 5302, 8672, 2400, 56665, 582, 60656, 6799, 4341831, 2940, 6963, 8128,
		6520, 3393, 86785, 1530, 5259, 123, 112421, 12321, 12321, 1231, 123, 999912,
	])
);
