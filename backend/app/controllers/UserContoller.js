module.exports = (app, db) => {

  const sendResponse = (res, code, data = null) => res.status(code).send({
    data: data,
  });

  // Get All Users
  app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
      if (err) throw err;

      return sendResponse(res, 200, result);
    });
  });


  // Get User By Id
  app.get('/user/:id', (req, res) => {
    const id = req.params.id;

    if (!id) {
      return sendResponse(res, 400, '"id" param is required');
    }

    db.query('SELECT * FROM users where id=?', id, (err, result) => {
      if (err) throw err;

      const user = result[0];

      return sendResponse(res, 200, user);
    });
  });


  // Add a New User
  app.post('/user', (req, res) => {
    const {
      username,
      password,
    } = req.body;

    if (!username) return sendResponse(res, 400, 'username is required');
    if (!password) return sendResponse(res, 400, 'passwod is required');
    if (typeof username !== 'string') return sendResponse(res, 400, 'username must be a string');
    if (typeof password !== 'string') return sendResponse(res, 400, 'password must be a string');

    const user = { username, password };

    db.query("INSERT INTO users SET ? ", user, (err) => {
      if (err) throw err;

      return sendResponse(res, 200, user);
    });
  });


  // Update User
  app.put('/user', (req, res) => {
    const id = req.body.id;
    const user = req.body.user;

    if (!user) {
      return sendResponse(res, 400, '"user" param is required');
    }
    else if (!id) {
      return sendResponse(res, 400, '"id" param is required');
    }

    db.query("UPDATE users SET user = ? WHERE id = ?", [user, id], (err, result) => {
      if (err) throw err;

      return sendResponse(res, 200, result);
    });
  });


  // Delete User
  app.delete('/user', (req, res) => {
    const id = req.body.id;

    if (!id) {
      return sendResponse(res, 400, '"id" param is required');
    }

    db.query('DELETE FROM users WHERE id = ?', [id], function (err, result) {
      if (err) throw err;

      return sendResponse(res, 200, result);
    });
  });


  // Auth
  app.post('/login', (req, res) => {
    const {
      username,
      password,
    } = req.body;

    if (!username) return sendResponse(res, 400, 'username is required');
    if (!password) return sendResponse(res, 400, 'passwod is required');

    db.query('SELECT * FROM users where username=? AND password=?', [username, password], (err, result) => {
      if (err) {
        return sendResponse(res, 500, 'Server Error');
      }

      const user = result[0];

      if (!user) {
        return sendResponse(res, 400, 'Incorrect Data');
      };

      delete user.password;

      return sendResponse(res, 200, user);
    });
  });


};