/**
 * Getting photos
 */

var Request = require('./request'),
  Photos = function Photos (consumer_key) {
    this._request = new Request(consumer_key);
  };

Photos.prototype.getById = function(photo_id, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  this._request.executeRequest('photos/' + photo_id, parameters, callback);
};

Photos.prototype.getByUsername = function(username, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'user';
  parameters.username = username;

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getByUserId = function(user_id, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'user';
  parameters.user_id = user_id;

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getFavoritesByUsername =
  function(username, parameters, callback) {
    if (!parameters) {
      parameters = {};
    }

    parameters.feature = 'user_favorites';
    parameters.username = username;

    this._request.executeRequest('photos', parameters, callback);
  };

Photos.prototype.getFavoritesByUserId =
  function(user_id, parameters, callback) {
    if (!parameters) {
      parameters = {};
    }

    parameters.feature = 'user_favorites';
    parameters.user_id = user_id;

    this._request.executeRequest('photos', parameters, callback);
  };

Photos.prototype.getFriendsByUsername =
  function(username, parameters, callback) {
    if (!parameters) {
      parameters = {};
    }

    parameters.feature = 'user_friends';
    parameters.username = username;

    this._request.executeRequest('photos', parameters, callback);
  };

Photos.prototype.getFriendsByUserId = function(user_id, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'user_friends';
  parameters.user_id = user_id;

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getPopular = function(parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'popular';

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getUpcoming = function(parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'upcoming';

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getEditorsChoice = function(parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'editors';

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getFreshToday = function(parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'fresh_today';

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getFreshYesterday = function(parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'fresh_yesterday';

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.getFreshWeek = function(parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'fresh_week';

  this._request.executeRequest('photos', parameters, callback);
};

Photos.prototype.searchByTag = function(tag, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.tag = tag;

  this._request.executeRequest('photos/search', parameters, callback);
};

Photos.prototype.searchByTerm = function(term, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.term = term;

  this._request.executeRequest('photos/search', parameters, callback);
};

Photos.prototype.searchByGeo = function(geo, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }
  
  parameters.geo = geo;

  this._request.executeRequest('photos/search', parameters, callback);
};


module.exports = Photos;
