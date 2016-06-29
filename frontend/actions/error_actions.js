const AppDispatcher = require('../dispatcher/dispatcher');

const ErrorConstants = require('../constants/error_constants');

const ErrorActions = {
  setErrors(form, errors){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      errors: errors,
      form: form
    });
  },
  clearErrors(form, errors){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
      errors: errors,
      form: form
    });
  }
};

module.exports = ErrorActions;
