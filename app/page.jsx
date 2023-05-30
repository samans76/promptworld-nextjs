import Feed from '@components/Feed'

function Home() {
  return (
    <section className='w-full flex-center flex-col mt-5'>
        <h1 className='head_text text-center orange_gradient'>Welcome to the Prompt World</h1>
        <h2 className='desc text-center'>In the Prompt World You can create and search for useful prompts</h2>
    <Feed/>
    </section>
  )
}

export default Home