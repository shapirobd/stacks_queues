const DoublyNode = require("./doublyNode");

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new DoublyNode(val);
		if (this.tail) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		} else {
			this.head = newNode;
		}
		this.tail = newNode;
		this.length++;
	}

	pop() {
		const oldTail = this.tail;
		const newTail = this.tail.prev;
		this.tail.prev = null;
		this.tail = newTail;
		this.length--;
		return oldTail.val;
	}

	unshift(val) {
		const newNode = new DoublyNode(val);
		if (this.head) {
			this.head.prev = newNode;
			newNode.next = this.head;
		} else {
			this.tail = newNode;
		}
		this.head = newNode;
		this.length++;
	}

	shift() {
		const oldHead = this.head;
		const newHead = this.head.next;
		this.head.next = null;
		newHead.prev = null;
		this.head = newHead;
		this.length--;
		return oldHead.val;
	}
}

module.exports = DoublyLinkedList;
