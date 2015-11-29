/**
 * Autoform hooks
 */

AutoForm.hooks({
    projectSettingsForm: {
        onSubmit: function(insert, doc) {
            console.log('submitted: ', doc);
        },
        onError: function(insert, error, template) {
            console.log(error);
        },
        onSuccess: function(insert, doc) {
            console.log(doc);
            //Session.set('showProject', Session.get('showSettings'));
            //Session.set('showSettings', '');
        }
    }
});