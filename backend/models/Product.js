module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING(200),
      unique: true
    },
    isActive: {
      type: DataTypes.BOOLEAN
    },

  }, {
    tableName: 'products',
    timestamps: false
  })


  product.associate = models => {
    product.hasMany(models.Form, {foreignKey: 'productId'})
  }

  return product;
}