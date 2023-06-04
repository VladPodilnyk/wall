import Link from "next/link";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <Link href={"/"}>
        Home
      </Link>
      <Link href={"/settings"}>
        Settings
      </Link>
    </nav>
  );
};