const db = require('./database.middleware');
const bcrypt = require('bcrypt');

module.exports = {

fetchUsers: function(req, res, next) {
    const queryString = "SELECT * FROM users"
    db.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err)
        res.sendStatus(500)
        return
      }
      return res.json(rows)
    })
},

registerUser: function(req, res, next) {
    //console.log(req)
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;
    var phone = req.body.phone;
    var pass = req.body.pass;
    var username = req.body.username;
    var passHash = bcrypt.hashSync(pass, 10);
    //console.log(fName, lName, email, passHash)
    const queryString = `INSERT INTO users (first_name, last_name, username, email, mobile, password) VALUES ( '${fName}', '${lName}', '${username}', '${email}', '${phone}', '${passHash}')`
    console.log(queryString)
    db.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log("Failed to register user: " + err)
        res.sendStatus(500)
        return
      }
      res.json("User successfully registered")
    }) 
},

getUserById: function(req, res, next) {
        var id = req.params.userId;
        const queryString = `SELECT * FROM users WHERE id = ${id}`
        db.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
        }
        return res.json(rows)
        })
}
};