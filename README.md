# TypeScript — Essential Topics (README)

> A compact guide to the **most needed TypeScript topics**, with simple explanations and short examples so you can learn and apply them quickly.

## Table of Contents

1. Why TypeScript?
2. Getting started
3. Basic types
4. Type inference
5. Union & Intersection types
6. `type` vs `interface`
7. Functions & function types
8. Generics
9. Tuples & Arrays
10. Enums
11. Type guards & narrowing
12. Advanced object types: Index signatures, `keyof`, `typeof`
13. Mapped & conditional types
14. Utility types (built-in)
15. Declaration files (`.d.ts`)
16. Modules & imports
17. `tsconfig.json` and compiler options
18. Strict mode & recommended flags
19. Tooling & ecosystem

---

## 1. Why TypeScript?

TypeScript adds **types** to JavaScript. Types help catch bugs earlier, improve IDE autocompletion, and make large codebases easier to maintain.

## 2. Getting started

Install TypeScript and init a project:

```bash
npm install -D typescript
npx tsc --init
```

Run type check:

```bash
npx tsc --noEmit
```

Use TypeScript in Node or in bundlers (Webpack, Vite, Next.js) with appropriate setup.

## 3. Basic types

`string`, `number`, `boolean`, `null`, `undefined`, `any`, `unknown`, `void`, `never`.

```ts
let name: string = 'Harshit'
let age: number = 20
let flag: boolean = true
```

`any` disables type checking; prefer `unknown` if you must accept arbitrary values.

## 4. Type inference

TypeScript infers types when you initialize variables — you don't always need explicit annotations.

```ts
let count = 0 // inferred as number
```

Use annotations for function parameters or public APIs for clarity.

## 5. Union & Intersection types

* **Union** `A | B`: value can be A or B.
* **Intersection** `A & B`: value has properties of both A and B.

```ts
type ID = string | number
type Person = { name: string } & { age: number }
```

## 6. `type` vs `interface`

* `type` creates type aliases and can express unions, tuples, mapped types.
* `interface` declares object shapes and can be **merged** (useful for public libs).

Prefer `interface` for object shapes, `type` for unions/complex constructs.

## 7. Functions & function types

Annotate parameters and return types.

```ts
function add(a: number, b: number): number { return a + b }
const fn: (x: string) => void = (x) => console.log(x)
```

Function overloads let one name handle multiple signatures.

## 8. Generics

Generics make functions and types reusable while keeping types safe.

```ts
function identity<T>(arg: T): T { return arg }
const s = identity<string>('hello')
```

Common generic patterns: `T`, `K extends keyof T`, `U extends ...`.

## 9. Tuples & Arrays

Tuples have fixed lengths and types.

```ts
let point: [number, number] = [0, 1]
let names: string[] = ['a', 'b']
```

You can use labeled tuple syntax in newer TS versions for readability.

## 10. Enums

Enumerations for a named set of constants.

```ts
enum Role { Admin = 'admin', User = 'user' }
```

For safer output and tree-shaking, prefer `as const` unions of strings: `type Role = 'admin' | 'user'`.

## 11. Type guards & narrowing

Narrow a union to a specific type using checks:

```ts
function isString(x: unknown): x is string { return typeof x === 'string' }
if (isString(val)) { /* val is string here */ }
```

Also use `in`, `typeof`, `instanceof`, and discriminated unions.

## 12. Advanced object types: Index signatures, `keyof`, `typeof`

* **Index signature**: dynamic keys

```ts
type Dict = { [key: string]: number }
```

* **`keyof`**: get keys of a type

```ts
type Keys = keyof Person // 'name' | 'age'
```

* **`typeof`** (type query): get the type of a value

```ts
const user = { id: 1 }
type User = typeof user
```

## 13. Mapped & conditional types

Powerful type-level transformations.

```ts
type Readonly<T> = { readonly [K in keyof T]: T[K] }
type Nullable<T> = T | null
type IsString<T> = T extends string ? true : false
```

They let you build utility types or convert shapes (e.g., make all fields optional).

## 14. Utility types (built-in)

TS ships with many utilities: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters`, `Awaited`.

```ts
type PartialUser = Partial<User>
type NameOnly = Pick<User, 'name'>
```

Learn these — they save lots of boilerplate.

## 15. Declaration files (`.d.ts`)

Use `.d.ts` to declare types for JS libraries or global values.

```ts
// globals.d.ts
declare module 'some-js-lib'
```

Also used to publish types for npm packages.

## 16. Modules & imports

Use ES module syntax and ensure `moduleResolution` in `tsconfig` is set correctly.

```ts
import { readFile } from 'fs'
export function foo() {}
```

Know default vs named exports and how `esModuleInterop` affects imports.

## 17. `tsconfig.json` and compiler options

Key options:

* `target` (ES version), `module`
* `strict` and subflags
* `moduleResolution`
* `paths` & `baseUrl` (for import aliases)

Example minimal `tsconfig` for strict typing:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## 18. Strict mode & recommended flags

Turn on `strict` (includes `noImplicitAny`, `strictNullChecks`) — it prevents many runtime bugs and improves design.

Other helpful flags: `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`.

## 19. Tooling & ecosystem

* **Build tools**: Vite, Webpack, esbuild, tsc
* **Linters**: ESLint with `@typescript-eslint` plugin
* **Formatters**: Prettier
* **Testing**: Jest (with `ts-jest`) or Vitest
* **Type checking in CI**: `npx tsc --noEmit`



### Quick tips

* Prefer explicit types on public functions and library APIs.
* Use `unknown` instead of `any` for untrusted input.
* Start with `strict: true` early.
* Learn utility types — they are extremely handy.

### Resources

* Official handbook: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
* TypeScript Deep Dive (book) by Basarat

---
