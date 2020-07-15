module.exports = (sequelize, DataTypes) => {
  const form = sequelize.define('Form', {
    FirstName: {
      type: DataTypes.STRING(30)
    },
    LastName: {
      type: DataTypes.STRING(30)
    },
    Email: {
      type: DataTypes.STRING(50)
    },
    LocationName: {
      type: DataTypes.STRING
    },
    CompanyName: {
      type: DataTypes.STRING(50)
    },
    PhoneNumber: {
      type: DataTypes.STRING(10)
    },
    Purpose: {
      type: DataTypes.STRING
    },
    ContactPersonName: {
      type: DataTypes.STRING
    },
    InterestInProduct: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'forms'
  })

  form.associate = (models) => {
    form.hasMany(models.Picture, {foreignKey: 'form_id'})
    form.belongsTo(models.Admin, {foreignKey: 'admin_id'})
  }



  return form;
}