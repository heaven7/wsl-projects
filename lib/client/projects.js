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
    'click .addTaskCategory': function(e,t) {
        return Session.set('addTaskCategory', this._id);
    },
    'click .inviteMembers': function(e,t) {
        console.log('inviteMembers');
        return Session.set('inviteMembers', this._id);
    }
});

Template.projectPage.helpers({
    selectedProject: function() {
        return Session.get('selectedProject') === this._id;
    },
    addTaskCategory: function() {
        return Session.get('addTaskCategory') === this._id;
    },
    inviteMembers: function() {
        return Session.get('inviteMembers') === this._id;
    },
    categoryExists: function() {
        return !!TaskCategories.find({doc: this._id}).count();
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

Template.editProjectForm.events({
    'click #cancelUpdate': function(e, t) {
        Session.set('selectedProject', '');
        return false;
    }
});
