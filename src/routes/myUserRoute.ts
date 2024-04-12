import express from "express";
import {
  checkRequiredPermissions,
  jwtCheck,
  jwtParseUser,
} from "../middleware/auth";
import { validateProviderRequest } from "../middleware/validation";
import myUserController from "../controllers/myUserController";
import { AdminMessagesPermissions } from "../permissions/permissions";

const router = express.Router();

// logged in provider
router.get(
  "/",
  jwtCheck,
  jwtParseUser,
  checkRequiredPermissions([AdminMessagesPermissions.Read]),
  myUserController.getMyUser
);

// logged in provider
router.post("/", jwtCheck, myUserController.createMyUser);

export default router;
