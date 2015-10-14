Meteor.publish(null, function() {
    return Projects.find();
});