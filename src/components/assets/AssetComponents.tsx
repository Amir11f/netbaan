import "./AssetComponents.css";

import { MdHexagon } from "react-icons/md";

const AssetComponents = () => {
  return (
    <div className="asset-components">
      <MdHexagon className="assetHexagon" />
      <div className="assetName">sub2.target.b.com</div>
      <div className="assetVulnerabilities">54</div>
      <div className="assetLastSeen">06/17/2023 at 2:44</div>
    </div>
  );
};

export default AssetComponents;
