import React, { useState } from "react";
import DetailList from "./List/Detailist";
import { IColumn, PrimaryButton,SelectionMode } from "@fluentui/react";

import DeleteIcon from "../assets/DeleteIcon.png";

import './dataentry.scss'

interface AssessmentRow {
  title: string;
  type: string;
  suppliers: number;
  score: number;
  classification: string;
  status: string;
  result: string;
}

const Items: AssessmentRow[] = [
  {
    title: "Assesment 1",
    type: "BRSR",
    suppliers: 20,
    score: 0,
    classification: "Medium",
    status: "Pending",
    result: "View",
  },
  {
    title: "Assesment 2",
    type: "BRSR",
    suppliers: 25,
    score: 98,
    classification: "Low",
    status: "complete",
    result: "View",
  },
  {
    title: "Assesment 3",
    type: "BRSR",
    suppliers: 35,
    score: 22,
    classification: "High",
    status: "complete",
    result: "View",
  },
  {
    title: "Assesment 3",
    type: "Custom",
    suppliers: 49,
    score: 23,
    classification: "Medium",
    status: "complete",
    result: "View",
  },
  {
    title: "Assesment 3",
    type: "Custom",
    suppliers: 100,
    score: 42,
    classification: "Medium",
    status: "complete",
    result: "View",
  },
];

const DataEntry = () => {
  const [rowItems, setRowItems] = useState(Items);

  const PendingbuttonStyle = {
    backgroundColor: '#ffe6e6', 
    color: '#F04F6D', 
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'inline-block',
  };
  const CompletedbuttonStyle = {
    backgroundColor: '#cafccf', 
    color: '#4FA556', 
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'inline-block',
  };

  const columns: IColumn[] = [
    {
      key: "title",
      name: "Title",
      fieldName: "title",
      minWidth: 200,
      maxWidth: 230,
      isRowHeader: true,
      isMultiline: true,
      isPadded: true,
      onRenderHeader: () => (
        <div style={{ display: 'flex', alignItems: 'center',gap:"20px" }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
            fill="#4FA556"
          />
        </svg>
        <span style={{ marginLeft: '8px' }}>ASSESSMENT TITLE</span>
      </div>
      ),
      onRender: (item: AssessmentRow) => (

        <div style={{ display: 'flex', alignItems: 'center',gap:"20px" }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
            fill="#4FA556"
          />
        </svg>
        <span style={{ marginLeft: '8px',color:"#4FA556" }}>{item.title}</span>
      </div>
      ),
    },
    {
      key: "type",
      name: "TYPE",
      fieldName: "type",
      minWidth: 100,
      maxWidth: 120,
    },
    {
      key: "suppliers",
      name: "NO. OF SUPPLIERS",
      fieldName: "suppliers",
      minWidth: 100,
      maxWidth: 120,
    },
    {
      key: "score",
      name: "SCORE",
      fieldName: "score",
      minWidth: 70,
      maxWidth: 90,
    },
    {
      key: "classification",
      name: "RISK CLASSIFICATION",
      fieldName: "classification",
      minWidth: 120,
      maxWidth: 150,
      onRender: (item: AssessmentRow) => {
        let circleClass = '';
        switch (item.classification.toLowerCase()) {
          case 'medium':
            circleClass = 'circle-medium';
            break;
          case 'low':
            circleClass = 'circle-low';
            break;
          case 'high':
            circleClass = 'circle-high';
            break;
          default:
            circleClass = '';
        }
        return (
          <div className="label-container">
            <span className={`circle ${circleClass}`}></span>
            <span>{item.classification}</span>
          </div>
        );
      },
    },
    {
      key: "status",
      name: "STATUS",
      fieldName: "status",
      minWidth: 100,
      maxWidth: 120,
      onRender:(item:AssessmentRow) =>(
        <div>
            {item.status == "Pending" ?
            (

                <button style={PendingbuttonStyle}>
      Pending
    </button>
            ):(

                <button style={CompletedbuttonStyle}>
      Completed
    </button>
            )
        }

        </div>
      )
    },
    {
      key: "result",
      name: "RESULT",
      fieldName: "result",
      minWidth: 100,
      maxWidth: 120,
      onRender:(item:AssessmentRow)=>(

        <div>

            <span style={{fontSize:"18px",color:"#4FA556"}}>{item.result}</span>
        </div>
      )
    },
    {
      key: "actions",
      name: "ACTIONS",
      minWidth: 150,
      maxWidth: 200,

      onRender: (item?: AssessmentRow) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div onClick={console.log(item)!}>
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.44181 10.6921L8.75757 10.8759L9.0286 10.6309C9.2929 10.392 9.62951 10.2467 10 10.2467C10.7972 10.2467 11.4467 10.8961 11.4467 11.6933C11.4467 12.4905 10.7972 13.14 10 13.14C9.20281 13.14 8.55333 12.4905 8.55333 11.6933C8.55333 11.5914 8.56733 11.4839 8.59307 11.3758L8.67891 11.0152L8.3589 10.8283L3.61224 8.05494L3.29224 7.86797L3.0203 8.11977C2.74562 8.3741 2.39136 8.52665 2 8.52665C1.16948 8.52665 0.5 7.85718 0.5 7.02665C0.5 6.19613 1.16948 5.52665 2 5.52665C2.39136 5.52665 2.74562 5.67921 3.0203 5.93353L3.29197 6.18508L3.61182 5.99861L8.31182 3.25861L8.62579 3.07557L8.54859 2.72044C8.51763 2.57804 8.5 2.46609 8.5 2.35999C8.5 1.52946 9.16948 0.859985 10 0.859985C10.8305 0.859985 11.5 1.52946 11.5 2.35999C11.5 3.19051 10.8305 3.85999 10 3.85999C9.60864 3.85999 9.25438 3.70743 8.9797 3.45311L8.70804 3.20156L8.38818 3.38803L3.68818 6.12803L3.37421 6.31107L3.45141 6.6662C3.48237 6.8086 3.5 6.92055 3.5 7.02665C3.5 7.13275 3.48237 7.24471 3.45141 7.3871L3.37415 7.7425L3.68848 7.92545L8.44181 10.6921ZM11.1667 2.35999C11.1667 1.71718 10.6428 1.19332 10 1.19332C9.35719 1.19332 8.83333 1.71718 8.83333 2.35999C8.83333 3.00279 9.35719 3.52665 10 3.52665C10.6428 3.52665 11.1667 3.00279 11.1667 2.35999ZM0.833333 7.02665C0.833333 7.66946 1.35719 8.19332 2 8.19332C2.64281 8.19332 3.16667 7.66946 3.16667 7.02665C3.16667 6.38384 2.64281 5.85999 2 5.85999C1.35719 5.85999 0.833333 6.38384 0.833333 7.02665ZM8.83333 11.7067C8.83333 12.3495 9.35719 12.8733 10 12.8733C10.6428 12.8733 11.1667 12.3495 11.1667 11.7067C11.1667 11.0638 10.6428 10.54 10 10.54C9.35719 10.54 8.83333 11.0638 8.83333 11.7067Z"
                stroke="#9F9F9F"
              />
            </svg>
          </div>
          <div>
            <img
              src={DeleteIcon}
              style={{ height: "2rem", width: "1.5rem", marginBottom: "2px" }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DetailList
        items={rowItems}
        DetailListProps={{
          columns: columns,
          setKey: "items",
          selectionMode: SelectionMode.none,
        }}
      />
    </div>
  );
};

export default DataEntry;
