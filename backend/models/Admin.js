module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.Define('Admin', {
    username: {
      type: DataTypes.STRING(200),
      unique: true
    },
    password: {
      type: DataTypes.STRING(20)
    },
    name: {
      type: DataTypes.STRING(200)
    }
  }, {
    tableName: 'admin'
  })

  admin.associate = models => {
    admin.hasMany(models.Form, {foreignKey: 'admin_id'})
  }

  return admin;
}