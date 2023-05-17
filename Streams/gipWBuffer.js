import { gzip } from "zlib";
import { promisify } from "util";
import { promises as fs } from "fs";

const gzipPromise = promisify(gzip);

const fileName = process.argv[2];


async function main(){

    const data = await fs.readFile(fileName);
    const gzippedData = await gzipPromise(data);
    await fs.writeFile(`${fileName}.zip`, gzippedData);
    console.log("file compressed");

}

main();