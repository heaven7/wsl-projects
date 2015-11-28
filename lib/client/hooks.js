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
        // isPublic
        Settings.insert({title: "isPublic", doc: doc.doc, docType: doc.docType });
        // isCommentable
        Settings.insert({title: "isCommentable", doc: doc.doc, docType: doc.docType });
        // isShareable
        Settings.insert({title: "isShareable", doc: doc.doc, docType: doc.docType });
        // isWatchable
        Settings.insert({title: "isWatchable", doc: doc.doc, docType: doc.docType });

});


