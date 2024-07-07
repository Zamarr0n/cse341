const isAuthenticated = (req,res,next) => {
    if(req.session.user == underfined){
        return res.status(401).json("You dont have access");    
    }
    next();
}



module.exports = {isAuthenticated}