// METHOD 1: Matrix를 Adjacency List로 전환해서 사용
var buildAdjList = function (adjMatrix) {
	// 리턴할 adjList object 생성
	let adjList = {};
	for (let i = 0; i < adjMatrix.length; i++) {
		// 먼저 adjList에 추가할 vertex 생성
		adjList[i] = [];
		for (let j = 0; j < adjMatrix[i].length; j++) {
			if (j !== i && adjMatrix[i][j] === 1) {
				// 만약 스스로가 아닌 다른 vertex 위치에 1이 있다면 추가해주기
				adjList[i].push(j);
			}
		}
	}
	// console.log(adjList);
	return adjList;
};

var findCircleNum = function (isConnected) {
	const adjList = buildAdjList(isConnected);
	let visited = {};
	let provinces = 0;

	// helper dfs 함수
	var dfs = function (vertex) {
		// vertex가 더 이상 없으면 리턴
		if (!vertex) return null;

		// visited에 현재 vertex 추가
		visited[vertex] = true;

		// recursively search for connected vertex
		adjList[vertex].forEach((connected) => {
			// 만약 연결된 vertex를 아직 방문하지 않았으면 dfs 재귀호출
			if (!visited[connected]) {
				return dfs(connected);
			}
		});
	};

	for (let vertex in adjList) {
		if (!visited[vertex]) {
			// 아직 방문을 안했으면 province 카운트 업
			provinces++;
			// 그 후 recursive DFS 실행
			dfs(vertex);
		}
	}
	return provinces;
};

console.log(
	findCircleNum([
		[1, 1, 0],
		[1, 1, 0],
		[0, 0, 1],
	])
);

console.log(
	findCircleNum([
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
	])
);

// METHOD 2: Adjacency Matrix 그대로 사용 - 훨씬 빠르고 메모리 적게 사용
var findCircleNum2 = function (isConnected) {
	let visited = {};
	let provinces = 0;

	// helper dfs 함수
	var dfs = function (vertex) {
		visited[vertex] = true;

		for (let j = 0; j < isConnected[vertex].length; j++) {
			if (j !== vertex && isConnected[vertex][j] === 1 && !visited[j]) {
				dfs(j); // 재귀호출
			}
		}
	};

	for (let i = 0; i < isConnected.length; i++) {
		if (!visited[i]) {
			provinces++;
			dfs(i);
		}
	}

	return provinces;
};

console.log(
	findCircleNum2([
		[1, 1, 0],
		[1, 1, 0],
		[0, 0, 1],
	])
);

console.log(
	findCircleNum2([
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
	])
);
