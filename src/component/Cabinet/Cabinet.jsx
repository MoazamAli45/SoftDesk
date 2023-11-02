import React from 'react'
import Image from 'next/image'
import classes from './Cabinet.module.css'
import dpimg from './images.png'
import Ali  from '../../../public/Assets/cabinet/ali.png'
import Maryam from '../../../public/Assets/cabinet/maryam_s.jpg'
import Maaz from '../../../public/Assets/cabinet/mk.png'
import mubashir from '../../../public/Assets/cabinet/mubashir.png'
export default function Cabinet() {
  return (
    <div id='cabinet' className={classes['cabinet']} >
         <div className={classes['content']}>
                     <div className={classes['row']}>
          <div className={classes['col-12']}>
          <div className={classes['para-head']}>
            <h3 className={classes['title']}>Cabinet</h3>
            <div className={classes['line']} />
            </div>
            </div>
            <div className={classes['col-12']}>
            <div className={classes['shape']}>
        <Image src={mubashir} alt='image' className={classes['headshot-m']} />
        
        </div>
        <h6 className={classes['designation']}>president</h6>
        <h6 className={classes['name']}>Mubashir ur Rehman</h6>
          </div>
    
          
          <div className={classes['col-5']}>

          <div className={classes['shape']}>
          <Image src={Ali} alt='image' className={classes['headshot']} />
        </div>
            <h6 className={classes['designation']}>General secretary</h6>
            <h6 className={classes['name']}>Ali Haider</h6>
          </div>
          <div className={classes['col-5']}>

          <div className={classes['shape']}>
          <Image src={Maaz} alt='image' className={classes['headshot']} />
        </div>
            <h6 className={classes['designation']}>Vice President</h6>
            <h6 className={classes['name']}>Muhammad Maaz Khalid</h6>
          </div>
          <div className={classes['col-5']}>

          <div className={classes['shape']}>
          <Image src={Maryam} alt='image' className={classes['headshot']} />
        </div>
            <h6 className={classes['designation']}>joint secretary</h6>
            <h6 className={classes['name']}>Maryam Shahzad</h6>
          </div>

          </div>
          </div>
          
    </div>

  )
}
