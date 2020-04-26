'use strict';

module.exports = {
  descirption: 'Create component in reactjs',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Create in compoenent?',
      default: 'Default',
    },
    {
      type: 'list',
      name: 'componentType',
      message: 'Component type?',
      default: 'none',
      choices: [
        {
          name: 'Class component',
          value: 'class',
        },
        {
          name: 'Function component',
          value: 'function',
        },
      ],
    },
  ],
  actions: data => {
    let actions = [];

    if (data.componentType === 'class') {
      actions = [
        {
          type: 'add',
          path: `../src/components/{{properCase name}}/{{properCase name}}.js`,
          templateFile: `./components/class/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/components/{{properCase name}}/{{lowerCase name}}.css`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/components/{{properCase name}}/{{properCase name}}.js`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.css';`,
        },
      ];
    } else {
      actions = [
        {
          type: 'add',
          path: `../src/components/{{properCase name}}/{{properCase name}}.js`,
          templateFile: `./components/function/index.js.hbs`,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `../src/components/{{properCase name}}/{{lowerCase name}}.css`,
          templateFile: ``,
          abortOnFail: true,
        },
        {
          type: 'append',
          path: `../src/components/{{properCase name}}/{{properCase name}}.js`,
          pattern: '// imports',
          template: `import './{{lowerCase name}}.css';`,
        },
      ];
    }
    return actions;
  },
};
