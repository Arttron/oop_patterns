const readline = require('readline');
// {
//     title: "",
//     description: "",
//     demonstratioin() {

//     }
// }

const patterns = [
    {
        title: "Exit"
    },
    require('./generating/simple_factory.js'),
    require('./generating/fabric_method.js'),
    require('./generating/abstract_factory.js'),
    require('./generating/builder.js'),
    require('./generating/prototype.js'),
    require('./generating/singleton.js'),
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function makeQuestion() {
    console.log(patterns.map((el, i) => `${i}. ${el.title}`).join('\n'), '\n\n');
    rl.question('Please enter number of pattern for run demonstration...\n', async (answer) => {
        if (Number(answer) === 0) {
            rl.close();
            return;
        } else if (Number(answer) < patterns.length) {
            console.log('====================\n');
            console.time('execution');
            const res = await patterns[answer].demonstration();
            console.log("-------------------\n");
            !res.err ?
            console.log(`Pattern "${patterns[answer].title}" complete successfuly: ${res}`) :
            console.log(`Pattern "${patterns[answer].title}" complete with error: ${err}`);
            console.timeEnd('execution');
            console.log('====================\n');
        } else {
            console.error(`Pattern ${answer} no exist`);
        }
        makeQuestion();
    });
}
makeQuestion();