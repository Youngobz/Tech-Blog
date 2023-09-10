const router = require('express').Router();
const { User } = require('../../models');


router.post("/signup", checkIsAuthenticated, async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.userId = userData.dataValues.id;
        res.redirect("/dashboard");
    } catch (err) {
        res.redirect("/signup");
    }
});

router.post('/login', checkIsAuthenticated, async (req, res) => {
    let username = req.body.userName;
    let password = req.body.password;
    try {
        let userData = await User.findOne(
            {
              where: {name: username }
            }
        );
        if(!userData) {
            res.redirect("/login");
        }
        const match = await userData.checkPassword(password);
        if(!match) {
            console.log('Password doesn\'t match');
            res.redirect("/login");
        }
        req.session.userId = userData.dataValues.id;
        res.redirect("/dashboard");
    } catch (error) {
      console.log(error);
    }
});

router.post('/logout', (req, res) => {
  if (req.session.userId) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

function checkIsAuthenticated(req, res, next) {
    if (req.session.userId) {
        res.redirect("/dashboard");
    } else {
        next();
    }
}

module.exports = router;
