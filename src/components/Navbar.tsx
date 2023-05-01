import DropdownMenu from "./DropdownMenu";
import ThemeToggle from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <header className="fixed w-full p-2 z-20 backdrop-blur-md">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center gap-3 text-base">
          <h2 className="font-semibold tracking-tighter p-2 text-lg cursor-pointer">
            Sajay Prakash
          </h2>
          <div className="flex-1"></div>
          <ThemeToggle />
          <DropdownMenu />
        </nav>
      </div>
    </header>
  );
}
