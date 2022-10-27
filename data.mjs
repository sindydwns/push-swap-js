class Data {
	constructor(a, b) {
		this.a = a;
		this.b = b;
		this.cmds = [];
		this.nextCmds = [];
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

	sa(silent) {
		this.swap(this.a);
		if (silent == null)
			this.cmds.push("sa");
		return "sa";
	}
	sb(silent) {
		this.swap(this.b);
		if (silent == null)
			this.cmds.push("sb");
		return "sb";
	}
	ss(silent) {
		this.swap(this.a) & this.swap(this.b);
		if (silent == null)
			this.cmds.push("ss");
		return "ss";
	}
	pa(silent) {
		this.push(this.b, this.a);
		if (silent == null)
			this.cmds.push("pa");
		return "pa";
	}
	pb(silent) {
		this.push(this.a, this.b);
		if (silent == null)
			this.cmds.push("pb");
		return "pb";
	}
	ra(silent) {
		this.rotate(this.a, false);
		if (silent == null)
			this.cmds.push("ra");
		return "ra";
	}
	rb(silent) {
		this.rotate(this.b, false);
		if (silent == null)
			this.cmds.push("rb");
		return "rb";
	}
	rr(silent) {
		this.rotate(this.a, false) & this.rotate(this.b, false);
		if (silent == null)
			this.cmds.push("rr");
		return "rr";
	}
	rra(silent) {
		this.rotate(this.a, true);
		if (silent == null)
			this.cmds.push("rra");
		return "rra";
	}
	rrb(silent) {
		this.rotate(this.b, true);
		if (silent == null)
			this.cmds.push("rrb");
		return "rrb";
	}
	rrr(silent) {
		this.rotate(this.a, true) & this.rotate(this.b, true);
		if (silent == null)
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
	next(cnt) {
		for (let i = 0; i < cnt; i++) {
			if (this.nextCmds.length == 0)
				return;
			const cmd = this.nextCmds.pop();
			this[cmd]();
		}
	}
	reset(cnt) {
		const reverseMap = {
			sa: "sa",
			sb: "sb",
			ss: "ss",
			pb: "pa",
			pa: "pb",
			ra: "rra",
			rb: "rrb",
			rr: "rrr",
			rra: "ra",
			rrb: "rb",
			rrr: "rr",
		}
		for (let i = 0; i < cnt; i++) {
			if (this.cmds.length == 0)
				return;
			const cmd = this.cmds.pop();
			const reverseCmd = reverseMap[cmd];
			this[reverseCmd]("slient");
			this.nextCmds.push(cmd);
		}
	}
	getCmds() {
		return [...this.cmds];
	}
}
export default Data;
