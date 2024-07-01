import { useQuery } from '@tanstack/react-query';
import ServerClient from '../services/ServerClient';

export function useRetrieveRepos() {
  return useQuery({
    queryKey: ['repos'],
    queryFn: async () => {
      const serverClient = new ServerClient('/api/repos');
      const res = await serverClient.get({});
      return res.data;
    },
    // onError: (error) => {
    //   console.error('Error fetching data:', error);
    // },
  });
}
