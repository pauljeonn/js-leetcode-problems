const orangesRotting = function (grid) {
	if (grid.length === 0) return 0;

	let queue = [];
	let fresh = 0;
	let minutes = 0;

	// 먼저 그리드 스캔하면서 썩은 오렌지 위치와 신선한 오렌지 개수 구하기
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 2) {
				// 썩은 오렌지 위치 저장
				queue.push([i, j]);
			}
			if (grid[i][j] === 1) {
				// 신선한 오렌지 개수 구하기
				fresh++;
			}
		}
	}

	while (queue.length) {
		let temp = queue.length;

		for (let i = 0; i < temp; i++) {
			const currentOrange = queue.shift();
			const row = currentOrange[0];
			const col = currentOrange[1];

			// 신선한 오렌지가 있으면 썩은 오렌지로 변환 후 queue에 추가
			// 위 검색
			if (row - 1 >= 0 && grid[row - 1][col] === 1) {
				grid[row - 1][col] = 2;
				fresh--;
				queue.push([row - 1, col]);
			}

			// 오른쪽 검색
			if (col + 1 < grid[row].length && grid[row][col + 1] === 1) {
				grid[row][col + 1] = 2;
				fresh--;
				queue.push([row, col + 1]);
			}

			// 아래 검색
			if (row + 1 < grid.length && grid[row + 1][col] === 1) {
				grid[row + 1][col] = 2;
				fresh--;
				queue.push([row + 1, col]);
			}

			// 왼쪽 검색
			if (col - 1 >= 0 && grid[row][col - 1] === 1) {
				grid[row][col - 1] = 2;
				fresh--;
				queue.push([row, col - 1]);
			}
		}
		if (queue.length > 0) minutes++;
	}
	return fresh === 0 ? minutes : -1;
};

console.log(
	orangesRotting([
		[2, 1, 1],
		[1, 1, 0],
		[0, 1, 1],
	])
);

console.log(
	orangesRotting([
		[2, 1, 1],
		[0, 1, 1],
		[1, 0, 1],
	])
);

console.log(orangesRotting([[0, 2]]));
