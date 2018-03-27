import chalk from 'chalk';

export default function warn(text) {
  console.log(chalk.bold.yellow(`WARN: ${text}`));
}
