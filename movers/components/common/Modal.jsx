"use client"
import React, { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { FaHome, FaBuilding, FaWarehouse, FaBox } from 'react-icons/fa';
import DatePicker from './Date';
import useModalStore from '@/store/useModalStore';

const MovingForm = () => {
  const { isOpen, closeModal } = useModalStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    movingFrom: '',
    movingTo: '',
    propertySize: '',
    moveDate: null,
    firstName: 'Samson',
    email: '',
    phone: '',
    phoneCountryCode: '+234',
    organization: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, moveDate: date });
  };

  const handlePropertySizeSelect = (size) => {
    setFormData({ ...formData, propertySize: size });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // On the last step, submit the form
      console.log("Form data submitted:", formData);
      closeModal();
      // Reset form state for next opening
      setCurrentStep(0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepOne = () => (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-1">Where are you moving to?</h2>
      <p className="text-gray-600 text-sm mb-5">Tell us about your move</p>
      
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1 text-sm">Moving From</label>
        <input
          type="text"
          name="movingFrom"
          value={formData.movingFrom}
          onChange={handleInputChange}
          placeholder="Current suburb / postcode"
          className="w-full p-3 bg-gray-100 rounded-md text-sm"
        />
      </div>
      
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-1 text-sm">Moving To</label>
        <input
          type="text"
          name="movingTo"
          value={formData.movingTo}
          onChange={handleInputChange}
          placeholder="New City"
          className="w-full p-3 bg-gray-100 rounded-md text-sm"
        />
      </div>
    </div>
  );

  const StepTwo = () => (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-1">Just a few more questions</h2>
      <p className="text-gray-600 text-sm mb-5">What size is your current location</p>
      
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div 
          className={`flex flex-col items-center ${formData.propertySize === '1 Bedroom' ? 'opacity-100' : 'opacity-80'}`}
          onClick={() => handlePropertySizeSelect('1 Bedroom')}
        >
          <div className="bg-gray-200 p-3 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
          <svg width="53" height="44" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.10992 0H45.7441L52.1831 12.878H0.670898L7.10992 0Z" fill="#8E5745"/>
<path d="M47.8903 12.8784H4.53418V44.0004H47.8903V12.8784Z" fill="#70ADB3"/>
<path d="M43.5986 19.6387H32.5449V43.9996H43.5986V19.6387Z" fill="#A25641"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.0429 33.2679C42.6331 33.2679 43.1161 32.785 43.1161 32.1948C43.1161 31.6045 42.6331 31.1216 42.0429 31.1216C41.4527 31.1216 40.9697 31.6045 40.9697 32.1948C40.9697 32.785 41.4527 33.2679 42.0429 33.2679Z" fill="#414042"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9682 33.7514H10.3828V18.7271H25.4072V33.7514H18.9682Z" fill="#D1D3D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5293 20.8735H16.822V25.1662H12.5293V20.8735ZM12.5293 27.3126H16.822V31.6052H12.5293V27.3126ZM18.9683 20.8735H23.261V25.1662H18.9683V20.8735ZM18.9683 27.3126H23.261V31.6052H18.9683V27.3126Z" fill="#00AEEF"/>
<path d="M26.5339 33.751H9.25586V35.4144H26.5339V33.751Z" fill="#A25641"/>
</svg>

          </div>
          <span className="text-center text-xs">1 Bedroom</span>
        </div>
        
        <div 
          className={`flex flex-col items-center ${formData.propertySize === '2-3 Bedroom' ? 'opacity-100' : 'opacity-80'}`}
          onClick={() => handlePropertySizeSelect('2-3 Bedroom')}
        >
          <div className="bg-gray-200 p-3 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
          <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 6.25H43.75L50 18.75H0L6.25 6.25Z" fill="#8E5745"/>
<path d="M45.8851 18.75H3.80176V48.9583H45.8851V18.75Z" fill="#70ADB3"/>
<path d="M16.667 1.04199H10.417V11.4587H16.667V1.04199Z" fill="#B29867"/>
<path d="M17.7083 0H9.375V3.125H17.7083V0Z" fill="#A25641"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5628 39.012H8.22949V24.4287H22.8128V39.012H16.5628Z" fill="#D1D3D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3125 26.5117H14.4792V30.6784H10.3125V26.5117ZM10.3125 32.7617H14.4792V36.9284H10.3125V32.7617ZM16.5625 26.5117H20.7292V30.6784H16.5625V26.5117ZM16.5625 32.7617H20.7292V36.9284H16.5625V32.7617Z" fill="#00AEEF"/>
<path d="M23.8538 39.0117H7.08301V40.6263H23.8538V39.0117Z" fill="#A25641"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.2601 39.012H26.9268V24.4287H41.5101V39.012H35.2601Z" fill="#D1D3D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.0098 26.5117H33.1764V30.6784H29.0098V26.5117ZM29.0098 32.7617H33.1764V36.9284H29.0098V32.7617ZM35.2077 26.5117H39.3743V30.6784H35.2077V26.5117ZM35.2077 32.7617H39.3743V36.9284H35.2077V32.7617Z" fill="#00AEEF"/>
<path d="M42.5521 39.0117H25.7812V40.6263H42.5521V39.0117Z" fill="#A25641"/>
</svg>

          </div>
          <span className="text-center text-xs">2-3 Bedroom</span>
        </div>
        
        <div 
          className={`flex flex-col items-center ${formData.propertySize === '4+ Bedroom' ? 'opacity-100' : 'opacity-80'}`}
          onClick={() => handlePropertySizeSelect('4+ Bedroom')}
        >
          <div className="bg-gray-200 p-3 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
          <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.8934 15.3203H2.92383V50.9989H48.8934V15.3203Z" fill="#6F9A9F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5499 5.08224L24.8632 1.11214C25.4901 0.746474 26.2214 0.746474 26.8483 1.11214L34.2139 5.08224H44.1913C44.8704 5.08224 45.4451 5.34343 45.863 5.86581L50.7211 12.0821C51.2435 12.709 51.2957 13.5448 50.9301 14.2761C50.5644 15.0075 49.8853 15.4254 49.0495 15.4254H3.07995C2.24414 15.4254 1.56505 15.0075 1.19938 14.2761C0.833712 13.5448 0.938188 12.709 1.40833 12.0821L6.26648 5.86581C6.68438 5.34343 7.259 5.08224 7.9381 5.08224H17.5499Z" fill="#4F4B6A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3562 50.999H15.4609V8.52942L25.8563 2.93994L36.3562 8.58166V50.999Z" fill="#70ADB3"/>
<path d="M50.9826 48.9097H0.833984V50.9992H50.9826V48.9097Z" fill="#4F4B6A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.789 46.5073H46.5427V33.4478H38.1846V46.5073H41.789Z" fill="#D1D3D4"/>
<path d="M44.4535 40.2383H40.2744V44.4173H44.4535V40.2383Z" fill="#00AEEF"/>
<path d="M44.4535 35.5361H40.2744V38.148H44.4535V35.5361Z" fill="#00AEEF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.6181 46.5073H13.3718V33.4478H5.01367V46.5073H8.6181Z" fill="#D1D3D4"/>
<path d="M11.2816 40.2383H7.10254V44.4173H11.2816V40.2383Z" fill="#00AEEF"/>
<path d="M11.2816 35.5361H7.10254V38.148H11.2816V35.5361Z" fill="#00AEEF"/>
<path d="M33.2214 29.0596H18.5947V48.91H33.2214V29.0596Z" fill="#D1D3D4"/>
<path d="M31.1322 31.1499H20.6846V48.9109H31.1322V31.1499Z" fill="#4F4B6A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.789 30.6264H46.5427V17.5669H38.1846V30.6264H41.789Z" fill="#D1D3D4"/>
<path d="M44.4535 24.3584H40.2744V28.5374H44.4535V24.3584Z" fill="#00AEEF"/>
<path d="M44.4535 19.6572H40.2744V22.2691H44.4535V19.6572Z" fill="#00AEEF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.6181 30.6264H13.3718V17.5669H5.01367V30.6264H8.6181Z" fill="#D1D3D4"/>
<path d="M11.2816 24.3584H7.10254V28.5374H11.2816V24.3584Z" fill="#00AEEF"/>
<path d="M11.2816 19.6572H7.10254V22.2691H11.2816V19.6572Z" fill="#00AEEF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3329 24.3588H30.0866V11.2993H21.7285V24.3588H25.3329Z" fill="#D1D3D4"/>
<path d="M27.9984 18.0898H23.8193V22.2689H27.9984V18.0898Z" fill="#00AEEF"/>
<path d="M27.9984 13.3887H23.8193V16.0006H27.9984V13.3887Z" fill="#00AEEF"/>
</svg>

          </div>
          <span className="text-center text-xs">4+ Bedroom</span>
        </div>
        
        <div 
          className={`flex flex-col items-center ${formData.propertySize === 'Just a few items' ? 'opacity-100' : 'opacity-80'}`}
          onClick={() => handlePropertySizeSelect('Just a few items')}
        >
          <div className="bg-gray-200 p-3 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
          <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66406 21.4844V43.8865L22.6363 55.9998V33.5484L22.6034 33.5648L1.66406 21.4844Z" fill="#C23D36"/>
<path d="M0.00976562 20.526L22.6037 33.5655L22.6366 33.5491L22.6047 27.9804L0.00976562 14.9707V20.526Z" fill="#C23D36"/>
<path d="M22.6367 33.5486V56.0001L46.8468 42.0131V19.5781L22.6367 33.5486Z" fill="#D64A43"/>
<path d="M22.6373 33.5487L48.4282 18.6621V13.0713L22.6055 27.9801L22.6373 33.5487Z" fill="#D64A43"/>
<path d="M0.00976562 14.9342L25.8325 0.0253906L48.4274 13.0706L22.6047 27.9793L0.00976562 14.9342Z" fill="#DA5D57"/>
<path d="M22.6031 33.6338L1.63086 21.5205V23.3778L22.6031 35.491V33.6338Z" fill="#AB3630"/>
<path d="M22.6035 33.6336V35.4909L46.8136 21.5203V19.6631L22.6035 33.6336Z" fill="#B53933"/>
<path d="M46.8555 37.999C45.1171 41.0099 45.1035 41.0533 45.1035 43.0565C48.1385 42.3098 46.9119 40.4061 46.8555 37.999Z" fill="#CCCCCC"/>
<path d="M46.9287 13.9736C47.1184 14.6688 47.508 15.4611 48.4901 17.1622C48.5294 15.4867 49.0852 14.0386 48.4267 13.0713L46.9287 13.9736Z" fill="#B4B4B4"/>
<path d="M46.9277 13.9733L48.4257 13.071C48.1381 12.6486 47.653 12.3266 46.7305 12.0996C46.7305 12.9711 46.7816 13.438 46.9277 13.9733Z" fill="#CCCCCC"/>
<path d="M22.6023 27.9764L19.3809 26.1191C20.1878 28.4486 21.3951 29.62 22.6023 29.62V27.9764Z" fill="#A3A3A3"/>
<path d="M22.6035 27.9764V29.62C23.8108 29.62 25.018 28.4486 25.825 26.1191L22.6035 27.9764Z" fill="#BCBCBC"/>
<path d="M19.3809 26.1193L22.6023 27.9765L25.8237 26.1193C23.6718 25.061 21.5328 24.9647 19.3809 26.1193Z" fill="#CCCCCC"/>
<path d="M23.5195 1.3524L25.8653 0L28.2111 1.3524C26.6441 2.12302 25.0865 2.19311 23.5195 1.3524Z" fill="#CCCCCC"/>
<path d="M32.2871 22.389V27.9798L40.3567 23.3208V17.73L32.2871 22.389Z" fill="#9F2E2E"/>
<path d="M33.9023 23.3208V27.048L38.7441 24.2526V20.5254L33.9023 23.3208Z" fill="#CCCCCC"/>
<path d="M38.7428 24.2524V31.7068L32.2871 35.434V27.9796L38.7428 24.2524Z" fill="#9F2E2E"/>
<path d="M22.6035 33.5008V33.9302L46.8136 19.9597V19.5303L22.6035 33.5008Z" fill="#CCCCCC"/>
<path d="M33.9023 28.9119V32.6391L37.1302 30.7755V27.0483L33.9023 28.9119Z" fill="#B3B3B3"/>
<path d="M22.6031 33.5009L1.63086 21.3877V21.8171L22.6031 33.9304V33.5009Z" fill="#CCCCCC"/>
<path d="M2.08251 16.1398L0.0175781 14.9089L2.11144 13.6836C3.28666 14.5056 3.38483 15.3212 2.08251 16.1398Z" fill="#CCCCCC"/>
<path d="M0 14.9072L0.00526462 15.9585C0.431146 16.7185 1.6255 16.3998 2.11461 16.127L0 14.9072Z" fill="#999999"/>
</svg>

          </div>
          <span className="text-center text-xs">Just a few items</span>
        </div>
      </div>
    </div>
  );

  const StepThree = () => {
    return (
      <div className="w-full">
        <h2 className="text-xl font-bold mb-1">When would you like to move</h2>
        <p className="text-gray-600 text-sm mb-5">Approximate move date</p>
        
        <div className="bg-gray-100 p-3 rounded-md mb-6 w-full">
          {/* Use the reusable DatePicker component */}
          <DatePicker
            selectedDate={formData.moveDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
    );
  };

  const StepFour = () => (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-1">Final step</h2>
      <p className="text-gray-600 text-sm mb-5">Tell us about yourself</p>
      
      <div className="mb-3">
        <label className="block font-medium text-gray-700 mb-1 text-sm">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Samson"
          className="w-full p-3 bg-gray-100 rounded-md text-sm"
        />
      </div>
      
      <div className="mb-3">
        <label className="block font-medium text-gray-700 mb-1 text-sm">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="w-full p-3 bg-gray-100 rounded-md text-sm"
        />
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <label className="block font-medium text-gray-700 text-sm">Phone number</label>
          <span className="text-gray-500 text-xs">0/100</span>
        </div>
        <div className="flex">
          <div className="flex items-center bg-gray-100 rounded-md px-2 mr-2">
            <div className="mr-1 w-5 h-3 bg-green-600 relative">
              {/* Flag of Nigeria */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-3 h-full bg-white"></div>
              </div>
            </div>
            <span className="text-sm">{formData.phoneCountryCode}</span>
            <IoChevronBack className="ml-1 rotate-90 text-sm" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(999) 999 9999"
            className="flex-1 p-3 bg-gray-100 rounded-md text-sm"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-1 text-sm">Organization</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          placeholder="Enter your organization"
          className="w-full p-3 bg-gray-100 rounded-md text-sm"
        />
      </div>
    </div>
  );

  // Display selected date in a human-readable format
  const formattedDate = formData.moveDate 
    ? formData.moveDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) 
    : "No date selected";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>
      
      {/* Modal */}
      <div className="relative max-w-md w-full mx-4 bg-white p-5 rounded-2xl shadow-lg z-10 max-h-screen overflow-y-auto">
        <div className="mb-4">
          <button 
            onClick={handleBack} 
            className="bg-gray-200 p-2 rounded-full"
            disabled={currentStep === 0}
          >
            <IoChevronBack className="text-sm" />
          </button>
        </div>
        
        {currentStep === 0 && <StepOne />}
        {currentStep === 1 && <StepTwo />}
        {currentStep === 2 && <StepThree />}
        {currentStep === 3 && <StepFour />}
        
        {/* Show selected date if on StepThree */}
        {currentStep === 2 && formData.moveDate && (
          <div className="text-sm font-medium text-gray-700 my-2">
            Selected date: {formattedDate}
          </div>
        )}
        
        <button 
          onClick={handleNext}
          className="w-full py-3 px-4 bg-red-800 text-white rounded-md font-medium text-sm"
        >
          {currentStep === 3 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default MovingForm;