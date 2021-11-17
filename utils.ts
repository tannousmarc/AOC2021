const utils = {
    // rotate a point 90 degrees to the right in a cartesian system
    rotateRight: (coordinates: Readonly<[number, number]>): [number, number] => 
        [coordinates[1], -coordinates[0]],

    // rotate a point 90 degrees to the left in a cartesian system
    rotateLeft: (coordinates: Readonly<[number, number]>): [number, number] => 
        [-coordinates[1], coordinates[0]],

    // check if two arrays are equal
    arraysEqual: (a: Readonly<Array<unknown>>, b: Readonly<Array<unknown>>): boolean => 
        JSON.stringify(a) === JSON.stringify(b),

    // deep clone an array or object (copy by value not by reference)
    deepClone: (array: Readonly<Array<unknown>> | Readonly<Object>): Array<unknown> | Object => 
        JSON.parse(JSON.stringify(array)),

    // multiple arrays' cartesian product
    cartesianProduct: (...args : Readonly<Array<Array<unknown>>>): Array<unknown> => 
        args.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat()))),
    // chinese remainder theorem
    // thx to https://github.com/pnicorelli/nodejs-chinese-remainder/blob/master/chinese_remainder.js
    // CRT: (a, n) => {
    //     const mul_inv = (a, b) => {
    //         if(b === 1)
    //             return 1;

    //         const b0 = b;
    //         let [x0, x1] = [0, 1];
    //         let q, tmp;

    //         while(a > 1){
    //             q = parseInt(a/b);
    //             tmp = a;
    //             a = b;
    //             b = tmp%b;
    //             tmp = x0;
    //             x0 = x1 - (q * x0);
    //             x1 = tmp;
    //         }

    //         if(x1 < 0)
    //             x1 = x1+b0;

    //         return x1;
    //     };

    //     let p = i = prod = 1;
    //     let sm = 0;

    //     for(i = 0; i < n.length; i++)
    //         prod = prod * n[i];

    //     for(i = 0; i < n.length; i++){
    //         p = prod / n[i];
    //         sm = sm + (a[i] * mul_inv(p, n[i]) * p);
    //     }

    //     return sm % prod;
    // }
  };

  export default utils;