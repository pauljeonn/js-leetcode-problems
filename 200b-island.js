// Faster approach - recursion
// Warning: This modifies the input

var numIslands = function (grid) {
	let islandCount = 0;

	const dfs = (x, y) => {
		if (grid[x][y] === '1') {
			console.log('current: ' + x + ' ' + y);
			grid[x][y] = '0';
		} else {
			// '0'을 만났을때는 리턴해서 resursion을 빠져나온다.
			console.log('returning: ' + x + ' ' + y);
			return;
		}

		// search above
		if (x > 0) {
			dfs(x - 1, y);
		}

		// search left
		if (y > 0) {
			dfs(x, y - 1);
		}

		// search below
		if (x < grid.length - 1) {
			dfs(x + 1, y);
		}

		// search right
		if (y < grid[x].length - 1) {
			dfs(x, y + 1);
		}
	};

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			// '1'을 찾으면 island count +1 해주고 붙어있는 모든 땅을 0으로 바꾸는 방법
			if (grid[i][j] === '1') {
				islandCount++;
				dfs(i, j);
			}
		}
	}

	return islandCount;
};

// TEST
let grid = [
	['1', '1', '1', '1', '1'],
	['1', '1', '1', '1', '1'],
	['1', '1', '1', '1', '1'],
	['1', '1', '1', '1', '1'],
];

console.log(numIslands(grid));
