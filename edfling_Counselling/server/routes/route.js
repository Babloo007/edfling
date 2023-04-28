import express from "express";

import { signupUser } from "../controller/user-controller.js";
import { renderExperts, IDExpert } from "../controller/expert-controller.js";


const router = express.Router();


router.post('/signup', signupUser);  // For signup page
router.get('/experts', renderExperts); // Render the list of experts
router.get('/expert/:id', IDExpert);  // For opening the details of a particular expert

export default router;