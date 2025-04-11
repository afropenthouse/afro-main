"use client"
import React, { useState } from 'react';

const AllCampaigns = () => {
  // Sample campaign data - would come from API in real app
  const [campaigns] = useState([
    { 
      id: 1, 
      name: "Easter Holiday", 
      status: "running",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      usageCount: 156,
      earnings: 2840.50
    },
    { 
      id: 2, 
      name: "Early Bird Discount", 
      status: "pending",
      startDate: "2024-07-01",
      endDate: "2024-07-31",
      usageCount: 0,
      earnings: 0
    },
    { 
      id: 3, 
      name: "Christma Holidays", 
      status: "completed",
      startDate: "2024-03-01",
      endDate: "2024-04-15",
      usageCount: 234,
      earnings: 3920.75
    },
    // Add more campaigns as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusColor = (status) => {
    switch (status) {
      case 'running':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCampaigns = campaigns
    .filter(campaign => 
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'all' || campaign.status === statusFilter)
    );

  const handleCampaignClick = (campaign) => {
    if (campaign.status !== 'pending') {
      console.log('Navigate to campaign:', campaign.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#650928]">
            All Campaigns
          </h1>
          <button 
            className="w-full sm:w-auto px-6 py-2.5 bg-[#650928] text-white rounded-md hover:bg-[#4a061d] transition-colors text-sm sm:text-base font-medium"
            onClick={() => console.log('Create new campaign')}
          >
            Create New Campaign
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#650928] focus:border-[#650928]"
              />
            </div>
            {/* Status Filter */}
            <div className="w-full sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#650928] focus:border-[#650928]"
              >
                <option value="all">All Status</option>
                <option value="running">Running</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Campaigns List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {filteredCampaigns.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {filteredCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  onClick={() => handleCampaignClick(campaign)}
                  className={`
                    p-4 sm:p-6 hover:bg-gray-50 transition-colors
                    ${campaign.status !== 'pending' ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'}
                  `}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Campaign Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                      <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                        <span>
                        01/06/2024
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>{campaign.usageCount} uses</span>
                      </div>
                    </div>

                    {/* Status and Earnings */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                        {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                      </span>
                      <span className="text-lg font-semibold text-[#650928]">
                        ${campaign.earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No campaigns found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCampaigns;