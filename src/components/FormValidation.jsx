import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    
    if (name === "password") {
      newErrors.password =
        value.length >= 8 ? "" : "Password must be at least 8 characters long";
    }

    if (name === "confirmPassword") {
      newErrors.confirmPassword =
        value === formData.password ? "" : "Passwords do not match";
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).every((err) => err === "") &&
        Object.values(formData).every((val) => val !== "")) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border p-1 w-full" />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border p-1 w-full" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength="8" className="border p-1 w-full" />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="border p-1 w-full" />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
}

export default FormValidation;
