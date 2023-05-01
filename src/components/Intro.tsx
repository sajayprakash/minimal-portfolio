export default function Intro() {
  return (
    <section className="relative mb-6 h-80 flex justify-center items-center">
      <div className="z-10 text-center px-8 drop-shadow-lg shadow-black">
        <div className="uppercase text-sm mb-2">My</div>
        <div className="text-4xl font-medium">
          Minimal{" "}
          <span className="text-purple-500 animate-underline">Portfolio</span>
          <p className="text-sm italic mt-2 font-extralight">
            Because some things should just be simple!
          </p>
        </div>
      </div>
    </section>
  );
}
