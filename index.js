#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const dir = './tmp';
var fs = require('fs-extra')
const CURR_DIR = process.cwd();

function main() {
  const optionDefinitions = [
    {
      name: 'help',
      alias: 'h',
      type: Boolean,
      description: 'Display this usage guide.'
    },
    {
      name: 'new',
      alias: 'n',
      description: 'Display this usage guide.'
    },
    {
      name: 'remove',
      alias: 'r',
      description: 'Timeout value in ms',
    },
    {
      name: 'log',
      alias: 'l',
      type: String,
      description: 'info, warn or error'
    }
  ]


  const options = commandLineArgs(optionDefinitions)
  const argv = options._unknown || []

  if (options.help) {
    const usage = commandLineUsage([
      {
        header: 'Typical Example',
        content: 'A simple example demonstrating typical usage.'
      },
      {
        header: 'Options',
        optionList: optionDefinitions
      },
      {
        content: 'Project home: {underline https://github.com/me/example}'
      }
    ])
    console.log(usage)
  } else if (options.new) {
    const reactTemplate = require("./templates/reactE6.js")(options.new);
    const sassTemplate = require("./templates/sass.js")(options.new);
    console.log(reactTemplate);
    console.log(sassTemplate);
    if (!fs.existsSync(CURR_DIR + '/' + options.new)) {
      fs.mkdirSync(CURR_DIR + '/' + options.new);
    }
    fs.writeFile(CURR_DIR + '/' + options.new + '/' + options.new + '.js', reactTemplate, err => {
      if (err) {
          return console.error(`Autsch! Failed to store template: ${err.message}.`);
      }
    })
    fs.writeFile(CURR_DIR + '/' + options.new + '/' + options.new + '.scss', sassTemplate, err => {
      if (err) {
          return console.error(`Autsch! Failed to store template: ${err.message}.`);
      }
    })
    const newDefinitions = [
      { name: 'squash', type: Boolean },
      { name: 'message', alias: 'm' }
    ]
    const newOptions = commandLineArgs(newDefinitions, { argv })

    console.log('\nnewOptions\n============')
    console.log(options.new)
  }

  else if (options.remove) {
    if (fs.existsSync(CURR_DIR + '/' + options.remove)) {
      fs.remove(CURR_DIR + '/' + options.remove);
    }
  }
}

module.exports = {
  main: main()
}