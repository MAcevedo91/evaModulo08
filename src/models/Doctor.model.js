import { DataTypes, Model } from 'sequelize';

export class Doctor extends Model {}

export const initDoctor = (sequelize) => {
    Doctor.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rut: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Doctor',
        tableName: 'doctors',
        timestamps: true,
    });
};
