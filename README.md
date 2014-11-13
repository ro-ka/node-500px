# node-500px

[![NPM version](https://badge.fury.io/js/500px.png)](http://badge.fury.io/js/500px)

This plugin is a wrapper for the API of [500px.com](http://500px.com). To get more details on what the API offers, go to [developer.500px.com](http://developer.500px.com/).

## Install

The easiest way is to install through npm:

```bash
npm install 500px
```

Of course you can also clone via git or download the .zip or .tar.gz via the links above.

## Getting started

Include the module in your project and initialize it. **Important**: Use the consumer key provided by 500px, not the JavaScript SDK key, as that is different!

```javascript
var API500px = require('500px'),
    api500px = new API500px(consumer_key);
```

Now you are ready to do some calls to the 500px.com API!

## GET photos

To retrieve photos, just do the following:

```javascript
api500px.photos.getPopular({'sort': 'created_at', 'rpp': '100'},  function(error, results) {
  if (error) {
    // Error!
    return;
  }

  // Do something
});
```

Choose on of the funtions to get photos:

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
* `searchByGeo (geo, arguments, callback)`

For more information on the possible arguments, please check the [500px.com photos API](http://developer.500px.com/docs/photos-index)

## GET users

To retrieve users, just do the following:

```javascript
api500px.users.getById(1234,  function(error, results) {
  if (error) {
    // Error!
    return;
  }

  // Do something
});
```

Choose on of the funtions to get users:

* `getById (id, callback)`
* `getByName (username, callback)`
* `getByEmail (email, callback)`
* `getFriendsById (id, arguments, callback)`

For more information on the possible arguments, please check the [500px.com users API](http://developer.500px.com/docs/users-index)

## GET blogs

To retrieve blogs, just do the following:

```javascript
api500px.blogs.getFresh({rpp: 50},  function(error, results) {
  if (error) {
    // Error!
    return;
  }

  // Do something
});
```

Choose on of the funtions to get blogs:

* `getById (id, arguments, callback)`
* `getCommentsById (id, arguments, callback)`
* `getFresh (arguments, callback)`
* `getByUsername (username, arguments, callback)`
* `getByUserId (user_id, arguments, callback)`

For more information on the possible arguments, please check the [500px.com blogs API](http://developer.500px.com/docs/blogs-index)

## LICENSE

(MIT License)

Copyright (c) 2011 Robert Katzki <robert@katzki.de>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
