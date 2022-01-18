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
	// 현재 위치, 현재 노드, start 값 할당
	let currentPos = 1;
	let currentNode = head;
	// newList의 이전 위치용으로 사용
	let start = head;

	// left 전까지는 순차적으로 연결 리스트 진행
	while (currentPos < left) {
		start = currentNode;
		currentNode = currentNode.next;
		currentPos++;
	}

	// 뒤집은 순서를 저장할 newList 생성
	let newList = null;
	// right 이후에 순차적으로 진행할 때 필요한 tail 위치 저장
	let tail = currentNode;

	// left와 right 위치 사이에서 while 문으로 순서 뒤집기 진행
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

	// 첫 노드부터 순서를 뒤집는 경우에는 head의 순서에 영향이 있으니 newList를 리턴하기
	if (left > 1) {
		return head;
	} else {
		return newList;
	}
};

printLinkedList(linkedList);
printLinkedList(reverseBetween(linkedList, 2, 4));
