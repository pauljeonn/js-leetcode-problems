// DFS brute force approach
const getAdjacent = (i, j, grid, visited) => {
	const adjacentLands = [];

	// If curNode is not at the first row, check if the above node is not visited and push it
	if (i > 0 && !visited[i - 1][j]) adjacentLands.push([i - 1, j]);
	// If curNode is not at the last row, check if below node is not visited and push it
	if (i < grid.length - 1 && !visited[i + 1][j]) adjacentLands.push([i + 1, j]);
	// Do the same for the most left and most right row:
	if (j > 0 && !visited[i][j - 1]) adjacentLands.push([i, j - 1]);
	if (j < grid[0].length - 1 && !visited[i][j + 1])
		adjacentLands.push([i, j + 1]);

	return adjacentLands;
};

const dfs = (i, j, grid, visited) => {
	// DFS means stack (or recursion)
	const stack = [[i, j]];
	let islandSize = 0;

	while (stack.length) {
		let curNode = stack.pop();

		// Destructure curNode
		let = [i, j] = curNode;

		// If curNode is visited, we want to skip it
		if (visited[i][j]) continue;
		// If not, add curNode to visited
		visited[i][j] = true;

		// Check if curNode is an island
		// First, check if it's water
		if (grid[i][j] === '0') continue;
		// If it's a land, increase island size
		islandSize++;

		// Now, check all adjacent cells to see if they are land as well
		let adjacent = getAdjacent(i, j, grid, visited);

		// Now push all the adjacent lands into the stack
		stack.push(...adjacent);
	}

	// Return true if the island size is bigger than 0
	return islandSize > 0 ? true : false;
};

var numIslands = function (grid) {
	// Create 'visited' that contains a copy of grid with value false
	const visited = grid.map((row) => row.map((cell) => false));
	// Global variable for island count
	let islandCount = 0;

	for (let i = 0; i < grid.length; i++) {
		// How to loop in a matrix:
		for (let j = 0; j < grid[i].length; j++) {
			// Increase island count if dfs funciton at j returns true
			if (dfs(i, j, grid, visited)) islandCount++;
		}
	}

	return islandCount;
};
