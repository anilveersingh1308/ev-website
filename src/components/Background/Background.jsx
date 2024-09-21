import './Background.css'
import vd from '../../assets/vd.mp4'
import vd1 from '../../assets/vd1.png'
import vd2 from '../../assets/vd2.png'
import vd3 from '../../assets/vd3.png'

const Background = ({playStatus, heroCount}) => {
    if (playStatus){
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={vd} type='vd/mp4' />
            </video>
        )
    }else if(heroCount===0){
        return <img src={vd1} alt="" className='background fade-in' />
    }else if(heroCount===1){
        return <img src={vd2} alt="" className='background fade-in' />
    }else if(heroCount===2){
        return <img src={vd3} alt="" className='background fade-in' />
    }
}

export default Background