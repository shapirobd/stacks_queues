const LinkedList = require("./linkedList.js");
const Node = require("./node.js");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class LinkedListQueue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
		this._list = new LinkedList();
	}

	updateData() {
		this.last = this._list.tail;
		this.first = this._list.head;
		this.size = this._list.length;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		this._list.push(val);
		this.updateData();
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		if (this.size === 0) {
			throw new Error("Error: The queue is empty");
		}
		const val = this._list.shift();
		this.updateData();
		return val;
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		return this.first.val;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = LinkedListQueue;
