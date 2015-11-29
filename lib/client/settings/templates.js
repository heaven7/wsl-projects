Template.projectSettings.helpers({
    settings: function() {
       var setting = Settings.findOne({doc: Session.get('showSettings'), docType: 'Projects'});
       return setting;
    }
});

Template.projectSettings.events({
    'click #cancelUpdate': function(e, t) {
        Session.set('showProject', Session.get('showSettings'));
        Session.set('showSettings', '');
        return false;
    }
});