import React from "react";
// import { FaHome, FaChartBar, FaBoxOpen, FaClipboardList, FaCogs, FaUsers, FaSignOutAlt } from 'react-icons/fa';
// import './Sidebar.css';
import blogo from "../assets/blogo.png";
import esgText from "../assets/esgText.jpg";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
      <div className="logo-container">
          <img src={blogo} className="blogo" />
          <img src={esgText} className="esgText" />
        </div>
      </div>

      <ul className="sidebar-menu">
        <li>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66665 4.50004H0.333313V13.6667H3.66665V4.50004Z"
              fill="white"
            />
            <path
              d="M13.6666 7.83337H10.3333V13.6667H13.6666V7.83337Z"
              fill="white"
            />
            <path
              d="M8.66665 0.333374H5.33331V13.6667H8.66665V0.333374Z"
              fill="white"
            />
          </svg>
          <span>Dashboard</span>
        </li>
        <li>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7">
              <path
                d="M2.5 2.5V9.16667H9.16667V2.5H2.5ZM7.5 7.5H4.16667V4.16667H7.5V7.5ZM2.5 10.8333V17.5H9.16667V10.8333H2.5ZM7.5 15.8333H4.16667V12.5H7.5V15.8333ZM10.8333 2.5V9.16667H17.5V2.5H10.8333ZM15.8333 7.5H12.5V4.16667H15.8333V7.5ZM10.8333 10.8333V17.5H17.5V10.8333H10.8333ZM15.8333 15.8333H12.5V12.5H15.8333V15.8333Z"
                fill="white"
              />
            </g>
          </svg>

          <span>Entity Manager</span>
        </li>
        <li className="DataManager">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1.66663C5.40002 1.66663 1.66669 5.39996 1.66669 9.99996C1.66669 14.6 5.40002 18.3333 10 18.3333C14.6 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6 1.66663 10 1.66663ZM16.6084 9.16663H10.8334V3.39163C13.8417 3.76663 16.2334 6.15829 16.6084 9.16663ZM3.33335 9.99996C3.33335 6.60829 5.88335 3.79996 9.16669 3.39163V16.6083C5.88335 16.2 3.33335 13.3916 3.33335 9.99996ZM10.8334 16.6083V10.8333H16.6084C16.2334 13.8416 13.8417 16.2333 10.8334 16.6083Z" fill="#2E9844"/>
</svg>

          <span>Data Manager</span>
        </li>
        <li>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 0.5H2.16667C1.25 0.5 0.508333 1.25 0.508333 2.16667L0.5 13.8333C0.5 14.75 1.24167 15.5 2.15833 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V5.5L10.5 0.5ZM2.16667 13.8333V2.16667H9.66667V6.33333H13.8333V13.8333H2.16667ZM5.5 4.66667C5.5 5.125 5.125 5.5 4.66667 5.5C4.20833 5.5 3.83333 5.125 3.83333 4.66667C3.83333 4.20833 4.20833 3.83333 4.66667 3.83333C5.125 3.83333 5.5 4.20833 5.5 4.66667ZM5.5 8C5.5 8.45833 5.125 8.83333 4.66667 8.83333C4.20833 8.83333 3.83333 8.45833 3.83333 8C3.83333 7.54167 4.20833 7.16667 4.66667 7.16667C5.125 7.16667 5.5 7.54167 5.5 8ZM5.5 11.3333C5.5 11.7917 5.125 12.1667 4.66667 12.1667C4.20833 12.1667 3.83333 11.7917 3.83333 11.3333C3.83333 10.875 4.20833 10.5 4.66667 10.5C5.125 10.5 5.5 10.875 5.5 11.3333Z" fill="white"/>
