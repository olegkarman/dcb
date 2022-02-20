import { useForm, Controller } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import styles from "./Register.module.css";
import st from "react-datepicker";
import {Spacer} from "../../components/Spacer/Spacer";

export const Register = () => {
    const {  handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.pageWrapper}>
                <h1 className={styles.pageHeader}>Registration</h1>

                <Controller
                    name="FirstName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            label="First name"
                            placeholder="Enter your name"
                            value={field.value || ""}
                            onChange={field.onChange}
                            validationError={
                                errors.FirstName && "First name is required"
                            }
                        />
                    )}
                />

                <Controller
                    name="LastName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            label="Last name"
                            placeholder="Enter your family name"
                            value={field.value || ""}
                            onChange={field.onChange}
                            validationError={
                                errors.FirstName && "Last name is required"
                            }
                        />
                    )}
                />

                <Controller
                    name="DOB"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            label="Date of birth"
                            placeholder="Enter your birth date"
                            value={field.value || ""}
                            onChange={field.onChange}
                            validationError={
                                errors.FirstName && "Birth date is required"
                            }
                        />
                    )}
                />

                <Controller
                    name="Gender"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            label="Gender"
                            placeholder="Enter your gender"
                            value={field.value || ""}
                            onChange={field.onChange}
                            validationError={
                                errors.FirstName && "Gender is required"
                            }
                        />
                    )}
                />

                <Controller
                    name="Email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            label="Email"
                            placeholder="example@email.com"
                            value={field.value || ""}
                            onChange={field.onChange}
                            validationError={
                                errors.FirstName && "Email is required"
                            }
                        />
                    )}
                />

                <Controller
                    name="Password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            label="Password"
                            placeholder="Create a password for your account"
                            value={field.value || ""}
                            onChange={field.onChange}
                            validationError={
                                errors.FirstName && "Password is required"
                            }
                            type="password"
                        />
                    )}
                />

                <button type="submit">Submit</button>
            </div>
        </form>
    );
}