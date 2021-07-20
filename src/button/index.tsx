import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style'

export interface ButtonProps{
  /**
   * @description       Button 的类型
   * @default           'primary'
   */
   type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text';
  /**
   * @description       Button 的尺寸
   * @default           'mini'
   */
   size?: 'mini' | 'normal' | 'big';
  /**
   * @description       Button 是否有圆角
   * @default           false
   */
   round?: true | false;
  /**
   * @description       Button icon按钮
   * @default           null
   */
   icon?: string | null;
  /**
   * @description       Button 是否禁用
   * @default           false
   */
   disabled?: true | false;
   className?: string;
   onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<ButtonProps> = (props, ref) => {
  /** 基础类名 */
  const prefixCls = 'rt_button';

  /** 获取props参数 */
  const {
    children,
    className,
    type,
    disabled,
    icon,
    round,
    size,
    onClick,
  } = props;

  /** ref绑定 */
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  /** 处理classes */
  const classes = classNames(
    prefixCls,
    `${prefixCls}-${type || 'primary'}`,
    `${prefixCls}-${size || 'mini'}`,
    {
      [`${prefixCls}-round`]: round,
      [`${prefixCls}-circle-${size}`]: round && size && icon && !children,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );

  const iconClasses = classNames(
    'iconfont',
    {
      [`${icon}`]: icon
    }
  )

  /** 定义点击方法 */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      ref={() => {return buttonRef}}
    >
      {icon ? <i className={iconClasses}></i> : ''}
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary','success','info','warning','danger','text']),
  size: PropTypes.oneOf(['mini','normal','big']),
  round: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;