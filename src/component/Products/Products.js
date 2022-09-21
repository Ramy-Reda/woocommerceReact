import React  from 'react';
import ImportsPro from "../imports/importsPro";
import ImportsSl from "../imports/importsSl";
import "../../index.css";
import { useRef } from 'react';

const Products = () => {
    const range = useRef();

    return (
        <section>
            <div className="container-fluid">
                <div className="back">
                    <div className="center">
                        <p>Comfy Sloth</p>
                        <span>Our Products</span>
                    </div>
                </div>
            </div>
                <div className="container-fluid">
                    <div className= "side">
                        <div className="right">
                            <p className='under'>SHOP BY CATEGORIES</p>
                            <ul>
                                <li>Kitchen</li>
                                <li>Bath Room</li>
                                <li>Living Room</li>
                                <li>patio</li>
                                <li>bedroom</li>
                            </ul>

                            <p className='under'>SHOP BY PRICE</p>
                            <p className="rang"> Range : $ 0 - $1000</p>
                            <form>
                                <input ref={range} type= "range" min ="0"  max ="1000" />
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder= "Search By Name" />
                            </form>
                            <p className="under">SHOP BY COLOR</p>

                            <ul className="colors">
                                <li className="black">Black (5)</li>
                                <li className="Red">Red (7)</li>
                                <li className="Blue">Blue (6)</li>
                                <li className="Yellow">Yellow (3)</li>
                                <li className="Green">Green (10)</li>
                            </ul>
                        </div>
                        <div className="left">
                        <ImportsPro />
                        <div className="header">
                            <h3>FEATURED PRODUCTS</h3>
                            <p className="wasf">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, deleniti?
                            </p>
                        </div>
                        <ImportsPro />
                    </div>
                </div>
                <ImportsSl />

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
                </div>
        </section>
    );
}

export default Products;
