const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
const chalk = require('chalk');

try {
    console.log(chalk.blue("Starting compilation process..."));

    // Delete build folder
    console.log(chalk.blue("Deleting build folder..."));
    const buildPath = path.resolve(__dirname, 'build');
    fs.removeSync(buildPath);
    
    // Read in contracts and compile
    console.log(chalk.blue("Reading contracts and compiling..."));
    const campaignPath = path.resolve(__dirname, 'contracts', 'Casino.sol');
    const source = fs.readFileSync(campaignPath, 'utf8');
    const output = solc.compile(source, 1).contracts;

    // Recreate build folder
    console.log(chalk.blue("Recreating build folder..."));
    fs.ensureDirSync(buildPath);

    // Iterate over contracts in output, create a json file with contract name, and write out the output of the contact
    console.log(chalk.blue("Writing output..."));
    for (let contract in output) {
        fs.outputJSONSync(
            path.resolve(buildPath, contract.replace(':', '') + '.json'),
            output[contract]
        );
    }
    console.log(chalk.green("Contract compiled."));
} catch (error) {
    console.log(chalk.red(error));
}

