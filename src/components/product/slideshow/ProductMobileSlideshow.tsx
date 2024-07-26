'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';
import { ProductImageForShop } from '../product-image/ProductImageForShop';


interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const ProductMobileSlideshow = ( { images, title, className }: Props ) => {


  return (
    <div className={ className }>

      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        autoplay={{
          delay: 2500
        }}
        modules={ [ FreeMode, Autoplay, Pagination ] }
        className="mySwiper2"
        >
  
        {
          images.map( image => (
            <SwiperSlide key={ image }>
              <ProductImageForShop
                width={ 600 }
                height={ 500 }
                src={ image }
                alt={ title }
                className="object-fill"
                />
            </SwiperSlide>

          ) )
        }
      </Swiper>




    </div>
  );
};