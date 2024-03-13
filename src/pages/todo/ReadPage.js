import React from 'react';
import {useParams} from "react-router-dom";
import ReactComponent from "../../components/todo/ReadComponent";

function ReadPage(props) {

    const {tno} = useParams()

    return (
        <div className={'font-extrabold w-full bg-white mt-6'}>

            <div className={'text-2xl'}>
                Todo read Page component {tno}
            </div>

            <ReactComponent tno={tno}/>

        </div>

    );
}

export default ReadPage;