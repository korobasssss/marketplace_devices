import {IWithClassName} from "../../interfaces";
import {FC} from "react";
import cx from "classnames";
import styles from './styles.module.scss'

interface ICounter
    extends IWithClassName {
    counter: number
}

export const CounterNumber : FC<ICounter> = (
    {
        className,
        counter
    }
) => {
    return (
        <div
            className={cx(
                className,
                styles.Counter
            )}
        >
            {counter}
        </div>
    )
}