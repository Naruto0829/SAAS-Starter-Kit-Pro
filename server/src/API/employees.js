import express from 'express';
import { addStaff } from '../Services/employees/employees.js';
import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';
const router = express.Router();
import { requirePermissions } from '../Middleware/permissions.js';

/* AddStaff in sendinblue */

router.post('/employee/addStaff',  asyncHandler(addStaff));

export default router;
