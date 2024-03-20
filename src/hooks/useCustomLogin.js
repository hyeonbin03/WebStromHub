import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginPostAsync, logout} from "../slices/loginSlice";


const useCustomLogin = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const loginState = useSelector(state => state.loginSlice)

    const isLogin = loginState.email ? true :false //로그인 여부

    const doLogin = async (loginParam) => {
        const action = await dispatch(loginPostAsync(loginParam))
        return action.payload
    }

    const doLogout = () => {
        dispatch(logout())
    }

    const moveToPath = (path) => {
        navigate({pathname:path},{replace:true})
    }

    const moveToLogin = () => {
        navigate({pathname:'/member/login'},{replace:true})
    }

    const moveToLoginReturn = () => {
        return <Navigate to={"/member/login/"}/>
    }

    return {loginState, isLogin, doLogin, doLogout, moveToLogin, moveToLoginReturn, moveToPath}

}

export default useCustomLogin