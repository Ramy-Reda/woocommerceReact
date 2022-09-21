import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {addPro, Decrement, Increment, IncrementBynums}  from '../redux/addProduct';

const Imports = () => {
    const raifs = useRef();
    const add = useRef();
    const dispatsh = useDispatch();
    const {nums} = useSelector(num => num.product); 

    useEffect(() => {
        const btns = raifs.current.querySelectorAll(".fair .up .search");
        const addImage = add.current.querySelector(".products-info .description .img-responsive img");
        const information = add.current;
        const btnLeft = add.current.querySelector(".products-info .left");
        const btnFoot = add.current.querySelector(".products-info .foot");
        const btnAdd = raifs.current.querySelectorAll(".fair .up h6");
        const minus = add.current.querySelectorAll(".adds .minus");
        const plus = add.current.querySelectorAll(".adds .plus");
        const plusNum = add.current.querySelectorAll(".adds .plus-num");
        const cards = add.current.querySelectorAll(".adds .cards");


        btnAdd.forEach(ele => {

            plus.forEach(pl => {
                pl.addEventListener("click", () =>{
                    dispatsh(Increment());
                })
            });
    
            minus.forEach(mi => {
                mi.addEventListener("click", () =>{
                    dispatsh(Decrement());
                })
            });
    
            plusNum.forEach(plN => {
                plN.addEventListener("click", () =>{
                    dispatsh(IncrementBynums(4));
                })
            });
            cards.forEach(plN => {
                plN.addEventListener("click", () =>{
                    dispatsh(Increment());
                })
            });
            ele.addEventListener("click", function () {
                const sale = Number(this.parentElement.parentElement.querySelector(".right-salary").innerHTML);

                dispatsh(Increment());
                dispatsh(addPro({sale}));
            })
        });

        btns.forEach(
            (ele) => {
                ele.addEventListener("click", function() {
                    let Image = this.parentElement.parentElement.children[0].src;
                    addImage.setAttribute("src", Image)
                    information.style.display = "inline";
                })
            }
        )

        btnLeft.onclick = () => {
            information.style.display = "none";
        }
        
        btnFoot.onclick = () => {
            information.style.display = "none";
        }

        }, []);
    return (
        <section>
            <div className="container">
                <div className="rel">
                    <div ref={raifs} className="fairs">
                        <div className="fair">
                            <img src="./images/img-products/product-1.png" alt="Product" />
                            <p>Special Product</p>
                            <pre>
                                <p className="right-salary">85</p>
                                <span>$200</span>
                            </pre>
                            <div className="up">
                                <p className="search">search</p>
                                <h6>Add To Card</h6>
                            </div>
                        </div>

                        <div className="fair">
                            <img src="./images/img-products/product-2.png" alt="Product" />
                            <p>Special Product</p>
                            <pre>
                                <p className="right-salary">90</p>
                                <span>$200</span>
                            </pre>
                            <div className="up">
                                <p  className="search">search</p>
                                <h6>Add To Card</h6>
                            </div>
                        </div>

                        <div className="fair">
                            <img src="./images/img-products/product-3.png" alt="Product" />
                            <p>Special Product</p>
                            <pre>
                                <p className="right-salary">70</p>
                                <span>$200</span>
                            </pre>
                            <div className="up">
                                <p  className="search">search</p>
                                <h6>Add To Card</h6>
                            </div>
                        </div>

                        <div className="fair">
                            <img src="./images/img-products/product-4.png" alt="Product" />
                            <p>Special Product</p>
                            <pre>
                                <p className="right-salary">25</p>
                                <span>$200</span>
                            </pre>
                            <div className="up">
                                <p  className="search">search</p>
                                <h6>Add To Card</h6>
                            </div>
                        </div>

                        <div className="fair">
                            <img src="./images/img-products/product-5.png" alt="Product" />
                            <p>Special Product</p>
                            <pre>
                                <p className="right-salary">30</p>
                                <span>$200</span>
                            </pre>
                            <div className="up">
                                <p  className="search">search</p>
                                <h6>Add To Card</h6>
                            </div>
                        </div>

                        <div className="fair">
                            <img src="./images/img-products/product-6.png" alt="Product" />
                            <p>Special Product</p>
                            <pre>
                                <p className="right-salary">40</p>
                                <span>$200</span>
                            </pre>
                            <div className="up">
                                <p  className="search">search</p>
                                <h6>Add To Card</h6>
                            </div>
                        </div>
                    </div>

                    <div ref={add} className="products-info">
                        <div className="head">
                            <span className="right">Product Info</span>
                            <span className="left btn">x</span>
                        </div>

                        <hr/>

                        <div className="description">
                            <div className="img-responsive">
                                <img alt="information" />
                            </div>
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
                        </div>

                        <div className="adds">
                            <span className="btn btn-primary minus"> - </span>
                            <span className="btn btn-primary plus-num"> 4</span>
                            <span className="btn btn-primary plus"> + </span>
                            <span className="cards btn btn-yello">add to cards</span>
                        </div>
                        <hr />
                        <div className="foot btn btn-danger">
                            close
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Imports;

