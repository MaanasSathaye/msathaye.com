import { useState } from 'react'
import type { Post, Topic } from '../components/Posts'
import '../css/Posts.css'
import ER from '../content/Engineering-Resources'

const TOPICS: Topic[] = [
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

const POSTS: Post[] = [
  {
    id: '1',
    title: 'Engineering Resources',
    date: '2024-11-24',
    topic: 'engineering',
    slug: 'engineering-resources',
    content: ER()
  }
]

const Posts = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const filteredPosts = selectedTopic ? POSTS.filter((post) => post.topic === selectedTopic) : POSTS

  return (
    <div className='page'>
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
  )
}

export default Posts
