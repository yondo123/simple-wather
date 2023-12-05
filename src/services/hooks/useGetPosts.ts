import { useSuspenseQuery } from '@tanstack/react-query';
import { getPosts } from '../api/getPosts';
import type { QueryOptions } from '@tanstack/react-query';

export const useGetPosts = (options?: QueryOptions) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    ...options
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
