import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationsUseCases = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationsController = new CreateSpecificationController(
  createSpecificationsUseCases
);

export { createSpecificationsController };
