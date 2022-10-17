import React,{useState} from "react";
import Filter from "./Filter";
import data from "./../Profile/data";

type Props = {};

export default function RoomList({}: Props) {
  const avatar = require("./../../assets/img/Imag_1.png");
  const [nodeOfElement, setNodeOfElement] = useState<number>(2);
  const slice = data.dataTest.slice(0, nodeOfElement);
  const loadMore = () => {
    if(nodeOfElement <= data.dataTest.length){
      setNodeOfElement(nodeOfElement + nodeOfElement);
    }else{
      setNodeOfElement(2);
    }
  };
  return (
    <div className="container">
      <Filter />
      <div className="content">
        <div className="row">
          <div className="col-7 left-content">
            <h5 className="my-3">200+ stay in Bordeau</h5>
            <div className="room-list">
              {
                slice.map((item, index) => {
                  return (
                    <div className="card my-4 border-0 rounded-0 border-top border-bottom" key={index}>
                    <div className="row g-0 my-3">
                      <div className="col-md-5 left-card">
                        <img
                          src={item.img}
                          className="img-fluid rounded-4 w-100"
                          alt="..."
                          style={{ height: "200px", objectFit:'cover' }}
                        />
                      </div>
                      <div className="col-md-7 right-card">
                        <div className="card border-0">
                          <div className="card-header border-0">
                            <p>Toàn bộ căn hộ dịch vụ tại Bình Thạnh</p>
                            <h5>Romantic APT for Long-term Living</h5>
                            <i className="far fa-heart icon"></i>
                          </div>
                          <div className="card-body">
                            <div className="top-line" />
                            <div className="detail-room my-3">
                              <p>2 Guests - Studio Room - 1 Bed - 1 Bath</p>
                              <p>
                                Wifi - Kitchen - Air Condition - Washing Machine
                              </p>
                            </div>
                            <div className="bottom-line" />
                          </div>
                          <div className="card-footer d-flex justify-content-between align-items-center border-0">
                            <span className="star-review">
                              5.0
                              <i className="fas fa-star mx-2"></i>
                              (318 reviews)
                            </span>
                            <span className="price">$385/Night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <button className="btn btn-danger d-block w-100 btnLoad"
                  onClick={()=>loadMore()}
                >
                  {nodeOfElement <= data.dataTest.length ? 'Load More' : 'Load Less'}
                </button>
          </div>
          <div className="col-5 right-map"></div>
        </div>
      </div>
    </div>
  );
}
