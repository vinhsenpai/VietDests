import './Member.css'
import Image_7 from './image/image_7.png'

function Member() {
    return (
        <div className='member'>
            <h1 className='text-member'>Our team member</h1>
            <div className='image-member'>
                <img className='image_6' src={Image_7} alt='' />
                <img className='image_7' src={Image_7} alt='' />
                <img className='image_8' src={Image_7} alt='' />
            </div>
            <div className='member-info'>
                <div className='member_1'>
                    <h2>Trần Đình Khoa</h2>
                    <h2>Member</h2>
                </div>
                <div className='leader'>
                    <h2>Đỗ Quang Vinh</h2>
                    <h2>Leader</h2>
                </div>
                <div className='member_2'>
                    <h2>Nguyễn Lư Đức Nghĩa</h2>
                    <h2>Member</h2>
                </div>
            </div>
        </div>
    )
}
export default Member