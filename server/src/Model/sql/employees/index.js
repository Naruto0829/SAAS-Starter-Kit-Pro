import db from '../../../Database/sql/db.js';
import bcrypt from "bcrypt";
const saltRounds = 10;

/**
 * Create New Employee
 * @param {object} employee
 * @return {bool} status
 */

export const createEmployee = async ( emp ) => {
    
    const join_date = new Date(emp.joinDate);
    const leave_date = new Date(emp.leaveDate);
    const hash = await bcrypt.hash(emp.password, saltRounds);

    let empQueryStr = `INSERT INTO employees(firstName, lastName, userName,
                        password, email, phone, street, city, state, zipCode, country,
                        joinDate, leaveDate, employeeId, booldGroup, employmentStatusId,
                        departmentId, roleId, shiftId, leavePolicyId, weeklyHolidayId,
                        createdAt, updatedAt)
                        VALUES($1, $2, $3, $4,$5, $6, $7, $8, $9,
                                $10, $11, $12,$13, $14, $15, $16,
                                $17, $18, $19, $20, $21, $22, $23, $24, $25)`;

    
    const employeeTbl = {

        firstName: emp.firstName,
        lastName: emp.lastName,
        userName: emp.userName,
        password: hash,
        email: emp.email,
        phone: emp.phone,
        street: emp.street,
        city: emp.city,
        state: emp.state,
        zipCode: emp.zipCode,
        country: emp.country,
        joinDate: join_date,
        leaveDate: leave_date,
        employeeId: emp.employeeId,
        booldGroup: emp.booldGroup,
        employmentStatusId: emp.employmentStatusId,
        departmentId: emp.departmentId,
        roleId: emp.roleId,
        shiftId: emp.shiftId,
        leavePolicyId: emp.leavePolicyId,
        weeklyHolidayId: emp.weeklyHolidayId,
        createdAt: emp.createdAt,
        updatedAt: emp.updatedAt

    }

    const salaryHistoryTbl = {
        designationId : 1,
        startDate : '',
        endDate:'',
        salary:21,
        salaryStartDate:'',
        salaryEndDate:'',
        salaryComment:''
    }

    const educationTbl = {
        degree : 1,
        institution: 1,
        studyStartDate:'',
        studyEndDate:'',
        fieldOfStudy:''
    }

    let salaryHistoryQueryStr = `INSERT INTO  (designationId, startDate, endDate, 
                                    salary, salaryStartDate, salaryEndDate, comment) 
                                VALUES($1, $2, $3, $4, $5, $6, $7 )`;

    let educationQueryStr = `INSERT INTO (degree, insitution, studyStartDate, studyEndDate, fieldOfStudy)
                                VALUES ($, $2, $3, $4, $5)`;
    
    // Create New Employee Query
    const queryResult = await db.query(empQueryStr, [ employeeTbl ], async  (err, res) => {
        
        if(err) {
            return { status: false, message: 'Something went wrong!' };
        }
        
        await db.query(salaryHistoryQueryStr, [ salaryHistoryTbl ] );
        await db.query(educationQueryStr, [ educationTbl ] );        

        return { status: true, message: 'Employee has created successfully!' };
    });

    return queryResult.rows[0];
}
