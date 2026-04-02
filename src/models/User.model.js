import { DataTypes, Model } from 'sequelize';
import { hashPassword } from '../utils/password.utils.js';

export class User extends Model {}

export const initUser = (sequelize) => {
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    user.password = await hashPassword(user.password);
                }
            }
        }
    });
};
