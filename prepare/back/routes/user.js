const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const {User} = require('../models');
const router = express.Router();

router.post('/login', passport.authenticate('local', (e, user, info) => {
  if (e) {
    console.error(e);
    next(e);
  }
}));

router.post('/', async (req, res) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.setHeader('Access-Control-Allow-Orogin', 'http://localhost:3060');
    res.status(200).send('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;