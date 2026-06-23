import { Products } from './../../../types/Products';
import style from './SwiperProduct.module.scss';
import { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';

interface Props {
  products: Products[];
  title: string;
  hideDiscount?: boolean;
}

export const SwiperProduct: React.FC<Props> = ({
  products,
  title,
  hideDiscount = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);

  const updateVisibleCardsCount = () => {
    const width = window.innerWidth;

    if (width >= 1440) {
      setVisibleCardsCount(5);
    } else if (width >= 1200) {
      setVisibleCardsCount(4);
    } else if (width >= 900) {
      setVisibleCardsCount(3);
    } else if (width >= 640) {
      setVisibleCardsCount(2);
    } else {
      setVisibleCardsCount(1);
    }
  };

  useEffect(() => {
    updateVisibleCardsCount();
    window.addEventListener('resize', updateVisibleCardsCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCardsCount);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [products]);

  const maxIndex = products.length - visibleCardsCount;

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex >= maxIndex ? prevIndex : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex <= 0 ? 0 : prevIndex - 1));
  };

  return (
    <section className={style['swiper-product']}>
      <div className={style['swiper-product__header']}>
        <h2 className={style['swiper-product__title']}>{title}</h2>

        <div className={style['swiper-product__button']}>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`
              ${style['swiper-product__btn']}
              ${style['swiper-product__btn--prev']}
            `}
          >
            <img
              src="icon/arrow-left.svg"
              className={style['swiper-product__btn-icon']}
              alt="PrevImage"
            />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`
              ${style['swiper-product__btn']}
              ${style['swiper-product__btn--next']}
            `}
          >
            <img
              src="icon/arrow-right.svg"
              className={style['swiper-product__btn-icon']}
              alt="NextImage"
            />
          </button>
        </div>
      </div>

      <div className={style['swiper-product__wrapp']}>
        <div className={style['swiper-product__list']}>
          {products.map(product => {
            const displayProduct = hideDiscount
              ? { ...product, fullPrice: product.price }
              : product;

            return (
              <div
                key={product.id}
                className={style['swiper-product__item']}
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`,
                }}
              >
                <ProductCard products={displayProduct} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
