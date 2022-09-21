import React from 'react';
import ImportsPro from "../imports/importsPro";
import ImportsSl from "../imports/importsSl";

const Home = () => {

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="home">
                        <div className="box">
                            <pre className="disc">
                                <span>Minimalist</span>
                                <br/>
                                interior style
                            </pre>
                            <button className="btn btn-yello">
                                view collection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="columns">
                    <div className="salary">
                        <p className="Icon"><i className="fa-brands fa-free-code-camp"></i></p>
                        <h2>FREE SHIPPING</h2>
                        <p className='over'>
                            Free Shipping On All Order Over 100.00
                        </p>
                    </div>

                    <div className="salary">
                        <p className="Icon"><i className="fa-solid fa-phone-volume"></i></p>
                        <h2>FREE SHIPPING</h2>
                        <p className='over'>
                            Free Shipping On All Order Over 100.00
                        </p>
                    </div>

                    <div className="salary">
                        <p className="Icon"><i className="fa-solid fa-dollar-sign"></i></p>
                        <h2>FREE SHIPPING</h2>
                        <p className='over'>
                            Free Shipping On All Order Over 100.00
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="category">
                        <div className="cat-stadio">
                            <div className="desc"> 
                                <h4>categoryDUCT CATEGORIES</h4>
                                <p>
                                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempore Neque Minus In Error Sunt Laudantium Totam Nemo Accusamus Iure Placeat.
                                </p>
                                <pre>
                                    View All Categories
                                </pre>
                            </div>
                        </div>

                        <div className="cat-stadio">
                            <img src="./images/cagetogoryImg/bathroom-category.jpeg" alt="category"/>
                            <div className="top">
                                <span> 
                                    PathRoom
                                    <br />
                                    50Items
                                </span>
                            </div>
                        </div>

                        <div className="cat-stadio">
                            <img src="./images/cagetogoryImg/livingroom-category.jpeg" alt="category"/>
                            <div className="top">
                                <span> 
                                    kitchen
                                    <br />
                                    25Items
                                </span>
                            </div>
                        </div>

                        <div className="cat-stadio">
                            <img src="./images/cagetogoryImg/kitchen-category.jpeg" alt="category"/>
                            <div className="top">
                                <span> 
                                    Livingroom
                                    <br />
                                    25Items
                                </span>
                            </div>
                        </div>

                        <div className="cat-stadio">
                            <img src="./images/cagetogoryImg/patio-category.jpeg" alt="category"/>
                            <div className="top">
                                <span> 
                                    patio
                                    <br />
                                    10Items
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="smart">
                        <article>
                            <h3>SMART FURNITURE COLLECTION</h3>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Recusandae, Accusantium</p>
                            <span>View Collection</span>
                        </article>
                    </div>
                </div>
            \
            
            </div>
            <div className="header">
                        <h3>FEATURED PRODUCTS</h3>
                        <p className="wasf">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, deleniti?
                        </p>
            </div>
            <ImportsPro />
            <ImportsSl />
    </section>
    );
}

export default Home;
