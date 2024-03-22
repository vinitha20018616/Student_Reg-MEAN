// userService.js
const userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
};

module.exports.createUserDBService = (userDetails) => {
    const userModelData = new userModel(userDetails);
    return userModelData.save();
};

module.exports.updateUserDBService = (id, userDetails) => {
    return userModel.findByIdAndUpdate(id, userDetails, { new: true }).exec();
};

module.exports.removeUserDBService = (id) => {
    return userModel.findByIdAndDelete(id).exec();
};