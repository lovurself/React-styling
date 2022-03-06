import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx('checkbox')}>
        <label>
            <input type='checkbox' checked={checked} {...rest} />
            <div className={cx('icon')}>{checked ? <MdCheckBox className={cx('checked')}/> : <MdCheckBoxOutlineBlank />}</div>
        </label>
        <span>{children}</span>
    </div>

    // classNames를 사용하지 않았을 경우(다수의 classname을 쓸 때 불편함)
    // <div className={styles.checkbox}>
    //     <label>
    //         <input type='checkbox' checked={checked} {...rest} />
    //         <div className={styles.icon}>{checked ? <MdCheckBox className={styles.checked}/> : <MdCheckBoxOutlineBlank />}</div>
    //     </label>
    //     <span>{children}</span>
    // </div>
  )
};

export default CheckBox;