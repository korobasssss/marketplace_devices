import styles from './styles.module.scss'
import {FC, useCallback} from "react";
import {Button, CounterNumber, HeaderText, LinkTo} from "../../../base/components";
import {ReactComponent as FavIcon} from '../../../assets/icons/favourites.svg';
import {ReactComponent as CartIcon} from '../../../assets/icons/cart.svg';
import {IWithClassName} from "../../../base/interfaces";
import cx from "classnames";
import {useNavigate} from "react-router-dom";

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
    const navigation = useNavigate()

    const handlerTitleClick = useCallback(() => {
        navigation('/')
    }, [navigation]);
    
    return (
        <section
            className={cx(
                className,
                styles.HeaderWrapper
            )}
        >
            <Button
                onClick={handlerTitleClick}>
                <HeaderText
                    title={'QPICK'}
                    theme={'mainTitle'}
                />
            </Button>
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