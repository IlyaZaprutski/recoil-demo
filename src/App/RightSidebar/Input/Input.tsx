import React, { useCallback } from 'react';

import './Input.scss';

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const Input: React.FC<Props> = ({ label, value, onChange }) => {
  const change = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(Number(e.currentTarget.value));
    },
    [onChange]
  );

  return (
    <div className="input">
      <div className="input__label">{label}</div>
      <input className="input__element" type="number" value={value} onChange={change} />
    </div>
  );
};

export default Input;
