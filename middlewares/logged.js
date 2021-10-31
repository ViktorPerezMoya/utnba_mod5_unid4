
const logged = async (req, res, next) => {
    try{
        console.log(req.session);
        if(req.session !== undefined && req.session.id_usuario){
            next();
        }else 
            res.redirect('/admin/login');
    }catch(error){
        console.log(error);
    }
}


module.exports = logged;
