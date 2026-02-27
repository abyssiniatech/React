import {useForm} from "react-hook-form"
interface props{
    name:string;
    email:string
    password:string
}
const User = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<props>();

    const onSubmit = (data: props) => {
      console.log(data);
    };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-1/2 mx-auto mt-10">
        <label  htmlFor="name" className="text-lg font-medium">Name</label>
        <input
          {...register("name", { required: "name is regired" })}
          id="name"
          type="text"
          className="border-2 border-gray-300 rounded-md px-4 py-2"
        />
        {errors.name?.message && typeof errors.name.message === "string" && (
          <p className="text-red-500">{errors.name.message}</p>
        )}

        <label htmlFor="email"  className="text-lg font-medium">Email:</label>
        <input
          {...register("email", { required: "Email is required!" })}
          id="email"
          type="email"
          className="border-2 border-gray-300 rounded-md px-4 py-2"
        />
        {errors.email?.message && typeof errors.email.message === "string" && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <label htmlFor="password"  className="text-lg font-medium">Password:</label>
        <input
          {...register("password", { required: "Password is required!" })}
          id="password"
          type="password"
          className="border-2 border-gray-300 rounded-md px-4 py-2"
        />
        {errors.password?.message &&
          typeof errors.password.message === "string" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button type="submit" className="bg-pink-700 text-white rounded-md px-4 py-2 ">Submit</button>
      </form>
    </div>
  );
}

export default User
