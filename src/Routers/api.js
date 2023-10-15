let express = require("express");
let router = express.Router();

const StudentsController= require("../Controllers/StudentsController");
const WorkController = require("../Controllers/WorkController");
const OTPController = require("../Controllers/OTPController");

router.post("/CreateStudentData",StudentsController.CreateStudentData);
router.post("/userLogin", StudentsController.userLogin);
router.get("/ReadStudentsData", StudentsController.ReadStudentsData);
router.post("/UpdateStudentsData", StudentsController.UpdateStudentsData);
router.delete("/DeleteStudentData", StudentsController.DeleteStudentData);



module.exports=router;
