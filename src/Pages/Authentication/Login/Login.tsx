import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button } from '../../../Component/Button/Button';
import { TextInput } from '../../../Component/Fields/TextInput/TextInput';
import { ILoginInputs } from './inputs';
import { useStore } from '../../../Hooks/useStore';

import styles from './Login.module.scss';

export const Login: React.FC = observer(() => {
  const { authStore } = useStore();

  const hookForm = useForm<ILoginInputs>({
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { control, handleSubmit } = hookForm;

  const submitForm = handleSubmit((data: any) => authStore.login(data));

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <div className={styles.login__Input}>
        <TextInput control={control} label="Username" id="LoginInput" name="username" />
      </div>
      <div className={styles.login__password}>
        <TextInput
          control={control}
          type="password"
          label="Password"
          id="PasswordInput"
          name="password"
        />
      </div>
      <div>
        <Button
          className={styles.login__but}
          type="submit"
          clickHandler={submitForm}
          size="240"
          height="44"
        >
          Войти
        </Button>
      </div>
      <div>
        <Link to="/registration">Create new account</Link>
      </div>
      <div>
        <Link to="/recovery">Забыли пароль или логин</Link>
      </div>
    </div>
  );
});
