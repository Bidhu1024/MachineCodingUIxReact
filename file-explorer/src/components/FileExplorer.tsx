import { FC, useState } from "react";
const FileExplorer: FC = ({ data }) => {
    const [showChildren,setShowChildren] = useState<boolean>(false)
const handleClick = ()=>{
    setShowChildren(prev=>!prev)
}
  return (
    <div className="container">
      {data.type === "folder" ? (showChildren ? "📂": "📁" ): "🗃️"}

      <span onClick={handleClick}>{data.name}</span>

      {showChildren && data?.children?.map((childData, index) => {
        return <FileExplorer key={index} data={childData} />;
      })}
    </div>
  );
};

export default FileExplorer;