</svg>

          <span>Reporting</span>
        </li>
        <li>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 4.83358L7.33333 1.50024L16.5 4.83358M1.5 4.83358V9.00024L10.6667 12.3336L16.5 9.00024V4.83358M1.5 4.83358L10.6667 8.16691L16.5 4.83358" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>

          <span>Materiality</span>
        </li>
        <li>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.42502 7.32496C9.42502 5.94996 8.30002 4.82496 6.92502 4.82496C5.55002 4.82496 4.42502 5.94996 4.42502 7.32496C4.42502 8.69996 5.55002 9.82496 6.92502 9.82496C8.30002 9.82496 9.42502 8.69996 9.42502 7.32496ZM6.92502 8.15829C6.46669 8.15829 6.09169 7.78329 6.09169 7.32496C6.09169 6.86663 6.46669 6.49163 6.92502 6.49163C7.38335 6.49163 7.75835 6.86663 7.75835 7.32496C7.75835 7.78329 7.38335 8.15829 6.92502 8.15829ZM12.3417 9.82496C13.2667 9.82496 14.0084 9.08329 14.0084 8.15829C14.0084 7.23329 13.2667 6.49163 12.3417 6.49163C11.4167 6.49163 10.6667 7.23329 10.675 8.15829C10.675 9.08329 11.4167 9.82496 12.3417 9.82496ZM9.00002 0.666626C4.40002 0.666626 0.666687 4.39996 0.666687 8.99996C0.666687 13.6 4.40002 17.3333 9.00002 17.3333C13.6 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6 0.666626 9.00002 0.666626ZM3.87502 13.2583C4.44169 12.8083 5.76669 12.3333 6.92502 12.3333C6.98335 12.3333 7.05002 12.3416 7.11669 12.3416C7.31669 11.8083 7.67502 11.2666 8.20002 10.7916C7.73335 10.7083 7.29169 10.6583 6.92502 10.6583C5.84169 10.6583 4.10002 11.0333 2.98335 11.85C2.56669 10.9833 2.33335 10.0166 2.33335 8.99163C2.33335 5.31663 5.32502 2.32496 9.00002 2.32496C12.675 2.32496 15.6667 5.31663 15.6667 8.99163C15.6667 9.99163 15.4417 10.9416 15.0417 11.8C14.2084 11.3083 13.075 11.075 12.3417 11.075C11.075 11.075 8.59169 11.75 8.59169 13.325V15.6416C6.70002 15.5333 5.01669 14.6333 3.87502 13.2583Z" fill="white"/>
</svg>

          <span>Suppliers</span>
        </li>
        <li>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7166 6.90829L9.99998 6.12496L11.7166 5.34163L12.5 3.62496L13.2833 5.34163L15 6.12496L13.2833 6.90829L12.5 8.62496L11.7166 6.90829ZM3.33331 10.2916L4.11665 8.57496L5.83331 7.79163L4.11665 7.00829L3.33331 5.29163L2.54998 7.00829L0.833313 7.79163L2.54998 8.57496L3.33331 10.2916ZM7.08331 6.12496L7.99165 4.11663L9.99998 3.20829L7.99165 2.29996L7.08331 0.291626L6.17498 2.29996L4.16665 3.20829L6.17498 4.11663L7.08331 6.12496ZM3.74998 15.7083L8.74998 10.7L12.0833 14.0333L19.1666 6.06663L17.9916 4.89163L12.0833 11.5333L8.74998 8.19996L2.49998 14.4583L3.74998 15.7083Z" fill="white"/>
</svg>

          <span>Analytics</span>
        </li>
        <li>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8917 3.10829L13.7167 4.28329C14.9167 5.49163 15.6667 7.15829 15.6667 8.99996C15.6667 12.6833 12.6834 15.6666 9.00002 15.6666C5.31669 15.6666 2.33335 12.6833 2.33335 8.99996C2.33335 5.59996 4.87502 2.79996 8.16669 2.39163V4.07496C5.80002 4.47496 4.00002 6.52496 4.00002 8.99996C4.00002 11.7583 6.24169 14 9.00002 14C11.7584 14 14 11.7583 14 8.99996C14 7.61663 13.4417 6.36663 12.5334 5.46663L11.3584 6.64163C11.9584 7.24996 12.3334 8.08329 12.3334 8.99996C12.3334 10.8416 10.8417 12.3333 9.00002 12.3333C7.15835 12.3333 5.66669 10.8416 5.66669 8.99996C5.66669 7.44996 6.73335 6.15829 8.16669 5.78329V7.56663C7.66669 7.85829 7.33335 8.38329 7.33335 8.99996C7.33335 9.91663 8.08335 10.6666 9.00002 10.6666C9.91669 10.6666 10.6667 9.91663 10.6667 8.99996C10.6667 8.38329 10.3334 7.84996 9.83335 7.56663V0.666626H9.00002C4.40002 0.666626 0.666687 4.39996 0.666687 8.99996C0.666687 13.6 4.40002 17.3333 9.00002 17.3333C13.6 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 6.69996 16.4 4.61663 14.8917 3.10829Z" fill="white"/>
</svg>

          <span>Targets</span>
        </li>
        <li className="logout">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1667 4.66667L10.9917 5.84167L12.3083 7.16667H5.5V8.83333H12.3083L10.9917 10.15L12.1667 11.3333L15.5 8L12.1667 4.66667ZM2.16667 2.16667H8V0.5H2.16667C1.25 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H8V13.8333H2.16667V2.16667Z" fill="#ED6262"/>
</svg>

          <span>Logout</span>
        </li> 
      </ul>
    </div>
  );
};

export default Sidebar;