import React from 'react'
import classes from './Heads.module.css'
import dpimg from './images.png'
import usman from '../../../public/Assets/heads/usman.png'
import sehar from '../../../public/Assets/heads/sehar.png'
import faheem from '../../../public/Assets/heads/faheem.png'
import Ali from '../../../public/Assets/heads/Ali.png'
import Ammad from '../../../public/Assets/heads/Ammad.png'
import mehdi from '../../../public/Assets/heads/mehdi.png'
import Awais from '../../../public/Assets/heads/Awais.png'
import Ghufran from '../../../public/Assets/heads/Ghufran.png'

import Image from 'next/image'
export default function Heads() {
    const data =[
        {id:'0',
        name:'Faheem Abbas',
        designation:'IT',
        image: faheem
        },
        {id:'01',
        name:'Awais Amjad',
        designation:'Management',
        image: Awais
        },
        {id:'02',
        name:'Muhammad Mehdi',
        designation:'Promotion',
        image: mehdi
        },
        
        {id:'03',
        name:'Ghufranullah ',
        designation:'Documentation',
        image: Ghufran
        },
        {id:'04',
        name:'Ammad Ahmed',
        designation:'Graphics',
        image: Ammad
        },
       
      
        {id:'05',
        name:'usman arshad',
        designation:'Alumni',
        image: usman
        },
        {id:'06',
        name:'Ali Mian',
        designation:'Finance',
        image: Ali
        },
        {id:'07',
        name:'Sehar Naveed ',
        designation:'Decor',
        image: sehar
        },
        
       
    ]


  return (
    <div id='heads'>
         <div className={classes['content']}>
 
                     <div className={classes['row']}>
                  
          <div className={classes['col-12']}>
          <div className={classes['para-head']}>
            <h3 className={classes['title']}>Heads</h3>
            <div className={classes['line']} />
            </div>

            </div>
    
          {data.map(user => 
            
            <div className={classes['col-5']} key={user.id}>

          <div className={classes['shape']}>
          <Image src={user.image} alt='image' className={classes['headshot']} />
        </div>
            <h6 className={classes['name']}>{user.name}</h6>
            <h6 className={classes['designation']}>{user.designation}</h6>
          </div>
            )}

          </div>
          </div>
          
    </div>
   
  )
}
