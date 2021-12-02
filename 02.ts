import * as utils from "./utils"
import * as fs from 'fs'

fs.readFile('inputs/02.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if(err) throw err;
    
    const instrs = data.split('\n');
    let pos = [0, 0, 0];

    for(const instr of instrs){
        const [dir, val] = instr.split(" ");
        switch (dir){
            case "forward":
                pos[1] += Number(val);
                pos[0] += pos[2] * Number(val);
                break;
            case "down":
                pos[2] += Number(val);
                break
            case "up":
                pos[2] -= Number(val);
                break;
        }
    }

    console.log(pos[0] * pos[1]);
});
