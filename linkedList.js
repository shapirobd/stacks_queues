const Node = require("./node.js");

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		this.tail ? (this.tail.next = newNode) : (this.head = newNode);
		this.tail = newNode;
		this.length++;
	}

	shift() {
		const oldHead = this.head;
		const newHead = this.head.next;
		this.head.next = null;
		this.head = newHead;
		this.length--;
		return oldHead.val;
	}
}

module.exports = LinkedList;
