const router = require(`express`).Router();

router.post(`/register`, (req, res) => {
  res.send(`Resgister`);
});

module.exports = router;
