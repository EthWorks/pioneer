import { BaseActivity, MemberDisplayFields } from '@/common/types'

export type ForumActivity =
  | PostAddedActivity
  | PostEditedActivity
  | PostDeletedActivity
  | ThreadCreatedActivity
  | CategoryCreatedActivity

interface PostActivity extends BaseActivity {
  postId: string
  threadId: string
  author: MemberDisplayFields
}

export interface PostAddedActivity extends PostActivity {
  eventType: 'PostAddedEvent'
}

export interface PostEditedActivity extends PostActivity {
  eventType: 'PostTextUpdatedEvent'
}

export interface PostDeletedActivity extends BaseActivity {
  eventType: 'PostDeletedEvent'
  actor: MemberDisplayFields
  threadId: string
  threadTitle: string
  numberOfPosts: number
}

export interface ThreadCreatedActivity extends BaseActivity {
  eventType: 'ThreadCreatedEvent'
  thread: {
    id: string
    title: string
  }
  author: MemberDisplayFields
}

export interface CategoryCreatedActivity extends BaseActivity {
  eventType: 'CategoryCreatedEvent'
  category: {
    id: string
    title: string
  }
  parentCategory?: {
    id: string
    title: string
  }
}
