/**
 * ProfilController
 *
 * @description :: Server-side logic for managing Profils
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getInfo: function(req,res) {
		console.log('A user wants to refresh his data with id : ' + req.session.user);
		console.log(req.session);
		if(!req.session.user) return res.json({success:false,message:'Cela requiert d\'être connecté !'});
		return res.json({success:true, message:'Actualisation des données...', content:{fake:true}});
	}
	
};

