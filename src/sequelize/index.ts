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
    age: {
      type: new DataTypes.INTEGER.UNSIGNED(),
    },
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: new DataTypes.INTEGER.UNSIGNED(),
    },
    name: {
      allowNull: false,
      type: new DataTypes.STRING(30),
    },
  },
  {
    sequelize,
    tableName: 'user',
  },
);
