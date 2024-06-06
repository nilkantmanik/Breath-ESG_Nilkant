import React, { useState } from 'react'
import DetailList from "./List/Detailist";
import { IColumn, PrimaryButton,SelectionMode } from "@fluentui/react";
import './dataentry.scss'


interface RowItem {
    month: string;
    status: string;
    completion: string;
    unit: string;
  }
  
  const Items: RowItem[] = [
    {
        month:"Jan 2023",
        status:"PENDING APPROVAL(1/12)",
        completion:"20%",
        unit:"Business Unit 1",
    },
    {
        month:"Feb 2023",
        status:"APPROVED(2/12)",
        completion:"30%",
        unit:"Business Unit 1",
    },
    {
        month:"Mar 2023",
        status:"INCOMPLETE(4/12)",
        completion:"50%",
        unit:"Business Unit 1",
    },
  ];

  const downArrow = <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.0002 5.99996L10.0602 5.05996L6.3335 8.77996V0.666626H5.00016V8.77996L1.28016 5.05329L0.333496 5.99996L5.66683 11.3333L11.0002 5.99996Z" fill="#333333"/>
  </svg>
  

const Tracker = () => {

    const [rowItems, setRowItems] = useState(Items);

    const PendingbuttonStyle = {
        backgroundColor: '#ffe6e6', 
        color: '#F04F6D', 
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '12px',
        fontWeight: 'bold',
        display: 'inline-block',
      };
      const CompletedbuttonStyle = {
        backgroundColor: '#cafccf', 
        color: '#4FA556', 
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '12px',
        fontWeight: 'bold',
        display: 'inline-block',
      };
      const InCompletbuttonStyle = {
        backgroundColor: '#fae7c0', 
        color: '#F09948', 
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '12px',
        fontWeight: 'bold',
        display: 'inline-block',
      };

    const columns: IColumn[] = [
        {
          key: "month",
          name: "Month",
          fieldName: "month",
          minWidth: 200,
          maxWidth: 250,
          isRowHeader: true,
          isMultiline: true,
          isPadded: true,
          onRenderHeader:()=>(
            <>
                MONTH {downArrow}
 
            </>
          ),
          
        },
        {
          key: "type",
          name: "STATUS",
          fieldName: "status",
          minWidth: 250,
          maxWidth: 250,
          onRenderHeader:()=>(
            <>
                STATUS {downArrow}
 
            </>
          ),
          onRender:(item:RowItem)=>(
            (() => {
                switch (item.status.charAt(0)) {
                    case "P":
                        return (
                            <button style={PendingbuttonStyle}>
                                {item.status}
                            </button>
                        );
                    case "A":
                        return (
                            <button style={CompletedbuttonStyle}>
                                {item.status}
                            </button>
                        );
                    case "I":
                        return (
                            <button style={InCompletbuttonStyle}>
                                {item.status}
                            </button>
                        );
                    default:
                        return (
                            <button style={InCompletbuttonStyle}>
                                {item.status}
                            </button>
                        );
                }
            })()
          )
        },
        {
          key: "suppliers",
          name: "COMPLETION %",
          fieldName: "completion",
          minWidth: 250,
          maxWidth: 250,
          onRenderHeader:()=>(
            <>
                COMPLETION % {downArrow}
 
            </>
          ),
          onRender:(item:RowItem)=>(

            <div>
                <span style={{fontSize:"16px",margin:"1px 46px"}}>
                {item.completion}
                </span>
            </div>
          )
          
        },
        {
          key: "unit",
          name: "BUSINESS UNIT",
          fieldName: "unit",
          minWidth: 100,
          maxWidth: 120,
          onRenderHeader:()=>(
            <>
                BUSINESS UNIT <svg width="14" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.836382 1.73996C2.18305 3.46663 4.66971 6.66663 4.66971 6.66663V10.6666C4.66971 11.0333 4.96972 11.3333 5.33638 11.3333H6.66972C7.03638 11.3333 7.33638 11.0333 7.33638 10.6666V6.66663C7.33638 6.66663 9.81638 3.46663 11.163 1.73996C11.503 1.29996 11.1897 0.666626 10.6364 0.666626H1.36305C0.809715 0.666626 0.496382 1.29996 0.836382 1.73996Z" fill="#666666"/>
</svg>
 
            </>
          ),
          onRender:(item:RowItem)=>(

            <div>
                <span style={{fontSize:"16px"}}>
                {item.unit}
                </span>
            </div>
          )
          
        },
        
      ];


  return (
    <div>

        <div style={{display:"flex"}}>
        <span className='top-btn'>

        <span className='btn-text'>PENDING TRACKERS</span>


        <span className='svg-span'>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.07 2.93L15.66 4.34C17.1 5.79 18 7.79 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.92 5.05 2.56 9 2.07V4.09C6.16 4.57 4 7.03 4 10C4 13.31 6.69 16 10 16C13.31 16 16 13.31 16 10C16 8.34 15.33 6.84 14.24 5.76L12.83 7.17C13.55 7.9 14 8.9 14 10C14 12.21 12.21 14 10 14C7.79 14 6 12.21 6 10C6 8.14 7.28 6.59 9 6.14V8.28C8.4 8.63 8 9.26 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 9.26 11.6 8.62 11 8.28V0H10C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 7.24 18.88 4.74 17.07 2.93Z" fill="#666666"/>
</svg>
        </span>

        <span className='numval'>
            45/60
        </span>


        </span>
     


        <span className='top-btn'>

        <span className='btn-text'>PENDING REVIEWS</span>


        <span className='svg-span'>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2 15.17V2H18V14Z" fill="#666666"/>
<path d="M10 13L11.57 9.57L15 8L11.57 6.43L10 3L8.43 6.43L5 8L8.43 9.57L10 13Z" fill="#666666"/>
</svg>

        </span>

        <span className='numval'>
            3
        </span>


        </span>
        
        
        </div>


        <div
        className='searchbox'>

        <span className='svg-span'>
        <svg width="13" height="26" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50326 7.50338H7.97659L7.78992 7.32338C8.44326 6.56338 8.83659 5.57671 8.83659 4.50338C8.83659 2.11004 6.89659 0.170044 4.50326 0.170044C2.10992 0.170044 0.169922 2.11004 0.169922 4.50338C0.169922 6.89671 2.10992 8.83671 4.50326 8.83671C5.57659 8.83671 6.56326 8.44338 7.32326 7.79004L7.50326 7.97671V8.50338L10.8366 11.83L11.8299 10.8367L8.50326 7.50338ZM4.50326 7.50338C2.84326 7.50338 1.50326 6.16338 1.50326 4.50338C1.50326 2.84338 2.84326 1.50338 4.50326 1.50338C6.16326 1.50338 7.50326 2.84338 7.50326 4.50338C7.50326 6.16338 6.16326 7.50338 4.50326 7.50338Z" fill="#C2C2C2"/>
</svg> 
        </span>

        <span className='span-text'>Search for a business unit</span>

        </div>

      


        

        <DetailList
        items={rowItems}
        DetailListProps={{
            columns: columns,
            setKey: "items",
            selectionMode: SelectionMode.none,
            }}
            />
    </div>
  )
}

export default Tracker