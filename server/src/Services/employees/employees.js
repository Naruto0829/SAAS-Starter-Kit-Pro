import { createEmployee }  from "../../Model/sql/employees/index.js"

export const addStaff =  async (req, res) => {
    await createEmployee(req.body);
    res.status(200).send({ type: 'Success', message: 'Create Empoyeer successfully!' });
}