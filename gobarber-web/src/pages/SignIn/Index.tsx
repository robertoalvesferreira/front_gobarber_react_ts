import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { shade } from 'polished';
import { Container, Content, Background } from './styles';
import logo from '../../assets/img/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" type="text" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
