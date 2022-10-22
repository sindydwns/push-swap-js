class Data {
	constructor(a, b) {
		this.a = a;
		this.b = b;
		this.cmds = [];
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

	sa() {
		this.swap(this.a);
		this.cmds.push("sa");
		return "sa";
	}
	sb() {
		this.swap(this.b);
		this.cmds.push("sb");
		return "sb";
	}
	ss() {
		this.swap(this.a) & this.swap(this.b);
		this.cmds.push("ss");
		return "ss";
	}
	pa() {
		this.push(this.b, this.a);
		this.cmds.push("pa");
		return "pa";
	}
	pb() {
		this.push(this.a, this.b);
		this.cmds.push("pb");
		return "pb";
	}
	ra() {
		this.rotate(this.a, false);
		this.cmds.push("ra");
		return "ra";
	}
	rb() {
		this.rotate(this.b, false);
		this.cmds.push("rb");
		return "rb";
	}
	rr() {
		this.rotate(this.a, false) & this.rotate(this.b, false);
		this.cmds.push("rr");
		return "rr";
	}
	rra() {
		this.rotate(this.a, true);
		this.cmds.push("rra");
		return "rra";
	}
	rrb() {
		this.rotate(this.b, true);
		this.cmds.push("rrb");
		return "rrb";
	}
	rrr() {
		this.rotate(this.a, true) & this.rotate(this.b, true);
		this.cmds.push("rrr");
		return "rrr";
	}
	repeat(commands, times) {
		const commandArr = [];
		for (let i = 0; i < times; i++) {
			const cmds = commands.split(" ");
			for (let k = 0; k < cmds.length; k++) {
				commandArr.push(this[cmds[k]]());
			}
		}
		return commandArr.join(" ");
	}
	getCmds() {
		return [...this.cmds];
	}
}
export default Data;
