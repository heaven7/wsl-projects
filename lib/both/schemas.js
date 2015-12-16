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
    "images.$.image": {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
            }
        }
    }
}]);

/**
 * Attach schema
 */

Projects.attachSchema(Schemas.Projects);