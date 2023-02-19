/**
 * 函数声明（Function Declaration）
 */
// function sum(x: number, y: number) :number {
//     return x + y;
// }
// console.log(typeof sum)

/**
 * 函数表达式（Function Expression）
 */
// let mySum = function (x: number, y: number) :number {
//     return x + y;
// }
// console.log(typeof mySum)

/**
 * 可选参数
 */
//  function buildName(firstName: string, lastName?: string) :string {
//     if (lastName) {
//         return firstName + ' ' + lastName
//     } else {
//         return firstName
//     }
// }
// let tomcat = buildName('Tom', 'Cat')
// console.log(tomcat)

// let tom = buildName('Tom')
// console.log(tom)


// function buildName(firstName?: string, lastName: string) :string {
//     if (firstName) {
//         return firstName + ' ' + lastName
//     } else {
//         return lastName
//     }
// }
// let tomcat = buildName('Tom', 'Cat')
// console.log(tomcat)

// let tom = buildName(undefined, 'Tom')
// console.log(tom)



/**
 * 默认参数
 */
// function buildName(firstName: string, lastName: string = 'Cat') :string {
//     return firstName + ' ' + lastName
// }
// let tomcat = buildName('Tom', 'Cat')
// console.log(tomcat)

// let tom = buildName('Tom')
// console.log(tom)


// function buildName(firstName: string = 'Cat', lastName: string) :string {
//     return firstName + ' ' + lastName
// }
// let tomcat = buildName('Tom', 'Cat')
// console.log(tomcat)

// let tom = buildName(undefined, 'Tom')
// console.log(tom)




/**
 * 剩余参数
 */
// function push(array: any[], ...items: any[]) {
//     items.forEach(function(item) {
//         array.push(item)
//     });
// }

// let a: any[] = []
// push(a, 1, 2, 3)
// console.log(a)


/**
 * 函数重载
 */
//  function reverse(x: number): number;
//  function reverse(x: string): string;
//  function reverse(x: number | string): number | string | void {
//      if (typeof x === 'number') {
//          return Number(x.toString().split('').reverse().join(''));
//      } else if (typeof x === 'string') {
//          return x.split('').reverse().join('');
//      }
//  }

//  console.log(reverse(9527))
//  console.log(reverse("9527"))