
//Components
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import AboutUs from '../components/AboutUs/AboutUs'
import Features from '../components/Features/Features'

import Decoration from '../components/Header/Decoration'


//Styles
import HeaderStyle from '../components/Header/Header.module.scss'

export default function Home() {
  return (
    <div >
        <div>
          <div style={{position: 'relative', zIndex: '1'}}>
            <Navbar />
            <Header />
          </div>
          <div className={HeaderStyle.decoration_container}>
                <div className={HeaderStyle.left_container}>
                    <div className={HeaderStyle.decoration_line}>
                        <Decoration width={'30%'} color={'#35345E'} padding={'90px'} />
                        <Decoration width={'40%'} color={'#DFE2E2'} padding={'90px'} />
                    </div> 
                    <div className={HeaderStyle.decoration_line}>
                        <Decoration width={'15%'} color={'#FED56B'} padding={'90px'} />
                    </div>
                </div>

                <div className={HeaderStyle.right_container}>
                    <div className={HeaderStyle.decoration_line_reverse}>
                        <Decoration width={'80%'} color={'#35345E'} padding={'90px'} />
                    </div> 
                    <div className={HeaderStyle.decoration_line_reverse}>
                        <Decoration width={'20%'} color={'#3C65E5'} padding={'90px'} />
                        <Decoration width={'45%'} color={'#869FF0'} padding={'90px'} />
                    </div>
                    <div className={HeaderStyle.decoration_line_reverse}>
                        <Decoration width={'5%'} color={'#FFF'} padding={'90px'} />
                        <Decoration width={'45%'} color={'#FED56B'} padding={'90px'} />
                    </div>
                </div>
            </div>
        
        </div>
        <AboutUs />
    </div>
  )
}
