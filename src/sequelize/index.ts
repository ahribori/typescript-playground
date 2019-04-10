import { DataTypes, Model, Sequelize } from 'sequelize';

const uri = ``;

const sequelize = new Sequelize(uri);

class User extends Model<User> {
  public id!: number;
  public name!: string;
  public age!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: new DataTypes.INTEGER.UNSIGNED(),
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(30),
      allowNull: false,
    },
    age: {
      type: new DataTypes.INTEGER.UNSIGNED(),
    },
  },
  {
    sequelize,
    tableName: 'user',
  },
);
