/**
 * 将一个联合类型断言为其中一个类型
 */
// interface Cat {
//     name: string;
//     run(): void;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class CCat implements Cat {
//     public name: string;
//     run(): void {
//         console.log(`${this.name} is running`)
//     }
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
// let cCat: CCat = new CCat();
// console.log(typeof cat)
// console.log(cat instanceof Cat)
/**
 * 将一个父类断言为更加具体的子类
 */
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
var apiError = new ApiError();
function isApiError(error) {
    console.log(error instanceof Error);
    console.log(error instanceof HttpError);
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
console.log("isApiError = " + isApiError(apiError));
// function isApiError(error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }
// function isHttpError(error: Error) {
//     console.log(typeof (error as HttpError).statusCode)
//     if (typeof (error as HttpError).statusCode === 'number') {
//         return true;
//     }
//     return false;
// }
// console.log(`isApiError = ${isApiError(apiError)}`)
// console.log(`isHttpError = ${isHttpError(apiError)}`)
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
