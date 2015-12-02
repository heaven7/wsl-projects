/**
 * Projects List
 */

Router.route('/projects', {
    name: 'projects',
    template: 'projects',
    subscriptions: function() {
        this.subscribe('projects');
        this.subscribe('settings');
    }
});

/**
 * Project
 */

Router.route('/projects/:_id', {
    name: 'project.show',
    path: '/projects/:_id',
    template: 'projectPage',

    // a place to put your subscriptions
    subscriptions: function() {
       this.subscribe('memberships');

        // add the subscription to the waitlist
       //this.subscribe('project', this.params._id).wait();
    },
    data: function() {
        return Projects.findOne(this.params._id);
    }
});

/**
 * Projectmembers
 */

Router.route('/projects/:_id/members', {
    name: 'project.members',
    path: '/projects/:_id/members',
    template: 'projectMembers',

    // a place to put your subscriptions
    subscriptions: function() {
        this.subscribe('memberships');

        // add the subscription to the waitlist
        //this.subscribe('project', this.params._id).wait();
    },
    data: function() {
        return {
            project: Projects.findOne(this.params._id),
            _id: this.params._id
        }
    }
});