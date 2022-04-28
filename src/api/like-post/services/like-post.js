'use strict';

/**
 * like-post service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::like-post.like-post');
