import { useAppSelector } from '../../utils/hooks/useAppSelector';
import Book from '../../components/Book/Book';
import { RecommendationsStyle } from './Recommendations.styled';

const Recommendations: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const booksArr = (books.books).map((item) => {
    return (<Book book={item} key={item.id} />);
  });

  return (
    <RecommendationsStyle booksLength={books.books.length}>
      <h1 className="recommendations__h1">Recommendations</h1>
      {booksArr}
    </RecommendationsStyle>
  );
};

export default Recommendations;
