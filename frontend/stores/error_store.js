const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

let _errors = {};
let _form = "";
const ErrorStore = new Store(AppDispatcher);
ErrorStore.formErrors = function(form){
  if(form === _form)
  {
    return _errors;
  }
};

ErrorStore.form = function(){
  return _form;
};

function setErrors(form, errors){
  _form = form;
  _errors = errors.responseJSON;
  ErrorStore.__emitChange();
}

function clearErrors(){
  _form = "";
  _errors = {};
}
ErrorStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case ErrorConstants.SET_ERRORS:
    setErrors(payload.form, payload.errors);
    break;
    case ErrorConstants.CLEAR_ERRORS:
    clearErrors();
    break;
  }
};

module.exports = ErrorStore;
