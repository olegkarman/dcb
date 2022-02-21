import { useForm, Controller } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import styles from "./Register.module.css";
import { Spacer } from "../../components/Spacer/Spacer";
import { Button } from "../../components/Buttons/Button";
import { Row } from "../../components/Row/Row";
import { Datetime } from "../../components/Datetime/Datetime";
import {emailPattern} from "../../utils/regEx";

export const Register = () => {
    const {  handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.pageWrapper}>
                <h1 className={styles.pageHeader}>Registration</h1>

                <Spacer size={32} />

                <Row>
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

                    <Spacer size={8} />

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
                                    errors.LastName && "Last name is required"
                                }
                            />
                        )}
                    />
                </Row>

                <Spacer size={8} />

                <Row>
                    <Controller
                        name="DOB"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Datetime
                                onChange={field.onChange}
                                selectedDate={field.value || undefined}
                                showYearDropdown
                                label="Date of birth"
                                validationError={
                                    errors.DOB && "Birth date is required"
                                }
                            />
                        )}
                    />

                    <Spacer size={8} />

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
                                    errors.Gender && "Gender is required"
                                }
                            />
                        )}
                    />
                </Row>

                <Spacer size={8} />

                <Row>
                    <Controller
                        name="Email"
                        control={control}
                        rules={{
                            required: true,
                            validate: (value) =>
                                emailPattern.test(value),
                        }}
                        render={({ field }) => (
                            <Input
                                label="Email"
                                placeholder="example@email.com"
                                value={field.value || ""}
                                onChange={field.onChange}
                                validationError={
                                    errors.Email && "Wrong email format"
                                }
                            />
                        )}
                    />

                    <Spacer size={8} />

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
                                    errors.Password && "Password is required"
                                }
                                type="password"
                            />
                        )}
                    />
                </Row>

                <Spacer size={16} />

                <Button
                    buttonType="submit"
                    text="Register"

                />
            </div>
        </form>
    );
}