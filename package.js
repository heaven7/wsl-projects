Package.describe({
  name: 'heaven7:wsl-projects',
  version: '0.0.3_1',
  summary: 'Projects package',
  git: 'https://github.com/heaven7/wsl-projects.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
        'heaven7:wsl-core@0.0.3',
        'heaven7:wsl-i18n@0.0.3',
        'heaven7:wsl-permissions@0.0.1',
        'heaven7:wsl-locations@0.0.2',
        'heaven7:wsl-files@0.0.3',
        'heaven7:wsl-memberships@0.0.3',
        'heaven7:wsl-settings@0.0.3',
        'heaven7:wsl-tasks@0.0.3'
    ];
Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use(packages, both);
    api.imply(packages);

    api.addFiles([
        'lib/both/projects.js',
        'lib/both/routes.js',
        'lib/both/schemas.js'
    ], both);

    api.addFiles([
        'lib/server/allow.js',
        'lib/server/methods.js',
        'lib/server/publish.js'
    ], 'server');

    api.addFiles([
        'lib/client/projects/forms.html',
        'lib/client/projects/forms.js',
        'lib/client/projects/templates.html',
        'lib/client/projects/templates.js',
        'lib/client/projects/hooks.js',
        'lib/client/projects/helpers.js',
        'lib/client/settings/hooks.js',
        'lib/client/members/templates.html',
        'lib/client/members/templates.js'
    ], 'client');

    api.export('Projects', both);
});
