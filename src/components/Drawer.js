import React from 'react';

const Drawer = () => {
    return (
        <div style={{display:'none'}} className="overlay">
            <div className="drawer">
                <h2 className={'mb-30 d-flex justify-between'}>Корзина
                    <img className={'removeBtn'} src="/img/btn-remove.svg" alt="remove"/>
                </h2>

                <div className="items">
                    <div className="cartItem mb-20 d-flex align-center">
                        <div style={{backgroundImage:'url(/img/sneakers/1.jpg)'}} className="cartItemImg">
                        </div>
                        <div className={'mr-20 flex'}>
                            <p className={'mb-5'}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>1250 сом</b>
                        </div>
                        <button>
                            <img className={'removeBtn'} src="/img/btn-remove.svg" alt="remove"/>
                        </button>
                    </div>



                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li className={'d-flex'}>
                            <span>Итого:</span>
                            <div></div>
                            <b>1250 сом</b>
                        </li>
                        <li className={'d-flex'}>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>100 сом</b>
                        </li>
                    </ul>
                    <button className={'greenButton'}>Оформить заказ <img src="/img/arrow.svg" alt=""/></button>
                </div>

            </div>

        </div>

    );
};

export default Drawer;