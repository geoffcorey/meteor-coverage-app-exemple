Package.describe({
  name: 'meteortesting:mocha',
  summary: 'Run Meteor package or app tests with Mocha',
  git: 'https://github.com/meteortesting/meteor-mocha.git',
  documentation: '../README.md',
  version: '1.1.2',
  testOnly: true,
});

Package.onUse(function onUse(api) {
  api.use([
    'meteortesting:mocha-core@1.0.1 || 5.2.0',
    'ecmascript@0.3.0',
  ]);
  // this package supports lmieulet:meteor-coverage > 1.1.4
  
  api.use(['meteortesting:browser-tests@1.0.0', 'http@1.0.0'], 'server');
  api.use('browser-policy@1.0.0', 'server', { weak: true });

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
