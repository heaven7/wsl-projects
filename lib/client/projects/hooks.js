/**
 * Before insert
 */

Projects.before.insert(function (userId, doc) {
    doc.owners = typeof doc.owners == 'array' ? doc.owners : [];
    doc.owners.push(userId);
    doc.createdAt = Date.now();
});

/**
 * Project settings (after insert)
 */

Projects.after.insert(function (userId, doc) {
        // insert project setting
        Settings.insert({doc: doc._id, docType: 'Projects', public: true, watchable: true, commentable: true, shareable: true });
});

/**
 * Autoform hooks
 */

AutoForm.hooks({
    addProjectForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            closeModal('#addProjectModal');
        }
    }
});

AutoForm.hooks({
    editProjectForm: {
        onSubmit: function(insert, doc) {},
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            closeModal('#editProjectModal');
        }
    }
});

