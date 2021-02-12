const DoublyLinkedList = require("./doublyLinkedList");
const Node = require("./node");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class ArrayStack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
		this._list = [];
	}

	update() {
		this.first = this._list[this._list.length - 1];
		this.last = this._list[0];
		this.size = this._list.length;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		this._list.push(new Node(val));
		this.update();
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		if (this.size === 0) {
			throw new Error("Error: The stack is empty");
		}
		const val = this._list.pop().val;
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

module.exports = ArrayStack;
