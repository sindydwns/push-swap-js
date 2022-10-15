const data = {};
data.data.swap = (container) => {

}

data.push = (from, to) => {

}

data.rotate = (container, isReverse) => {

}

data.a = [];
data.b = [];
data.sa = () => swap(a);
data.sb = () => swap(b);
data.ss = () => swap(a) & swap(b);
data.pa = () => push(b, a);
data.pb = () => push(a, b);
data.ra = () => rotate(a, false);
data.rb = () => rotate(b, false);
data.rr = () => rotate(a, false) & rotate(b, false);
data.rra = () => rotate(a, true);
data.rrb = () => rotate(b, true);
data.rrr = () => rotate(a, true) & rotate(b, true);
export default data;
