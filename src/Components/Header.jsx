export default function Header() {
	return (
		<header>
			<a
				href="/"
				className='font-["Montserrat"] font-bold uppercase tracking-wider'
			>
				Illingsworth.dev
			</a>
			<div className="row gap-4 ml-auto">
				<a href="/">Home</a>
				<a href="/projects">Projects</a>
				<a href="/blog">Blog</a>
			</div>
		</header>
	);
}
