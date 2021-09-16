import { useEffect } from 'react'

import { ForumPostOrderByInput, ForumThreadOrderByInput } from '@/common/api/queries'
import { useGetForumPostsLazyQuery, useGetForumThreadsQuery } from '@/forum/queries'
import { asForumPost } from '@/forum/types'

export const useCategoryLatestPost = (category_eq: string) => {
  const { data: threadData } = useGetForumThreadsQuery({
    variables: {
      where: { category: { id_eq: category_eq } },
      orderBy: ForumThreadOrderByInput.UpdatedAtDesc,
      limit: 1,
    },
  })

  useEffect(() => {
    const rawThread = threadData?.forumThreads[0]
    if (rawThread)
      fetchPost({
        variables: {
          where: { thread: { id_eq: rawThread.id } },
          orderBy: ForumPostOrderByInput.UpdatedAtDesc,
          limit: 1,
        },
      })
  }, [threadData])

  const [fetchPost, { data: postData }] = useGetForumPostsLazyQuery()
  const rawPost = postData?.forumPosts[0]

  return { post: rawPost && asForumPost(rawPost) }
}