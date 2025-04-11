'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.scss';
import { ToastContainer, toast } from "react-toastify";
import Image from 'next/image';

const AddDiscount = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    url: ''
  });

  const [imgFile, setImgFile] = useState();
  const [photo, setPhoto] = useState(null);

  function setFile(file) {
    setImgFile(file);
  }


  const handleImageChange = (e) => {
    setPhoto(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };


  const CLOUD_NAME = "du6g27tfh";
  const UPLOAD_PRESET = "brickwire";
  const responseType = {
    error: "error",
    success: "success",
  };

  const [previewImage, setPreviewImage] = useState(null);


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploadImage = async () => {
        if (!photo) return;
    
        const formData = new FormData();
    
        formData.append("file", photo);
        formData.append("upload_preset", UPLOAD_PRESET);
    
        try {
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
    
          const data = await res.json();
    
          const imageUrl = data["secure_url"];
    
          return imageUrl;
        } catch (error) {
          console.log(error);
        }
      };
      const imageUrl = await uploadImage();
      const body = {
        ...formData,
        image: imageUrl
      };

    try {
      const response = await fetch(`https://backend-vibeazy.fly.dev/admin/discount`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
       return toast.error("Failed to create discount");
      }
      if(response.ok){
        toast.success("Discount created successfully");
      }

      router.push('/new-discounts');
      router.refresh();
    } catch (error) {
      console.error('Error creating discount:', error);
      alert('Failed to create discount');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-discount-container">
      <h1>Add New Discount</h1>
      <form onSubmit={handleSubmit} className="add-discount-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">
          {previewImage ? (
                <Image width={300} height={300} src={previewImage} alt="Preview" className="image-preview" />
              ) : (
                <div className="upload-placeholder">
                  <i className="upload-icon">📸</i>
                  <span>Click or drag to upload discount image</span>
                </div>
              )}
          </label>
          <input
            type="file"
            id="image"
            name="image"
           
            onChange={handleImageChange}
           
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">Discount URL</label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Discount'}
        </button>
      </form>
    </div>
  );
};

export default AddDiscount;