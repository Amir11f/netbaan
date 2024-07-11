import "./Box.css";

const Box = () => {
  return (
    <>
      <div className="box">
        <div className="boxRowUp">
          <div className="boxRowUpLeft">
            <div className="fatherRectangle">
              <div className="rectangleShape" style={{ background: "green" }}>
                <img src="/svgs/EarthPlanet.svg" alt="" className="EarthSvg" />
              </div>
              <div className="rectangleNumber ">
                <p className="rectangleNumberText">300</p>
              </div>
            </div>
            <div className="underRectangle">
              <p className="underRectangleText">domain</p>
            </div>
          </div>
          <div className="boxRowUpRight">
            <img src="/svgs/Arrow.svg" alt="dfs" className="arrow" />
          </div>
        </div>
        <div className="spliterBorder"></div>

        <div className="boxRowMiddle">
          <div className="middleRight">
            <div className="chartInfo">
              <div className="chartInfoTop sameInfo">Live</div>
              <div className="chartInfoBottom sameInfo">60</div>
            </div>
            <img src="/images/dashboardF.png" alt="" className="chartImg" />
          </div>
          <div className="middleLeft">
            <div className="chartInfo">
              <div className="chartInfoTop sameInfo">Monitored</div>
              <div className="chartInfoBottom sameInfo">300</div>
            </div>
            <img src="/images/dashboardF.png" alt="" className="chartImg" />
          </div>
        </div>
        <div className="spliterBorder"></div>

        <div className="boxRowDown"></div>
      </div>
    </>
  );
};

export default Box;
