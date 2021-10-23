import Image from "next/image";

function Banner() {
  return (
    <div
      // h-[XXXpx] (specifying exact height for
      // image only works w/ just in time compiler)
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]
    2xl:h-[700px]"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Bluebells_%2834146232732%29.jpg/1200px-Bluebells_%2834146232732%29.jpg"
        alt="Forest"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-white text-sm sm:text-lg shadow-2xl">
          {" "}
          Not sure where to go? Perfect.
        </p>

        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md
        rounded-full font-bold my-3 hover:shadow-xl active:scale-90
        transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
