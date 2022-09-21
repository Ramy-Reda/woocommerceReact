import React, { useEffect, useRef }  from 'react';
import {Link} from "react-router-dom";
import ImportsPro from "../imports/importsPro";
import ImportsSl from "../imports/importsSl";
import "../../index.css";
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, IncrementBynums} from '../redux/addProduct';

export default function Store() {
    let {sale} =useSelector(sale =>  sale.product);
    let {nums} =useSelector(nums =>  nums.product);
    let dispatsh = useDispatch();

    const table = useRef("");

    useEffect(() => {
        const plus = table.current.querySelectorAll(".adds .plus");
        const minus = table.current.querySelectorAll(".adds .minus");
        const plusNum = table.current.querySelectorAll(".adds .plus-num");
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
    }, []);

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
                <div ref={table} className="table">
                    <table>
                        <tr>
                            <th>PRODUCTS</th>
                            <th>NAME OF PRODUCTS</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                        <tr>
                            <td>
                                <img src="./images/img-products/product-1.png" alt="Product" />
                            </td>
                            <td>COMFORTABLE CHAIR</td>
                            <td>30$</td>
                            <td>
                            <div className="adds">
                                <span className="btn btn-primary minus"> - </span>
                                <span className="btn btn-primary plus-num"> 4</span>
                                <span className="btn btn-primary plus"> + </span>
                            </div>
                            </td>
                            <td>30$</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./images/img-products/product-2.png" alt="Product" />
                            </td>
                            <td>COMFORTABLE CHAIR</td>
                            <td>20$</td>
                            <td>
                            <div className="adds">
                                <span className="btn btn-primary minus"> - </span>
                                <span className="btn btn-primary plus-num"> 4</span>
                                <span className="btn btn-primary plus"> + </span>
                            </div>
                            </td>
                            <td>20$</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./images/img-products/product-3.png" alt="Product" />
                            </td>
                            <td>COMFORTABLE CHAIR</td>
                            <td>50$</td>
                            <td>
                            <div className="adds">
                                <span className="btn btn-primary minus"> - </span>
                                <span className="btn btn-primary plus-num"> 4</span>
                                <span className="btn btn-primary plus"> + </span>
                            </div>
                            </td>
                            <td>50$</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./images/img-products/product-4.png" alt="Product" />
                            </td>
                            <td>COMFORTABLE CHAIR</td>
                            <td>70$</td>
                            <td>
                            <div className="adds">
                                <span className="btn btn-primary minus"> - </span>
                                <span className="btn btn-primary plus-num"> 4</span>
                                <span className="btn btn-primary plus"> + </span>
                            </div>
                            </td>
                            <td>70$</td>
                        </tr>
                    </table>
                </div>
                <div className="button">
                    <div className='btn btn-yello txt-white'>
                        <Link className="txt-white" to="/">Continue Shopping</Link>
                    </div>

                    <div className="btn btn-classic">
                        Check Out
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="salary-totals">
                    <div className="salary-total">
                        
                    <p  className="cart"> CART TOTAL </p>
                        <div className="total">
                            <p>SUB TOTOAL</p> <span>{sale}</span>
                        </div>
                        <div className="total">
                            <p>Totale number</p> <span>{nums}</span>
                        </div>
                        <div className="total">
                            <p>TAX</p> <span>$200</span>
                        </div>
                        <div className="total">
                            <p>ORDER TOTAL</p> <span style={{color : 'red'}}>${(sale * nums) + 200}</span>
                        </div>
                    </div>
                </div>
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
    )
}