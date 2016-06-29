const SessionApiUtil = {
  login(user, success, error){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data_type: 'json',
      data: {user: user},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("login",resp);
      }
    });
  },
  logout(success, error){
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("logout",resp);
      }
    });
  },
  signup(user, success, error){
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data_type: 'json',
      data: {user: user},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("signup", resp);
      }
    });
  }
};


module.exports = SessionApiUtil;
