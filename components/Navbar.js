import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/crypto">
            <a>Crypto</a>
          </Link>
        </li>

        <li>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>

        <li>
          <Link href="/todo">
            <a>Todo</a>
          </Link>
        </li>

        <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
