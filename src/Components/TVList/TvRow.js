import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedShow } from '@root/src/Redux/ActionCreators';
import { useHistory } from 'react-router-dom';


const RowCard = styled.div`
  overflow: auto;
  white-space: nowrap;`;

const MovieTile = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const TVRow = ({ rowData }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const getTile = movieData => {
        const image = movieData.images.filter(item => item.type === 'POSTER');
        const clickHandler = () => {
          dispatch(setSelectedShow({
             id: movieData.id
          }));
          history.push("/details");
        }
        return <MovieTile key={movieData.id} onClick={clickHandler}>
            {image.length > 0 && <img src={image[0].url} />}
            <p>{movieData.title}</p>
        </MovieTile>;
    }

    return (<div>
        <h3>{rowData.row_name}</h3>
        <RowCard>
            {
                rowData.data.map(item => getTile(item))
            }
        </RowCard>
    </div>);
};

export default TVRow;