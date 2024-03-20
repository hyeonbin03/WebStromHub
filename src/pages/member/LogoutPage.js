import React from 'react';
import LogoutComponent from "../../components/member/LogoutComponent";
import BasicMenu from "../../components/menus/BasicMenu";

function LogoutPage(props) {
    return (
        <div className={" fixed top-0 left-0 z-[1055] fixed flex-col h-full w-full"}>
            <BasicMenu/>

            <div className={' w-full flex flex-wrap h-full justify-center items-center border-2'}>
                <LogoutComponent></LogoutComponent>
            </div>
        </div>
    );
}

export default LogoutPage;