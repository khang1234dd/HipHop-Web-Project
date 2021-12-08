import React from 'react';
import './style.scss';
import './style-animation.scss';
import Slider from 'react-animated-slider';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import {useNavigate} from 'react-router-dom'
import 'react-animated-slider/build/horizontal.css';
import { Button, Typography, Hidden } from '@mui/material';

const Carousel = ({data}) => {
  const navigate = useNavigate();
  const handleSeeMore = (e) =>{
    const id =  e.currentTarget.value;
    navigate(`/newspaper/${id}`)
  }
  
  return (
    <Slider className="slider-wrapper">
      {data? data.map((item, index) => (
        <div
          key={index.toString()}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <Typography variant="h4" component="h5" sx={{color: '#fff' , fontWeight: '600'}} gutterBottom>{item.name}</Typography>
            {/* <Hidden mdDown>
              <p>{item.tinydes}</p>
            </Hidden> */}
            <Button variant="contained" color="primary" onClick={handleSeeMore} value={item._id}>
              See More
            </Button>
          </div>
          <section>

          <CardHeader
            avatar={
              <Avatar sx={{ width: '40px',height:'40px' }} src={item.owner.image === "" || item.owner.image=== undefined? 'https://hiphop-g28.herokuapp.com/upload/image/1.png' : item.owner.image }  alt={item.owner.name} />
            }
            title={<span>
              Posted by
              {' '}
              <strong>{item.owner.name}</strong>
            </span>}
          />
            
          </section>
        </div>
      ))
      :
      <div
      className="slider-content"
      style={{ background: `url('https://hiphop-g28.herokuapp.com/upload/image/1.png') no-repeat center center` }}
    >
      <div className="inner">
        <Typography variant="h4" component="h1"  gutterBottom>NoName</Typography>
        <Hidden mdDown>
          <p>NoTiny</p>
        </Hidden>
        <Button variant="contained" color="primary">
          See More
        </Button>
      </div>
      <section>

      <CardHeader
        avatar={
          <Avatar sx={{ width: '40px',height:'40px' }} src= 'https://hiphop-g28.herokuapp.com/upload/image/1.png'  alt="No Name">
          </Avatar>
        }
        title={<span>
          Posted by
          {' '}
          <strong>No Owner</strong>
        </span>}
      />
        
      </section>
    </div>
    }
    </Slider>
  )
}

export default Carousel;
