Template.projectsList.onRendered(function() {
    BlazeLayout.render('showModal', {
        content: 'addProjectForm',
        id: "addProjectModal",
        header: i18n.t('add_project')
    });
});

Template.projectPage.onRendered(function() {
    BlazeLayout.render('showModal', {
        content: 'editProjectForm',
        id: "editProjectModal",
        header: i18n.t('edit_project'),
        data: this.data
    });
});


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

Template.projectsList.events({
    'click #addProject': function (event, template) {
        openModal('#addProjectModal');
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
        openModal('#showSettingsModal');
    },
    'click .editProject': function(e, t) {
        openModal('#editProjectModal');
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
    'click .addTaskCategory': function() {
        openModal('#insertTaskCategoryModal');
    },
    'click .inviteMembers': function() {
        openModal('#inviteMembersModal');
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
