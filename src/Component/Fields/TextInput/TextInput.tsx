import React, { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import clsx from 'clsx';
import { TextField } from '@mui/material';
import { Icon } from '../Icon/Icon';

import styles from './TextInput.module.scss';

interface TextInputProps {
  control: Control<any>;
  type?: string;
  name: string;
  id: string;
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  control,
  id,
  label,
  name: propsName,
  type = 'text',
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name: propsName, control });
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.TextInputWrapper}>
      <TextField
        {...field}
        id={id}
        label={label}
        InputProps={{
          className: styles.TextInputInput,
        }}
        className={clsx(styles.TextInput, error && styles.ErrorClassName)}
        type={type === 'password' && showPassword ? 'text' : type}
        size="medium"
        variant="outlined"
        error={!!error?.message}
        helperText={error?.message}
        fullWidth
      />
      {type === 'password' && (
        <div className={styles.eyeIcon}>
          <Icon onClick={handleShow} name={showPassword ? 'eyeIcon' : 'hideEyeIcon'} />
        </div>
      )}
    </div>
  );
};
