module.exports = (sequelize, DataTypes) => {
  const form = sequelize.define('Form', {
    firstName: {
      type: DataTypes.STRING(30)
    },
    lastName: {
      type: DataTypes.STRING(30)
    },
    email: {
      type: DataTypes.STRING(50)
    },
    companyName: {
      type: DataTypes.STRING(50)
    },
    phoneNumber: {
      type: DataTypes.STRING(10)
    },
    contactPersonName: {
      type: DataTypes.STRING
    },
    moduleType: {
      type: DataTypes.STRING
    },
    cardName: {
      type: DataTypes.STRING
    },
    pictureUrl: {
      type: DataTypes.STRING
    },
    cardUrl: {
      type: DataTypes.STRING
    },
    dateCreated: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    tableName: 'forms'
  })

  form.associate = models => {
    form.belongsTo(models.Location, {foreignKey: 'locationId'})
    form.belongsTo(models.Purpose, {foreignKey: 'purposeId'})
    form.belongsTo(models.Product, {foreignKey: 'productId'})
  }

  return form;
}