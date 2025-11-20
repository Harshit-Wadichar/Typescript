# TypeScript Data Types — README

A simple, beginner-friendly guide to the main data types in TypeScript with short explanations and code examples. Use this README as a quick reference.

---

## Table of contents

1. Basic (Primitive) Types

   * `boolean`, `number`, `string`, `bigint`, `symbol`, `null`, `undefined`
2. Special Types

   * `any`, `unknown`, `never`, `void`, `object`
3. Composite Types

   * `Array`, `Tuple`, `Enum`
4. Advanced Type Features

   * `Union`, `Intersection`, `Literal` types, `Type Aliases`, `Interfaces`, `Generics`
5. Type Operators and Assertions
6. Readonly, Optional properties and Index signatures
7. Examples and usage tips

---

## 1. Basic (Primitive) Types

### `boolean`

```ts
let isDone: boolean = false;
```

Use for true/false values.

### `number`

```ts
let count: number = 42;
let price: number = 12.99;
```

All numeric values (integers and floats) use `number`.

### `string`

```ts
let name: string = "Harshit";
let greeting: string = `Hello, ${name}!`;
```

Use backticks for template strings.

### `bigint`

```ts
let big: bigint = 9007199254740991n;
```

Use when you need integers larger than `Number.MAX_SAFE_INTEGER`.

### `symbol`

```ts
const id = Symbol("id");
```

Unique identifiers, useful for object keys.

### `null` and `undefined`

```ts
let nothing: null = null;
let notAssigned: undefined = undefined;
```

Depending on `--strictNullChecks`, `null`/`undefined` may or may not be assignable to other types.

---

## 2. Special Types

### `any`

```ts
let whatever: any = 10;
whatever = "hello";
whatever = { x: 1 };
```

`any` disables type checking. Use sparingly — it defeats TypeScript's safety.

### `unknown`

```ts
let value: unknown = "hi";
// need a type check before using it as a concrete type
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

`unknown` is safer than `any` — you must narrow it before use.

### `never`

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

`never` represents values that never occur (e.g., a function that always throws or an infinite loop).

### `void`

```ts
function log(msg: string): void {
  console.log(msg);
}
```

`void` is typically used for functions that don't return anything.

### `object`

```ts
let obj: object = { a: 1 };
```

Represents non-primitive types. Not very useful on its own — prefer specific types or interfaces.

---

## 3. Composite Types

### `Array`

```ts
let nums: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b"];
```

Two syntaxes for arrays.

### `Tuple`

```ts
let pair: [string, number] = ["age", 30];
```

Fixed-length array with known types per position.

### `Enum`

```ts
enum Direction { Up = 1, Down, Left, Right }
let dir: Direction = Direction.Up;
```

Enums give friendly names to numeric values.

---

## 4. Advanced Type Features

### `Union` types

```ts
let id: string | number;
id = "abc";
id = 123;
```

Variable can be one of multiple types.

### `Intersection` types

```ts
type A = { a: number };
type B = { b: string };
type AB = A & B; // must have both a and b
let both: AB = { a: 1, b: "x" };
```

Combine types together.

### Literal types

```ts
let direction: "up" | "down";
direction = "up";
```

Restrict a value to exact literals.

### Type Aliases

```ts
type ID = string | number;
let userId: ID = 10;
```

Create a reusable name for a type.

### Interfaces

```ts
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}
const user: User = { id: 1, name: "Harshit" };
```

Interfaces are good for object shapes and are extendable.

### Generics

```ts
function wrap<T>(x: T): { value: T } {
  return { value: x };
}
const s = wrap<string>("hello");
const n = wrap(123); // type inferred
```

Generics let you write reusable, type-safe functions and types.

---

## 5. Type Operators and Assertions

* `typeof` for narrowing at runtime (e.g. `if (typeof x === 'string') ...`).
* `as` to assert a type (use carefully):

```ts
let some: unknown = "hello";
let str = some as string;
```

* `keyof`, `in`, `extends` appear in advanced type-level programming.

---

## 6. Readonly, Optional properties and Index signatures

```ts
interface Point {
  readonly x: number; // cannot be changed after creation
  y?: number; // optional
  [propName: string]: any; // index signature
}
```

---

## 7. Examples and usage tips

### Example: function with union and type narrowing

```ts
function formatId(id: string | number) {
  if (typeof id === "number") return id.toFixed(0);
  return id.toUpperCase();
}
```

### Example: generic repository type

```ts
interface Repo<T> {
  get(id: string): T | null;
  save(item: T): void;
}
```

### Tips

* Prefer specific types and interfaces over `any`.
* Use `unknown` if you need safety when working with external data.
* Enable `--strict` in `tsconfig.json` for best safety.
* Use `readonly` to prevent accidental mutations.
* Prefer `type` for unions/aliases and `interface` for object shapes and extension, but both can often be used interchangeably.

---

## Quick reference table

| Type                     | Use for                         |
| ------------------------ | ------------------------------- |
| `boolean`                | true / false                    |
| `number`                 | all numeric values              |
| `string`                 | text                            |
| `bigint`                 | very large integers             |
| `symbol`                 | unique IDs                      |
| `null` / `undefined`     | empty values                    |
| `any`                    | opt-out of type checking        |
| `unknown`                | safe-unknown values             |
| `void`                   | no return value                 |
| `never`                  | functions that never return     |
| `object`                 | non-primitive values            |
| `Array` / `Tuple`        | lists and fixed-length tuples   |
| `enum`                   | named constants                 |
| `union` / `intersection` | combine or allow multiple types |
| `generic`                | reusable type-safe templates    |

---

## Where to go next

* Official handbook: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
* Try examples in the TypeScript playground: [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

---

Happy coding!
