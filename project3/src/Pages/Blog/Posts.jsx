import { Link } from "react-router-dom"

export let Post = () => {
	const posts = [
		{ id: 1, title: 'this is ' },
		{ id: 1, title: 'this is ' }
	]
	return (
		<ul>
			{
				posts.map(post => (
					<li key={post.id}>

						<Link to={`${post.id}`}>{post.title}</Link>
					</li>
				))
			}
		</ul>)
}
