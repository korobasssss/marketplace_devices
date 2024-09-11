import styles from './styles.module.scss'
import {FC} from "react";
import {CounterNumber, HeaderText, LinkTo} from "../../../base/components";
import {ReactComponent as FavIcon} from '../../../assets/icons/favourites.svg';
import {ReactComponent as CartIcon} from '../../../assets/icons/cart.svg';
import {IWithClassName} from "../../../base/interfaces";
import cx from "classnames";

interface IHeaderWrapper
    extends IWithClassName {
    isFavoritesIcon: boolean
    isCartIcon: boolean
}

export const HeaderComponent: FC<IHeaderWrapper> = (
    {
        className,
        isFavoritesIcon,
        isCartIcon
    }
) => {
    return (
        <section
            className={cx(
                className,
                styles.HeaderWrapper
            )}
        >
            <HeaderText title={'QPICK'} theme={'pageTitle'}/>
            <div
                className={styles.iconSection}>
                {isFavoritesIcon && (
                    <LinkTo
                        className={styles.Link}
                        href={'/favourites'}
                        isNewPage={false}>
                        <FavIcon/>
                        <CounterNumber
                            className={styles.Link_Counter}
                            counter={2}/>
                    </LinkTo>
                )}
                {isCartIcon && (
                    <LinkTo
                        className={styles.Link}
                        href={'/cart'}
                        isNewPage={false}
                    >
                        <CartIcon/>
                        <CounterNumber
                            className={styles.Link_Counter}
                            counter={2}/>
                    </LinkTo>
                )}
            </div>
        </section>
    )
}