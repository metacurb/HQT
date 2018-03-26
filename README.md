# HQT
Attempt to find the answer most likely to be correct from a question given on HQ Trivia. It will attempt to utilise various APIs, and create a "score" based on the results.

## Setup

1. `git clone` the repository
2. `cd hqt`
3. `npm install`
4. `npm run start`

## Structure
```
HQT
│   README.md
│   package.json
│   package-lock.json
│   .gitignore            // Files we don't want to commit to the repo
│   .babelrc              // Babel configuration
│   .eslintrc.json        // ESLint configuration
│
└───dist                  // Transpiled code will end up here 
│
└───src
    │   init.js           // Initialiser script
    │
    └───resolvers
    │   │   index.js
    │   │   wolfram.js    // Results returned from Wolfram's API
    │   │   wikipedia.js  // Results returned from Wikipedia's API
    │   └───google.js     // Results returned from Googles search API
    │
    └───reader
        │   index.js
        │   scan.js       // Read image, and grab text from it
        │   wordlist.js   // List of words to strip out of a question
        └───parse.js      // Prepare text for search using resolvers

```


## Scoring System
This will need to be updated as time goes on. Numbers will need to be updated to try and give the best representational score possible.
| Resource      | Scoring type    | Weight |
| --------------|-----------------|--------|
| Wolfram Alpha | result returned | 60%    |
| Wikipedia     | result returned | 20%    |
| Google Search | no. of results  | 20%    |


## Resources/APIs
* [Wolfram Alpha](http://products.wolframalpha.com/api/)
* [Google Vision](https://cloud.google.com/vision/)
* [Tesseract OCR](https://github.com/joscha/nodecr)
* [Google Search](https://developers.google.com/custom-search/json-api/v1/using_rest)
* [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)

## Examples/Inspiration
* [sushant10/HQ_Bot - Python](https://github.com/sushant10/HQ_Bot)
* [maxenxe/HQ-Trivia-Bot - JS](https://github.com/maxenxe/HQ-Trivia-Bot)
