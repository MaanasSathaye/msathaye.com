type Post = {
  id: string
  title: string
  date: string
  topic: string
  slug: string
  content: JSX.Element
}

type Topic = {
  name: string
  description: string
  slug: string
}

export type { Post, Topic }
