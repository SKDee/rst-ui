import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style';

var Button = function Button(props, ref) {
  var _classNames;

  /** 基础类名 */
  var prefixCls = 'rt_button';
  /** 获取props参数 */

  var children = props.children,
      className = props.className,
      type = props.type,
      disabled = props.disabled,
      icon = props.icon,
      round = props.round,
      size = props.size,
      onClick = props.onClick;
  /** ref绑定 */

  var buttonRef = ref || /*#__PURE__*/React.createRef();
  /** 处理classes */

  var classes = classNames(prefixCls, "".concat(prefixCls, "-").concat(type || 'primary'), "".concat(prefixCls, "-").concat(size || 'mini'), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-round"), round), _defineProperty(_classNames, "".concat(prefixCls, "-circle-").concat(size), round && size && icon && !children), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames), className);
  var iconClasses = classNames('iconfont', _defineProperty({}, "".concat(icon), icon));
  /** 定义点击方法 */

  var handleClick = function handleClick(e) {
    if (disabled) {
      e.preventDefault();
      return;
    }

    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

  return /*#__PURE__*/React.createElement("button", {
    className: classes,
    onClick: handleClick,
    ref: function ref() {
      return buttonRef;
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: iconClasses
  }) : '', children);
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'text']),
  size: PropTypes.oneOf(['mini', 'normal', 'big']),
  round: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;