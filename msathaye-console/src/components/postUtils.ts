import type { Post } from './Posts'
import { POSTS } from '../pages/Posts'

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug)
}

export function getAllPosts(): Post[] {
  return POSTS
}
