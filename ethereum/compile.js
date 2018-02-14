const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
const chalk = require('chalk');

try {
    console.log(chalk.blue("Compiling contract and creating build folder..."));

    // Delete build folder
    const buildPath = path.resolve(__dirname, 'build');
    fs.removeSync(buildPath);
    

    // Read in contracts and compile
    const campaignPath = resolve(__dirname, 'contracts', 'Casino.sol');
    const source = fs.readFileSync(campaignPath, 'utf8');
    const output = solc.compile(source, 1).contracts;

    // Recreate build folder
    console.log(chalk.blue("Recreating build folder..."));
    fs.ensureDirSync(buildPath);

    // Iterate over contracts in output, create a json file with contract name, and write out the output of the contact
    for (let contact in output) {
        fs.outputFileSync(
            path.resolve(buildPath, contract.replace(':', '') + '.json'),
            output[contract]
        );
    };
    console.log(chalk.green("Contract compiled."));
} catch (error) {
    console.log(chalk.red(error));
}

