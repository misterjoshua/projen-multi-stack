import { App, Stack, Stage } from 'aws-cdk-lib';

const app = new App();
const stage = new Stage(app, 'my-stage');
new Stack(stage, 'stack1');
new Stack(stage, 'stack2');
app.synth();