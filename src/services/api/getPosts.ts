import { get } from '@shared/utils/httpRequest';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts() {
  const posts = await get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return posts;
}
