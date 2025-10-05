type Color = string;
type ColorSize = Record<Color, number>

const goodSize: ColorSize = {
    red:10,
    //green:20,
    blue:30,
}

const myAsyncFunction2 = async (): Promise<string> => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve('Hello')
        }, 5000)
    })
}

type MyGeneric<T> = {
    age: T;
}

const myNumber: MyGeneric<number> = {
    age:20,
}

const myString: MyGeneric<string> = {
    age: '20',
}

function printVariables2<T>(variableA: T, variableB: T){
    console.log(`${variableA} and ${variableB}`);
}

printVariables2(20,30);
printVariables2('20','30');
//printVariables(20,'30'); ne fonctionne pas puisque les deux variables doivent être du même type

function print2Variables<T, K>(variableA:T, variableB:K){
    console.log(`${variableA} and ${variableB}`)
}

print2Variables(20,30);
print2Variables('20','30');
print2Variables('20',30);
print2Variables(20,'30');

const myGenericFunction = <TInput, TOutput>(variableA: TInput):TOutput => {
    return variableA as unknown as TOutput;
}

const myGenericNumberFunction = <T extends number>(variableA: T):T => {
    return variableA;
}

const myGenericStringFunction = <T extends string>(variableA: T):T => {
    return variableA;
}

const myGenericColorFunction = <T extends Color>(variableA: T):T => {
    return variableA;
}

console.log(myGenericNumberFunction(20));
console.log(myGenericStringFunction("20"));
//console.log(myGenericStringFunction(20));
// console.log(myGenericColorFunction('yellow'));