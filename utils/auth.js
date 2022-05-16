const auth = (req, res, next) => {
    if (req.session.loggedIn) { //checks if logged in using session
        next() //continue to next route
    } else {
        res.redirect("/login") //sends you to log in
    }
}

