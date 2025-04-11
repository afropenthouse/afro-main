"use client"

const CampaignDetails = () => {
  // Sample campaign data - would come from API in real app
  const campaign = {
    id: 1,
    name: "Easter Holiday",
    earnings: 2840.50,
    stats: {
      usageCount: 156,
      averageSpend: 45.20,
      newCustomers: 89,
      conversionRate: 78.5
    },
    previousCampaigns: [
      { id: 2, name: "Christma Holidays", earnings: 1950.75, status: "completed" },
      { id: 3, name: "Early Bird Special", earnings: 2100.25, status: "completed" },
      { id: 4, name: "Weekend Deal", earnings: 1575.50, status: "completed" }
    ]
  };

  // Stats box component
  const StatBox = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-500">{icon}</div>
        <div className="text-sm text-gray-500 font-medium">Last 30 days</div>
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-gray-600 text-sm">{title}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Campaign Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#650928]">
            {campaign.name}
          </h1>
          <button 
            className="w-full sm:w-auto px-4 py-2.5 bg-[#650928] text-white rounded-md hover:bg-[#4a061d] transition-colors text-sm sm:text-base font-medium"
            onClick={() => console.log('Edit campaign')}
          >
            Edit Campaign
          </button>
        </div>

        {/* Wallet Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">Campaign Wallet</h2>
              <p className="text-gray-500 text-sm">Total earnings from this campaign</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="text-3xl font-bold text-[#650928]">
                ${campaign.earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatBox
            title="Total Uses"
            value={campaign.stats.usageCount}
            icon={
              <svg className="w-6 h-6 text-[#650928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <StatBox
            title="Average Customer Spend"
            value={`$${campaign.stats.averageSpend}`}
            icon={
              <svg className="w-6 h-6 text-[#650928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatBox
            title="New Customers"
            value={campaign.stats.newCustomers}
            icon={
              <svg className="w-6 h-6 text-[#650928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            }
          />
          <StatBox
            title="Conversion Rate"
            value={`${campaign.stats.conversionRate}%`}
            icon={
              <svg className="w-6 h-6 text-[#650928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
        </div>

        {/* Previous Campaigns Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Previous Campaigns</h2>
          <div className="space-y-4">
            {campaign.previousCampaigns.map((prevCampaign) => (
              <div 
                key={prevCampaign.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{prevCampaign.name}</h3>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="font-semibold text-[#650928]">
                    ${prevCampaign.earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;