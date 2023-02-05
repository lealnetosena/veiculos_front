var express = require('express');
var router = express.Router();
const apagar = require("../public/javascripts/apagar")

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    apagar(req.params.id)
    
    res.redirect("/carros")

    
});

module.exports = router;
