# HQT
Attempt to find the answer most likely to be correct from a question given on HQ Trivia. It will attempt to utilise various APIs, and create a "score" based on the results.

## How it works
Connecting to the HQ Trivia API, we are able to see when a `broadcast` will be taking place. If the bot finds a `websocketUrl` available, it will create a new session, and begin monitoring that data. If a question is passed through, it will then clean the question and answers, and use third party services to try and find results. 
### Scoring (To be implemented)
A scoring system will be used to determine how likely that any one of the answers is the correct one. This won't be full-proof, but will hopefully give a better indicator of a correct answer. Below is a summary of how each part of the system works.
This will need to be updated as time goes on. Numbers will need to be updated to try and give the best representational score possible.

Resource      | Scoring type    | Weight |
------------- | --------------- | ------ |
Google Search | no. of results  | 20%    |
Google Search | Number of "hits"| 40%    |
Wikipedia     | Number of "hits"| 40%    |

### Google
Using Google's custom search engine REST API, we are able to return a list of results based upon a query. This gives us important data that we can validate our question against. We will take:

* The number of results
* The number of "hits" returned, checking each _relevant_ word in the question against the descriptions from the results.

We can that use that information and compare it to each answer, creating a score.

### Wikipedia
Similarly to Google, we will use Wikipedia's API to search for each answer. Using the question, we will check for "hits" matching _relevant_ words.

## Setup

#### Prerequisites
1. [Google Custom Search](https://support.google.com/customsearch/answer/2630963?hl=en)
1. [Google Custom Search API key](https://developers.google.com/custom-search/json-api/v1/overview)

#### Code
1. `git clone` the repository
1. `cd hqt`
1. `touch .env`, and in that file enter:
    * `GOOGLE_KEY` - Your Google Custom Search API Key
    * `GOOGLE_ENGINE_ID` - Your Google Custom Search Engine ID
    * `BEARER_TOKEN` - Your bearer token retrieved from the HQ Trivia API
1. `npm install`
1. `npm run start`

## Structure
```
HQT
│   README.md
│   package.json
│   package-lock.json
│   .gitignore                // Files we don't want to commit to the repo
│   .babelrc                  // Babel configuration
│   .eslintrc.json            // ESLint configuration
│
└───data
│   └───questions.json        // Questions recieved through the open websocket connection
│
└───dist                      // Transpiled code will end up here 
│
└───examples
│   │   api-data.json         // Example data directly from the API, when a broadcast is in progress
│   │   curl.txt              // Example curl request to the API
│   └───websocket-data.json   // Example websocket data from the broadcast
│
└───src
    │   init.js               // Initialiser script
    │
    └───helpers
    │   │   index.js
    │   │   formatNumber.js   // Parse floats and turn them into integers
    │   └───getHits.js        // Find the number of matches an array of words has in a text
    │
    └───log
    │   │   index.js
    │   │   success.js        // console.log success formatting
    │   │   warn.js           // console.log warn formatting
    │   │   error.js          // console.log error formatting
    │   └───reset.js          // Clear the console
    │
    └───reader
    │   │   index.js
    │   │   scan.js           // Read image, and grab text from it
    │   │   wordlist.js       // List of words to strip out of a question
    │   └───parse.js          // Prepare text for search using resolvers
    │
    └───resolvers
        │   index.js
        │   wikipedia.js      // Results returned from Wikipedia's API
        └───google.js         // Results returned from Googles search API

```
## Resources/APIs
* [Google Search](https://developers.google.com/custom-search/json-api/v1/using_rest)
* [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)

## Examples/Inspiration
* [sushant10/HQ_Bot - Python](https://github.com/sushant10/HQ_Bot)
* [maxenxe/HQ-Trivia-Bot - JS](https://github.com/maxenxe/HQ-Trivia-Bot)
* [Possible OCR alternative? - Python](https://github.com/Exaphis/HackQ-Trivia/blob/master/hq_main.py)
