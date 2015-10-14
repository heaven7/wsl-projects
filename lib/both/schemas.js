/**
 * Projects schema
 * @type {SimpleSchema} Schemas.Projects
 */

Schemas.Projects = new SimpleSchema({

    title: {
        type: String
    },

    description: {
        type: String,
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
});

/**
 * Attach schema
 */

Schemas.add(Schemas.packages(Schemas.Projects), Projects);
