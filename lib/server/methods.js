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
      if (doc.owners.indexOf(Meteor.userId()) > -1) {
          return Projects.remove({
              _id: doc._id
          });
      } else {
         throw new Meteor.Error("not_allowed");
      }
  }
});