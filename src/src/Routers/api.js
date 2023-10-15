let express = require("express");
let router = express.Router();

const StudentsController= require("../Controllers/StudentsController");
const WorkController = require("../Controllers/WorkController");
//const OTPController = require("../Controllers/OTPController");
const AuthMiddleware = require("../Middleware/AuthVerifyMiddleware");

router.post("/CreateStudentData",StudentsController.CreateStudentData);
router.post("/userLogin", StudentsController.userLogin);
router.get("/ReadStudentsData", StudentsController.ReadStudentsData);
router.post("/UpdateStudentsData", StudentsController.UpdateStudentsData);
router.delete("/DeleteStudentData", StudentsController.DeleteStudentData);


router.post("/CreateWorkData",AuthMiddleware,WorkController.CreateWorkData);
router.get("/ReadWorkData",AuthMiddleware,WorkController.ReadWorkData);
router.post("/UpdateWorkData",AuthMiddleware,WorkController.UpdateWorkData);
router.delete("/DeleteWorkData",AuthMiddleware,WorkController.DeleteWorkData)



module.exports=router;
