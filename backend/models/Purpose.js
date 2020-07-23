module.exports = (sequelize, DataTypes) => {
  const purpose = sequelize.define('Purpose', {
    name: {
      type: DataTypes.STRING(200),
      unique: true
    },
    isActive: {
      type: DataTypes.BOOLEAN
    },

  }, {
    tableName: 'purposes',
    timestamps: false
  })


  purpose.associate = models => {
    purpose.hasMany(models.Form, {foreignKey: 'purposeId'})
  }

  return purpose;
}