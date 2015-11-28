AutoForm.hooks({
  insertProjectForm: {
    onSubmit: function(insert, doc) {},
    onError: function(insert, error, template) {
      return console.log(error);
    },
    onSuccess: function(insert, doc) {}
    }
});

AutoForm.hooks({
    editProjectForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            Session.set('editProject', '');
        }
    }
});
AutoForm.hooks({
    projectSettingsForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            console.log(error);
        },
        onSuccess: function(insert, doc) {
            console.log(insert, doc);
        }
    }
});
Meteor.subscribe('projects');

