import modelsData from "../data/models.json";
import { Model } from "../types";

export async function getAllModels(): Promise<Model[]> {
 
  return modelsData;
}

export async function getModelById(id: string | number): Promise<Model> {
 
  const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
  );
  console.log(foundModel)
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }
  return foundModel;
}
