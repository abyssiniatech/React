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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: "name is regired" })}
          id="name"
          type="text"
        />
        {errors.name?.message && typeof errors.name.message === "string" && (
          <p>{errors.name.message}</p>
        )}

        <label htmlFor="email">Email:</label>
        <input
          {...register("email", { required: "Email is required!" })}
          id="email"
          type="email"
        />
        {errors.email?.message && typeof errors.email.message === "string" && (
          <p>{errors.email.message}</p>
        )}

        <label htmlFor="password">Password:</label>
        <input
          {...register("password", { required: "Password is required!" })}
          id="password"
          type="password"
        />
        {errors.password?.message &&
          typeof errors.password.message === "string" && (
            <p>{errors.password.message}</p>
          )}
      </form>
    </div>
  );
}

export default User
