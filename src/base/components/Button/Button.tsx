import cx from 'classnames';
import styles from './styles.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
import {IWithClassName} from "../../interfaces";

interface IButton
    extends IWithClassName,
        ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'base' | 'submit' | 'blackOrOrange'
    active?: boolean
    disabled?: boolean
}

export const Button: FC<IButton> = (
    {
        className,
        children,
        theme = 'base',
        active,
        disabled,
        onClick,
        ...restProps
    }
) => {
    return (
        <button
            className={cx(
                className,
                styles.Button,
                styles[`Button_${theme}`],
                {
                    [styles[`Button_${theme}_active`]]: active
                }
            )}
            disabled={disabled}
            onClick={onClick}
            {...restProps}>
            {children}
        </button>
    )
}