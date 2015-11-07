Package.describe({
  name: 'heaven7:wsl-projects',
  version: '0.0.2',
  summary: 'Projects package',
  git: 'https://github.com/heaven7/wsl-projects.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.use([
        'heaven7:wsl-core@0.0.2',
        'heaven7:wsl-locations@0.0.2',
        'heaven7:wsl-tasks@0.0.2'
    ], both);

    api.imply([
        'heaven7:wsl-core',
        'heaven7:wsl-locations'
    ]);

    api.addFiles([
        'lib/both/projects.js',
        'lib/both/schemas.js'
    ], both);

    api.addFiles([
        'lib/server/allow.js',
        'lib/server/methods.js',
        'lib/server/publish.js'
    ], 'server');

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/hooks.js',
        'lib/client/templates.js',
        'lib/client/helpers.js'
    ], 'client');

    api.export('Projects', both);
});
