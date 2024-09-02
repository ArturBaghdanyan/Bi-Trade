import React, { useState } from "react";
import styles from "./styles.module.scss";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { accordionData } from '../../../data/acccordion';

export default function HomeFreeAcc() {
  const [expandedIndexFirst, setExpandedIndexFirst] = useState(-1);
  const [expandedIndexSecond, setExpandedIndexSecond] = useState(-1);

  const expandContainer = (index, containerType) => {
    if (containerType === "first") {
      setExpandedIndexFirst(index === expandedIndexFirst ? -1 : index);
      if (index !== expandedIndexFirst && expandedIndexSecond !== -1) {
        setExpandedIndexSecond(-1);
      }
    } else if (containerType === "second") {
      setExpandedIndexSecond(index === expandedIndexSecond ? -1 : index);
      if (index !== expandedIndexSecond && expandedIndexFirst !== -1) {
        setExpandedIndexFirst(-1);
      }
    }
  };

  const renderIcon = (index, containerType) => {
    if (
      (containerType === "first" && index === expandedIndexFirst) ||
      (containerType === "second" && index === expandedIndexSecond)
    ) {
      return <CiCircleMinus style={{ color: "#00A676", fontSize: "1.5vw" }} />;
    } else {
      return <CiCirclePlus style={{ color: "white", fontSize: "1.5vw" }} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} container-spacing`}>
        <h2 className={styles.title}>
          Most Common <b style={{ color: "#00D094" }}>FAQ</b>
        </h2>
        <div className={styles.itemContainer}>
          <div className={styles.itemContainer_items}>
            {accordionData.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.itemWrapper} ${
                  index === expandedIndexFirst ? styles.expanded : ""
                }`}
                style={{
                  backgroundColor: `${
                    index === expandedIndexFirst ? "#21342F" : "#0F231D"
                  }`,
                  border: `0.1px solid ${
                    index === expandedIndexFirst ? "#00D094" : "#0F231D"
                  }`,
                }}
                onClick={() => expandContainer(index, "first")}
              >
                <div className={styles.accordion_button}>
                  <h3
                    style={{
                      color: index === expandedIndexFirst ? "#00A676" : "white",
                      transition: "0.5s",
                    }}
                    
                  >
                    {item.question}
                  </h3>
                  <div
                    className={styles.icon}
                    onClick={() => expandContainer(index, "first")}
                  >
                    {renderIcon(index, "first")}
                  </div>
                </div>
                {index === expandedIndexFirst && (
                  <div style={{ width: "80%" }}>
                    <p
                      style={{
                        marginLeft: "2vw",
                        fontSize: "1.2vw",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.itemContainer_items}>
            {accordionData.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.itemWrapper} ${
                  index === expandedIndexSecond ? styles.expanded : ""
                }`}
                style={{
                  backgroundColor: `${
                    index === expandedIndexSecond ? "#21342F" : "#0F231D"
                  }`,
                  border: `0.1px solid ${
                    index === expandedIndexSecond ? "#00D094" : "#0F231D"
                  }`,
                }}
                onClick={() => expandContainer(index, "second")}
              >
                <div className={styles.accordion_button}>
                  <h3
                   style={{
                    color: index === expandedIndexFirst ? "#00A676" : "white",
                    transition: "0.5s",
                  }}
                  >
                    {item.question}
                  </h3>
                  <div
                    className={styles.icon}
                    onClick={() => expandContainer(index, "second")}
                  >
                    {renderIcon(index, "second")}
                  </div>
                </div>
                {index === expandedIndexSecond && (
                  <div style={{ width: "80%" }}>
                    <p
                      style={{
                        marginLeft: "2vw",
                        marginTop: "0.5vw",
                        fontSize: "1vw",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
