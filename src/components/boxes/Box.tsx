import { useEffect, useState } from "react";
import "./Box.css";

const Box = () => {
  // const [data, setData] = useState({});

  // async function mount() {
  //   const infos = await fetch("/dummyData/metainfo.json");
  //   const gett = await JSON.stringify(infos);
  //   console.log(gett);
  //   setData(infos);
  // }
  // useEffect(() => {
  //   mount();
  // }, []);
  // console.log(data);

  return (
    <>
      <div className="box font">
        <div className="boxRowUp">
          <div className="boxRowUpLeft">
            <div className="fatherRectangle">
              <div className="rectangleShape" style={{ background: "green" }}>
                <img src="/svgs/EarthPlanet.svg" alt="" className="EarthSvg" />
              </div>
              <div className="rectangleNumber ">
                <p className="rectangleNumberText ">300</p>
              </div>
            </div>
            <div className="underRectangle ">
              <p className="underRectangleText ">Domains</p>
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
              <p className="chartInfoTop sameInfo InfoTexts">Live</p>
              <p className="chartInfoBottom sameInfo infoNumbers">60</p>
            </div>
            <img src="/images/dashboardF.png" alt="" className="chartImg" />
          </div>
          <div className="middleLeft">
            <div className="chartInfo">
              <p className="chartInfoTop sameInfo InfoTexts">Monitored</p>
              <p className="chartInfoBottom sameInfo infoNumbers">300</p>
            </div>
            <img src="/images/dashboardF.png" alt="" className="chartImg" />
          </div>
        </div>
        <div className="spliterBorder"></div>

        <div className="boxRowDown">
          <div className="downLeft">
            <div className="downs-left">
              <img src="/svgs/Globe.svg" alt="" className="img-down" />
            </div>
            <div className="downs-right">
              <p className="downs-right-top InfoTexts sameInfo">IPs</p>
              <p className="downs-right-bottom infoNumbers sameInfo">6</p>
            </div>
          </div>
          <div className="downMiddle">
            <div className="downs-left">
              <img src="/svgs/Conflict.svg" alt="" className="img-down" />
            </div>
            <div className="downs-right">
              <p className="downs-right-top InfoTexts sameInfo">Ports</p>
              <p className="downs-right-bottom infoNumbers sameInfo">6</p>
            </div>
          </div>
          <div className="downRight">
            <div className="downs-left">
              <img src="/svgs/Bug.svg" alt="" className="img-down" />
            </div>
            <div className="downs-right">
              <p className="downs-right-top InfoTexts sameInfo">Vulns</p>
              <p className="downs-right-bottom infoNumbers sameInfo">6</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
