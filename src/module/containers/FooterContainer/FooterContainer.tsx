import {FC} from "react";
import {observer} from "mobx-react";
import {FooterComponent} from "../../base";
import {informationStore} from "../../store";

export const FooterContainer: FC = observer(() => {
    const {footerLinks, contacts} = informationStore

    return <FooterComponent
        footerLinks={footerLinks}
        contacts={contacts}
    />
})