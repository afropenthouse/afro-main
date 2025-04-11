"use client"
import React, { useState } from 'react';
import './styles.scss'
import Ongoing from '../my-givings/ongoing/Ongoing';
import Volunteer from '../my-givings/volunteer/Volunteer';
import Givings from '../my-givings/givings/Givings';
import { currentClientUser } from '@/helpers/current-client-user';
import { useQuery } from '@tanstack/react-query';
import { getUserDonations } from '@/actions/project';
import { getUserGoals } from '@/actions/user';
import { getOngoingProjects } from '@/actions/project';

const Tabs = ({}) => {
  const [activeTab, setActiveTab] = useState('My Givings');
  const currentUser = currentClientUser()
  const { data: projects } = useQuery({
    queryKey: ["ongoingProjects"],
    queryFn: async () => {
      const result = await getOngoingProjects();
      if (result.error) {
        throw new Error(result.error);
      }
      return result.data;
    },
  });  
 
  const { data: userDonation } = useQuery({
    queryKey: ["userDonationStats"],
    queryFn: async () => {
      const result = await getUserDonations(currentUser.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return  result;
    },
  });  

  console.log(`userDonationStats: ${JSON.stringify(userDonation, null, 2)}`);
  console.log(`projects`, projects)


  return (
    <>
    <div className="tabs-container">
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'My Givings' ? 'active' : ''}`} 
          onClick={() => setActiveTab('My Givings')}>
          My Givings
        </div>
        <div 
          className={`tab ${activeTab === 'Ongoing Projects' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Ongoing Projects')}>
          Ongoing{}
        </div>
        <div 
          className={`tab ${activeTab === 'Volunteer Oppt.' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Volunteer Oppt.')}>
          Volunteer Oppt.
        </div>
      </div>
      <div className="tab-content">
        {/* {activeTab === 'My Givings' && <div>Content for My Givings</div>}
        {activeTab === 'Ongoing Projects' && <div>Content for Ongoing Projects</div>}
        {activeTab === 'Volunteer Oppt.' && <div>Content for Volunteer Opportunities</div>} */}
      </div>
    </div>
    {activeTab === 'My Givings' && <Givings data={userDonation.donations} />} 
    {activeTab === 'Ongoing Projects' && <Ongoing projects={projects} />}
    {activeTab === 'Volunteer Oppt.' && <Volunteer />}
    </>
  );
};

export default Tabs;
