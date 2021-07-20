import * as React from 'react';
import './style';
export interface ButtonProps {
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
declare const Button: React.FC<ButtonProps>;
export default Button;
