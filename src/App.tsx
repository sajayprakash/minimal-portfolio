import {
  Navbar,
  Intro,
  Projects,
  Timeline,
  Contact,
  Footer,
} from "./components/";

export default function App() {
  return (
    <div className="bg-purple-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 min-h-screen transition-colors duration-500">
      <Navbar />
      <div className="max-w-5xl w-11/12 mx-auto">
        <Intro />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
