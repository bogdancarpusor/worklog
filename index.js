#!/usr/bin/env node
const program = require('commander');

program
  .version('0.0.1')
  .description('CLI tool for keeping track of work');

/**
 * Add new log message
 */
program
  .command('log <logMessage>')
  .option('-p, --project <projectName>', 'project name')
  .option('-t, --task <taskName>', 'task name')
  .option('-e, --emphasize', 'wrap message with two rows of \'*\'')
  .description('Add a new log entry')
  .action(cmd => {
    console.log(cmd);
  });

/**
 * Project/Task actions
 */
program
  .command('project <projectName>')
  .option('-c, --create', 'create new project')
  .option('-d, --description <description>', 'project description')
  .option('-i, --info', 'list current project')
  .option('-e, --edit', 'edit project information')
  .description('change project context')
  .action(cmd => {
    console.log('Project actions');
  });

program
  .command('task <taskName>')
  .option('-p, --project <projectName>', 'parent project')
  .option('-c, --create', 'create new task')
  .option('-d, --description', 'task description')
  .option('-i, --info', 'list current task')
  .option('-e, --edit', 'edit task information')
  .description('change task context')
  .action(cmd => {
    console.log('Task actions')
  });

/**
 * Configs
 */
program
  .command('setup')
  .option('-f --format <logFormat>', 'log format')
  .option('-l --location <logLocation', 'log path')
  .option('-d --dateFormat [dateFormat]', 'date format')
  .description('configure logging setup')
  .action(cmd => {
    console.log('edit setup');
  });

/**
 * Timer actions
 */
program
  .command('start')
  .description('Start timer')
  .action(cmd => {
    console.log(cmd);
  });

program
  .command('stop')
  .description('Stop timer')
  .action(cmd => {
    console.log(cmd);
  });

program
  .command('reset')
  .description('Reset timer')
  .action(cmd => {
    console.log(cmd);
  });  

/**
 * Reports and statistics
 */
program
  .command('report [logCount]')
  .option('-p, --project <projectName>', 'project name')
  .option('-t, --task <taskName', 'ask name')
  .option('-d, --date <startDate>', 'start date')
  .option('-e --export <exportFormat', 'export logs to specific format <pdf|csv>')
  .description('check last x log entries')
  .action(cmd => {
    console.log('hello');
  });

program
  .command('status')
  .option('-p, --project <projectName>', 'project name')
  .option('-t, --task <taskName>', 'task name')
  .option('-d, --date <dateName>', 'start date')
  .description('statistics information')
  .action(cmd => {
    console.log('status');
  });

/**
 * Edit/Remove logs
 */
program
  .command('edit [logMessage]')
  .option('-p, --project <projectName>', 'project name')
  .option('-t, --task <taskName>', 'task name')
  .option('-d, --date <dateName>', 'specific date')
  .option('-l, --list [listSize]', 'list last x log entries')
  .option('-i, --index <logIndex>', 'log index')
  .description('Edit last logged entry')
  .action(cmd => {
    console.log('Edit log entry');
  });

program
  .command('remove [logIndex]')
  .option('-p, --project <projectName>', 'project name')
  .option('-t, --task <taskName>', 'task name')
  .option('-d, --date <dateName>', 'specific date')
  .option('-l, --list [listSize]', 'list last x log entries')
  .description('Remove specific log entry')
  .action(cmd => {
    console.log('Remove log entry');
  });

/**
 * Archive logs
 */
program
  .command('archive [archivePath]')
  .description('Create an archive of the current logs')
  .action(cmd => {
    console.log('Archive logs');
  });

program.parse(process.argv);
