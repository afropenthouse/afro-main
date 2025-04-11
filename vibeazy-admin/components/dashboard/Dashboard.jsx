"use client"
import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiHomeCircle } from "react-icons/bi";
import { VscListFilter } from "react-icons/vsc";
import { RiExpandUpDownLine } from "react-icons/ri";
import { FiUsers, FiDollarSign, FiShoppingBag, FiMapPin } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { FaNairaSign } from "react-icons/fa6";
import Image from "next/image";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  // Your existing stats and getStatusStyle function remain the same
  const stats = [
    { 
      title: "Total Users", 
      value: "5,234", 
      icon: <FiUsers className="w-6 h-6" />,
      change: "+12.5%",
      trend: "up"
    },
    { 
      title: "Total Transaction Volume", 
      value: "5,234", 
      icon: <FiUsers className="w-6 h-6" />,
      change: "+12.5%",
      trend: "up"
    },
    { 
      title: "Total Discont Revenue", 
      value: "₦42.5K", 
      icon: <FaNairaSign className="w-6 h-6" />,
      change: "+8.2%",
      trend: "up"
    },
    { 
      title: "Total Discont Profit", 
      value: "₦42.5K", 
      icon: <FaNairaSign className="w-6 h-6" />,
      change: "+8.2%",
      trend: "up"
    },
    { 
      title: "Total Transactions", 
      value: "1,234", 
      icon: <FiShoppingBag className="w-6 h-6" />,
      change: "+18.3%",
      trend: "up"
    },
    { 
      title: "Active Discount Venues", 
      value: "85", 
      icon: <FiMapPin className="w-6 h-6" />,
      change: "+5.4%",
      trend: "up"
    },
    { 
      title: "Active Venues", 
      value: "85", 
      icon: <FiMapPin className="w-6 h-6" />,
      change: "+5.4%",
      trend: "up"
    },
  ];
  const transactions = [
    {
      id: 1,
      amount: "$150.00",
      email: "user1@example.com",
      date: "2024-10-25",
      venue: "Club Paradise",
      status: "completed"
    },
    {
      id: 2,
      amount: "$85.50",
      email: "user2@example.com",
      date: "2024-10-24",
      venue: "The Lounge",
      status: "pending"
    },
    {
      id: 3,
      amount: "$220.00",
      email: "user3@example.com",
      date: "2024-10-24",
      venue: "Skybar",
      status: "completed"
    },
    {
      id: 4,
      amount: "$175.25",
      email: "user4@example.com",
      date: "2024-10-23",
      venue: "The Plaza",
      status: "failed"
    },
    {
      id: 5,
      amount: "$195.75",
      email: "user5@example.com",
      date: "2024-10-23",
      venue: "Club Paradise",
      status: "completed"
    },
    {
      id: 6,
      amount: "$132.00",
      email: "user6@example.com",
      date: "2024-10-22",
      venue: "Skybar",
      status: "pending"
    },
    {
      id: 7,
      amount: "$245.50",
      email: "user7@example.com",
      date: "2024-10-22",
      venue: "The Lounge",
      status: "completed"
    },
    {
      id: 8,
      amount: "$168.75",
      email: "user8@example.com",
      date: "2024-10-21",
      venue: "The Plaza",
      status: "completed"
    },
    {
      id: 9,
      amount: "$92.25",
      email: "user9@example.com",
      date: "2024-10-21",
      venue: "Club Paradise",
      status: "failed"
    },
    {
      id: 10,
      amount: "$178.50",
      email: "user10@example.com",
      date: "2024-10-20",
      venue: "Skybar",
      status: "completed"
    },
    {
      id: 11,
      amount: "$156.25",
      email: "user11@example.com",
      date: "2024-10-20",
      venue: "The Lounge",
      status: "pending"
    },
    {
      id: 12,
      amount: "$210.75",
      email: "user12@example.com",
      date: "2024-10-19",
      venue: "The Plaza",
      status: "completed"
    },
    {
      id: 13,
      amount: "$145.00",
      email: "user13@example.com",
      date: "2024-10-19",
      venue: "Club Paradise",
      status: "completed"
    },
    {
      id: 14,
      amount: "$189.25",
      email: "user14@example.com",
      date: "2024-10-18",
      venue: "Skybar",
      status: "failed"
    },
    {
      id: 15,
      amount: "$167.50",
      email: "user15@example.com",
      date: "2024-10-18",
      venue: "The Lounge",
      status: "completed"
    },
    {
      id: 16,
      amount: "$198.75",
      email: "user16@example.com",
      date: "2024-10-17",
      venue: "The Plaza",
      status: "pending"
    },
    {
      id: 17,
      amount: "$134.25",
      email: "user17@example.com",
      date: "2024-10-17",
      venue: "Club Paradise",
      status: "completed"
    },
    {
      id: 18,
      amount: "$223.50",
      email: "user18@example.com",
      date: "2024-10-16",
      venue: "Skybar",
      status: "completed"
    },
    {
      id: 19,
      amount: "$176.00",
      email: "user19@example.com",
      date: "2024-10-16",
      venue: "The Lounge",
      status: "failed"
    },
    {
      id: 20,
      amount: "$201.25",
      email: "user20@example.com",
      date: "2024-10-15",
      venue: "The Plaza",
      status: "completed"
    },
    {
      id: 21,
      amount: "$143.75",
      email: "user21@example.com",
      date: "2024-10-15",
      venue: "Club Paradise",
      status: "pending"
    },
    {
      id: 22,
      amount: "$187.00",
      email: "user22@example.com",
      date: "2024-10-14",
      venue: "Skybar",
      status: "completed"
    },
    {
      id: 23,
      amount: "$154.50",
      email: "user23@example.com",
      date: "2024-10-14",
      venue: "The Lounge",
      status: "completed"
    },
    {
      id: 24,
      amount: "$212.25",
      email: "user24@example.com",
      date: "2024-10-13",
      venue: "The Plaza",
      status: "failed"
    },
    {
      id: 25,
      amount: "$165.75",
      email: "user25@example.com",
      date: "2024-10-13",
      venue: "Club Paradise",
      status: "completed"
    },
    {
      id: 26,
      amount: "$198.00",
      email: "user26@example.com",
      date: "2024-10-12",
      venue: "Skybar",
      status: "pending"
    },
    {
      id: 27,
      amount: "$178.25",
      email: "user27@example.com",
      date: "2024-10-12",
      venue: "The Lounge",
      status: "completed"
    },
    {
      id: 28,
      amount: "$156.50",
      email: "user28@example.com",
      date: "2024-10-11",
      venue: "The Plaza",
      status: "completed"
    },
    {
      id: 29,
      amount: "$189.75",
      email: "user29@example.com",
      date: "2024-10-11",
      venue: "Club Paradise",
      status: "failed"
    },
    {
      id: 30,
      amount: "$167.00",
      email: "user30@example.com",
      date: "2024-10-10",
      venue: "Skybar",
      status: "completed"
    }
  ];

  const getStatusStyle = (status) => {
    const styles = {
      completed: "bg-green-100 text-green-800 border-green-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      failed: "bg-red-100 text-red-800 border-red-200"
    };
    return styles[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  // Pagination logic
  const getPaginatedData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (data) => {
    return Math.ceil(data.length / itemsPerPage);
  };

  // Filter transactions based on search term
  const getFilteredTransactions = (transactions) => {
    if (!searchTerm) return transactions;
    
    return transactions.filter(transaction => 
      transaction.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Handle page changes
  const handlePageChange = (newPage, totalPages) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Get the data to display
  const getDisplayData = (transactions) => {
    const filteredData = getFilteredTransactions(transactions);
    const totalPages = getTotalPages(filteredData);
    const paginatedData = getPaginatedData(filteredData);
    
    return {
      data: paginatedData,
      totalItems: filteredData.length,
      totalPages,
      startIndex: (currentPage - 1) * itemsPerPage + 1,
      endIndex: Math.min(currentPage * itemsPerPage, filteredData.length)
    };
  };

  // Component for rendering the pagination controls
  const PaginationControls = ({ totalPages, currentPage, onPageChange }) => (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-500">
        Showing {currentPage === totalPages && totalPages > 0 ? 'last' : currentPage} page of {totalPages}
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => onPageChange(currentPage - 1, totalPages)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded border border-gray-200 text-sm ${
            currentPage === 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        <button 
          onClick={() => onPageChange(currentPage + 1, totalPages)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded border border-gray-200 text-sm ${
            currentPage === totalPages 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );

  // Example of how to use the pagination in your table section
  const renderTransactionTable = (transactions) => {
    const { data, totalItems, totalPages, startIndex, endIndex } = getDisplayData(transactions);
    
    return (
      <>
        {/* Your existing table header and structure remains the same */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{transaction.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{transaction.email}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{transaction.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{transaction.venue}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Transaction Cards */}
        <div className="sm:hidden divide-y divide-gray-200">
          {data.map((transaction) => (
            <div key={transaction.id} className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm font-medium text-gray-900">{transaction.amount}</span>
                  <p className="text-xs text-gray-500 mt-1">{transaction.email}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{transaction.venue}</span>
                <span>{transaction.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {startIndex} to {endIndex} of {totalItems} entries
            </div>
            <PaginationControls 
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 shift">
      {/* Your existing navigation and header code remains the same */}
      <nav className="sticky top-0 z-50 bg-[#650928] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <HiOutlineUser className="w-6 h-6" />
                <span className="font-medium hidden sm:inline">Dashboard</span>
              </div>
              
              <div className="hidden md:flex items-center bg-white/10 rounded-lg px-3 py-2">
                <CiSearch className="text-white/70" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none ml-2 w-48 text-white placeholder-white/70"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full hover:bg-white/10">
                <IoIosNotificationsOutline className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                  <Image width={100} height={100} src="/Image.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <HiChevronDown className="w-4 h-4 hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Your existing header and stats grid code remains the same */}
        {/* ... */} {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back!</h1>
            <p className="text-gray-500">Here's what's happening at Vibeazy today.</p>
          </div>
          <button className="px-4 py-2 bg-[#650928] text-white rounded-lg hover:bg-[#4a061d] transition-colors">
            Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#650928]/10 rounded-lg text-[#650928]">
                  {stat.icon}
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Transactions Section */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <p className="text-sm text-gray-500">Showing last 30 days transactions</p>
              </div>
              
              {/* Desktop Filters */}
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <CiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions"
                    className="bg-transparent border-none outline-none ml-2 w-40"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="flex items-center gap-2 px-3 py-2 text-[#650928] hover:bg-[#650928]/10 rounded-lg transition-colors">
                  <VscListFilter />
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-[#650928] hover:bg-[#650928]/10 rounded-lg transition-colors">
                  <RiExpandUpDownLine />
                  <span>Sort</span>
                </button>
              </div>

              {/* Mobile Filters Toggle */}
              <button 
                className="sm:hidden flex items-center gap-2 px-3 py-2 text-[#650928]"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                <VscListFilter />
                <span>Filters</span>
                <HiChevronDown className={`transform transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Mobile Filters Panel */}
            <div className={`sm:hidden space-y-4 mt-4 ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <CiSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions"
                  className="bg-transparent border-none outline-none ml-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-[#650928] bg-[#650928]/10 rounded-lg">
                  Sort
                </button>
                <button className="flex-1 py-2 text-[#650928] bg-[#650928]/10 rounded-lg">
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Render the transaction table with pagination */}
          {renderTransactionTable(transactions)} {/* You'll pass your transactions array here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;