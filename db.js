const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgresql://cloud_db_9e0d_user:Ao7AreJ0Gpa4cErr04Y9ZtnR4lV6uGGr@dpg-csh3jtrqf0us739tqh80-a/cloud_db_9e0d',  // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
