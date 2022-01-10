import "./App.scss";
import "./index.scss";

function App() {
  return (
    <div className="wrapper clear">
      <header className=" d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/sneakers.png" alt="sneakers" width="50" height="50" />
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>The best sneakers</p>
          </div>
        </div>
        <div>
          <ul className="d-flex ">
            <li className="mr-30">
              <img src="/cart.png" alt="cart" width="18" height="18" />
              <span>100$</span>
            </li>
            <li>
              <img src="/user1.svg" alt="user" width="18" height="18" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="title ">All sneakers</h1>
          <div className="search-block">
            <img src="./search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="sneakers d-flex ">
          <div className="card mr-30">
            <img
              src="/sneakers/1sn.jpg"
              alt="sneakers"
              width="130"
              height="100"
            />
            <h5>Women sneakers pink</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>130$</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/add.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card mr-30">
            <img
              src="/sneakers/2sn.jpg"
              alt="sneakers"
              width="130"
              height="100"
            />
            <h5>Women sneakers pink</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100$</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/add.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card mr-30">
            <img
              src="/sneakers/3sn.jpg"
              alt="sneakers"
              width="130"
              height="100"
            />
            <h5>Women sneakers pink</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>90$</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/add.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card mr-30">
            <img
              src="/sneakers/4sn.jpg"
              alt="sneakers"
              width="130"
              height="100"
            />
            <h5>Women sneakers pink</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>90$</b>
              </div>
              <button className="button">
                <img width="11" height="11" src="/add.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
