function solution(array, commands) {
	let results = [];

	for (let c of commands) {
		let slicedSorted = array.slice(c[0] - 1, c[1]).sort((a, b) => a - b);
		results.push(slicedSorted[c[2] - 1]);
	}

	return results;
}

console.log(
	solution(
		[1, 5, 2, 6, 3, 7, 4],
		[
			[2, 5, 3],
			[4, 4, 1],
			[1, 7, 3],
		]
	)
);
