import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationController";

const specificationsRoute = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoute.use(ensureAuthenticated);
specificationsRoute.post("/", createSpecificationController.handle);

export { specificationsRoute };
