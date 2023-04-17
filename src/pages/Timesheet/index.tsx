import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Container, Header } from './Timesheet.style';
import { ToastContainer, toast } from 'react-toastify';

import { Timesheet as TimesheetComponent } from '../../components/Timesheet';
import { TimesheetHeader } from '../../components/TimesheetHeader';
import { currentHour, register, getTimesheet } from '../../services/api/timesheet/timesheet.service';

export const Timesheet = () => {
  const [timesheet, setTimesheets] = useState<any>([]);

  const [curentHour, setCurrentHours] = useState('0h 00m');
  const [lastRegisterType, setLastRegisterType] = useState<boolean | null>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const handleRegister = async () => {
    await register();

    toast.success('Registro realizado com sucesso!');

    setTimesheets([]);
    handleTimesheet(0);
    handleCurrentHour();
  };

  const handleTimesheet = async (page: number) => {
    const data = await getTimesheet(page, 1);

    setCurrentPage(data.paginateOptions.page);
    setTimesheets((prevState: any[]) => [...prevState, ...data.items]);
  };

  const handleCurrentHour = async () => {
    const data = await currentHour();

    setCurrentHours(data.total_hours);
    setLastRegisterType(data.last_register_type);
  };

  const setButtonType = () => {
    if (lastRegisterType === null) {
      return 'entrada';
    }

    return !lastRegisterType ? 'saída' : 'entrada';
  };

  useEffect(() => {
    handleTimesheet(0);
    handleCurrentHour();
  }, []);

  return (
    <Container>
      <Header>
        <TimesheetHeader title="Relógio de ponto" hours={curentHour}></TimesheetHeader>

        <Button onClick={handleRegister}>Hora de {setButtonType()}</Button>
      </Header>
      <TimesheetComponent
        timesheet={timesheet}
        loadMore={() => handleTimesheet(currentPage + 1)}
        title="Dias Anteriores"
      ></TimesheetComponent>

      <ToastContainer />
    </Container>
  );
};
