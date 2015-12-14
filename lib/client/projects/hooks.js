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
        var docType = 'Projects';
        // insert project setting
        Settings.insert({doc: doc._id, docType: docType, public: true, watchable: true, commentable: true, shareable: true });

        // Roles
        Meteor.call('addUserToRoles', userId, ['admin'], doc._id);

        // DragonDreaming project setup
        if(doc.dragonproject) {
            var taskCategories = [
                {title: i18n.t('dream')},
                {title: i18n.t('design')},
                {title: i18n.t('act')},
                {title: i18n.t('celebrate')}
            ];
            var dreamsubcats = [
                {title: i18n.t('consciousness')},
                {title: i18n.t('motivation')},
                {title: i18n.t('collect_information')}
            ];
            var designsubcats = [
                {title: i18n.t('consider_alternatives')},
                {title: i18n.t('develop_strategies')},
                {title: i18n.t('testing_develop_prototypes')}
            ];
            var actsubcats = [
                {title: i18n.t('implementation')},
                {title: i18n.t('management_administration')},
                {title: i18n.t('monitoring')}
            ];
            var celebratesubcats = [
                {title: i18n.t('new_skills')},
                {title: i18n.t('transforming_results')},
                {title: i18n.t('gain_wisdom')}
            ];
            taskCategories.forEach(function(cat) {
                var id = TaskCategories.insert({
                    title: cat.title,
                    doc: doc._id,
                    docType: docType
                });
                switch(cat.title) {
                    case i18n.t('dream'):
                        dreamsubcats.forEach(function(subcat) {
                            TaskCategories.insert({
                                title: subcat.title,
                                parent: id,
                                doc: doc._id,
                                docType: docType
                            });
                        });
                        break;
                    case i18n.t('design'):
                        designsubcats.forEach(function(subcat) {
                            TaskCategories.insert({
                                title: subcat.title,
                                parent: id,
                                doc: doc._id,
                                docType: docType
                            });
                        });
                        break;
                    case i18n.t('act'):
                        actsubcats.forEach(function(subcat) {
                            TaskCategories.insert({
                                title: subcat.title,
                                parent: id,
                                doc: doc._id,
                                docType: docType
                            });
                        });
                        break;
                    case i18n.t('celebrate'):
                        celebratesubcats.forEach(function(subcat) {
                            TaskCategories.insert({
                                title: subcat.title,
                                parent: id,
                                doc: doc._id,
                                docType: docType
                            });
                        });
                        break;
                }
            });
        }
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
        onSubmit: function(insert, doc) {
            console.log('submit: ', doc);
        },
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            console.log('success: ', doc);
            closeModal('#editProjectModal');
        }
    }
});

