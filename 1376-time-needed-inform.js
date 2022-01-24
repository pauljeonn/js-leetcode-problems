const numOfMinutes = (n, headID, manager, informTime) => {
	if (n <= 1) return 0;

	let totalTimes = [];

	const dfs = (manager, employees, time) => {
		for (let e of employees) {
			// 현재 직원에게 속한 직원(들)이 존재할 경우, 즉 현재 직원이 매니저일 경우
			if (adjList[e].length > 0) {
				// 먼저 현재 매니저의 informTime 더한 시간으로 재귀 함수 호출
				dfs(e, adjList[e], time + informTime[manager]);
			}
			// 가장 하위 레벨, 즉 매니저가 아닌 직원에 도달했을 때,
			else {
				// 현재 직원의 매니저의 informTime까지 더해서 totalTimes에 push하기
				totalTimes.push(time + informTime[manager]);
			}
		}
		return;
	};

	// 인접 리스트 생성
	const adjList = manager.map(() => []);
	// 모든 직원마다 해당하는 매니저를 찾고 매니저:직원 관계를 key-value로 저장
	for (let i = 0; i < n; i++) {
		const m = manager[i];
		if (m === -1) continue;
		adjList[m].push(i);
	}

	// dfs 함수 호출
	dfs(headID, adjList[headID], 0);

	// dfs path중에 가장 오래 걸린 시간 반환
	return Math.max(...totalTimes);
};

// TEST
console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]));
console.log(numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]));
console.log(
	numOfMinutes(
		15,
		0,
		[-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
		[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
	)
);
