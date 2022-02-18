import { Router } from "express";

import { createSpecificationsController } from "../modules/cars/useCases/createSpecifications";

const specificationsRoute = Router();

specificationsRoute.post("/", (req, res) => {
  return createSpecificationsController.handle(req, res);
});

export { specificationsRoute };
