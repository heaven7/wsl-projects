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

Template.project.events({
    'click .showProject': function(e, t) {
        Session.set('showSettings', '');
        Session.set('editProject', '');
        return Session.set('showProject', this._id);
    }
});

Template.projectPage.events({
    'click .showSettings': function(e, t) {
        Session.set('showProject','');
        return Session.set('showSettings', this._id);
    },
    'click .editProject': function(e, t) {
        Session.set('showProject','');
        return Session.set('editProject', this._id);
    },
    'click .deleteProject': function(e, t) {
        return Meteor.call('deleteProject', this, function(error, result) {
            if (error) {
                if(error.message === '[not_allowed]')
                    wAlert.error(i18n.t("not_allowed"));
            }
            return true;
        });
    },
    'click .addTaskCategory': function(e,t) {
        Session.set('showProject','');
        return Session.set('addTaskCategory', this._id);
    },
    'click .inviteMembers': function(e,t) {
        return Session.set('inviteMembers', this._id);
    }
});

Template.projectPage.helpers({
    showSettings: function() {
        return Session.get('showSettings') === this._id;
    },
    showProject: function() {
        return Session.get('showProject') === this._id;
    },
    editProject: function() {
        return Session.get('editProject') === this._id;
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
    }
});

Template.editProjectForm.events({
    'click #cancelUpdate': function(e, t) {
        Session.set('editProject', '');
        return false;
    }
});
