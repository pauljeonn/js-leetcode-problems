// 문제 정의: parentheses가 똑같은 종류로 올바른 순서에 열고 닫히면 return true, 아니면 return false한다.
// Approach: opening과 closing은 pair로 동작하고 closing이 valid하려면 opening과 붙어있어야 한다.
// 그러니 object로 서로를 묶어서 opening을 만나면 stack에 push하고 closing을 만나면 opening을 pop한다.

var isValid = function (s) {
	let stack = [];
	const parentheses = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	let i = 0;
	while (i < s.length) {
		let current = s[i];
		// opening을 만나면
		if (parentheses[current]) {
			stack.push(current);
		}
		// closing을 만나면
		else {
			// 만약 마지막 stack 아이템이 current와 맞는 opening이라면
			if (parentheses[stack[stack.length - 1]] === current) {
				stack.pop();
				// 아니면 바로 return false
			} else {
				return false;
			}
		}
		i++;
	}

	// 전부 매칭해서 pop되었으면 return true
	return stack.length === 0;
};

console.log(isValid('[]'));
console.log(isValid('[](){}'));
console.log(isValid('{([])}'));
console.log(isValid('{[]()}'));
console.log(isValid('[(}'));
console.log(isValid('[(){}])'));
console.log(isValid('{'));
console.log(isValid(']'));

// #2
// 더 간결한 stack.pop() 처리

var isValid2 = function (s) {
	let stack = [];
	const parentheses = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	let i = 0;
	while (i < s.length) {
		let current = s[i];
		if (parentheses[current]) {
			stack.push(current);
		} else {
			if (parentheses[stack.pop()] !== current) {
				return false;
			}
		}
		i++;
	}

	return stack.length === 0;
};

console.log(isValid2('[]'));
console.log(isValid2('[](){}'));
console.log(isValid2('{([])}'));
console.log(isValid2('{[]()}'));
console.log(isValid2('[(}'));
console.log(isValid2('[(){}])'));
console.log(isValid2('{'));
console.log(isValid2(']'));
