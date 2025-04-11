import React from 'react';
import Image from 'next/image';

const TeamMembersComponent = () => {
  // Array of management team members
  const managementTeam = [
    {
      id: 1,
      name: "Ibeako Amarachi",
      position: "Group Head IT",
      image: "/amara.svg",
      bio: "Oversees the technology strategy ensuring efficient IT operations across the organization"
    },
    {
      id: 2,
      name: "Igbokwe David",
      position: "Group Creative Manager",
      image: "/david.svg",
      bio: "Leads the creative direction, branding, and design strategies across multiple projects."
    },
    {
      id: 3,
      name: "Okoro Sunday",
      position: "CEO wyrelight tech.",
      image: "/sunny.svg",
      bio: "Oversees the vision and lifecycle of a digital product across teams to drive development."
    }
  ];

  // Array of staff members
  const staffMembers = [
    {
      id: 1,
      name: "Okiemute Gold",
      position: "Frontend Developer",
      image: "/gold.svg",
      bio: "Builds and optimizes user interfaces for web and mobile applications."
    },
    {
      id: 2,
      name: "Okorie Chisom",
      position: "Product UI/UX Designer",
      image: "/chisom.svg",
      bio: "Creates intuitive and visually appealing digital experiences to enhance usability."
    }
  ];

  // Function to render team member cards
  const renderTeamMemberCards = (members) => {
    return members.map((member) => (
      <div key={member.id} className="bg-white">
        <Image 
          width={500}
          height={500}
          src={member.image} 
          alt={member.name} 
          className="w-full object-top" 
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-gray-700 mb-2">{member.position}</p>
          <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
          <div className="flex space-x-2">
            <a href="#" className="bg-gray-900 text-white p-1 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a>
            <a href="#" className="bg-gray-900 text-white p-1 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </a>
            <a href="#" className="bg-gray-900 text-white p-1 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full bg-gray-50 px-4 py-12 md:px-8 lg:px-16">
      {/* Management Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Management Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderTeamMemberCards(managementTeam)}
        </div>
      </div>

      {/* Staff Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderTeamMemberCards(staffMembers)}
          
          {/* Recruitment section - always the last item in the grid */}
          <div className="bg-[#0C0C0C] text-white flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Want to be part of our team?</h2>
            <p className="text-center mb-8">
              Join a group of passionate, talented professionals who thrive on collaboration, innovation, and making an impact. Let's build something great together.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersComponent;