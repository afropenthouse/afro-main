import React, { useMemo } from "react";

type Props = {
  value: string;
  valueLength: number;

  onChange: (value: string) => void;
};

// React.FC<ICustomInputFieldProps> = React.forwardRef

const CustomOtpInput = ({
  value,
  valueLength,
  onChange,
  ...otherProps
}: Props) => {
  const valueItems = useMemo(() => {
    //construct an array from the value
    const valueArray = value?.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
      const re = new RegExp(/^\d+$/);

      if (re.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInput = (target: HTMLInputElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const focusToPreviousInput = (target: HTMLInputElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  const inputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target;
    let targetValue = target?.value?.trim();
    const re = new RegExp(/^\d+$/);
    const isTargetValueDigit = re.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, index) + targetValue + value.substring(index + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);
      target.blur();
    }
  };

  const inputOnkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    target.setSelectionRange(0, targetValue.length);

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPreviousInput(target);
    }

    if (key !== "Backspace" || target.value !== "") {
      return;
    }

    focusToPreviousInput(target);
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div>
      <div>
        <div className="w-full flex flex-row items-center gap-[12px] md:gap-[24px]">
          {valueItems.map((digit, index) => (
            <input
              key={index}
              type="text"
              placeholder="-"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={valueLength}
              value={digit}
              onFocus={inputOnFocus}
              onKeyDown={inputOnkeyDown}
              onChange={(e) => inputChange(e, index)}
              {...otherProps}
              className="outline-none caret-primaryColor rounded-[8px] border-[1px] md:border-[1px] text-center border-[#D0D5DD] focus:border-primaryColor h-[58px] md:h-[118px] w-[48px] md:w-[102px] valid:background-[#F8FBFA] text-purpleBlack"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomOtpInput;
