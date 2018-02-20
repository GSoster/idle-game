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

// StatusManager obj. it contains all the informations about status
var statusManager = {};

// All the constants related to status
statusManager.constants = {
    DEFAULT_STATUS_EXPIRE_TIME: 60,
    DEFAULT_STATUS_NAME: 'status',
    UI_DISPPLAY_STATUS: '', // id of the html elment that display status information
};

// Lists of status
statusManager.currentStatusList = [];
statusManager.toApplyStatusList = [];


statusManager.createStatus = function (options)
{

}