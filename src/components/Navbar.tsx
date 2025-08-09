import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<h1>Portfolio</h1>
			<ul>
				<li><Link href={"/"}>Home</Link></li>
				<li><Link href={"/About"}>About</Link></li>
				<li><Link href={"/Skills"}>Skills</Link></li>
				<li><Link href={"/Contact"}>Contact</Link></li>
			</ul>

		</nav>

	)
}
