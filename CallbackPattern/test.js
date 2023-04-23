// const spider = require('./spiderCrowlerRecursive');
import { spider } from "./SpiderCrowler/spiderCrowlerRecursive";

const URl = "https://crypto.stanford.edu/cs142/lectures/url.html";
spider(URL, 10, err => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  
    console.log('Download complete')
});