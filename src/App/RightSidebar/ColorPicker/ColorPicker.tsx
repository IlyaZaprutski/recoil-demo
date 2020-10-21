import React, { useCallback } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

import './ColorPicker.scss';

type Props = {
  color: string;
  onChange: (value: string) => void;
};

const ColorPicker: React.FC<Props> = ({ color, onChange }) => {
  const changeColor = useCallback(
    (color: ColorResult) => {
      onChange(color.hex);
    },
    [onChange]
  );

  return (
    <div className="colorPicker">
      <ChromePicker color={color} onChangeComplete={changeColor} />
    </div>
  );
};

export default ColorPicker;
