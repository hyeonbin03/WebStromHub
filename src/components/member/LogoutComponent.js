import React from 'react';
import useCustomLogin from "../../hooks/useCustomLogin";

function LogoutComponent(props) {

    const {doLogout, moveToPath} = useCustomLogin()

    const handleClickLogout = () => {

        doLogout()
        alert("로그아웃 되었습니다")
        moveToPath("/")

    }
    return (
        <div className={' border-2 bg-red-200 mt-10 m-2 p-4'}>
            <div className={'flex justify-center'}>
                <div className={"text-4xl m-4 p-4 font-extrabold text-red-500"}>
                    Logout Component
                </div>
            </div>
            <div className={"flex justify-center"}>
                <div className={" relative mb-4 flex w-full justify-center"}>
                    <button className={'w-2/5 p-6 w-36 bg-red-500 text-xl text-white'}
                    onClick={handleClickLogout}>
                        Logout
                    </button>

                </div>

            </div>
        </div>
    );
}

export default LogoutComponent;