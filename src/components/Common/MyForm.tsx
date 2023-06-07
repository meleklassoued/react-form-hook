import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<FormValues>();
  const [dataList, setDataList] = useState<FormValues[]>([]);
  const nameValue = watch("name");
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Perform form submission logic here
    setDataList((prevDataList) => [...prevDataList, data]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <div>{errors.name.message}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <div>
        <button type="submit">Submit</button>
        <div>{nameValue}</div>
        <div>
          <h2>Submitted Data:</h2>
          {dataList.map((data, index) => (
            <div key={index}>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Password: {data.password}</p>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default MyForm;
