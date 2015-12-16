/**
 * Projects List
 */

Router.route('/projects', {
    name: 'projects',
    template: 'projects',
    subscriptions: function() {
        subs.subscribe('projects');
        subs.subscribe('images');
    },
    fastRender: true
});

/**
 * Project
 */

Router.route('/projects/:_id', {
    name: 'project.show',
    path: '/projects/:_id',
    template: 'projectPage',
    subscriptions: function() {
        subs.subscribe('project', this.params._id);
        subs.subscribe('users');
        subs.subscribe('memberships');
        subs.subscribe('images');
    },
    data: function() {
        return Projects.findOne(this.params._id);
    },
    fastRender: true
});

/**
 * Projectmembers
 */

Router.route('/projects/:_id/members', {
    name: 'project.members',
    path: '/projects/:_id/members',
    template: 'projectMembers',
    subscriptions: function() {
        subs.subscribe('project', this.params._id);
        subs.subscribe('images');
    },
    data: function() {
        return {
            project: Projects.findOne(this.params._id),
            _id: this.params._id
        }
    },
    fastRender: true
});