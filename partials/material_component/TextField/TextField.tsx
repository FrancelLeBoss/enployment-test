import * as React from "react";
import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  label?: string;
  classes?: {
    root?: string;
    label?: string;
    input?: string;
  };
  InputProps?: {
    adornments?: {
      startAdornment?: React.ReactNode;
      endAdornment?: React.ReactNode;
    };
  };
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      label,
      error,
      helperText,
      fullWidth,
      className,
      InputProps: { adornments: { endAdornment, startAdornment } } = {
        adornments: {},
      },
      classes: { label: labelClass, root: rootClass, input: inputClass } = {},
      ...rest
    } = props;
    const time = new Date().getTime();
    return (
        <div className={clsx("relative", className, rootClass)}>
            <label
                className={clsx("block tracking-wide text-grey-darker text-xs font-bold mb-2", labelClass)}
                htmlFor={props.id || `form-field-${props.name || time}`}>
                {!label ? "": label[0].toUpperCase()}{!label ? "" :label.substr(1)}
            </label>
            <input
                ref={ref}
                className={clsx("appearance-none focus:outline-none block w-full bg-grey-lighter text-dark border rounded py-3 px-4 mb-2", {
                    "pl-12": Boolean(startAdornment),
                    "focus:border-blue": !error,
                    "border-error focus:border-blue": error,
                    "pr-12": Boolean(endAdornment)
                }, inputClass)}
                id={`form-field-${props.name || time}`}
                autoComplete={'off'}
                {...rest}
            />
            {Boolean(helperText) && <p className="text-error text-xs">{helperText}</p>}
            {startAdornment && <div className={'absolute text-dark left-0 bottom-0 mb-3 ml-3'}>{startAdornment}</div>}
            {endAdornment && <div className={'absolute text-dark right-0 bottom-0 mb-3 mr-3'}>{endAdornment}</div>}
        </div>
    );
  }
);

export default TextField;
