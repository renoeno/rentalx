/* eslint-disable import/no-unresolved */
import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecifications/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationsRoute = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoute.use(ensureAuthenticated);
specificationsRoute.post("/", createSpecificationController.handle);

export { specificationsRoute };
