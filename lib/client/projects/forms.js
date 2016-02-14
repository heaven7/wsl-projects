Template.addProjectForm.onRendered(() => {
   WSL.wysiwyg.editor('.wysiwyg')
})

Template.addProjectForm.helpers({
    doc: function() {
        return Meteor.userId();
    },
    docType: function() {
        return 'User';
    }
});

Template.addProjectForm.events({
    'click .cancel': function(e, t) {
        return false;
    }
});

Template.editProjectForm.helpers({
    doc: function() {
        return Projects.findOne({_id: this._id});
    }
});

Template.editProjectForm.events({
    'click .cancel': function(e, t) {
        return false;
    }
});


