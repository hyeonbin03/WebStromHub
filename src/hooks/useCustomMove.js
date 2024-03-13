import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";


const getNum = (param, defaultValue) => {

    if(!param){
        return defaultValue
    }
    return parseInt(param)
}

const useCustomMove = () => {

    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'),1)
    const size = getNum(queryParams.get('size'),10)

    const queryDefault = createSearchParams({page,size}).toString()

    const moveToList = (pageParam) => {

        let queryStr = ""

        if(pageParam){

            const pageNum = getNum(pageParam.page,1)
            const sizeNum = getNum(pageParam.size,10)

            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString()
        }else {
            queryStr = queryDefault
        }

        setRefresh(!refresh)

        navigate({pathname:'../list',search:queryStr})
    }

    const moveToModify = (tno) => {
        console.log(queryDefault)
        navigate({
            pathname:`../modify/${tno}`,
            search:queryDefault
        },[page,size])
    }

    const moveToRead = (tno) => {
        console.log(queryDefault)
        navigate({
            pathname:`../read/${tno}`,
            search:queryDefault
        })
    }

    return {moveToRead,moveToList,moveToModify, page, size, refresh}

}

export default useCustomMove