import {IWithClassName} from "../../interfaces";
import {ButtonHTMLAttributes, FC} from "react";
import cx from "classnames";
import styles from './styles.module.scss'

interface IButtonIcon
    extends IWithClassName,
        ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

export const ButtonIcon: FC<IButtonIcon> = (
    {
        className,
        disabled,
        onClick,
        children,
        ...restProps
    }
) => {
    return (
        <button
            className={cx(
                className,
                styles.ButtonIcon
            )}
            disabled={disabled}
            onClick={onClick}
            {...restProps}>
            {children}
        </button>
    )
}