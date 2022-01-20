// 이진 탐색 함수
const bst = (nums, target, left, right) => {
	// 배열의 양 끝에 포인터를 두고 중간점을 구하면서 범위를 좁힌다.
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const midVal = nums[mid];
		if (midVal === target) {
			return mid;
		} else if (midVal < target) {
			// 중간점이 target보다 작으면 중간점 + 1 위치를 시작으로 설정
			left = mid + 1;
		} else {
			// 중간점이 target보다 크면 중간점 - 1 위치를 끝으로 설정
			right = mid - 1;
		}
	}
	// target을 찾지 못했다면 -1 반환
	return -1;
};

var searchRange = function (nums, target) {
	if (nums.length === 0) return [-1, -1];

	// 우선 target이 nums에 존재하는지 먼저 확인한다.
	const initPos = bst(nums, target, 0, nums.length - 1);
	// tempPos가 -1이라면, 즉 nums에 target이 존재하지 않는다면 즉시 [-1, -1] 반환하기
	if (initPos === -1) return [-1, -1];

	// 찾은 tempPos를 기준으로 startPos와 endPos 찾기
	let startPos = initPos;
	let endPos = initPos;
	let startTemp;
	let endTemp;

	while (startPos !== -1) {
		// 마지막으로 찾은 시작 위치 저장
		startTemp = startPos;
		startPos = bst(nums, target, 0, startPos - 1);
	}
	// 마지막으로 찾은 시작 위치 할당
	startPos = startTemp;

	while (endPos !== -1) {
		// 마지막으로 찾은 종료 위치 저장
		endTemp = endPos;
		endPos = bst(nums, target, endPos + 1, nums.length - 1);
	}
	// 마지막으로 찾은 종료 위치 할당
	endPos = endTemp;

	return [startPos, endPos];
};
