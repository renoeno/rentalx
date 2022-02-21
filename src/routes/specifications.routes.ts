import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationController";

const specificationsRoute = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoute.post("/", createSpecificationController.handle);

export { specificationsRoute };
