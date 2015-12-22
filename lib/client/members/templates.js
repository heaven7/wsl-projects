/**
 * By using the helper function membershipsByDoc we can
 * get all users belonging to this document
 */

Template.projectMembers.helpers({
    members: function() {
        return membershipsByDoc(this._id).map(function(membership) {
          return Meteor.users.findOne({_id: membership.invitee});
        });
    },
    membersText: function() {
        return i18n.t('members', {count: 2});
    }
});