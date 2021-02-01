import React, { Component } from 'react'
import Style from './HomePage.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class HomePage extends Component {
    render() {
        return (
            <div className={Style.body}>
                <Carousel autoPlay showThumbs={false} infiniteLoop={true} className={Style.crousal}>
                    <div>
                        <img src="./Bihari-Sattu-Drink-Recipe-1-1-948x640.jpg" className={Style.crousal_img}/>
                    </div>
                    <div>
                        <img src="./Sattu-Mix-Recipe-1024x700.jpg" className={Style.crousal_img} />
                    </div>
                    <div>
                        <img src="./a1-21-1300x731.jpg" className={Style.crousal_img} />
                    </div>
                </Carousel>
                <h2>Know about our product</h2>
                <div className={Style.step_one}>
                    <div className={Style.img_div}>
                        <img src="./sattu.jpg" className={Style.img_size}/>
                    </div>
                    <div className={Style.para_div}>
                        <p className={Style.para_text}>ATHAK MALSALEDAR SATTU, This Sattu is ready to use In this sattu, all pices an salt pepper, black sall, chilly and lemon extract ete are mixed in a balanced quantity. When this sattu is mixed with water a very tasty drinking food is being preparod. When any one takes this drinking food, he gets cnough energy for 23 tousNo need to sdd anything more In this way i is very ensy tO prepare No need of any fire, simply one glass and water is needed for preparing this drisking food.</p>
                    </div>
                </div>
                <div className={Style.step_one}>
                    <div className={Style.para_div}>
                        <p className={Style.para_text} style={{paddingLeft:"40px"}}>ATHAK MALSALEDAR SATTU, This Sattu is ready to use In this sattu, all pices an salt pepper, black sall, chilly and lemon extract ete are mixed in a balanced quantity. When this sattu is mixed with water a very tasty drinking food is being preparod. When any one takes this drinking food, he gets cnough energy for 23 tousNo need to sdd anything more In this way i is very ensy tO prepare No need of any fire, simply one glass and water is needed for preparing this drisking food.</p>
                    </div>
                    <div className={Style.img_div}>
                        <img src="./giloipowder.jpg" className={Style.img_size}/>
                    </div>
                </div>
                <div className={Style.step_one}>
                    <div className={Style.img_div}>
                        <img src="./besan.jpg" className={Style.img_size}/>
                    </div>
                    <div className={Style.para_div}>
                        <p className={Style.para_text}>ATHAK MALSALEDAR SATTU, This Sattu is ready to use In this sattu, all pices an salt pepper, black sall, chilly and lemon extract ete are mixed in a balanced quantity. When this sattu is mixed with water a very tasty drinking food is being preparod. When any one takes this drinking food, he gets cnough energy for 23 tousNo need to sdd anything more In this way i is very ensy tO prepare No need of any fire, simply one glass and water is needed for preparing this drisking food.</p>
                    </div>
                </div>
                <h2>How we made sattu</h2>
                <div className={Style.how_sattu_para}>
                    <p className={Style.sattu_para}>Sattu is made by roasting the Bengal gram or chane ki dal in sand. With the help of a sieve, sand is strained and the roasted Bengal gram is pounded to a powder until it becomes a flour.</p>
                    <p className={Style.sattu_para}>Sattu is rich in iron, sodium, fibre, protein, and magnesium. If you mix it in water, add a pinch of salt and squash a lemon and drink it empty stomach, all toxins from your body will be flushed out. It will also give you relief from stomach-related problems.</p>
                </div>
                <h2>Benefit of Sattu</h2>
                <div className={Style.step_two}>
                    <div className={Style.li_arrng}>
                        <ul >
                            <li>Improves bowel movement</li>
                            <li> It flushes out toxins from body</li>
                            <li>It keeps the body cool</li>
                            <li>It is best for people with diabetes</li>
                        </ul>
                    </div>
                    <div className={Style.li_arrng}>
                        <ul >
                            <li>It aids weight loss</li>
                            <li>Improves appetite</li>
                            <li> It enhances energy</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
