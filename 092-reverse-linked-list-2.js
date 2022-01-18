/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

// Linked List 생성
const linkedList = [5, 4, 3, 2, 1].reduce(
	(acc, val) => new ListNode(val, acc),
	null
);

// Linked List 프린트용 함수
const printLinkedList = (head) => {
	let arr = [];
	let current = head;

	while (current) {
		arr.push(current.val);
		current = current.next;
	}

	console.log(arr);
};

var reverseBetween = function (head, left, right) {
	let currentPos = 1;
	let currentNode = head;
	let start = head;

	while (currentPos < left) {
		start = currentNode;
		currentNode = currentNode.next;
		currentPos++;
	}

	let newList = null;
	let tail = currentNode;

	while (currentPos >= left && currentPos <= right) {
		const next = currentNode.next;
		currentNode.next = newList;
		newList = currentNode;
		currentNode = next;
		currentPos++;
	}

	// 완성된 newList를 이전까지 만들었던 리스트의 next로 이어주기
	start.next = newList;
	// tail, 즉 left 위치에서 저장한 노드부터 right 이후의 node들을 이어주기
	tail.next = currentNode;

	// 첫 노드부터 순서를 뒤집는 경우에는 head의 순서에 영향이 있으니 newList 리턴하기
	if (left > 1) {
		return head;
	} else {
		return newList;
	}
};

printLinkedList(linkedList);
printLinkedList(reverseBetween(linkedList, 2, 4));
