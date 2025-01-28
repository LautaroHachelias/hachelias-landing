import React from 'react';
import Arrow from './Icons/Arrow';
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  bgColor?: string;
  circleColor?: 'black' | 'grayColor'; // Limita los valores posibles de circleColor
}

const Button: React.FC<ButtonProps> = ({ text, bgColor = 'bg-orangeColor', circleColor = 'black' }) => {
  return (
    <Link href="#" className={classNames(
        'flex py-4 px-8 items-center gap-4 text-white font-outfit text-[18px] font-normal leading-normal tracking-[6.12px] rounded-full flex-shrink-0',
        bgColor
      )}>
      {text}

      <span className={classNames('rounded-full p-2', circleColor === 'grayColor' ? 'bg-gray-500' : 'bg-black')}>
        <Arrow />
      </span>
    </Link>
  );
}

export default Button;
