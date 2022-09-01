import { TopFilterBarStyle } from './TopFilterBar.styled';
import GenreFilter from '../GenreFilter/GenreFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import SortByFilter from '../SortByFilter/SortByFilter';

const TopFilterBar: React.FC = () => {
  return (
    <TopFilterBarStyle>
      <div className="catalog__header">
        <h1>Catalog</h1>
        <div className="catalog__header-select">
          <GenreFilter />
          <PriceFilter />
          <SortByFilter />
        </div>
      </div>
    </TopFilterBarStyle>
  );
};

export default TopFilterBar;
