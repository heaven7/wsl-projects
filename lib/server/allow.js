Projects.allow({
    insert: function(userId, doc) {
        if (userId.indexOf(doc.owners) > -1) {
            return true;
        }
    },
    update: function(userId, doc, fields, modifier) {
        return userId === doc.owner;
    },
    remove: function(userId, doc) {
        return userId === doc.owner;
    }
});