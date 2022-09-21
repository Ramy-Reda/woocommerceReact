import React, { useEffect, useRef } from 'react';

const ImportsSl = () => {
    const slider = useRef();

    useEffect(() => {
        const sliders = () => {
            const sliderAp = slider.current;
            const lis = sliderAp.querySelectorAll("ul li");
            let lisLength = lis.length;
            let right = sliderAp.querySelector(".right");
            let left = sliderAp.querySelector(".left");
            let curentSlide = 1;
            
            let removeClasses = () => {
                lis.forEach(e => {
                    e.classList.remove("active");
                });
            }

            right.onclick = () => {
                if (right.classList.contains("disabled")) {
                    return false;
                } else {
                    curentSlide ++;
                    check();
                }

            }

            left.onclick = () => {
                if (left.classList.contains("disabeled")) {
                    return false;
                } else {
                    curentSlide --;
                    check()
                }
            }

            let check = () => {
                removeClasses();
                lis[curentSlide - 1].classList.add("active");
                if (curentSlide == 1) {
                    left.classList.add("disabeled");
                } else {
                    left.classList.remove("disabeled");
                }

                if (curentSlide == lisLength) {
                    right.classList.add('disabeled');
                } else {
                    right.classList.remove('disabeled');
                }
            }
            check()
        }
        sliders();
    }, [])
    return (
        <section>
            <div className="container-fluid"> 
                    <div ref= {slider} className="sider">
                        <span className="right"> <i className="fa-solid fa-angles-right"></i> </span>
                        <span className="left"> <i className="fa-solid fa-angles-left"></i> </span>

                        <ul>
                            <li className = "active"> <img src="./images/company-logos/company-logo-1.png" alt="companies"  /> </li>

                            <li> <img src="./images/company-logos/company-logo-2.png" alt="companies"  /> </li>

                            <li> <img src="./images/company-logos/company-logo-3.png" alt="companies"  /> </li>

                            <li> <img src="./images/company-logos/company-logo-4.png" alt="companies"  /> </li>

                            <li> <img src="./images/company-logos/company-logo-5.png" alt="companies"  /> </li>

                            <li> <img src="./images/company-logos/company-logo-6.png" alt="companies"  /> </li>
                        </ul>
                    </div>
            </div>

            <div className="container">
                    <div className="letters">
                        <div className="header">
                            NEWSLETTER
                        </div>
                        <div className="lorem">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis similique eum, aut culpa maiores cupiditate alias exercitationem error nesciunt.
                        </div>

                        <div className="form">
                            <form >
                                <input className="fall-form" type="text" name="" placeholder="Enter your Email" />
                                <i className="fa-solid fa-envelope"></i>
                                <input className='btn' type="submit" value="SubScrib" />
                            </form>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default ImportsSl;
