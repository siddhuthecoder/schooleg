import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AddStudentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    admissionNo: '',
    admissionDate: '',
    classRollNo: '',
    dob: '',
    photo: null,
    parentPhone: '', // New field for parent phone number
    route: '',
    transportationCharge: '',
    feeDiscount: '',
    address: {
      name: '',
      state: '',
      district: '',
      pincode: ''
    }
  });
  const user = useSelector((state) => state.auth.user);
  // alert(user.school_id)
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [parentId, setParentId] = useState('');

  useEffect(() => {
    if (isOpen) {
      const fetchStates = async () => {
        try {
          const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states');
          const data = await response.json();
          if (response.ok && data.states) {
            setStates(data.states);
          }
        } catch (error) {
          console.error('Failed to fetch states:', error);
        }
      };
      fetchStates();
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedState) {
        try {
          const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedState}`);
          const data = await response.json();
          if (response.ok && data.districts) {
            setDistricts(data.districts);
          }
        } catch (error) {
          console.error('Failed to fetch districts:', error);
        }
      } else {
        setDistricts([]);
      }
    };
    fetchDistricts();
  }, [selectedState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleStateChange = (e) => {
    const stateValue = e.target.value;
    setSelectedState(stateValue);
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        state: stateValue,
        district: ''
      }
    });
  };

  const handleParentPhoneChange = async (e) => {
    const phone = e.target.value;
    setFormData({ ...formData, parentPhone: phone });

    if (phone.length === 10) {  // Ensure the phone number is complete
      try {
        const response = await fetch(`https://schooleg.com/Schooleg/parents-by-school-phone?phone=${phone}&school_id=66fac9603e512ca16feb7a6d`);
        if (response.ok) {
          const data = await response.json();
          setParentId(data.id); // Set the parent ID from the response
        } else {
          setParentId('');
        }
      } catch (error) {
        console.error('Failed to fetch parents:', error);
        setParentId('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('Data', JSON.stringify({
      name: formData.name,
      admissionNo: formData.admissionNo,
      classRollNo: formData.classRollNo,
      parent_id: parentId, // Use the fetched parent ID
      route_id: '60d21b4667d0d8992e610c87',
      school_id: user.school_id || null,
      branch_id: user.branch_id || null,
      class_id: '60d21b4667d0d8992e610c85',
      address: formData.address,
      feeDiscountPercent: formData.feeDiscount,
      admissionDate: formData.admissionDate,
      DOB: formData.dob,
      transportationCharges: formData.transportationCharge
    }));

    if (formData.photo) {
      data.append('photo', formData.photo);
    }

    try {
      const response = await fetch('https://schooleg.com/Schooleg/students', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Student added successfully:', result);
        window.location.reload();
      } else {
        console.error('Failed to add student');
      }
    } catch (error) {
      console.error('Error occurred while adding student:', error);
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 lg:w-2/5 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">Student Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Student Name"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="class" className="block text-sm font-medium mb-1 text-left">Class</label>
              <input
                type="text"
                id="class"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                placeholder="Enter Class"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="admissionNo" className="block text-sm font-medium mb-1 text-left">Admission No</label>
              <input
                type="text"
                id="admissionNo"
                name="admissionNo"
                value={formData.admissionNo}
                onChange={handleInputChange}
                placeholder="Enter Admission No"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="admissionDate" className="block text-sm font-medium mb-1 text-left">Admission Date</label>
              <input
                type="date"
                id="admissionDate"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleInputChange}
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="classRollNo" className="block text-sm font-medium mb-1 text-left">Class Roll No</label>
              <input
                type="text"
                id="classRollNo"
                name="classRollNo"
                value={formData.classRollNo}
                onChange={handleInputChange}
                placeholder="Enter Class Roll No"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium mb-1 text-left">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-medium mb-1 text-left">Photo</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleFileChange}
                className="border p-2 rounded-lg w-full"
              />
            </div>

            {/* Parent Phone Number Input */}
            <div>
              <label htmlFor="parentPhone" className="block text-sm font-medium mb-1 text-left">Parent Phone Number</label>
              <input
                type="text"
                id="parentPhone"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleParentPhoneChange}
                placeholder="Enter Parent Phone Number"
                className="border p-2 rounded-lg w-full"
                maxLength={10}
                required
              />
            </div>

            <div>
              <label htmlFor="route" className="block text-sm font-medium mb-1 text-left">Route</label>
              <input
                type="text"
                id="route"
                name="route"
                value={formData.route}
                onChange={handleInputChange}
                placeholder="Enter Route"
                className="border p-2 rounded-lg w-full"
              />
            </div>

            <div>
              <label htmlFor="transportationCharge" className="block text-sm font-medium mb-1 text-left">Transportation Charge</label>
              <input
                type="text"
                id="transportationCharge"
                name="transportationCharge"
                value={formData.transportationCharge}
                onChange={handleInputChange}
                placeholder="Enter Transportation Charge"
                className="border p-2 rounded-lg w-full"
              />
            </div>

            <div>
              <label htmlFor="feeDiscount" className="block text-sm font-medium mb-1 text-left">Fee Discount</label>
              <input
                type="text"
                id="feeDiscount"
                name="feeDiscount"
                value={formData.feeDiscount}
                onChange={handleInputChange}
                placeholder="Enter Fee Discount"
                className="border p-2 rounded-lg w-full"
              />
            </div>

            {/* Address Fields */}
            <div>
              <label htmlFor="address.name" className="block text-sm font-medium mb-1 text-left">Address Name</label>
              <input
                type="text"
                id="address.name"
                name="address.name"
                value={formData.address.name}
                onChange={handleInputChange}
                placeholder="Enter Address Name"
                className="border p-2 rounded-lg w-full"
              />
            </div>

            <div>
              <label htmlFor="address.state" className="block text-sm font-medium mb-1 text-left">State</label>
              <select
                id="address.state"
                name="address.state"
                value={formData.address.state}
                onChange={handleStateChange}
                className="border p-2 rounded-lg w-full"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.state_id} value={state.state_id}>{state.state_name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="address.district" className="block text-sm font-medium mb-1 text-left">District</label>
              <select
                id="address.district"
                name="address.district"
                value={formData.address.district}
                onChange={handleInputChange}
                className="border p-2 rounded-lg w-full"
                disabled={!selectedState}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="address.pincode" className="block text-sm font-medium mb-1 text-left">Pincode</label>
              <input
                type="text"
                id="address.pincode"
                name="address.pincode"
                value={formData.address.pincode}
                onChange={handleInputChange}
                placeholder="Enter Pincode"
                className="border p-2 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Submit</button>
            <button type="button" onClick={onClose} className="w-full mt-2 border border-gray-300 text-gray-700 p-2 rounded-lg">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
