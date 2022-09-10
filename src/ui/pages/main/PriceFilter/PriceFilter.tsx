import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { selectFilterButtonAction } from '../../../../store/reducers/bookReducer/thunks';
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { PriceFilterStyle } from './PriceFilter.styled';

const PriceFilter: React.FC = () => {
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setminPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(100);
  const [nowMoving, setNowMoving] = useState('nothing');
  // used double slider ref, because slider lags if state is used for it
  const minPriceBar = useRef<HTMLDivElement>(null);
  const maxPriceBar = useRef<HTMLDivElement>(null);
  const sliderDiv = useRef<HTMLDivElement>(null);
  const sliderBar = useRef<HTMLDivElement>(null);
  const sliderBar2 = useRef<HTMLDivElement>(null);
  const zeroPosition = sliderBar.current?.getBoundingClientRect().x;
  const widthSliderBar = sliderBar.current?.offsetWidth;

  useEffect(() => {
    let minCoor = 0;
    let maxCoor = 0;

    if (searchParams.get('minPrice') === null) {
      setminPrice(books.minPrice);
      minCoor = 1;
    } else { setminPrice(+searchParams.getAll('minPrice')[0]); }

    if (searchParams.get('maxPrice') === null) {
      setmaxPrice(books.maxPrice);
      maxCoor = 364;
      if (window.screen.availWidth < 421) {
        maxCoor = 246;
      }
    } else { setmaxPrice(+searchParams.getAll('maxPrice')[0]); }

    if (minPriceBar.current !== null && searchParams.get('minPriceСoor') !== undefined && sliderBar2.current !== null) {
      minPriceBar.current.style.left = searchParams.getAll('minPriceСoor')[0];
      sliderBar2.current.style.left = searchParams.getAll('minPriceСoor')[0];
    }

    if (maxPriceBar.current !== null && searchParams.get('maxPriceСoor') !== undefined) {
      maxPriceBar.current.style.left = searchParams.getAll('maxPriceСoor')[0];
    }

    if (sliderBar2.current !== null) {
      if (minCoor === 0) {
        const minCoorLength = searchParams.getAll('minPriceСoor')[0].length - 2;
        minCoor = +searchParams.getAll('minPriceСoor')[0].substring(0, minCoorLength);
      }

      if (maxCoor === 0) {
        const maxCoorLength = searchParams.getAll('maxPriceСoor')[0].length - 2;
        maxCoor = +searchParams.getAll('maxPriceСoor')[0].substring(0, maxCoorLength);
      }

      sliderBar2.current.style.width = `${(maxCoor - minCoor)}px`;
    }
  }, [books.minPrice, books.maxPrice, searchParams]);

  const editPrice = () => {
    if (books.selectedFilterButton === 'price') {
      dispatch(selectFilterButtonAction(''));
      return;
    }
    dispatch(selectFilterButtonAction('price'));
  };

  const startMinPriceMoving = () => {
    setNowMoving('minPrice');
  };

  const startMaxPriceMoving = () => {
    setNowMoving('maxPrice');
  };

  const minPriceMoving = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (maxPriceBar.current !== null && sliderBar2.current !== null) {
      const maxCoord = maxPriceBar.current.getBoundingClientRect().x;
      if (minPriceBar.current !== null && zeroPosition !== undefined) {
        if (e.pageX >= zeroPosition + 10 && e.pageX < maxCoord - 10) {
          const nextPosition = (e.pageX - zeroPosition);
          const firstPosition = minPriceBar.current.getBoundingClientRect().x;
          minPriceBar.current.style.left = `${nextPosition}px`;
          const currentPosition = minPriceBar.current.getBoundingClientRect().x;
          sliderBar2.current.style.left = `${nextPosition}px`;
          bar2Moving();
          if (currentPosition > firstPosition) {
            setminPrice(minPrice + 0.5);
          }
          if (currentPosition < firstPosition && minPrice > books.minPrice) {
            setminPrice(minPrice - 0.5);
          }
          searchParams.delete('minPrice');
          searchParams.delete('minPriceСoor');
          searchParams.append('minPrice', minPrice.toString());
          searchParams.append('minPriceСoor', minPriceBar.current.style.left);
          setSearchParams(searchParams);
        }
      }
    }
  };

  const maxPriceMoving = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (zeroPosition !== undefined) {
      if (minPriceBar.current !== null && maxPriceBar.current !== null) {
        if (widthSliderBar !== undefined && sliderBar2.current !== null) {
          const minCoord = minPriceBar.current.getBoundingClientRect().x;
          if (e.pageX > minCoord + 40 && e.pageX <= zeroPosition + widthSliderBar - 5) {
            const firstPosition = maxPriceBar.current.getBoundingClientRect().x;
            const nextPosition = (e.pageX - zeroPosition);
            maxPriceBar.current.style.left = `${nextPosition}px`;
            const currentPosition = maxPriceBar.current.getBoundingClientRect().x;
            bar2Moving();
            if (currentPosition > firstPosition && maxPrice <= books.maxPrice) {
              setmaxPrice(maxPrice + 0.5);
            }
            if (currentPosition < firstPosition) {
              setmaxPrice(maxPrice - 0.5);
            }
            searchParams.delete('maxPrice');
            searchParams.delete('maxPriceСoor');
            searchParams.append('maxPrice', maxPrice.toString());
            searchParams.append('maxPriceСoor', maxPriceBar.current.style.left);
            setSearchParams(searchParams);
          }
        }
      }
    }
  };

  const priceMoving = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (nowMoving === 'minPrice') {
      minPriceMoving(e);
    }
    if (nowMoving === 'maxPrice') {
      maxPriceMoving(e);
    }
  };

  const bar2Moving = () => {
    if (minPriceBar.current !== null) {
      if (maxPriceBar.current !== null && sliderBar2.current !== null) {
        sliderBar2.current.style.width = `${(maxPriceBar.current.getBoundingClientRect().x + 5 - minPriceBar.current.getBoundingClientRect().x)}px`;
      }
    }
  };

  const stopPriceMoving = () => {
    setNowMoving('nothing');
  };

  return (
    <PriceFilterStyle selectedFilterButton={books.selectedFilterButton}>
      <input className="select-price__button" type="button" value="Price" onClick={editPrice} />
      <img className="select-price__arrow" src="./assets/image/arrow.svg" alt="arrow" />
      <div className="select-price__slider" ref={sliderDiv} onMouseMove={priceMoving} onMouseLeave={stopPriceMoving} onMouseUp={stopPriceMoving}>
        <img src="./assets/image/polygon.svg" alt="" />
        <div className="bar" ref={sliderBar} />
        <div className="bar2" ref={sliderBar2} />
        <div className="range-toggle range-toggle-min" ref={minPriceBar} onMouseDown={startMinPriceMoving} />
        <div className="range-toggle range-toggle-max" ref={maxPriceBar} onMouseDown={startMaxPriceMoving} />
        <div className="minAndMaxPrice">
          <span>$ {minPrice} </span> <span>$ {maxPrice} </span>
        </div>
      </div>
    </PriceFilterStyle>
  );
};

export default PriceFilter;
