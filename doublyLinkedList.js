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
}

module.exports = DoublyLinkedList;
