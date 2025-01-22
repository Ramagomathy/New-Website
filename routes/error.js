module.exports = function(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        res.status(404).send('Page not found');
    });

    // development error handler
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            console.log(err);
            res.render('error/404', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // error won't be propagated to the page
    if (app.get('env') === 'production') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
        console.log(err);
        res.render('error/404', {
            message: err.message,
            error: {}
        });
    });
    }
};
