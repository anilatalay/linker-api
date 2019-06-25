const returnData = require("../models/object/return");

successResult = data => {
  returnData.code = 200;
  returnData.data = data;
  returnData.success = true;
  return returnData;
};

errorResult = (error, message) => {
  returnData.code = 404;
  returnData.success = false;
  returnData.error = error;
  returnData.message = message;
  return returnData;
};

notfoundResult = (error, message) => {
  returnData.code = 404;
  returnData.success = false;
  returnData.error = error;
  returnData.message = message;
  return returnData;
};

module.exports = {
  return: { successResult, errorResult, notfoundResult }
};
