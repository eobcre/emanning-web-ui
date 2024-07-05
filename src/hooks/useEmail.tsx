import { useMutation, UseMutationResult } from '@tanstack/react-query';
import ServerClient from '../services/ServerClient';

interface EmailFormDataProps {
  name: string;
  email: string;
  message: string;
}

interface ServerResponse {
  data: string;
}

export function useSendEmail(): UseMutationResult<any, unknown, EmailFormDataProps, unknown> {
  return useMutation<ServerResponse, unknown, EmailFormDataProps>({
    mutationFn: async ({ name, email, message }) => {
      const serverClient = new ServerClient('/api/emails');
      const res = await serverClient.post({ name, email, message });
      return res.data;
    },
    onSuccess: () => {
      console.log('Email Hooks OK.');
    },
    onError: (error) => {
      console.error('Error Email Hooks.', error);
    },
  });
}
