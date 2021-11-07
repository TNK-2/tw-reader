export class Feed {
  id: Number
  name: String
  unreadCount: Number
  createdAt: Date
  dev: FeedDiv
}

enum FeedDiv {
  User,
  List
}
