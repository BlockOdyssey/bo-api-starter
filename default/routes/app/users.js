const express = require('express');
const router = express.Router();
const { users } = require('../../service/index');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

router.get('/',  async (req, res) => {
  let { email } = req.query;

  let result = await users.findUser({email});

  console.log(result)

  if(result){
    return res.status(StatusCodes.OK).json({
      result : getReasonPhrase(StatusCodes.OK)
    })
  }
});

module.exports = router;
