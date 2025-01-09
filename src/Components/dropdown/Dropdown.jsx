import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
const Dropdown = () => {
   
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);

    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.toLocaleString('en-US', { weekday: 'long' }); 
        const dateNum = date.getDate(); 
        const month = date.toLocaleString('en-US', { month: 'long' });

        return `${day}, ${dateNum}th ${month}`;
    };

 
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value); 
    };

 
    const openDatePicker = () => {
    };

    return (
        <div className="dropdown">
            
            <div className="dropdown-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                
                <div className="dropdown-header" onClick={openDatePicker} style={{ cursor: 'pointer' }}>
                    <span>{formatDate(selectedDate)}</span>
                    <FaCaretDown style={{ marginLeft: '10px', cursor: 'pointer' }} />
                </div>

               
                <input
                    type="date"
                    id="date-input"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="date-input"
                    style={{
                        position: 'absolute',  
                        opacity: 0,            
                        pointerEvents: 'auto', 
                        width: '0',            
                        height: '0',           
                        zIndex: 10,            
                    }}
                />
            </div>
        </div>
    );
};

export default Dropdown;
