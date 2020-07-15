module.exports = (sequelize, DataTypes) => {
  const picture = sequelize.define('Picture', {
    Card: {
      type: DataTypes.STRING
    },
    Avatar: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'pictures'
  })

  picture.associate = models => {
    picture.belongsTo(models.Form, {foreignKey: 'form_id'})
  }

  return picture;
}