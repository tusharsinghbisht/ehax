"use state";
import React, { useState } from "react";
import styles from "./Tab.module.css";

interface TabData {
  id: number;
  title: string;
  content: React.ReactNode
}

interface TabWindowProps {
    curr: TabData
    tabs: TabData[]
    setTabs: React.Dispatch<React.SetStateAction<TabData[]>>
}


const TabWindow = ({ curr, tabs, setTabs }: TabWindowProps) => {
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position of the window
  const [isDragging, setIsDragging] = useState(false); // Whether the window is being dragged
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // Offset of the mouse relative to the window

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tabs_without_current: TabData[]  = []
    tabs.forEach(t => {
        if (t.id != curr.id) {
            tabs_without_current.push(t)
        }
    })
    setTabs([...tabs_without_current, curr])
    // setTabs([{ id, title }, ...tabs_without_current])
    setIsDragging(true); 
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

  const closeTab = () => {
    const tabs_without_current: TabData[]  = []
    tabs.forEach(t => {
        if (t.id != curr.id) {
            tabs_without_current.push(t)
        }
    })
    setTabs(tabs_without_current)
  }

  return (
    <div
      style={{
        padding: "10px 20px",
        margin: "10px",
        cursor: "move",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className={styles.tab}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className={styles.tabTop}>
        <h3 className={styles.tabHead}>{curr.title}</h3>
        <span className={styles.tabClose} onClick={closeTab}>x</span>
      </div>

      <div className={styles.tabContent}>{curr.content}</div>
    </div>
  );
};


interface TabManagerProps {
  tabs: TabData[]
  setTabs: React.Dispatch<React.SetStateAction<TabData[]>>
}


const TabManager = ({ tabs, setTabs }: TabManagerProps) => {
  
  return (
      <>
        {tabs.map((tab) => (
          <TabWindow
            key={tab.id}
            curr={tab}
            tabs={tabs}
            setTabs={setTabs}
          />
        ))}
      </>
  );
};

export default TabManager;
