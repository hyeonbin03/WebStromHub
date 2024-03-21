
import{ Suspense, lazy} from "react";
import KakoRedirectPage from "../pages/member/kakoRedirectPage";
const Loading = <div>Loading...</div>
const Login = lazy(() => import("../pages/member/LoginPage"))
const Logout = lazy(() => import("../pages/member/LogoutPage"))
const kakaoRedirect = lazy(() => import("../pages/member/kakoRedirectPage"))

const memberRouter = () => {

    return [
        {
            path : "login",
            element: <Suspense fallback={Loading}><Login/></Suspense>
        },
        {
            path : "logout",
            element: <Suspense fallback={Loading}><Logout/></Suspense>
        },
        {
            path:'kakao',
            element: <Suspense fallback={Loading}><KakoRedirectPage/></Suspense>

        }

    ]
}
export default memberRouter;