const Escrito = require('./Escritos');
const User = require('./User');
const UserRol = require('./UserRol');

// Define associations escrito-user
User.hasMany(Escrito, {foreignKey: 'userId', as: 'escritos'});
Escrito.belongsTo(User, {foreignKey: 'userId', as: 'user'});

// Define associations user-userRol
UserRol.hasMany(User, {foreignKey: 'userRolId', as: 'users'});
User.belongsTo(UserRol, {foreignKey: 'userRolId', as: 'rol'});

module.exports = {
    User,
    Escrito,
    UserRol
};
