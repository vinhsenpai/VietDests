import img1 from './image/background.png'
import './Background.css'
import Image_1 from './image/image_1.png'
import Image_2 from './image/image_2.png'
import Image_3 from './image/image_3.png'
import Image_4 from './image/image_4.png'

function Background() {
    return (
        <div className='background'>
            <img className='image_1' src={Image_1} alt=''/>
            <img className='image_2' src={Image_2} alt=''/>
            <img className='image_3' src={Image_3} alt=''/>
            <img className='image_4' src={Image_4} alt=''/>
            <img className='img' src={img1} alt=''/>
        </div>
    )
}
export default Background