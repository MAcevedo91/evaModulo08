import { DataTypes, Model } from 'sequelize';

export class Patient extends Model {}

export const initPatient = (sequelize) => {
    Patient.init({
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
        condition: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Patient',
        tableName: 'patients',
        timestamps: true,
    });
};
