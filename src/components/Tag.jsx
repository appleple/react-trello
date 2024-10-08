import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TagSpan } from '../styles/Base';

class Tag extends Component {
  render() {
    const { title, color, bgcolor, tagStyle, ...otherProps } = this.props;
    const style = { color: color || 'white', backgroundColor: bgcolor || 'orange', ...tagStyle };
    // セクション要素で許可されたプロパティだけを残す
    const allowedProps = (({ id, className, style, onClick, title, draggable, role }) => ({
      id,
      className,
      style,
      onClick,
      title,
      draggable,
      role,
    }))(otherProps);
    return (
      <TagSpan style={style} {...allowedProps}>
        {title}
      </TagSpan>
    );
  }
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  tagStyle: PropTypes.object,
};

export default Tag;
