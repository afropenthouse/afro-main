import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const DatePicker = ({ selectedDate, onChange }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(selectedDate || today); // Current date for the calendar display
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  // Get month and year for header
  const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  // Previous month
  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Next month
  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Toggle month picker
  const toggleMonthPicker = () => {
    setShowMonthPicker(!showMonthPicker);
    setShowYearPicker(false);
  };

  // Toggle year picker
  const toggleYearPicker = () => {
    setShowYearPicker(!showYearPicker);
    setShowMonthPicker(false);
  };

  // Handle month selection
  const selectMonth = (monthIndex) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(monthIndex);
    setCurrentDate(newDate);
    setShowMonthPicker(false);
  };

  // Handle year selection
  const selectYear = (year) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    setCurrentDate(newDate);
    setShowYearPicker(false);
  };

  // Create calendar days
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDayOfMonth = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
    const days = [];
    
    // Get last month's days for padding the first week
    const lastMonthDays = getDaysInMonth(
      currentDate.getMonth() === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear(),
      currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1
    );
    
    // Add last month's days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: lastMonthDays - i,
        currentMonth: false,
        date: new Date(
          currentDate.getMonth() === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear(),
          currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1,
          lastMonthDays - i
        ),
      });
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
      });
    }
    
    // Add next month's days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        currentMonth: false,
        date: new Date(
          currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear(),
          currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1,
          i
        ),
      });
    }
    
    return days;
  };
  const isSelected = (date) => {
    const targetDate = selectedDate || today;
    return (
      date.getDate() === targetDate.getDate() &&
      date.getMonth() === targetDate.getMonth() &&
      date.getFullYear() === targetDate.getFullYear()
    );
  };
  

  const handleDateClick = (date) => {
    if (onChange) {
      onChange(date);
    }
  };

  // Generate list of months
  const months = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];

  // Generate list of years (current year ±10 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  const days = renderCalendar();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 relative">
        <button onClick={prevMonth} className="p-2">
          <IoChevronBack className="text-gray-600" size={20} />
        </button>
        <div 
          className="text-base font-medium cursor-pointer"
          onClick={() => toggleMonthPicker()}
        >
          {monthYear}
        </div>
        <button onClick={nextMonth} className="p-2">
          <IoChevronForward className="text-gray-600" size={20} />
        </button>

        {/* Month Picker */}
        {showMonthPicker && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-10 w-64">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium">Select Month</h2>
              <button onClick={() => toggleYearPicker()} className="text-red-800 font-medium">
                {currentDate.getFullYear()}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {months.map((month, index) => (
                <div
                  key={month}
                  className={`p-2 text-center cursor-pointer rounded ${
                    currentDate.getMonth() === index ? 'bg-red-800 text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => selectMonth(index)}
                >
                  {month.substr(0, 3)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Year Picker */}
        {showYearPicker && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-10 w-64">
            <h2 className="font-medium mb-2">Select Year</h2>
            <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
              {years.map((year) => (
                <div
                  key={year}
                  className={`p-2 text-center cursor-pointer rounded ${
                    currentDate.getFullYear() === year ? 'bg-red-800 text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => selectYear(year)}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        <div className="text-gray-500 text-xs">S</div>
        <div className="text-gray-500 text-xs">M</div>
        <div className="text-gray-500 text-xs">T</div>
        <div className="text-gray-500 text-xs">W</div>
        <div className="text-gray-500 text-xs">T</div>
        <div className="text-gray-500 text-xs">F</div>
        <div className="text-gray-500 text-xs">S</div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((dayObj, index) => (
          <div
            key={index}
            onClick={() => dayObj.currentMonth && handleDateClick(dayObj.date)}
            className={`
              p-2 text-center cursor-pointer text-sm
              ${dayObj.currentMonth ? 'text-black' : 'text-gray-300'}
              ${isSelected(dayObj.date) && dayObj.currentMonth ? 'bg-red-800 text-white rounded-md' : ''}
            `}
          >
            {dayObj.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;