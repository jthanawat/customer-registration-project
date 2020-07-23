module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(200),
      unique: true
    },
    password: {
      type: DataTypes.STRING(20)
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
  }, {
    tableName: 'users'
  })

  return user;
}