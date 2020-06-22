const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
    // console.log(req)
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(response => {
      console.log(response.data.items);
      res.json(response.data.items);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
