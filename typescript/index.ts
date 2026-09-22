// number
// string
// boolean
// null
// undefined
// any

let a: number = 10;
let b: string = 'hello';

let c: any = 4;

c = 'hello';
let d : number | string = 10;
d = 3
d = null

let e:number[] = [1,2]

function addNumber (a: number, b: number): number {
    return a + b;
}

addNumber(1, 2);