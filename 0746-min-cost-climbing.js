const minCostClimbingStairs = (cost) => {
	let memo = []; // 각 계단 위치까지의 최소 비용 저장
	let n = cost.length;

	// minCost 헬퍼 함수
	const minCost = (step) => {
		// Base case
		if (step < 0) return 0;
		if (step === 0 || step === 1) return cost[step];

		// Recursive case
		// memo에 현재 계단 비용이 있으면 반환해주기
		if (memo[step] !== undefined) return memo[step];
		// 현재 계단 비용이 memo에 없으면 재귀함수를 통해 비교하고 찾은 최소비용 저장하기
		memo[step] = cost[step] + Math.min(minCost(step - 1), minCost(step - 2));
		return memo[step];
	};

	// 도착지점 한칸 아래 계단과 두칸 아래 계단까지의 필요한 최소비용 중 최솟값 반환하기
	return Math.min(minCost(n - 1), minCost(n - 2));
};

// TEST
console.log(minCostClimbingStairs([10, 15, 20]));
