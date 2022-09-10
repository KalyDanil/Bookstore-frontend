import { useSearchParams } from 'react-router-dom';
import { ControllerPointStyle } from './ControllerPoints.styled';
import { getPageAction } from '../../../store/reducers/bookReducer/thunks';
import type { IPageCount } from '../../../types/book';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';

const ControllerPoints: React.FC<IPageCount> = ({ pageCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const pageCountArr: [][] = [];

  for (let i = 0; i < pageCount; i++) {
    pageCountArr.push([]);
  }

  const toPage = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const button = (e.target as HTMLImageElement);
    searchParams.delete('page');
    searchParams.append('page', button.id[1]);
    setSearchParams(searchParams);
    dispatch(getPageAction(+button.id[1]));
  };

  const pointArr = (pageCountArr).map((item, index) => {
    return (
    <img id={`p${(index + 1)}`} key={index} src="http://localhost:4000/images/books/whitePoint.svg" alt="point" onClick={toPage} />
    );
  });

  return (
    <ControllerPointStyle page={searchParams.getAll('page')[0]}>
      {pointArr}
    </ControllerPointStyle>
  );
};

export default ControllerPoints;
