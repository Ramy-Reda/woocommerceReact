import React from 'react';
import ImportsPro from "../imports/importsPro"; 
import ImportsSl from "../imports/importsSl"; 
import "../../index.css";

const SingleProduct = () => {

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
            <div className="information">
                <div className="img-responsive">
                    <img src="./images/img-products/product-1.png" alt="information" />
                    <div className="smaller">
                        <img src="./images/img-products/product-1.png" alt="information" />
                        <img src="./images/img-products/product-1.png" alt="information" />
                        <img src="./images/img-products/product-1.png" alt="information" />
                        <img src="./images/img-products/product-1.png" alt="information" />
                        <img src="./images/img-products/product-1.png" alt="information" />
                        <img src="./images/img-products/product-1.png" alt="information" />
                    </div>
                </div>
                <div className="other">
                <h2>(25 Customer Reviews)</h2>
                        <p className="quality">PREMIUM OFFICE ARMCHAIR</p>
                        <pre>$10.00 - $200.00</pre>
                        <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro</p>
                        <article className="colors">
                            <span>colors: <i></i> <i></i> <i></i> </span>
                        </article>

                        <article className="size">
                                <span>Size: </span>
                                <span>s</span>
                                <span>m</span>
                                <span>xs</span>
                                <span>l</span>
                                <span>xl</span>
                        </article>
                    <div className="adds">
                        <span className="btn btn-primary minus"> - </span>
                        <span className="btn btn-primary plus-num"> 4</span>
                        <span className="btn btn-primary plus"> + </span>
                        <span className="cards btn btn-yello">add to cards</span>
                    </div>
                </div>
            </div>
            <ImportsPro />
            <ImportsSl />
        </section>
    );
}

export default SingleProduct;
