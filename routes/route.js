const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// SchemaOne routes
const { createSchemaOne, updateSchemaOne, deleteSchemaOne, getSchemaOne, getAllSchemaOne } = require('../controllers/schemaone');
// 
router.post("/schemaone/create", checkAuthorizationHeaders,authorizeUser("createSchemaOne") ,createSchemaOne);
router.put("/schemaone/update/:id", checkAuthorizationHeaders,authorizeUser("updateSchemaOne"), updateSchemaOne);
router.delete("/schemaone/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteSchemaOne"), deleteSchemaOne);
router.get("/schemaone/get/:id", checkAuthorizationHeaders, authorizeUser("readSchemaOne"), getSchemaOne);
router.get("/schemaone/getAll", checkAuthorizationHeaders, authorizeUser("readSchemaOne"), getAllSchemaOne);

  
module.exports = router;
