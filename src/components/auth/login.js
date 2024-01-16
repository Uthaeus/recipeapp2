import { useForm } from "react-hook-form";
function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        className="form-control"
                        {...register("username", {
                            required: "Username is required"
                        })}
                    />
                    {errors.username && <p className="error">{errors.username.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;