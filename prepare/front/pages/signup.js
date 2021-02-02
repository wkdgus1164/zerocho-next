import React, {useCallback, useEffect, useState} from 'react';
import Head from 'next/head';
import {Button, Checkbox, Form, Input} from 'antd';
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import {SIGN_UP_REQUEST} from '../reducers/user';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const {signUpLoading, signUpDone, signUpError} = useSelector(state => state.user);

  useEffect(() => {
    if (signUpDone) {
      Router.push('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError.data);
    }
  }, [signUpError]);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(e => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) return setPasswordError(true);
    if (!term) return setTermError(true);
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {email, password, nickname},
    });
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8"/>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form
        onFinish={onSubmit}
      >
        <div>
          <label
            htmlFor="user-email"
          >
            이메일
          </label>
          <br/>
          <Input
            name="user-email"
            value={email}
            required
            type="email"
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label
            htmlFor="user-nick"
          >
            닉네임
          </label>
          <br/>
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label
            htmlFor="user-email"
          >
            비밀번호
          </label>
          <br/>
          <Input
            name="user-email"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-email">비밀번호 확인</label>
          <br/>
          <Input
            name="user-email"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
          {termError && <ErrorMessage style={{color: 'red'}}>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{marginTop: 10}}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;