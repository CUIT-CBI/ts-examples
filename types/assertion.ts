/**
 * 将一个联合类型断言为其中一个类型
 */
// interface Cat {
//     name: string;
//     run(): void;
// }

// interface Fish {
//     name: string;
//     swim(): void;
// }

// function getName(animal: Cat | Fish) :string {
//     return animal.name;
// }

// let cat: Cat = {
//     name: "BigG", 
//     run: ():void => {console.log(`${getName(cat)} is running!`)}
// }

// cat.run()

// function isFish(animal: Cat | Fish) {
//     if (typeof animal.swim === 'function') {
//         return true;
//     }
//     return false;
// }

// console.log(`isFish = ${isFish(cat)}`)


// function isFish(animal: Cat | Fish) {
//     if (typeof (animal as Fish).swim === 'function') {
//         return true;
//     }
//     return false;
// }

// console.log(`isFish = ${isFish(cat)}`)






/**
 * 将一个父类断言为更加具体的子类
 */
// class ApiError extends Error {
//     code: number = 0;
// }

// class HttpError extends Error {
//     statusCode: number = 200;
// }

// let apiError = new ApiError()

// function isApiError(error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }

// console.log(`isApiError = ${isApiError(apiError)}`)


// function isApiError(error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }

// console.log(`isApiError = ${isApiError(apiError)}`)






/**
 * interface assertion
 */
// interface ApiError extends Error {
//     code: number;
// }

// interface HttpError extends Error {
//     statusCode: number;
// }

// let apiError: ApiError = {
//     code: 0,
//     name: "",
//     message: ""
// }

// function isApiError(error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }

// isApiError(apiError)


// function isApiError(error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }

// console.log(`isApiError = ${isApiError(apiError)}`)





/**
 * 将任何一个类型断言为 any
 * &
 * 将 any 断言为一个具体的类型
 */

// let x = "Hello, TypeScript!"
// console.log(x, typeof x);

// (x as any) = 1
// console.log(x, typeof x);

// (x as string) = "CUIT CBI"
// console.log(x, typeof x)

