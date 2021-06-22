import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="App">
            <div className="wrapper clear ">

                <Drawer/>
                <Header/>
                <div className="content p-40">
                    <div className={'d-flex align-center justify-between mb-40'}>
                        <h1>Все кроссовки</h1>
                        <div className="search-block d-flex">
                            <img src="/img/search.svg" alt="Search"/>
                            <input type="text" placeholder={'Поиск'}/>
                        </div>
                    </div>
                    <div className="d-flex justify-between flex-wrap">


                        <Card/>
                        <div className="card">
                            <img width={133} height={112} src="/img/sneakers/2.jpg" alt=""/>
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className={'d-flex justify-between align-center'}>
                                <div className={'d-flex flex-column'}>
                                    <span>Цена:</span>
                                    <b>12925 сом</b>
                                </div>
                                <button className={'button'}>
                                    <img width={11} height={11} src="/img/plus.svg" alt=""/>
                                </button>
                            </div>
                        </div>

                        <div className="card">
                            <img width={133} height={112} src="/img/sneakers/3.jpg" alt=""/>
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className={'d-flex justify-between align-center'}>
                                <div className={'d-flex flex-column'}>
                                    <span>Цена:</span>
                                    <b>12925 сом</b>
                                </div>
                                <button className={'button'}>
                                    <img width={11} height={11} src="/img/plus.svg" alt=""/>
                                </button>
                            </div>
                        </div>

                        <div className="card">
                            <img width={133} height={112} src="/img/sneakers/4.jpg" alt=""/>
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className={'d-flex justify-between align-center'}>
                                <div className={'d-flex flex-column'}>
                                    <span>Цена:</span>
                                    <b>12925 сом</b>
                                </div>
                                <button className={'button'}>
                                    <img width={11} height={11} src="/img/plus.svg" alt=""/>
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
    </div>
  );
}

export default App;
