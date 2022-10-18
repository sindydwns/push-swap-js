class Data {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
	swap(container) {
		if (container.length < 2)
			return;
		const temp = container[container.length - 2];
		container[container.length - 2] = container[container.length - 1];
		container[container.length - 1] = temp;
	}
	push(from, to) {
		if (from.length < 1)
			return;
		const temp = from.pop();
		to.push(temp);
	}
	rotate(container, isReverse) {
		if (container.length < 2)
			return;
		const temp = isReverse ? container.shift() : container.pop();
		if (isReverse)
			container.push(temp);
		else
			container.unshift(temp);
	}

	sa() { this.swap(this.a); }
	sb() { this.swap(this.b); }
	ss() { this.swap(this.a) & this.swap(this.b); }
	pa() { this.push(this.b, this.a); }
	pb() { this.push(this.a, this.b); }
	ra() { this.rotate(this.a, false); }
	rb() { this.rotate(this.b, false); }
	rr() { this.rotate(this.a, false) & this.rotate(this.b, false); }
	rra() { this.rotate(this.a, true); }
	rrb() { this.rotate(this.b, true); }
	rrr() { this.rotate(this.a, true) & this.rotate(this.b, true); }
}
export default Data;
