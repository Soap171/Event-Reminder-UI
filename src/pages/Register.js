import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Spinner,
  Alert,
} from "flowbite-react";
import { useState } from "react";

export function Register() {
  const [formData, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      console.log(formData);

      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status === 201) {
        setSuccess("Sign Up successful");
        setFormdata({ username: "", phone: "", email: "", password: "" }); // Clear form
      } else {
        setError(JSON.stringify(data.msg) || "An error occurred");
      }
    } catch (error) {
      setError(JSON.stringify(error));
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900">
      <form
        className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Username"
              className="text-gray-900 dark:text-gray-300"
            />
          </div>
          <TextInput
            id="username"
            type="text"
            className="w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="phone"
              value="Phone Number"
              className="text-gray-900 dark:text-gray-300"
            />
          </div>
          <TextInput
            id="phone"
            type="text"
            className="w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Your email"
              className="text-gray-900 dark:text-gray-300"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="your123@gmail.com"
            className="w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
              className="text-gray-900 dark:text-gray-300"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            className="w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 dark:bg-blue-500 dark:text-gray-200"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
        {error && (
          <Alert className="mt-5" color="failure">
            {error}
          </Alert>
        )}
        {success && (
          <Alert className="mt-5" color="success">
            {success}
          </Alert>
        )}
      </form>
    </div>
  );
}

export default Register;
