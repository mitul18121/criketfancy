import Image from "next/image";
import Logo from "../../images/cricket.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { baseUrl } from "../../helper/baseUrl";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${baseUrl}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        password,
        email,
      }),
    });

    const res = await response.json();
    console.log(response);
    if (response.status === 201) {
      toast.success(res.message);
      // router.push("/register");
    } else {
      roast.error(res.message);
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div className="lg:flex w-1/2 hidden bg-gradient-to-r from-green-500 bg-no-repeat bg-cover relative items-center">
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Stay Safe! <br />
            Were Mask!
          </h1>
          <p className="text-3xl my-4">
            Capture latest news of the creicket world.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full bg-gradient-to-l from-indigo-300 flex items-center justify-center text-center md:px-16 px-0 z-0">
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-black font-bold text-3xl">
            <Image src={Logo} alt="Logo" height={50} width={50} />
            <br />
            Hello!
          </h1>

          <form
            action=""
            className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            method="POST"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="pb-2 pt-4">
              <input
                type="text"
                name="fname"
                placeholder="First name"
                className="focus:ring-2 focus:ring-blue-300 block w-full p-4 font-semibold bg-green-200 text-black focus:outline-none"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="text"
                name="lname"
                placeholder="Last name"
                className="focus:ring-2 focus:ring-blue-300 block w-full p-4 font-semibold bg-green-200 text-black focus:outline-none"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="focus:ring-2 focus:ring-blue-300 block w-full p-4 font-semibold bg-green-200 text-black focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="focus:ring-2 focus:ring-blue-300 block w-full p-4 font-semibold bg-green-200 text-black focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right text-black hover:underline hover:text-blue-500">
              <a href="/login">Not a new user?</a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button
                type="submit"
                className="uppercase block w-full p-4 text-lg rounded-full bg-gradient-to-r from-green-400 to-indigo-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
