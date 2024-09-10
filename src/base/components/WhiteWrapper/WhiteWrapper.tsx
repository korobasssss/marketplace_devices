import styles from './styles.module.scss'
import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import cx from "classnames";

interface IWhiteWrapper
    extends IWithClassName {
    children: ReactNode | ReactElement;
    rounding: 'allRound' | 'upRound';
}

export const WhiteWrapper: FC<IWhiteWrapper> = (
    {
        className,
        children,
        rounding
    }
) => {
    return (
        <section
            className={cx(
                className,
                styles.WhiteSection,
                styles[`WhiteSection_${rounding}`]
            )}>
            {children}
        </section>
    )
}