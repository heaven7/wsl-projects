Meteor.publish('projects', function() {
    return Projects.find();
});

Meteor.publishComposite('project', function(projectId) {
    return {
        find: function() {
            return Projects.find({_id: projectId});
        },
        children: [
            {
                find: function(project) {
                    return Memberships.find({doc: project._id});
                },
                children: [
                    {
                        find: function(membership, project) {
                            return Meteor.users.find({ _id: membership.invitee });
                        }
                    }
                ]
            },
            {
                find: function(project) {
                    return Settings.find({doc: project._id})
                }
            }
        ]
    }
});
