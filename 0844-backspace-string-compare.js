var backspaceCompare = function (s, t) {
	let first = '';
	let second = '';

	// 첫번째 string 최종값 구하기
	for (let i of s) {
		if (i === '#') {
			// '#'이면 이전값 제거
			first = first.slice(0, -1);
		} else {
			// '#'이 아니면 추가
			first = first.concat(i);
		}
	}

	// 두번째 string 최종값 구하기
	for (let j of t) {
		if (j === '#') {
			// '#'이면 이전값 제거
			second = second.slice(0, -1);
		} else {
			// '#'이 아니면 추가
			second = second.concat(j);
		}
	}

	// 두 개의 최종값이 일치하면 true 반환하기
	return first === second;
};

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('a#c', 'b'));
