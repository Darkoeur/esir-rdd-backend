/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	
	migrate: 'drop',
	autoCreatedAt: true,
	autoUpdatedAt: false,

	attributes: {
		nom: {
			type: 'string',
			required: true
		},
		prenom: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true,
			unique: true
		},
		specialite: {
			type: 'string',
			required: true
		},
		code: {
			type: 'string',
			required: true
		}
	 },
	 
	 validationMessages: {
		 email: {
			 required: 'Email requis.',
			 unique: 'Adresse email déjà enregistrée.'
		 },
		 nom: {
			 required: 'Nom requis.'
		 },
		 prenom: {
			 required: 'Prenom requis.'
		 },
		 code: {
			 required: 'Code requis.'
		 },
		 specialite: {
			 required: 'Spécialité requise.'
		 }
	 }
};

