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
      name: 'newSass',
      alias: 's',
      description: 'Display this usage guide.'
    },
    {
      name: 'newMui',
      alias: 'm',
      description: 'Display this usage guide.'
    },
    {
      name: 'newAphro',
      alias: 'a',
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
    console.log('options: ');
    console.log('\t--help: shows help');
    console.log('\t--newSass $componentName: creates a new React component with Sass file');
    console.log('\t--newMui $componentName: creates a new React MUI component');
    console.log('\t--newAphro $componentName: creates a new React Aphro component');
  } else if (options.newSass) {
    console.log('Creating a new Sass component with the name: ' + options.newSass)
    const reactTemplate = require("./templates/reactE6.js")(options.newSass);
    const sassTemplate = require("./templates/sass.js")(options.newSass);
    if (!fs.existsSync(CURR_DIR + '/' + options.newSass)) {
      fs.mkdirSync(CURR_DIR + '/' + options.newSass);
    }
    fs.writeFile(CURR_DIR + '/' + options.newSass + '/' + options.newSass + '.js', reactTemplate, err => {
      if (err) {
        return console.error(`Autsch! Failed to store template: ${err.message}.`);
      }
    })
    fs.writeFile(CURR_DIR + '/' + options.newSass + '/' + options.newSass + '.scss', sassTemplate, err => {
      if (err) {
        return console.error(`Autsch! Failed to store template: ${err.message}.`);
      }
    })
    const newDefinitions = [
      { name: 'squash', type: Boolean },
      { name: 'message', alias: 'm' }
    ]
    const newOptions = commandLineArgs(newDefinitions, { argv });

    console.log('Succesfully created a new React Sass component with the name: ' + options.newSass);
  }

  else if (options.newMui) {
    console.log('Creating a new MUI component with the name: ' + options.newMui)
    const reactTemplate = require("./templates/reactMui.js")(options.newMui);
    if (!fs.existsSync(CURR_DIR + '/' + options.newMui)) {
      fs.mkdirSync(CURR_DIR + '/' + options.newMui);
    }
    fs.writeFile(CURR_DIR + '/' + options.newMui + '/' + options.newMui + '.js', reactTemplate, err => {
      if (err) {
        return console.error(`Autsch! Failed to store template: ${err.message}.`);
      }
    })
    const newDefinitions = [
      { name: 'squash', type: Boolean },
      { name: 'message', alias: 'm' }
    ]
    const newOptions = commandLineArgs(newDefinitions, { argv });

    console.log('Succesfully created a new React MUI component with the name: ' + options.newMui);
  }

  else if (options.newAphro) {
    console.log('Creating a new Aphro component with the name: ' + options.newAphro)
    const reactTemplate = require("./templates/reactAphro.js")(options.newAphro);
    if (!fs.existsSync(CURR_DIR + '/' + options.newAphro)) {
      fs.mkdirSync(CURR_DIR + '/' + options.newAphro);
    }
    fs.writeFile(CURR_DIR + '/' + options.newAphro + '/' + options.newAphro + '.js', reactTemplate, err => {
      if (err) {
        return console.error(`Autsch! Failed to store template: ${err.message}.`);
      }
    })
    const newDefinitions = [
      { name: 'squash', type: Boolean },
      { name: 'message', alias: 'm' }
    ]
    const newOptions = commandLineArgs(newDefinitions, { argv });

    console.log('Succesfully created a new React Aphro component with the name: ' + options.newAphro);
  }
  else if (options.remove) {
    if (fs.existsSync(CURR_DIR + '/' + options.remove)) {
      fs.remove(CURR_DIR + '/' + options.remove);
    }
    console.log('Succesfuly removed a component with the name: ' + options.remove);
  }
}

module.exports = {
  main: main()
}