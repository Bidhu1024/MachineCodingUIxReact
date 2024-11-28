import React, { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const headers = [
    {
      id: 1,
      name: "React",
      description:
        "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    },
    {
      id: 2,
      name: "Node",
      description:
        "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      id: 3,
      name: "MongoDB",
      description:
        "MongoDB Atlas integrates operational and vector data in a single, unified platform. Use vector representations of your data to perform semantic search, build ...",
    },
    {
      id: 4,
      name: "Express js",
      description:
        "Express is a fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.",
    },
  ];

  const handleTab = (id: number) => {
    setSelectedTab(id);
  };



  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Tabs in React</h1>
      <nav aria-label="Tabs">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            border: "1px solid white",
          }}
        >
          {headers.map((item) => (
            <button
              key={item.id}
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor: selectedTab === item.id ? "lightblue" : "transparent",
                border: selectedTab === item.id ? "2px solid blue" : "1px solid gray",
              }}
              onClick={() => handleTab(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {selectedTab !== null && (
          <div style={{ padding: "10px", border: "1px solid lightgray" }}>
            {headers.find((item) => item.id === selectedTab)?.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
