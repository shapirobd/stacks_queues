const DoublyLinkedList = require("./doublyLinkedList");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class LinkedListStack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
		this._list = new DoublyLinkedList();
	}

	update() {
		this.first = this._list.tail;
		this.last = this._list.head;
		this.size = this._list.length;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		this._list.push(val);
		this.update();
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		if (this.size === 0) {
			throw new Error("Error: The stack is empty");
		}
		const val = this._list.pop();
		this.update();
		return val;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		return this.first.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = LinkedListStack;
