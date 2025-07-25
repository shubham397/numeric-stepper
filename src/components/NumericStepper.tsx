import React, { useState } from "react";
import "./numericStepper.css";

interface NumericStepperProps {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
  onChange?: (value: number) => void;
}

const NumericStepper: React.FC<NumericStepperProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initial = 0,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initial);

  const handleChange = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className="numeric-stepper">
      <button
        className="stepper-btn"
        onClick={() => handleChange(value - step)}
        disabled={value <= min}
      >
        –
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="stepper-input"
      />
      <button
        className="stepper-btn"
        onClick={() => handleChange(value + step)}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};

export default NumericStepper;
