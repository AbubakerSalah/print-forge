import Link from "next/link";
import { CiHeart } from "react-icons/ci";

import Pill from "./Pill";
import { ModelCardProps } from "@/app/types";

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <Link
      href={`/3d-model/${model.id}`}
      className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all"
      aria-labelledby={`model-${model.id}-title`}
    >
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
        role="article"
      >
        <div className="relative aspect-square">
          <img
            src="/hero-image.png"
            alt={model.name}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-2 min-h-[3.5rem]">
            <h2
              id={`model-${model.id}-title`}
              className="text-xl font-semibold text-gray-800 line-clamp-2"
            >
              {model.name}
            </h2>
          </div>
          <p className="text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
            {model.description}
          </p>
          <div className="mt-2">
            <Pill>{model.category}</Pill>
          </div>

          <div
            className="flex items-center mt-2 text-gray-600"
            aria-label={`${model.likes} likes`}
          >
            <CiHeart className="text-2xl" />
            <span>{model.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
