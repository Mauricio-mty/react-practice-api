const Escrito = require('./Escritos');
const User = require('./User');

User.hasMany(Escrito, {foreignKey: 'userId', as: 'escritos'});
Escrito.belongsTo(User, {foreignKey: 'userId', as: 'user'});


module.exports = {
    User,
    Escrito
};