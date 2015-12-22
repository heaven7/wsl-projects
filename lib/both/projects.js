/**
 * Projects Mongo Collection
 * @type {Mongo.Collection} Projects
 */

Projects = new Meteor.Collection('projects');

/**
 * Ensure index
 */

if(Meteor.isServer) {
    Projects._ensureIndex({ title: "text" });
}

/**
 * Set Roles for memberships
 *
 */

WSL.memberships.roles = [
    'project-admin',
    'role_taskCategories',
    'role_tasks',
    'role_settings'
];