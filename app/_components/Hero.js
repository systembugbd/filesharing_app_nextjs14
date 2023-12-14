import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold  sm:text-5xl">
            <span className="text-primary">Upload, Save</span> and easily
            <strong className="font-extrabold text-black-700 sm:block">
              <span className="text-primary"> Share</span> Your files in one
              place
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Drag and drop your file directly on our cloud and share it with your
            friends secuarely with password and send it on email.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-pdark focus:outline-none focus:ring active:bg-pdark sm:w-auto"
              href="/files"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-pdark focus:outline-none focus:ring active:text-primary sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
