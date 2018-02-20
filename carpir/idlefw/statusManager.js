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
statusManager.CONSTANTS = {
    DEFAULT_STATUS_EXPIRE_TIME: 60,
    DEFAULT_STATUS_EFFECT_TYPE: 'positive',
    DEFAULT_STATUS_AFFECTS: 'production',
    DEFAULT_STATUS_EFFECT_VALUE: 5, // 5%
    DEFAULT_STATUS_NAME: 'status',
    UI_DISPPLAY_STATUS: '', // id of the html elment that display status information
};

// Lists of status
statusManager.currentStatusList = [];
statusManager.toApplyStatusList = [];


/**
 * validates if the options object is valid. if is is creates a new status object
 * and adds it to the toApplyStatusList
 * @param {*} options 
 */
statusManager.createStatus = function (options)
{
    var newStatus = {};
    // check if the default options were filled
    //if (!options.expireTime)        
        //options.expireTime = statusManager.CONSTANTS.DEFAULT_STATUS_EXPIRE_TIME;
    newStatus.expireTime = options.expireTime || statusManager.CONSTANTS.DEFAULT_STATUS_EXPIRE_TIME;    
    newStatus.effectType = options.effectType || statusManager.CONSTANTS.DEFAULT_STATUS_EFFECT_TYPE;
    newStatus.name = options.name || statusManager.CONSTANTS.DEFAULT_STATUS_NAME;
    newStatus.effect = options.effect || statusManager.CONSTANTS.DEFAULT_STATUS_EFFECT_VALUE;
    //descriptions depends on other info...
    newStatus.description = options.description || `This status affects the ${options.affects} in a ${options.effectType} way: ${options.effect}.`;

    return newStatus;

}