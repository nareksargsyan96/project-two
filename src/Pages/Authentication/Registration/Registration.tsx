import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button } from '../../../Component/Button/Button';
import { TextInput } from '../../../Component/Fields/TextInput/TextInput';

import { useStore } from '../../../Hooks/useStore';

import styles from './Registration.module.scss';

export const Registration: React.FC = observer(() => {
  const { authStore } = useStore();

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  const submitForm = handleSubmit((data: any) => authStore.Registration(data));
  return (
    <div className={styles.registration}>
      {/* <FormProvider {...form}> */}
      <div className={styles.reg__Input_text}>
        <TextInput control={control} label="email" id="LoginInput" name="username" />
      </div>
      <div className={styles.reg__Input_password}>
        <TextInput
          control={control}
          type="password"
          label="password"
          id="PasswordInput"
          name="password"
        />
      </div>
      <div className={styles.reg__Input_password}>
        <TextInput
          control={control}
          type="password"
          label="confrim password"
          id="ConfrimPasswordInput"
          name="password_confirm"
        />
      </div>

      <div>
        <Button
          className={styles.reg__btn}
          type="submit"
          clickHandler={submitForm}
          size="240"
          height="44"
        >
          Registration
        </Button>
      </div>
      {/* </FormProvider> */}

      <div>
        <Link to="/recovery">Forgot your password or login:</Link>
      </div>
    </div>
  );
});
