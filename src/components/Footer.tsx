export default function Footer() {
  const today = new Date();
  return (
    <footer className="text-zinc-500 p-4 text-center">
      &copy; {today.getFullYear()}
      <a href="/"> Sajay Prakash</a>. All rights reserved.
    </footer>
  );
}
