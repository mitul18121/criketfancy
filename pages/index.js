import Head from "next/head";
import Image from "next/image";
import Cricket from "../images/cricket(1).png";
import IndFlag from "../images/india.svg";
import NewzFlag from "../images/new-zealand.svg";
import WithAuth from "../components/WithAuth";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Animation Cricket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap items-center w-full rounded-full shadow-2xl  md:shadow-xl bg-red-500">
        <div className="ml-8 mt-2">
          <Image src={IndFlag} alt="flag" height={50} width={50} />
        </div>
        <div className="font-bold ml-4 text-white text-4xl">|</div>
        <div className="flex flex-col ml-4 items-center  w-40 bg-gray-100 rounded-3xl  justify-center">
          <div className="border-b-2 border-black">Rohit Sharma - 50</div>

          <div>K.L Rahul - 100 </div>
        </div>
        <div className="font-bold ml-4 text-white text-4xl">|</div>
        <div className="flex flex-col ml-4 items-center w-40 bg-gray-100 rounded-3xl  justify-center">
          <div className="border-b-2 border-black">Total: 250 / 7</div>
          <div>Over: 40.2</div>
        </div>
        <div className="font-bold ml-4 text-white text-4xl">|</div>
        <div className="ml-4 mt-2">
          <Image src={NewzFlag} alt="flag" height={50} width={50} />
        </div>
        <div className="font-bold ml-4 text-white text-4xl">|</div>
        <div className=""></div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by
        <Image src={Cricket} height={25} width={25} alt="logo" />
      </footer>
    </div>
  );
}

export default WithAuth(Home);
