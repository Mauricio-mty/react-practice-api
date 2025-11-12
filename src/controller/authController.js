const jwt = require('jsonwebtoken');
const brcypt = require('bcryptjs');
const User = require('../model/User');

exports.login = async (req, res) => {
 try{
    const{mail,password}=req.body;
    const user = await User.findOne({where:{mail}});
   if(!user) return res.status(404).json({message:"usuario no encontrado"});
    
   const valid = await brcypt.compare(password,user.password);
   if(!valid) return res.status(401).json({error:'Credencial incorrecta'});

   const token = jwt.sign(
    {id:user.id,mail:user.mail},
    process.env.JWT_SECRET,
    {expiresIn:'1h'}
   );

   res.json({message:"credenciales validas",token});
 }catch(e){
    res.statius(500).json({error:e.message});
 }

}
