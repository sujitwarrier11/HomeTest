import React,{useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '@root/src/Redux/ActionCreators';
import styled from '@emotion/styled';

const Frame = styled.div`
display:block;
`;
const HeaderText = styled.h1``;
const StyledText =styled.p``;
const Row = styled.div`
  overflow: auto;
  white-space: nowrap;`;



const ShowDetails = () => {
    const disptach = useDispatch();
    const { selectedShow, details } = useSelector(state=>state);
    let showDetail;
    if(details){
        showDetail = details[selectedShow];
    }
    useEffect(()=>{
        disptach(getDetails({
            id: selectedShow
        }));
    },[selectedShow]);
    return (<Frame>
        {showDetail?<div><HeaderText>
           {showDetail.title}
        </HeaderText>
        {
            showDetail.images && showDetail.images.filter(image=> image.type==='POSTER').length > 0 ? <img src={showDetail.images.filter(image=> image.type==='POSTER')[0].url} />:""
        }
        <StyledText>
            {showDetail.description}
        </StyledText>
        <Row>
            {
                showDetail.trailers && showDetail.trailers.webClient ? showDetail.trailers.webClient.map(vid=>{
                    return <video>
                        <source type="application/x-mpegURL" src={vid}></source>
                    </video>
                }):""
            }
        </Row>
        </div>:""}
    </Frame>);
}

export default ShowDetails;