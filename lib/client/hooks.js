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
        // insert project setting
        Settings.insert({doc: doc._id, docType: 'Projects', public: true, watchable: true, commentable: true, shareable: true });
});


