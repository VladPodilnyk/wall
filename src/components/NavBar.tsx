import Link from "next/link";

interface NavBarLinkProps {
  href: string,
  children: React.ReactNode,
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="font-semibold text-base underline">
      {children}
    </Link>
  )
};


export const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row gap-3 justify-start">
      <NavBarLink href={"/"}>
        Home
      </NavBarLink>
      <NavBarLink href={"/settings"}>
        Settings
      </NavBarLink>
    </nav>
  );
};