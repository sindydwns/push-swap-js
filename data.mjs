const data = {};
data.swap = (container) => {
	if (container.length < 2)
		return;
	const temp = container[container.length - 2];
	container[container.length - 2] = container[container.length - 1];
	container[container.length - 1] = temp;
}

data.push = (from, to) => {
	if (from.length < 1)
		return;
	const temp = from.pop();
	to.push(temp);
}

data.rotate = (container, isReverse) => {
	if (container.length < 2)
		return;
	const temp = isReverse ? container.shift() : container.pop();
	if (isReverse)
		container.push(temp);
	else
		container.unshift(temp);
}

data.a = [];
data.b = [];
data.sa = () => data.swap(data.a);
data.sb = () => data.swap(data.b);
data.ss = () => data.swap(data.a) & data.swap(data.b);
data.pa = () => data.push(data.b, data.a);
data.pb = () => data.push(data.a, data.b);
data.ra = () => data.rotate(data.a, false);
data.rb = () => data.rotate(data.b, false);
data.rr = () => data.rotate(data.a, false) & data.rotate(data.b, false);
data.rra = () => data.rotate(data.a, true);
data.rrb = () => data.rotate(data.b, true);
data.rrr = () => data.rotate(data.a, true) & data.rotate(data.b, true);
export default data;
