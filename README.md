node-500px
==========

[![NPM version](https://badge.fury.io/js/500px.png)](http://badge.fury.io/js/500px)

This plugin is a wrapper for the [500px.com](http://500px.com) API. For more details on what the API offers, check out [developer.500px.com](http://developer.500px.com/).

## Install

The easiest way is to install through npm:

```bash
$ npm install 500px
```

Of course you can also clone via git or download the .zip or .tar.gz via the links above.

## Getting started

Include the module in your project and initialize it. **Important**: Use the consumer key provided by 500px, not the JavaScript SDK key, as that is different!

```javascript
var API500px = require('500px'),
    api500px = new API500px(consumer_key);
```

Now you are ready to make some calls to the 500px.com API!

## GET photos

To retrieve photos, try the following code:

```javascript
api500px.photos.getPopular({'sort': 'created_at', 'rpp': '100'},  function(error, results) {
  if (error) {
    // Error!
    return;
  }

  // Do something
});
```

Choose one of the funtions to get photos (arguments optional):

* `getById (photo_id, arguments, callback)`
* `getByUsername (username, arguments, callback)`
* `getByUserId (user_id, arguments, callback)`
* `getFavoritesByUsername (username, arguments, callback)`
* `getFavoritesByUserId (user_id, arguments, callback)`
* `getFriendsByUsername (username, arguments, callback)`
* `getFriendsByUserId (user_id, arguments, callback)`
* `getPopular (arguments, callback)`
* `getUpcoming (arguments, callback)`
* `getEditorsChoice (arguments, callback)`
* `getFreshToday (arguments, callback)`
* `getFreshYesterday (arguments, callback)`
* `getFreshWeek (arguments, callback)`
* `searchByTag (tag, arguments, callback)`
* `searchByTerm (term, arguments, callback)`

For more information on the possible arguments, please check the [500px.com photos API](http://developer.500px.com/docs/photos-index)

## GET users

To retrieve users, try the following code:

```javascript
api500px.users.getById(1234, function(error, results) {
  if (error) {
    // Error!
    return;
  }

  // Do something
});
```

Choose one of the funtions to get users (arguments optional):

* `getById (id, arguments, callback)`
* `getByName (username, arguments, callback)`
* `getByEmail (email, arguments, callback)`
* `getFriendsById (id, arguments, callback)`

For more information on the possible arguments, please check the [500px.com users API](http://developer.500px.com/docs/users-index)

## GET blogs

To retrieve blogs, try the following code:

```javascript
api500px.blogs.getFresh(function(error, results) {
  if (error) {
    // Error!
    return;
  }

  // Do something
});
```

Choose one of the funtions to get blogs (arguments optional):

* `getById (id, arguments, callback)`
* `getCommentsById (id, arguments, callback)`
* `getFresh (arguments, callback)`
* `getByUsername (username, arguments, callback)`
* `getByUserId (user_id, arguments, callback)`

For more information on the possible arguments, please check the [500px.com blogs API](http://developer.500px.com/docs/blogs-index)

## LICENSE

Licensed under MIT ([see license »](LICENSE))
