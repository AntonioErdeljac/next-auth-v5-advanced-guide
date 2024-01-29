import Image from "next/image";

export default function Home() {
  const array = new Array(19).fill(0);
  return (
    <main className="h-screen flex-col gap-10 snap-y snap-mandatory overflow-y-auto ">
      {array.map((slide, index) => {
        return (
          <div
            key={`slide-${index}`}
            className=" snap-center shrink-0 w-full  py-3 lg:px-20 flex justify-center items-center   "
          >
            <div
              className={`w-full   flex justify-center items-center group-hover:p-3 rounded-md overflow-hidden place-items-center `}
            >
              <Image
                src={`/presentation/Juggle-Presentation${index + 1}.jpg`}
                height={2000}
                width={2000}
                alt="image"
              />
            </div>
          </div>
        );
      })}
    </main>
  );
}