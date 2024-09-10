import styles from './styles.module.scss'
import {FC} from "react";
import {CounterNumber, HeaderText, LinkIcon} from "../../../base/components";
import {ReactComponent as FavIcon} from '../../../assets/icons/favourites.svg';
import {ReactComponent as CartIcon} from '../../../assets/icons/cart.svg';

interface IHeaderWrapper {
    isFavoritesIcon: boolean
    isCartIcon: boolean
}

export const HeaderComponent: FC<IHeaderWrapper> = (
    {
        isFavoritesIcon,
        isCartIcon
    }
) => {
    return (
        <section
            className={styles.HeaderWrapper}
        >
            <HeaderText title={'QPICK'} theme={'pageTitle'}/>
            <div
                className={styles.iconSection}>
                {isFavoritesIcon && (
                    <LinkIcon
                        className={styles.Link}
                        href={'/fav'}
                    >
                        <FavIcon/>
                        <CounterNumber
                            className={styles.Link_Counter}
                            counter={2}/>
                    </LinkIcon>
                )}
                {isCartIcon && (
                    <LinkIcon
                        className={styles.Link}
                        href={'cart'}
                    >
                        <CartIcon/>
                        <CounterNumber
                            className={styles.Link_Counter}
                            counter={2}/>
                    </LinkIcon>
                )}
            </div>
        </section>
    )
}