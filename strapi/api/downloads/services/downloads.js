'use strict';

/**
 * downloads service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::downloads.downloads');
