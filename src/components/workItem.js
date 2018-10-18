import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import img1 from '../extras/img/portfolio-items/1MMFG.png';
import img2 from '../extras/img/portfolio-items/1MMFGAPP.png';
import img3 from '../extras/img/portfolio-items/3DE.png';

const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: img3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const workItem = () => {
    return (
        <div>
            <UncontrolledCarousel items={items} />
            <h2>Florida Blue</h2>
            <h4>UI Developer</h4>
        </div>
    );
};

export default workItem;