const vtiger = require('vtiger');
const user_model = require('../models/users_model');
module.exports = {
    pullLeadInfo: async (record, user) => {
        userData = new Promise((resolve, reject) => {
            user_model.userProfile(user, (data) => {
               resolve({key: data.accesskey, username: data.user_name})                
            });
        })
        data = await userData;
        console.log(data.key);
    }
}