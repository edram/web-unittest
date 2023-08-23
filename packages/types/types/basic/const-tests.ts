// const 类型测试
const num1 = 1;
let num2 = 1;
let num3 = 1 as const;

type TypeNum1 = typeof num1; // $ExpectType 1
type TypeNum2 = typeof num2; // $ExpectType number
type TypeNum3 = typeof num3; // $ExpectType 1

const str1 = "hello";
let str2 = "hello";
let str3 = "hello" as const;
type TypeStr1 = typeof str1; // $ExpectType "hello"
type TypeStr2 = typeof str2; // $ExpectType string
type TypeStr3 = typeof str3; // $ExpectType "hello"

const arr1 = ["hello"];
let arr2 = ["hello"];
const arr3 = ["hello", "world"] as const;

type TypeArr1 = typeof arr1; // $ExpectType string[]
type TypeArr2 = typeof arr2; // $ExpectType string[]
type TypeArr3 = typeof arr3; // $ExpectType readonly ["hello", "world"]
// @ts-expect-error
arr3.push("again");
// @ts-expect-error
const arr4: readonly ["hello", "world"] = [];
const arr5: readonly ["hello", "world"] = ["hello", "world"];

const obj1 = { hello: "hello", world: "world" };
let obj2 = { hello: "hello", world: "world" };
const obj3 = { hello: "hello", world: "world" } as const;
type TypeObj1 = typeof obj1; // $ExpectType { hello: string; world: string; }
type TypeObj2 = typeof obj2; // $ExpectType { hello: string; world: string; }

obj1.hello = "hello1";
// @ts-expect-error 不能修改
obj3.hello = "hello3";
