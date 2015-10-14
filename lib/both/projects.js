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
