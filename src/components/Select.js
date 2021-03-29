import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const SelectComponent = ({
  className,
  frequentOptions,
  id,
  onChange,
  options,
  placeholder,
  value,
  icon
}) => {
  return (
    <div className={classnames('form-select', className)}>
      <select name={id} id={id} value={value} onChange={onChange}>
        <option value="">{placeholder || '-select-'}</option>

        {frequentOptions &&
          frequentOptions.map((option, index) => (
            <option value={option.value} key={`mo-${index}`}>
              {option.label}
            </option>
          ))}

        {frequentOptions && (
          <option disabled key="disabled">
            ---
          </option>
        )}

        {options.map((option, index) => (
          <option value={option.value} key={`op-${index}`}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="select-icon">
        <span className={icon}></span>
      </div>
    </div>
  );
};

SelectComponent.propTypes = {
  className: PropTypes.string,
  frequentOptions: PropTypes.array,
  icon: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

SelectComponent.defaultProps = {
  icon: 'icon-down-arrow'
};
