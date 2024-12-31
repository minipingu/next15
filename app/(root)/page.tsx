import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/ui/StartupCard'
import { StartupTypeCard } from '../types'

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>
}) {
	const query = (await searchParams).query

	const posts = [
		{
			_createdAt: new Date(),
			views: 55,
			author: { _id: 1, name: 'minipingu' },
			_id: 1,
			description: 'This is a description',
			image: 'https://m.media-amazon.com/images/I/61F0-HCtjhL._AC_UF894,1000_QL80_.jpg',
			category: 'idol',
			title: 'asuka sexy',
		},
	]
	return (
		<>
			<section className='pink_container'>
				<h1 className='heading'>
					Pitch your Startup, <br />
					Connect With Entrepreneurs
				</h1>
				<p className='sub-heading !max-w-3xl'>
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
					Competition
				</p>
				<SearchForm query={query} />
			</section>
			<section className='section_container'>
				<p className='text-30-semibold'>
					{query ? `Search results for "${query}` : `All Startups`}
				</p>
				<ul className='mt-7 card_grid'>
					{posts.length > 0 ? (
						posts.map((post: StartupTypeCard, index: number) => (
							<StartupCard post={post} key={post?._id} />
						))
					) : (
						<p className='no-result'>No startups found</p>
					)}
				</ul>
			</section>
		</>
	)
}
