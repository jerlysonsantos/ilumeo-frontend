import styled from 'styled-components';

export const TimesheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

export const TimesheetHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: left;
`;

export const TimesheetBody = styled.div`
  align-items: center;
  overflow-y: auto;
  max-height: 100%;
`;

export const TimesheetTitle = styled.h4`
  color: #fff;
  font-weight: 400;
  font-size: 21;
  font-family: 'Montserrat';
`;

export const TimesheetWrapper = styled.div`
  width: 100%;
`;
