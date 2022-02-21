import layoutStyles from "../../components/Layout/Layout.module.css";
import { Controller, useForm } from "react-hook-form";
import { Spacer } from "../../components/Spacer/Spacer";
import { Row } from "../../components/Layout/Row/Row";
import { Input } from "../../components/Input/Input";
import { emailPattern } from "../../utils/regEx";
import { Button } from "../../components/Buttons/Button";
import styles from "./Login.module.css";

export const Login = () => {
    const {  handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={layoutStyles.pageWrapper}>
                <h1 className={layoutStyles.pageHeader}>Log in</h1>

                <Spacer size={32} />

                <Row
                    className={styles.fieldsWrapper}
                >
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
                                placeholder="Enter your password"
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

                <div className={styles.fieldsWrapper}>
                    <Button
                        buttonType="submit"
                        text="Log in"
                    />
                </div>
            </div>
        </form>
    );
}