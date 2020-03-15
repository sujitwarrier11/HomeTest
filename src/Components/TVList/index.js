import React,{ useEffect,useCallback,useReducer } from 'react';
import { getTvlist } from '@root/src/Redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import TvRow from '@root/src/Components/TvList/TvRow';
import debounce from 'debounce';


const reducer = (state,action) =>{
    switch(action.type){
        case "INCREMENT_PAGE": return {
            ...state,
            pageNo: ++state.pageNo
        }
        default : return state;
    }
}

const TvList = () =>{
    const dispatch = useDispatch();
    const { TvShows, pagination } = useSelector(state => state);
    const [state,stateDispatch] = useReducer(reducer,{pageNo:1});
    const {pageNo} = state;

    const onScroll = debounce(useCallback(() => {
        if (
            (window.innerHeight + window.scrollY) >= document.body.scrollHeight
        ) {
            stateDispatch({
                type:"INCREMENT_PAGE"
            });
        }
      },[pagination,stateDispatch]),100);

    useEffect(()=>{
        console.log("pageNo",pageNo);
        dispatch(getTvlist({pageNo,pagination}));
    },[pageNo]);

    useEffect(()=>{
       
       window.addEventListener("scroll",onScroll); 
       return () => {
           window.removeEventListener("scroll",onScroll,true);
       };
    },[]);
    
    return (<div>
        {TvShows && TvShows.map(item=>{
             return <TvRow key={item.row_id} rowData={item} />;
        })}
    </div>);
}

export default TvList;