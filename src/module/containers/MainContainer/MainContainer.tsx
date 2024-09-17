import {observer} from "mobx-react";
import {FC, useCallback, useEffect} from "react";
import {MainComponent} from "../../components";
import {LoadingWrapper, MainLayout} from "../../../base/components";
import {deviceStore} from "../../store";
import {getAllDataAction} from "../../actions/";

export const MainContainer: FC = observer(() => {
    const {data} = deviceStore

    const handlerGetData = useCallback(() => {
        getAllDataAction()
    }, []);

    useEffect(() => {
        handlerGetData()
    }, [handlerGetData]);

    if (deviceStore.isLoading) return <LoadingWrapper/>

    return (
        <MainLayout>
            <MainComponent
                data={data}
            />
        </MainLayout>
    )
})