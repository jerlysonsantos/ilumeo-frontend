import { toast } from 'react-toastify';
import { api } from '../../../config/axios';
import { useGetToken } from '../../../hooks/user-auth';

export const getTimesheet = async (page: number = 0, limit: number = 10) => {
  try {
    const token = useGetToken();

    if (!token) {
      return;
    }

    const { data } = await api.get(`/timesheet?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    return data;
  } catch (error: any) {
    const { data } = error.response;

    toast.error(data.error);
  }
};

export const currentHour = async () => {
  try {
    const token = useGetToken();

    if (!token) {
      return;
    }

    const { data } = await api.get('/timesheet/current', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    return data;
  } catch (error: any) {
    const { data } = error.response;

    toast.error(data.error);
  }
};

const formatTime = (currentDate: Date) => {
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  return Number(hour + '.' + minutes);
};

export const register = async () => {
  try {
    const token = useGetToken();

    const currentDate = new Date();

    if (!token) {
      return;
    }

    const { data } = await api.post(
      '/timesheet/register',
      {
        registred_hour: formatTime(currentDate),
        registred_date: new Date(),
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );

    return data;
  } catch (error: any) {
    const { data } = error.response;

    toast.error(data.error);
  }
};
