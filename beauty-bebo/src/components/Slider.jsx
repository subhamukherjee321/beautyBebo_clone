import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import './Slider.css'

export const Slider = ()=>{
    return(
        <Carousel infiniteLoop autoPlay>
            <div className='limage'>
                <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg" alt="Phones" />
                
            </div>
            <div className='limage'>
                <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg" alt="Phones" />
                
           </div>
            
            
        </Carousel>
    )
}