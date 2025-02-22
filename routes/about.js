
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var Query = Stack.ContentType('healthcare_about_page').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('pages/about_page/index.html', {
                entry: result[0],
            });
        }, function error(error) {
            next(error);
        });
});

module.exports = router;