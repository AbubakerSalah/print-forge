import { getAllModels } from "../lib/modals";
import { Model } from "@app/types";
export default async function ModalPage() {
  const models = await getAllModels();

  return models.map((model: Model) => (
    <div key={model.id} className="">
      {" "}
      <div className="grid grid-cols-3">
        {" "}
        <img src={model.image} />
      </div>
    </div>
  ));
}
