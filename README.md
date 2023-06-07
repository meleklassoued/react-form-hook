# MyForm Componet

The `MyForm` component is a React form component that uses `react-hook-form` for form validation and submission. It allows users to enter their name, email, and password and displays the submitted data on the screen.

## Usage

1. Import the necessary dependencies:

```jsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
```

2. Define the type for the form values:

```jsx
type FormValues = {
  name: string,
  email: string,
  password: string,
};
```

3. implement the MyForm component

```jsx
const MyForm: React.FC = () => {
  // Initialize the form using useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<FormValues>();

  // Create a state variable to store the submitted data
  const [dataList, setDataList] = useState<FormValues[]>([]);

  // Get the value of the 'name' field
  const nameValue = watch("name");

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setDataList((prevDataList) => [...prevDataList, data]);
    reset(); // Reset the form fields after submission
  };

  // Render the form and the submitted data
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <!-- Form inputs -->
      ...

      <!-- Submit button -->
      ...

      <!-- Display name value -->
      ...

      <!-- Display submitted data -->
      ...
    </form>
  );
};
```

Feel free to modify the description as needed to fit your specific use case.
