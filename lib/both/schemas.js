/**
 * Projects schema
 * @type {SimpleSchema} Schemas.Projects
 */

Schemas.Projects = new SimpleSchema([Schemas.Base, {

    title: {
        type: String
    },

    description: {
        type: String,
        optional: true
    },

    dragonproject: {
        type: Boolean,
        optional: true
    },

    images: {
        type: [Object],
        optional: true
    },
    "images.$.url": {
        type: String
    },
    "images.$.caption": {
        type: String
    }
}]);

/**
 * Attach schema
 */

Projects.attachSchema(Schemas.Projects);