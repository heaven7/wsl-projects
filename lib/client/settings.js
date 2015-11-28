Template.projectSettings.helpers({
    settings: function() {
       var setting = Settings.findOne({doc: Session.get('showSettings'), docType: 'Projects'});
       return setting;
    }
});