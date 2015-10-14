Meteor.methods({
  updateProject: function(doc) {
    check(doc, Schemas.Projects);
    this.unblock();
    return Projects.update({
      id: this._id
    }, {
      $set: doc
    }, function(error) {
      if (error) {
        console.log('Error: ' + error);
      }
      console.log('update successful');
      return true;
    });
  },
  deleteProject: function(doc) {
    this.unblock();
    return Projects.remove({
      _id: doc._id
    });
  }
});