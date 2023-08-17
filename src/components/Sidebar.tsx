import Link from "next/link";

const Sidebar = () => {
  return (
    <aside>
      <Link href="/">Home</Link>
      <Link href="/label">Label</Link>
      <Link href="/archive">Archive</Link>
    </aside>
  );
};

export default Sidebar;
