import React, { useState } from 'react';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import { Container, Form, Header, Title } from './Login.style';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../services/api/auth/auth.service';

export const Login = () => {
  const [userCode, setUserCode] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = await authenticate(userCode);

    if (data) {
      navigate('/timesheet');
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          Ponto <strong>Ilumeo</strong>
        </Title>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Input placeholder="Código do usuário" maxLength={10} onChange={(event) => setUserCode(event.target.value)} />
        <Button type="submit">Confirmar</Button>
      </Form>

      <ToastContainer />
    </Container>
  );
};
