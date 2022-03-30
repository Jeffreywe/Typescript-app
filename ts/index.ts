const helloWorld = () => {
    console.log("Hello, Typescript world!");
}

const add = (a: number, b: number): number => {
    return a + b;
}
const add1 = (a: number, b: number): void => {
    console.log(a + b);
}

helloWorld();

add(1, 4);
add1(133, 34);

let a = 1;
let b = 22;
let c = 87;