"use client"

const CampaignsOverview = () => {
  // Sample campaign data - in real app, this would come from an API
  const campaigns = {
    running: [
      { id: 1, name: "Easter Holiday", state: "running" },
      { id: 2, name: "Weekend Happy Hours", state: "running" },
    ],
    pending: [
      { id: 3, name: "Early Bird Discount", state: "pending" },
      { id: 4, name: "Student Deals", state: "pending" },
    ],
    completed: [
      { id: 5, name: "Christma Holidays", state: "completed" },
      { id: 6, name: "New Year Special", state: "completed" },
    ]
  };

  const handleCardClick = (campaign) => {
    if (campaign.state !== 'pending') {
      // In a real app, this would use your routing system
      console.log(`Navigating to campaign ${campaign.id}`);
    }
  };

  const CampaignCard = ({ campaign }) => {
    const isPending = campaign.state === 'pending';
    
    return (
      <div 
        onClick={() => handleCardClick(campaign)}
        className={`flex justify-between items-center p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-100
          ${!isPending ? 'cursor-pointer hover:shadow-md transition-shadow' : 'opacity-70 cursor-not-allowed'}
        `}
      >
        <span className="text-gray-800 font-medium">{campaign.name}</span>
        
        {/* State Icons */}
        {campaign.state === 'running' && (
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
        {campaign.state === 'pending' && (
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        {campaign.state === 'completed' && (
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
    );
  };

  const CampaignSection = ({ title, campaigns, state }) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-3">
        {campaigns.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-8">
          <h1 className="text-2xl font-bold text-[#650928] text-center sm:text-left">
            All Campaigns
          </h1>
          
          {/* Button container that spans full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto px-4 py-2.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium"
              onClick={() => console.log('View all campaigns')}
            >
              View All Campaigns
            </button>
            <button 
              className="w-full sm:w-auto px-4 py-2.5 bg-[#650928] text-white rounded-md hover:bg-[#4a061d] transition-colors text-sm sm:text-base font-medium"
              onClick={() => console.log('Create new campaign')}
            >
              Create New Campaign
            </button>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="space-y-8">
          {/* Running Campaigns */}
          <CampaignSection 
            title="Running Campaigns" 
            campaigns={campaigns.running}
          />

          {/* Pending Campaigns */}
          <CampaignSection 
            title="Pending Campaigns" 
            campaigns={campaigns.pending}
          />

          {/* Completed Campaigns */}
          <CampaignSection 
            title="Previous Campaigns" 
            campaigns={campaigns.completed}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignsOverview;