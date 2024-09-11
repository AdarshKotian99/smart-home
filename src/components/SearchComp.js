import { useState } from 'react';
import React from "react";
import Select from 'react-select'

export default function SearchComp(){
    // State to manage the selected inner div
    const [selectedDiv, setSelectedDiv] = useState(1);
    const handleDivClick = (index) => {
        setSelectedDiv(index)
    }
    
    const getDivColor = (index) => {
        return selectedDiv === index ? "#FF6646" : "white"
    }
    
    const getFontColor = (index) => {
        return selectedDiv === index ? "white" : "black"
    }

    const getFontWeight = (index) => {
        return selectedDiv === index ? "700" : ""
    }
    
    const proprtyOptions = [
        { value: 'Residential Apartment', label: 'Residential Apartment' },
        { value: 'Studio Apartment', label: 'Studio Apartment' },
        { value: 'Bungalow', label: 'Bungalow' },
        { value: 'Duplex', label: 'Duplex' }
    ]

    const locationOptions = [
        { value: 'New York City', label: 'New York City' },
        { value: 'Chicago, Illinois', label: 'Chicago, Illinois' },
        { value: 'San Francisco, California', label: 'San Francisco, California' },
        { value: 'Houston, Texas', label: 'Houston, Texas' }
    ]

    const prizeOptions = [
        { value: '$20000 - $30000', label: '$20000 - $30000' },
        { value: '$30000 - $50000', label: '$30000 - $50000' },
        { value: '$50000 - $60000', label: '$50000 - $60000' },
        { value: '$60000 - $80000', label: '$60000 - $80000' }
    ]

    return(
        <div className="search-container">
        <div className="header-items">
            <div className="header-item" onClick={() => handleDivClick(1)} style={{backgroundColor: getDivColor(1), color: getFontColor(1), fontWeight: getFontWeight(1)}}>Buy</div>
            <div className="header-item" onClick={() => handleDivClick(2)} style={{backgroundColor: getDivColor(2), color: getFontColor(2), fontWeight: getFontWeight(2)}}>Rent</div>
            <div className="header-item" onClick={() => handleDivClick(3)} style={{backgroundColor: getDivColor(3), color: getFontColor(3), fontWeight: getFontWeight(3)}}>PG/Co-Living</div>
            <div className="header-item" onClick={() => handleDivClick(4)} style={{backgroundColor: getDivColor(4), color: getFontColor(4), fontWeight: getFontWeight(4)}}>Commercial</div>
        </div>
        <div className="main-items">
        <div className="main-item">Locations
        <Select className='select-element' options={locationOptions} />
        </div>
        <div className="main-item">Property Type
        <Select options={proprtyOptions} />
        </div>
        <div className="main-item">Prize Range
        <Select options={prizeOptions} />
        </div>
        <div className="main-item-search">Search</div>
        </div>
        </div>
    )
}