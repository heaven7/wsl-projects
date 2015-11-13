Template.projectsList.helpers({
    projects: function() {
        var tProjects;
        tProjects = Projects.find();
        if (tProjects.count() === 0) {
            return false;
        } else {
            return tProjects;
        }
    }
});

Template.projectPage.events({
    'click .editProject': function(e, t) {
        return Session.set('selectedProject', this._id);
    },
    'click .deleteProject': function(e, t) {
        return Meteor.call('deleteProject', this, function(error, result) {
            if (error) {
                console.log('Error: ' + error);
            }
            return true;
        });
    },
    'click .addCategory': function() {
        $('#insertTaskCategoryModal')
            .modal({
                onApprove: function () {
                    // if there is an error
                    //return false;
                }
            })
            .modal('show');
    },
    'click .inviteMembers': function() {
        $('#inviteMembersModal')
            .modal('show');
    }
});

Template.insertProjectForm.helpers({
    id: function() {
        return Meteor.userId();
    },
    docType: function() {
        return 'User';
    },
    currentUser: function() {
        return Meteor.users.find({
            _id: Meteor.userId()
        });
    }
});

Template.editProjectForm.helpers({

});

Template.editProjectForm.events({
    'click #cancelUpdate': function(e, t) {
        return Session.set('selectedProject', '');
    }
});

Template.projectPage.helpers({
    selectedProject: function() {
        return Session.get('selectedProject') === this._id;
    },
    categoryExists: function() {
        return !!TaskCategories.find({doc: this._id}).count();
    },
    categories: function() {
        return TaskCategories.find({doc: this._id});
    }
});
