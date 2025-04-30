import homeImage from "@/public/hero-image.png";

export default function Home() {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center md:justify-between md:mx-auto gap-8 md:px-6 py-12 md:max-w-7xl">
        <div className="px-6">
          <p className="hidden md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-5xl font-semibold my-4">
            Discover whats possible with 3D printing
          </h1>
          <p className="text-2xl">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <div className="mt-8">
            <button className="border-2 border-black px-2 py-1 uppercase">
              Browse models
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="rounded-full md:max-w-96"
            src={homeImage.src}
            alt=" PrintForge Community - A group of makers collaborating on 3D printing projects"
          />
        </div>
      </main>
    </>
  );
}
