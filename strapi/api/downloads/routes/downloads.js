'use strict';

/**
 * downloads router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::downloads.downloads');
