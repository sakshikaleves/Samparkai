






import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Reached', 'Not Reached', "completion (mins)"],
  datasets: [
    {
      label: 'Customer Reach',
      data: [9000, 6000, 4500], // Dummy data for pie chart
      backgroundColor: ['#FFC6C6', '#FFEBD4', "F0A8D0"], // Tailwind-inspired colors
      hoverBackgroundColor: ['#FFC6C6', '#FFEBD4', "CAEDFg"],
    },
  ],
};

const options = {
  maintainAspectRatio: false, // Ensures pie chart adapts well to different container sizes
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
};

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    campaignName: '',
    startDate: '',
    endDate: '',
    campaignType: 'voice',
    file: null,
    callerList: '',
    messageTemplate: '',
    timezone: 'GMT',
    sendFrequency: 'daily',
    budget: '',
  });
  const [preview, setPreview] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  return (
    <div className="bg-gradient-to-r from-grey-50 to-indigo-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Create Campaign</h1>
        {!preview ? (
           <form onSubmit={handleSubmit} className="space-y-6">
           <div>
             <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
             <input
               type="text"
               name="campaignName"
               value={formData.campaignName}
               onChange={handleInputChange}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               required
             />
           </div>
         
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div>
               <label className="block text-sm font-medium text-gray-700">Start Date</label>
               <input
                 type="date"
                 name="startDate"
                 value={formData.startDate}
                 onChange={handleInputChange}
                 className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 required
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">End Date</label>
               <input
                 type="date"
                 name="endDate"
                 value={formData.endDate}
                 onChange={handleInputChange}
                 className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 required
               />
             </div>
           </div>
         
           {/* AI Assistant Selection */}
           <div>
             <label className="block text-sm font-medium text-gray-700">AI Assistant</label>
             <select
               name="aiAssistant"
               value={formData.aiAssistant}
               onChange={handleInputChange}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               required
             >
               <option value="">Select AI Assistant</option>
               <option value="assistant1">Environment Awareness AI Assistant</option>
               <option value="assistant2">Premium Credit Card Launch</option>
               <option value="assistant3">Dental Appointment Book AI Support</option>
             </select>
           </div>
         
           {/* Bot Voice Selection */}
           <div>
             <label className="block text-sm font-medium text-gray-700">Bot Voice</label>
             <select
               name="botVoice"
               value={formData.botVoice}
               onChange={handleInputChange}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               required
             >
               <option value="">Select Voice</option>
               <option value="fabulous-alloy">Fabale</option>
               <option value="fabulous-alloy">Alloy</option>
               <option value="crystal-clear">Crystal</option>
               <option value="deep-tones">Mick</option>
             </select>
           </div>
         
           {/* New Dropdown for Phone Numbers */}
           <div>
             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
             <select
               name="phoneNumber"
               value={formData.phoneNumber}
               onChange={handleInputChange}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               required
             >
               <option value="">Select Phone Number</option>
               <option value="+1234567890">+91 2345678900</option>
               <option value="+0987654321">+91 876543210</option>
               <option value="+1122334455">+91 2233445565</option>
             </select>
           </div>
         
           {/* Upload Existing Audio/MP3 */}
           <div>
             <label className="block text-sm font-medium text-gray-700">Upload Audio/Video (MP3)</label>
             <input
               type="file"
               name="file"
               accept="audio/mp3"
               onChange={handleFileUpload}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               required
             />
           </div>
         
           {/* Pre-existing MP3 Selection from public folder */}
           <div>
             <label className="block text-sm font-medium text-gray-700">Choose from Existing Voices</label>
             <select
               name="preExistingMP3"
               value={formData.preExistingMP3}
               onChange={handleInputChange}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             >
               <option value="">Select Voice</option>
               <option value="/audio/voice1.mp3">Voice 1</option>
               <option value="/audio/voice2.mp3">Voice 2</option>
               <option value="/audio/voice3.mp3">Voice 3</option>
             </select>
           </div>
         
           <div>
             <label className="block text-sm font-medium text-gray-700">Caller List</label>
             <input
               type="file"
               name="callerList"
               onChange={handleFileUpload}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               required
             />
           </div>
         
           <div>
             <label className="block text-sm font-medium text-gray-700">Message Template</label>
             <textarea
               name="messageTemplate"
               value={formData.messageTemplate}
               onChange={handleInputChange}
               className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               required
             />
           </div>
         
           <div className="flex justify-end">
             <button
               type="submit"
               className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
             >
               Preview
             </button>
           </div>
         </form>
         
        ) : (
          <div className="preview p-6 bg-gray-100 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Campaign Preview</h2>
            <div className="space-y-4 text-lg">
              <p><strong>Campaign Name:</strong> {formData.campaignName}</p>
              <p><strong>Start Date:</strong> {formData.startDate}</p>
              <p><strong>End Date:</strong> {formData.endDate}</p>
              <p><strong>Campaign Type:</strong> {formData.campaignType}</p>
              <p><strong>Message Template:</strong> {formData.messageTemplate}</p>
              <p><strong>Timezone:</strong> {formData.timezone}</p>
              <p><strong>Send Frequency:</strong> {formData.sendFrequency}</p>
              <p><strong>Budget:</strong> {formData.budget}</p>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setPreview(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Save & Launch
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800"> Ongoing Campaigns</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-md shadow">
          <h2 className="text-xl font-semibold text-black-700">Campaign 1: YES Bank credit card launch </h2>
          <div className="mt-4">
          <p><strong>Start Date:</strong> 2024-09-20</p>
          <p><strong>Status:</strong> Ongoing</p>
          <p><strong>Remaining Minutes :</strong> 6000 mins</p>
          <p><strong>Completion:</strong> 65%</p>
          <p><strong>Total Interactions:</strong>5650 coustomers</p>
          </div>
          
          <div style={{ height: '150px' }}>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow">
          <h2 className="text-xl font-semibold text-indigo-700">Campaign 2: Coustomer care at Taj Colaba </h2>
         
          <div className="mt-4">
          <p><strong>Start Date:</strong> 2024-07-20</p>
         
          <p><strong>Status:</strong> Ongoing</p>
          <p><strong>Remaining Minutes :</strong> 4500 mins</p>
          <p><strong>Completion:</strong> 55%</p>
          <p><strong>Total Interactions:</strong>7650 coustomers</p>
          </div>


          <div style={{ height: '150px' }}>
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex h-screen">
      <div className=" w-60 bg-white text-black flex flex-col">
      <div className="px-4 py-6 text-2xl font-bold border-b border-gray-200 flex items-center">
  <img src="logo.png" alt="Samparkai Logo" className="h-10 w-10 mr-2" />
  Samparkai
</div>

        <div className="flex-1 p-4 space-y-4">
          <button
            className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-200 ${activeTab === 'home' ? 'bg-indigo-300' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-200 ${activeTab === 'create' ? 'bg-indigo-300' : ''}`}
            onClick={() => setActiveTab('create')}
          >
            Create Campaign
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {/* <div className="w-full bg-indigo-50 px-6 py-6 shadow-md flex justify-between items-center">
          <h3 className="text-xl font-semibold text-black-800">Samparkai Campaign page </h3>
        </div> */}
        <div className="flex-1 overflow-y-auto p-6 0">
          {activeTab === 'home' ? <Home /> : <CampaignForm />}
        </div>
      </div>
    </div>
  );
};

export default App;
