// Solution #1
var MyQueue = function () {
	this.stack1 = [];
	this.stack2 = [];
};

// push 메서드
MyQueue.prototype.push = function (x) {
	// stack1에 요소를 push해준다.
	this.stack1.push(x);
	return;
};

// pop 메서드
MyQueue.prototype.pop = function () {
	// stack1에 요소가 있다면 stack1에 있는 모든 요소들을 순서를 뒤집어서 stack2로 넘긴다.
	while (this.stack1.length > 0) {
		this.stack2.push(this.stack1.pop());
	}
	// stack2의 마지막 요소를 pop하고 나머지는 다시 뒤집어서 stack1으로 돌려준다.
	let popped = this.stack2.pop();
	while (this.stack2.length > 0) {
		this.stack1.push(this.stack2.pop());
	}
	return popped;
};

// peek 메서드
MyQueue.prototype.peek = function () {
	// stack1에 요소가 있다면 stack1의 첫 요소를 반환한다.
	if (this.stack1.length > 0) {
		return this.stack1[0];
	}
};

// empty 메서드
MyQueue.prototype.empty = function () {
	// 두 스택이 모두 비어있으면 true를 반환한다.
	return this.stack1.length === 0 && this.stack2.length === 0;
};

// Solution #2: pop과 peek 메서드를 수정한 방식
var MyQueue2 = function () {
	this.stack1 = [];
	this.stack2 = [];
};

// push 메서드
MyQueue2.prototype.push = function (x) {
	this.stack1.push(x);
};

// pop 메서드
MyQueue2.prototype.pop = function () {
  // stack2에 요소가 없으면 stack1에서 받아온다.
	if (this.stack2.length === 0) {
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
	}
	return this.stack2.pop();
};

// peek 메서드
MyQueue2.prototype.peek = function () {
  // stack2에 요소가 없으면 stack1에서 받아온다.
	if (this.stack2.length === 0) {
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
	}
	return this.stack2[this.stack2.length - 1];
};

// empty 메서드
MyQueue2.prototype.empty = function () {
	return this.stack1.length === 0 && this.stack2.length === 0;
};
