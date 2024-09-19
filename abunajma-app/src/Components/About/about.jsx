import React from "react";
import about from "../../Assets/about.png";

function About() {
  return (
    <div className="bg-green-400 flex items-center justify-center min-h-screen relative z-10">
      <div className="absolute -top-40 -right-40 lg:w-2/3 w-full h-80 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[-20px_10px_0px_#FFD700]"
          viewBox="0 0 2000 2000"
          fill="#ffb14a"
        >
          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="2000"
              height="2000"
            >
              <image href={about} x="0" y="0" width="2000" height="2000" />
            </pattern>
          </defs>
          <path
            d="M994 112c-703-2-920.47 400.35-904 905 13.35 409 32.03 946.66 977 861 684-62 792-279 835-777 61.67-714.25-288.33-987.24-908-989Z"
            fill="url(#img1)"
          ></path>
        </svg>
      </div>

      <div className="w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-white/60 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.21)] relative z-20 lg:w-[50%] lg:ml-32"> {/* Adjusted left margin */}
        <h1 className="font-['Fredoka_One'] text-3xl mb-4 tracking-wide text-blue-600 drop-shadow-[3px_3px_0px_rgba(255,255,0,0.5)]">
          Abunajma with Kids
        </h1>
        <p className="font-['Comic_Neue'] text-xl text-black">
          Join us for fun adventures and learning! We make every day exciting and full of new discoveries.
        </p>
      </div>
    </div>
  );
}

export default About;
