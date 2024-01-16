import { useForm } from "react-hook-form";
function Signup() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            reset();
            return;
        }
        console.log(data);
        reset();
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Signup</h1>

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

                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("confirmPassword", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
}

export default Signup;