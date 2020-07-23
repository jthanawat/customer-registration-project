module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING(200),
      unique: true
    },
    isActive: {
      type: DataTypes.BOOLEAN
    },

  }, {
    tableName: 'locations',
    timestamps: false
  })


  location.associate = models => {
    location.hasMany(models.Form, {foreignKey: 'locationId'})
  }

  return location;
}