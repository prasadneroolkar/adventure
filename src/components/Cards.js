import React from 'react'
import CardItem from './CardItem'
import cdata from '../Cdata';
function Cards() {

    return (
        <div className='cards' id='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        {/* <CardItem
                            src={cdata[0].src}
                            text={cdata[0].text}
                            label={cdata[0].label}
                            path={cdata[0].path}
                        /> */}
                        {
                            cdata.map(function (value,index) {
                                while(index<2){

                                return (
                                   
                                    <CardItem key={index}
                                        src={value.src}
                                        text={value.text}
                                        label={value.label}
                                        path={value.path}
                                    />
                                    
                                );
                            }


                            })
                        }

                    </ul>
                    <ul className='cards__items'>
                    {
                            cdata.map(function (value,index) {
                                while(index>=2){

                                return (
                                   
                                    <CardItem key={index}
                                        src={value.src}
                                        text={value.text}
                                        label={value.label}
                                        path={value.path}
                                    />
                                    
                                );
                            }


                            })
                        }


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
