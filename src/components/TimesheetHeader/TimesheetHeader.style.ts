import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 10px;

  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  color: #fff;
`;

export const Title = styled.span`
  display: flex;
  font-size: 0.8em;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  grid-row: 1;
  grid-column: 2;
`;

export const UserCode = styled.h4``;

export const UserSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 15px;
  text-align: right;

  color: rgba(207, 207, 207, 0.69);
`;

export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Hours = styled.h3``;

export const HoursSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 11.6px;
  line-height: 14px;
  text-align: center;

  color: #f5f5f5;
`;
