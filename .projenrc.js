const { awscdk } = require('projen');

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '1.139.0',
  defaultReleaseBranch: 'main',
  name: 'projen-multi-stack',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.upgradeWorkflow?.postUpgradeTask.spawn(
  project.tasks.tryFind('integ:my-stage:snapshot'),
);

project.synth();