/**
 * Constants
 */
const PI = 3.141593;
// PI = 3.14; // error while compile

/**
 * Scoping
 * Block-Scoped Variables
 */
let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}

/**
 * Scoping
 * Block-Scoped Functions
 * !! babel beat ts
 */
// {
//     function foo () { return 1 }
//     foo() === 1
//     {
//         function foo () { return 2 }
//         foo() === 2
//     }
//     foo() === 1
// }

var evens = [1, 2, 3, 4, 5, 6, 7];
/**
 * Arrow Functions
 * Expression Bodies
 */
evens.map(v => v + 1);
evens.map(v => ({ even: v, odd: v + 1 }));
evens.map((v, i) => v + i);

/**
 * Arrow Functions
 * Statement Bodies
 */
evens.forEach(v => {
    if (v % 5 === 0) {
        [].push(v);
    }
});

/**
 * Arrow Functions
 * Lexical this
 */
var obj = {
    nums: [1, 2, 3, 4, 5, 6, 7],
    fives: [],
    cal: function () {
        this.nums.forEach((v) => {
            if (v % 5 === 0) {
                this.fives.push(v);
            }
        });
    }
};

/**
 * Extended Parameter Handling
 * Default Parameter Values
 */
function f (x, y = 7, z = 42) {
    return x + y + z
}

/**
 * Extended Parameter Handling
 * Rest Parameter
 */
function f1 (x, y, ...a) {
    return (x + y) * a.length
}

/**
 * Extended Parameter Handling
 * Spread Operator
 * !! babel beat ts
 */
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
f1(1, 2, ...params) === 9

var str = "foo"
// var chars = [ ...str ] // [ "f", "o", "o" ] // error on ts

/**
 * Template Literals
 * String Interpolation
 */
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

/**
 * Template Literals
 * Custom Interpolation
 */
// not test

/**
 * Template Literals
 * Raw String Access
 * !! babel beat ts
 */
// function quux (strings, ...values) {
//     strings[0] === "foo\n"
//     strings[1] === "bar"
//     strings.raw[0] === "foo\\n"
//     strings.raw[1] === "bar"
//     values[0] === 42
// }
// quux `foo\n${ 42 }bar`

// String.raw `foo\n${ 42 }bar` === "foo\\n42bar"

/**
 * Extended Literals
 * Binary & Octal Literal
 */
0b111110111 === 503
0o767 === 503

/**
 * Extended Literals
 * Binary & Octal Literal
 * !! babel beat ts
 */
// "𠮷".length === 2
// "𠮷".match(/./u)[0].length === 2
// 5| "𠮷" === "\uD842\uDFB7"
// "𠮷" === "\u{20BB7}"
// "𠮷".codePointAt(0) == 0x20BB7
// for (let codepoint of "𠮷") console.log(codepoint)

/**
 * Enhanced Regular Expression
 * Regular Expression Sticky Matching
 */
// not test

/**
 * Enhanced Object Properties
 * Property Shorthand
 */
var x = 1, y = 2;
var enhObj1 = { x, y };

/**
 * Enhanced Object Properties
 * Computed Property Names
 */
function qunx() {
    return '-b';
}
let enhObj2 = {
    foo: 'bar',
    [ "baz" + qunx() ]: 42
};

/**
 * Enhanced Object Properties
 * Method Properties
 * !! babel beat ts
 */
// let enhObj3 = {
//     foo (a, b) {},
//     bar (x, y) {},
//     *quux (x, y) {}
// };

/**
 * Destructuring Assignment
 * Array Matching
 * !! babel beat ts
 */
// var list = [ 1, 2, 3 ]
// var [ a, , b ] = list
// [ b, a ] = [ a, b ]

/**
 * Destructuring Assignment
 * Object Matching, Shorthand Notation
 */
function getASTNode() {
    return {
        op: 1, lhs: { op: 4 }, rhs: 3
    };
}
var { op, lhs, rhs } = getASTNode();

/**
 * Destructuring Assignment
 * Object Matching, Deep Matching
 */
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()

/**
 * Destructuring Assignment
 * Parameter Context Matching
 */
function da_f ([ name, val ]) {
    console.log(name, val)
}
function da_g ({ name: n, val: v }) {
    console.log(n, v)
}
function da_h ({ name, val }) {
    console.log(name, val)
}
da_f([ "bar", 42 ])
da_g({ name: "foo", val:  7 })
da_h({ name: "bar", val: 42 })

/**
 * Destructuring Assignment
 * Fail-Soft Destructuring
 */
{
    let list = [ 7, 42 ]
    let [ a = 1, b = 2, c = 3, d ] = list
}

/**
 * Classes
 * Class Definition
 * !! babel beat ts
 */
// class Shape {
//     constructor (id, x, y) {
//         this.id = id;
//         this.move(x, y);
//     }
//     move (x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

/**
 * Classes
 * !! another blog
 */

/**
 * Symbol Type
 * Symbol Type
 * !! babel beat ts
 */
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

// let s = new Set()
// s.add("hello").add("goodbye").add("hello")
// s.size === 2
// s.has("hello") === true
// for (let key of s.values()) // insertion order
//     console.log(key)

new ArrayBuffer(24)

// var dst  = { quux: 0 }
// var src1 = { foo: 1, bar: 2 }
// var src2 = { foo: 3, baz: 4 }
// Object.assign(dst, src1, src2)


// Math.sign(7);