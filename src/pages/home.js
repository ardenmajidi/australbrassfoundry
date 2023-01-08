import React,{useEffect} from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {

    const boxes=document.getElementsByClassName('imgToChange');
    const offSet=0.5
    const totalInViewport=(el)=> {
     
        var rect = el.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (rect.top < windowHeight * offSet)

    }
    let eles=[]
    const checkBoxes=()=>{      
        eles.forEach(b => {
            if (!b.animated && totalInViewport(b.ele) ) {
              b.animated = true;
               b.ele.setAttribute('src',b.ele.getAttribute('data-src'))
                b.ele.classList.add('animated');
            
            }
               
       
     });

    }
    useEffect(() => {
        for(let i=0;i<boxes.length;i++)
            {eles.push({ele:boxes[i] ,animateed:false })

            }


      window.addEventListener('scroll',()=>{
        checkBoxes();

      })
  
       }, []);
    return (
        <>
            <div className='video-container '>
                <div className='inner'>
                    <h3>FAMILY OWNED AND OPERATED SINCE 1937</h3>
                    <h1>
                        Austral Brass<br />Foundry
                    </h1>
                </div>
                <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/Nsg5g7Tqfyg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=Nsg5g7Tqfyg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>

            <div className='ptb150 bg-white'>
                <div className='container'>
                    <img src='/images/icon.png' className='icon' alt="Austral Brass icon" />
                    <h2>WE ARE A SPECIALISED <br /> NON-FERROUS FOUNDRY.</h2>
                    <p className='max600'>
                        Our focus is in providing stringently quality-tested products for the mining, shipping, engineering and artistic industries, as well as unique and tailor-made client requests. Additionally, we offer pattern-making, machining and inlay services.
                    </p>
                </div>

            </div>
            <div className='flex-c '>
                <div className='half box'>
                    <img className='img imgToChange' src='./images/home/servicesx.jpg'  data-src='./images/home/services.jpg'  alt='Austral Brass services'  />
                </div>
                <div className='half flex-h'>
                    <div className='max650'>
                        <h2>Our Services
                        </h2>
                        <p className='mb45'>
                            Our services rely on sand casting and inlay utilising CNC machines to achieve the desired effect. Through these techniques, we are able to fulfill our clients’ commissions. Our foundry services many functions, including but not limited to, industrial, artistic, and niche works.
                        </p>
                        <NavLink  className="explore" to="/services">Explore Services  </NavLink>    
                    </div>

                </div>

            </div>

            <div className='flex-c  bg-white'>
                <div className='half flex-h'>
                    <div className='max650'>
                        <h2>Products
                        </h2>
                        <p className='mb45'>
                            The behind the scenes and finished products all in one place!

                        </p>
                        <NavLink  className="explore" to="/products">Explore Products</NavLink>  
                    </div>
                </div>
                <div className='half box'>
                    <img className='img imgToChange' data-src='./images/home/products.jpg' src='./images/home/productsx.jpg'   alt='Austral Brass produts' />
                </div>
            </div>
            <div className='flex-c'>
                <div className='half box'>
                    <img className='img imgToChange' data-src='./images/home/about.jpg' src='./images/home/aboutx.jpg'  alt='Austral Brass about'  />
                </div>
                <div className='half flex-h'>
                    <div className='max650'>
                        <h2>About us
                        </h2>
                        <p className='mb45'>
                        At Austral Brass Foundry we pride ourselves in multigenerational dedication to the improvement of sand-casting techniques. 
                        </p>
                        <NavLink  className="explore" to="/about">Explore About us</NavLink>  
                    </div>

                </div>

            </div>
        </>
    )


}
export default Home