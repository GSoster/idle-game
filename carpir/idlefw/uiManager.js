"use strict";
/**
 * This file is different from the others in the sense it is not a class
 */

var UIManager = class
{
    //receives file to load UI info
    constructor () 
    {

    }

    static UIUpdateRPC(totalProductionValue) {
        //rpc should use __config.rpc instead of a direct value        
        document.getElementById('rpc').innerText = ` ${totalProductionValue} `;
    }

}