const maxDepth = (root) => {
	// 깊이 우선 탐색 함수; 매개변수로 현재 노드와 현재까지의 깊이를 받는다.
	const dfs = (node, depth) => {
		// 더 이상 노드가 없는 상황에서는 현재까지의 깊이를 반환
		if (!node) return depth;
		// 노드가 존재하면 깊이 증가 후 양쪽 중 최대 깊이 반환
		depth++;
		return Math.max(dfs(node.left, depth), dfs(node.right, depth));
	};

	return dfs(root, 0);
};
