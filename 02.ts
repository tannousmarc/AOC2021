import * as utils from "./utils"
import * as fs from 'fs'

fs.readFile('inputs/02.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if(err) throw err;

    console.log(
        data.split('\n')
            .map(line => /(\d+)-(\d+) ([a-zA-Z]): ([a-zA-Z]+)/.exec(line)!)
            .map(parsed => Number(parsed[4][Number(parsed[1]) - 1] === parsed[3]) + 
                           Number(parsed[4][Number(parsed[2]) - 1] === parsed[3]))
            .map(count => count === 1)
            .map(Number)
            .reduce((a, b) => a + b, 0)
    );
});
