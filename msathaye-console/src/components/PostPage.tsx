import { useParams, Navigate } from 'react-router-dom'
import { getPostBySlug } from './postUtils'

const PostPage = () => {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to='/posts' replace />
  }

  return (
    <div className='page'>
      <h2>{post.title}</h2>
      <div className='post-metadata'>
        <span>{post.date}</span>
      </div>
      <article className='post-content'>{post.content}</article>
    </div>
  )
}

export default PostPage
