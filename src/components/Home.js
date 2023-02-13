import photo from "../photo11.png";
import { GrGithub, GrLinkedin } from "react-icons/gr";

export default function Home() {
  return (
    <>
      <div className="flex bg-gradient-to-b from-cyan-800 to-cyan-600 text-slate-50 text-left pt-4 lg:px-[10%] px-[8%] pb-10">
        <div className="lg:pt-10 pt-3 w-8/12">
          <div className="flex text-rose-400">
            <p className="lg:text-6xl md:text-4xl text-3xl">Hi,</p>
            <img
              className="lg:h-14 md:h-9 h-7"
              alt="emoji"
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            />
            <p className="lg:text-4xl md:text-3xl text-2xl mt-auto lg:ml-4 ml-2">
              I am
            </p>
          </div>
          <div className="flex gap-6">
            <p className="lg:text-7xl md:text-5xl text-4xl">Pujarini Sahoo</p>
          </div>
          <div className="pl-2">
            <p className="lg:text-lg md:text-md text-sm text-cyan-200 py-10 w-[70%]">
              Full Stack Web Developer capable of writing production-ready code
              using ReactJS, HTML, CSS, and Chakra UI on the front end, NodeJS,
              and Express on the backend to build single-page applications.
            </p>
          </div>
          <div className="flex gap-10 ml-4 ">
            <button class="flex bg-green-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">
              <p className="flex gap-2">
                Github <GrGithub className="mt-1" />
              </p>
            </button>
            <button class="bg-green-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">
              <p className="flex gap-2">
                LinkedIn <GrLinkedin className="mt-1" />
              </p>
            </button>
          </div>
        </div>
        <div className="ml-auto w-4/12">
          <img src={photo} height="400px" alt="profile" />
        </div>
      </div>
    </>
  );
}

/*Full Stack Web Developer capable of writing production-ready code
          using ReactJS, HTML, CSS, and Chakra UI on the front end, NodeJS, and
          Express on the backend to build single-page applications. Looking
          forward to implement these skills in a well-motivated organization. */
