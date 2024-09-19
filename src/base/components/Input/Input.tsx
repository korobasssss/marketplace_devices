import {IWithClassName} from "../../interfaces";
import {FC, InputHTMLAttributes} from "react";
import cx from "classnames";
import styles from './style.module.scss'

interface IInput
    extends IWithClassName,
        InputHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder?: string
}

export const Input: FC<IInput> = (
    {
        className,
        label,
        placeholder,
        disabled,
        ...restProps
    }
) => {
    return (
        <div
            className={cx(
                className,
                styles.InputWrapper
            )}
        >
            {label && (
                <label
                    className={styles.label}
                >
                    {label}:
                </label>
            )}
            <input
                className={cx(
                    styles.Input
                )}
                disabled={disabled}
                placeholder={placeholder}
                {...restProps}
            />
        </div>
    )
}