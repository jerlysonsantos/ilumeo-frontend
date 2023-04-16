import { toast } from 'react-toastify';
import { api } from '../../../config/axios';
import { setAuth } from '../../../helpers/set-auth.helper';

export const authenticate = async (userCode: string) => {
  try {
    const { data } = await api.post('/auth', { userCode });

    setAuth(data.token, data.user);

    toast.success('Logado com Sucesso!');

    return data;
  } catch (error: any) {
    const { data } = error.response;

    if (data.errors) {
      const userCodeErrors = Object.values(data.errors[0].userCode).map((error) => error);

      toast.error(userCodeErrors.join(','));
      return;
    }

    toast.error(data.error);
  }
};
