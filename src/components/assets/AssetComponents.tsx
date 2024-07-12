import "./AssetComponents.css";
import { MdHexagon } from "react-icons/md";
import { useState, useEffect } from "react";

const AssetComponents = () => {
  const [data, setData] = useState([]);

  async function mount() {
    const infos = await fetch(
      "https://run.mocky.io/v3/cf756b59-d746-4518-8221-55de4a7a8611"
    );
    const get = await infos.json();
    setData(get.assets);
    console.log(get);
  }
  useEffect(() => {
    mount();
  }, []);
  console.log(data);
  return (
    <>
      {data.map((i) => (
        <div className="asset-components">
          <p className="grade">{i.grade}</p>
          <MdHexagon className="assetHexagon" />
          <div className="assetName">{i.name}</div>
          <div className="assetVulnerabilities">{i.total_vuls}</div>
          <div className="assetLastSeen">{i.lastSeen}</div>
        </div>
      ))}
    </>
  );
};

export default AssetComponents;
