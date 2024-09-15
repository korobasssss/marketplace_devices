import {observer} from "mobx-react";
import {FC, useCallback, useEffect} from "react";
import {MainComponent} from "../../components";
import {LoadingWrapper, MainLayout} from "../../../base/components";
import {deviceStore} from "../../store/deviceStore.ts";
import {getAllDataAction} from "../../actions/";


export const MainContainer: FC = observer(() => {

    const {data} = deviceStore

    const handlerGetData = useCallback(() => {
        getAllDataAction()
    }, []);

    useEffect(() => {
        handlerGetData()
    }, []);

    if (deviceStore.isLoading) return <LoadingWrapper/>

    if (!data) return null

    return (
        <MainLayout>
            <MainComponent
                data={data}
            />
        </MainLayout>
    )
})