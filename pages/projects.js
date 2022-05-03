import groq from 'groq'
import client from '../client'
import Head from 'next/head'

const Projects = ({project}) => {
    return (
        <>
            <Head>
                <title>Projects - TechnicalDee</title>
            </Head>
            <div id='blog' className='flex justify-center'>
                <div className='w-4/5 space-y-6'>
                    <p className='font-bold text-4xl'>Projects</p>

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                        {project.length > 0 && project.map(
                        ({ _id, title = '', slug = '', link = '', publishedAt = '' }) =>
                            slug && (
                            <div className='rounded-xl p-4 w-full shadow-2xl' key={_id}>
                                <a href={link}>
                                <a className='font-semibold text-2xl'>{title}</a>
                                </a>
                            </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const project = await client.fetch(groq`
      *[_type == "project" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        project
      }
    }
}

export default Projects