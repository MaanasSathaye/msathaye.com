import { useState } from 'react'
import type { Post, Topic } from '../components/Posts'
import '../css/Posts.css'
import ER from '../content/Nouns-To-Learn-From'
import ASAAATR from '../content/A-Systematic-And-Affective-Approach-To-Rehab'
import ALYIR from '../content/A-Literary-Year-In-Review'

export const TOPICS: Topic[] = [
  {
    name: 'Engineering',
    description: 'Software engineering and system design',
    slug: 'engineering'
  },
  {
    name: 'Sports Performance and Nutrition',
    description: 'Sports performance and nutrition',
    slug: 'sports'
  }
]

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Engineering Nouns To Learn From',
    date: '2024-11-27',
    topic: 'engineering',
    slug: 'engineering-nouns-to-learn-from',
    content: ER()
  },
  {
    id: 2,
    title: 'Rehab & Recovery: A Systematic, Affective, and Opinionated Approach',
    date: '2024-11-29',
    topic: 'sports',
    slug: 'approaching-rehab-and-recovery',
    content: ASAAATR()
  },
  {
    id: 3,
    title: 'A Literary Year In Review: 2024 (and earlier) Edition',
    date: '2024-12-31',
    topic: '',
    slug: 'literature-year-in-review',
    content: ALYIR()
  }
]

const Posts = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const filteredPosts = selectedTopic ? POSTS.filter((post) => post.topic === selectedTopic) : POSTS

  return (
    <div className='content-section'>
      <div className='card'>
        <div className='topics-filter'>
          <button
            className={`topic-button ${!selectedTopic ? 'active' : ''}`}
            onClick={() => setSelectedTopic(null)}
          >
            All Topics
          </button>
          {TOPICS.map((topic) => (
            <button
              key={topic.slug}
              className={`topic-button ${selectedTopic === topic.slug ? 'active' : ''}`}
              onClick={() => setSelectedTopic(topic.slug)}
            >
              {topic.name}
            </button>
          ))}
        </div>

        {filteredPosts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post) => (
            <div key={post.id} className='post-line'>
              <span className='post-date'>{new Date(post.date).toISOString().split('T')[0]}</span>
              <span className='separator'> - </span>
              <a href={`/posts/${post.slug}`} className='post-title'>
                {post.title}
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Posts
