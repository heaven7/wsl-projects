Template.projectsList.helpers({
    projects: function() {
        var tProjects;
        tProjects = Projects.find();
        if (tProjects.count() === 0) {
            return false;
        } else {
            return tProjects;
        }
    },
    addProject: function() {
        return i18n.t('add_project');
    },
    addProjectModalHeader: function() {
        return i18n.t('add_project');
    },
    projectsText: function() {
        return i18n.t('projects', {count: 2});
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

Template.project.helpers({
    owner: function() {
        return Meteor.users.findOne({_id: this.owners[0]});
    },
    image: function() {
        var p = Projects.findOne({_id: this._id});
        if(p.images && p.images[0])
            return p.images[0].image;
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
        return Meteor.call('deleteProject', this.doc, function(error, result) {
            if (error) throw new Meteor.Error(i18n.t("not_allowed"), i18n.t("not_allowed"));
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
        return !!TaskCategories.findOne({doc: this._id});
    },
    owner: function() {
        return Meteor.users.findOne({_id: this.owners[0]});
    },
    image: function() {
        var p = Projects.findOne({_id: this._id});
        if(p.images && p.images[0])
            return p.images[0].image;
    },
    dropdownItems: function() {
        return [
            {
                itemclass: "inviteMembers",
                itemtext: i18n.t("invite_members"),
                roles: 'project-admin, admin',
                doc: this
            },
            {
                itemclass: "addTaskCategory",
                itemtext: i18n.t("add_category"),
                roles: 'project-admin, admin, role_taskCategories',
                doc: this
            },
            {
                itemclass: "editProject",
                itemtext: i18n.t("edit_project"),
                roles: 'project-admin, admin',
                doc: this
            },
            {
                itemclass: "showSettings",
                itemtext: i18n.t("settings"),
                roles: 'project-admin, admin',
                doc: this
            },
            {
                divider: true
            },
            {
                itemclass: "deleteProject",
                itemtext: i18n.t("delete_project"),
                roles: 'project-admin, admin',
                doc: this
            }
        ]
    },
    editProjectModalHeader: function() {
        return i18n.t('edit_project');
    }
});

Template.projectModals.onRendered(function () {
    this.data.doc = this.data.data._id;
    this.data.docType = "Projects";
});

Template.projectModals.helpers({
    inviteMemberModalHeader: function() {
        return i18n.t('invite_members_to_project');
    },
    addCategoryModalHeader: function() {
        return i18n.t("add_category_to_project");
    },
    showSettingsModalHeader: function() {
        return i18n.t("project_settings");
    }

});