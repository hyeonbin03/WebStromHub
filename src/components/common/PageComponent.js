import React from 'react';

function PageComponent({ serverData, movePage }) {
    // serverData.prev, pageNumList, next
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}> {/* Flexbox를 사용하여 요소를 가로로 나열 */}
            {serverData.prev ?
                <div
                    key="prev"
                    className={'m-2 p-2 w-16 text-center font-bold text-blue-400'}
                    onClick={() => movePage({ page: serverData.prevPage })}>
                    Prev
                </div>
                : null}

            {serverData.pageNumList.map(pageNum =>
                <div key={pageNum}
                     className={`m-2 p-2 w-12 text-center rounded shadow-md text-white ${serverData.current === pageNum ? 'bg-gray-500' : 'bg-blue-400'}`}
                     onClick={() => movePage({ page: pageNum })}>
                    {pageNum}
                </div>
            )}

            {serverData.next ?
                <div key="next"
                     className="m-2 p-2 w-16 text-center font-bold text-blue-400"
                     onClick={() => movePage({ page: serverData.nextPage })}>
                    Next
                </div>
                : null}
        </div>
    );
}


export default PageComponent;