import { useState } from 'react';
import { Field } from 'formik';
import Image from 'next/image';

const InputAuth = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`${props.styleContainer}`}>
      <div className={`relative font-Rubik`}>
        <label className=' text-gray-500 text-sm' htmlFor={props.id}>
          {props.label}
        </label>
        <Field
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          id={props.id}
          type={props.type === 'password' ? (showPassword === false ? 'password' : 'text') : props.type}
          name={props.name}
          value={props.value}
          className={`w-full box-border appearance-none outline-none border-b pb-2 border-gray-400  ${props.className}`}
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
        />
        <span
          className={` absolute bottom-0 left-0 w-0 transition-all duration-300; ${props.children ? '!border-red-500' : ''} ${props.labelEffect}`}
        ></span>
        {props.type === 'password' && (
          <Image
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-2 top-8`}
            height={1}
            width={1}
            
            // src="/assets/icon/eye.png"
             alt="icon-password"
          />
        )}
      </div>
      {props.children}
    </div>
  );
};

export default InputAuth;
