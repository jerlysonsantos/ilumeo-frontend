import {
  Hours,
  GridContainer,
  HoursContainer,
  Title,
  UserCode,
  UserContainer,
  UserSpan,
  HoursSpan,
} from './TimesheetHeader.style';
import { TimesheetHeaderProps } from './TimesheetHeader.interface';

import { useGetUser } from '../../hooks/user-auth';

export const TimesheetHeader: React.FC<TimesheetHeaderProps> = ({ title, hours }) => {
  const user = useGetUser();

  if (!user) {
    return <></>;
  }

  const { user_code } = user;

  return (
    <GridContainer>
      <Title>{title}</Title>
      <UserContainer>
        <UserCode>#{user_code}</UserCode>
        <UserSpan>Usuário</UserSpan>
      </UserContainer>
      <HoursContainer>
        <Hours>{hours || '00h 00m'}</Hours>
        <HoursSpan>Horas de Hoje</HoursSpan>
      </HoursContainer>
    </GridContainer>
  );
};
