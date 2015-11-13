/**
 * Projects List
 */

Router.route('/projects', {
    name: 'projects',
    template: 'projects',
    subscriptions: function() {
        this.subscribe('projects');
    }
});

/**
 * Project
 */

Router.route('/project/:_id', {
    name: 'project.show',
    path: '/project/:_id',
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