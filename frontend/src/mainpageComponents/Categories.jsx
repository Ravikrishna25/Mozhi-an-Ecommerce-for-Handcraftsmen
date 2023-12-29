import React, { useEffect, useState } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

export default function Categories() {
    const [cat,setCat]= useState();
 

    useEffect(()=>{
        console.log(cat);
    },[cat])
    return (
        <div className='grid-wrapper'>
            <h3 className='text'>Categories</h3>
            <hr />
            <div className='grid-container'>
                <div className='box1'>
                    <img
                        src="/Images/ceramics/DecorativeCeramicFigurine-1.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <Link to={ `/category/Ceramics`} className='btn' onClick={(e)=>setCat("Ceramics")}>Ceramics</Link>
                </div>
                <div className='box1'>
                    <img
                        src="/Images/ele.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <Link to={ `/category/Woodcrafts`} className='btn'  onClick={(e)=>setCat("Woodcrafts")}>Woodcrafts</Link>
                </div>
                <div className='box1'>
                    <img
                        src="/Images/textiles/Hand-DyedScarf-1.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <Link to={ `/category/Textiles`}  className='btn'  onClick={(e)=>setCat("Textiles")}>Textiles</Link>
                </div>
                <div className='box1'>
                    <img
                        src="/Images/metalwork/HandcraftedMetalSculpture-2.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <Link to={ `/category/Metalwork`}  className='btn'  onClick={(e)=>setCat("Metalwork")}>Metalwork</Link>
                </div>
                <div className='box1'>
                    <img
                        src="/Images/glassware/StainedGlassSuncatcher-3.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <Link to={ `/category/Glassware`}  className='btn'>Glassware</Link>
                </div>
                <div className='box1'>
                    <img
                        src="/Images/jewelry/SilverBracelet-4.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <Link to={ `/category/Jewelry`}  className='btn'>Jewelry</Link>
                </div>
                <div className='box1'>
                    <img
                        src="/Images/pottery.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <Link to={ `/category/Pottery`}  className='btn'>Pottery</Link>
                </div>
                <div className='box1'>
                    <img
                        src="/Images/leather/Hand-TooledLeatherBelt-1.jpg"
                        alt="First slide"
                        style={{ objectFit: 'fit' }} />
                    <Link to={ `/category/leather`}  className='btn'>Leather Goods</Link>
                </div>
            </div>
        </div>
    )
}
