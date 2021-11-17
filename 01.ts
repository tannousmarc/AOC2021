import * as utils from "./utils"
import * as fs from 'fs'

fs.readFile('inputs/01.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if(err) throw err;

    const nums = data.split('\n').map(Number);
    const map: Map<number, number> = new Map();

    for(const a of nums){
        for(const b of nums){
            if(a === b)
                continue;
            map.set(2020 - a - b, a * b);
        }
    }

    for(const num of nums)
        if(map.has(num))
            console.log(map.get(num)! * num);
});
