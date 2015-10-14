Projects.before.insert(function (userId, doc) {
    // projects can belong to groups, projects,... or users
    var projectDocType = Session.get('projectDocType') ? Session.get('projectDocType') : 'User';
    var docId = Session.get('projectDocId') ? Session.get('projectDocId') : userId;
    doc.owners = typeof doc.owners == 'array' ? doc.owners : [];
    doc.doc = docId;
    doc.docType = projectDocType;

    doc.owners.push(userId);
    doc.createdAt = Date.now();
});