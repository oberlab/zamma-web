'use strict';

/**
 * downloads controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::downloads.downloads');
