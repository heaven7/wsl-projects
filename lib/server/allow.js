Projects.allow({
    insert: function(userId, doc) {
        if (doc.owners.indexOf(userId) > -1) {
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