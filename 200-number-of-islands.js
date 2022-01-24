const numIslands = (grid) => {
	if (grid.length === 0) return 0;

	let count = 0;
	// 이미 확인한 위치 파악하기 위해 현재 grid와 동일한 사이즈의 모든 값이 false인 매트릭스 생성
	let seen = grid.map((row) => row.map((col) => false));

	const dfs = (i, j) => {
		// grid[i][j]가 아직 확인하지 못한 땅이면 계속 진행
		if (grid[i][j] === '1' && !seen[i][j]) {
			seen[i][j] = true;

			// 위가 존재하면 확인
			if (i - 1 >= 0) {
				dfs(i - 1, j);
			}

			// 오른쪽이 존재하면 확인
			if (j + 1 < grid[i].length) {
				dfs(i, j + 1);
			}

			// 아래가 존재하면 확인
			if (i + 1 < grid.length) {
				dfs(i + 1, j);
			}

			// 왼쪽이 존재하면 확인
			if (j - 1 >= 0) {
				dfs(i, j - 1);
			}
		} else {
			return;
		}

		// 이미 확인한 위치가 아닌 곳에 땅이 없다면 반환하기
		return;
	};

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			// 아직 확인하지 못한 땅을 발견하면 DFS 시작
			if (grid[i][j] === '1' && !seen[i][j]) {
				dfs(i, j);
				// 섬 1개가 확인되었으니 카운트 1 증가하기
				count++;
			}
		}
	}

	return count;
};

console.log(
	numIslands([
		['1', '1', '1', '1', '1', '0', '1', '1', '1', '1'],
		['1', '0', '1', '0', '1', '1', '1', '1', '1', '1'],
		['0', '1', '1', '1', '0', '1', '1', '1', '1', '1'],
		['1', '1', '0', '1', '1', '0', '0', '0', '0', '1'],
		['1', '0', '1', '0', '1', '0', '0', '1', '0', '1'],
		['1', '0', '0', '1', '1', '1', '0', '1', '0', '0'],
		['0', '0', '1', '0', '0', '1', '1', '1', '1', '0'],
		['1', '0', '1', '1', '1', '0', '0', '1', '1', '1'],
		['1', '1', '1', '1', '1', '1', '1', '1', '0', '1'],
		['1', '0', '1', '1', '1', '1', '1', '1', '1', '0'],
	])
);
