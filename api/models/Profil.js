/**
 * Profil.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	migrate: 'drop',

	attributes: {
		associatedUser: {
			model:'user',
			unique: true
		},
		color: {
			type:'string'
		},
		birthday: {
			type:'string'
		},
		description: {
			type:'string'
		}

	}
};

