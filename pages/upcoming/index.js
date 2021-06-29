import Image from "next/image";
import flag from "../../images/cricket.png";

const UpComing = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-4xl font-semibold underline uppercase">
        Upcoming matches
      </h1>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <div
          href="https://nextjs.org/docs"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-red-500 focus:text-blue-600"
        >
          <div>
            <Image
              className="mt-2"
              src={flag}
              width={30}
              height={30}
              alt="TEAM"
            />
            <span className="text-bold text-4xl"> vs </span>
            <Image
              className="mt-2"
              src={flag}
              width={30}
              height={30}
              alt="TEAM"
            />
          </div>
          <div>
            <p className="mt-4 text-xl">Match Live At:</p>
            <p className="mt-4 text-xl">Match will be play At:</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpComing;
