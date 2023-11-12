const User = require('../models/User')

const phoneValidation = async (req, res, next) => {
   
   try {
      const user = await User.findOne({email: req.userEmail})
      if(!user.phoneNumber)
         return res.status(400).json({
            message: "Korisnik ne moze da odradi ovo jer nije verifikovao nalog telefonom"
         })

      return next()
   }
   catch(err) {
      return res.status(500).json({
         err:"Unutrasnja greska",
      })
   }
}

module.exports = phoneValidation