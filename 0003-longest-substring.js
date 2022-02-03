const lengthOfLongestSubstring = (s) => {
	if (s.length <= 1) return s.length;

	let left = 0;
	let max = 1;
	let seen = {};

	for (let right = 0; right < s.length; right++) {
		let current = s[right];
		// 현재 글자를 이미 본적이 없다면 undefined가 할당된다
		let prev = seen[current];

		if (prev >= left) {
			// 현재 글자를 본적이 있으면 저장된 위치 바로 다음 위치부터 substring 길이를 측정한다
			left = prev + 1;
		}
		seen[current] = right;
		// 종료점 - 시작점 + 1 = substring 길이
		max = Math.max(max, right - left + 1);
	}

	return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
