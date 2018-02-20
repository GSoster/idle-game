'use strict';

/**
 * ################################
 * #       STATUS MANAGER         #
 * ################################
 * 
 * This script is responsible for:
 * - validate the creation of a status
 * - Applying a status
 * - keep track of the status and its end
 * - terminate a status.
 * - visually display information about applied status.
 */

var statusManager = {};

statusManager.constants = {
    DEFAULT_STATUS_EXPIRE_TIME: 60,
    DEFAULT_STATUS_NAME: 'status',

};