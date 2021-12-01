import * as utils from "./utils"
import * as fs from 'fs'

fs.readFile('inputs/01.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if(err) throw err;

    const nums = data.split('\n').map(Number);

    let res = 0;
    for(let i = 3; i < nums.length; i++)
        if(nums[i - 3] < nums[i])
            res++;

    console.log(res);
});
