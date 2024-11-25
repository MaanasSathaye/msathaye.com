import type { Post } from './Posts'
import ER from '../content/Engineering-Resources'

const POSTS: Post[] = [
  {
    id: 'engineering-resources',
    title: 'Engineering Resources',
    date: '2024-11-24',
    topic: 'engineering',
    slug: 'engineering-resources',
    content: ER()
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug)
}

export function getAllPosts(): Post[] {
  return POSTS
}
