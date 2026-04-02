export const apiInfo = (req, res) => {
    res.status(200).json({
        name: "API Clínica Médica",
        version: "1.0.0",
        description: "API privada del centro médico, requiere token JWT para consumo de recursos de pacientes, médicos y exámenes.",
    });
};
