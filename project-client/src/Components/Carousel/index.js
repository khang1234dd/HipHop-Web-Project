import React from 'react';
import './style.scss';
import './style-animation.scss';
import Slider from 'react-animated-slider';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import 'react-animated-slider/build/horizontal.css';



import { Button, Typography, Hidden } from '@mui/material';

const content = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: 'http://hiphop-g28.herokuapp.com/upload/image/1.png',
    user: 'Luanda Gjokaj',
    userProfile: 'http://hiphop-g28.herokuapp.com/upload/image/1.png'
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
    'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    button: 'Discover',
    image: 'http://hiphop-g28.herokuapp.com/upload/image/1.png',
    user: 'Erich Behrens',
    userProfile: 'http://hiphop-g28.herokuapp.com/upload/image/1.png'
  },
  {
    title: 'Phasellus volutpat metus',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    button: 'Buy now',
    image: 'http://hiphop-g28.herokuapp.com/upload/image/1.png',
    user: 'Bruno Vizovskyy',
    userProfile:'http://hiphop-g28.herokuapp.com/upload/image/1.png'
  }
];

const Carousel = () => (
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index.toString()}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <Typography variant="h4" component="h1"  gutterBottom>{item.title}</Typography>
            <Hidden mdDown>
              <p>{item.description}</p>
            </Hidden>
            <Button variant="contained" color="primary">
              {item.button}
            </Button>
          </div>
          <section>

          <CardHeader
            avatar={
              <Avatar sx={{ width: '40px',height:'40px' }} src={item.userProfile}  alt={item.user}>
              </Avatar>
            }
            title={<span>
              Posted by
              {' '}
              <strong>{item.user}</strong>
            </span>}
          />
            
          </section>
        </div>
      ))}
    </Slider>
);

export default Carousel;