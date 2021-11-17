import * as utils from "./utils"
import * as fs from 'fs'

fs.readFile('inputs/03.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if(err) throw err;

    const input:Array<string> = data.split('\n');
    const increments = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    let res = 1;

    for(const increment of increments){
        let [xPos, yPos] = [0, 0];
        const [xIncrement, yIncrement] = [increment[0], increment[1]];
        let partialRes = 0;

        while(yPos + yIncrement < input.length){
            [xPos, yPos] = [xPos + xIncrement, yPos + yIncrement];
            if(input[yPos][xPos  % input[0].length] === '#')
                partialRes++;
        }

        res *= partialRes;
    }
    console.log(res);
});
