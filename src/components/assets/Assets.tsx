import AssetComponents from "./AssetComponents";
import "./Assets.css";
const Assets = () => {
  return (
    <div className="assetsContainer font">
      <div className="nameText"> Assets</div>
      <div className="assetPartNames">
        <div className="partInfo1">Grade</div>
        <div className="partInfo2">Name</div>
        <div className="partInfo3">Total Vulnerabilities</div>
        <div className="partInfo4">Last Seen</div>
      </div>
      <AssetComponents />
    </div>
  );
};

export default Assets;
