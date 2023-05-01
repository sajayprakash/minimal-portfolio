export default function Intro() {
  return (
    <section className="relative pt-20 flex justify-center items-center">
      <div className="z-10 text-center px-8 drop-shadow-lg shadow-black">
        <div className="uppercase text-sm">My</div>
        <div className="text-4xl font-medium">
          Minimal{" "}
          <span className="text-purple-500 animate-underline">Portfolio</span>
          <p className="text-sm italic mt-2 font-normal text-zinc-400">
            Because certain things should just be simple!
          </p>
        </div>
        <div className="mt-3 max-w-xl mb-6 font-bold">
          <p>
            Hi, I'm{" "}
            <span className="text-purple-500 animate-underline">
              Sajay Prakash
            </span>
            !
          </p>
          <p>
            I'm an aspiring full stack developer, currently pursuing my B.E in
            Computer Science and Engineering at Rajalakshmi Engineering College.
          </p>
        </div>
      </div>
    </section>
  );
}
