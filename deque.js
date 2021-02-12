const DoublyLinkedList = require("./doublyLinkedList");

class Deque {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
		this._list = new DoublyLinkedList();
	}

	updateData() {
		this.first = this._list.head;
		this.last = this._list.tail;
		this.size = this._list.length;
	}

	// Add to beginning
	appendLeft(val) {
		this._list.unshift(val);
		this.updateData();
	}

	// Add to end
	appendRight(val) {
		this._list.push(val);
		this.updateData();
	}

	// Remove & return from beginning
	popLeft() {
		const val = this._list.shift();
		this.updateData();
		return val;
	}

	// Remove & return from end
	popRight() {
		const val = this._list.pop();
		this.updateData();
		return val;
	}

	// Return (don’t remove) beginning
	peekLeft() {
		return this._list.head;
	}

	// Return (don’t remove) end
	peekRight() {
		return this._list.tail;
	}

	// Are there items in the deque?
	isEmpty() {
		return this._list.length === 0;
	}
}

module.exports = Deque;
