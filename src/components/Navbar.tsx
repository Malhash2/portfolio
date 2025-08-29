// src/components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full  z-50">
			<div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
				<h1 className="text-xl font-bold">Portfolio</h1>
				<ul className="flex space-x-6 text-sm">
					<li><Link href={"/"}>Home</Link></li>
					<li><Link href={"/About"}>About</Link></li>
					<li><Link href={"/Skills"}>Skills</Link></li>
					<li><Link href={"/Contact"}>Contact</Link></li>
				</ul>
			</div>
		</nav>
	)
}
