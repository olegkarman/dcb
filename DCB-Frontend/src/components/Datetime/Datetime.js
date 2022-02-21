import "react-datepicker/dist/react-datepicker.css";
import "./Datetime.css";
import DatePicker from "react-datepicker";
import inputStyles from "../Input/Input.module.css";
import classNames from "classnames";
import { isEmpty } from "../../utils/helpers";
import Popup from "reactjs-popup";

export const Datetime = ({
    selectedDate = undefined,
    onChange,
    showYearDropdown = false,
    hideLabel = false,
    label,
    // todo fix id
    id = Math.floor(Math.random() * 1000000000),
    hint = undefined,
    required = false,
    description = undefined,
    validationError = undefined,
    dateFormat = "dd/MM/yyyy"
}) => {
    const getCustomClass = () => {
        let classToAdd = "";
        if (validationError) {
            classToAdd += "inputValidationError";
        }

        return classToAdd;
    }

    return (
        <div className={inputStyles.inputContainer}>
            <div
                className={classNames({
                    [inputStyles.labelRow]: !hideLabel && !isEmpty(label),
                })}
            >
                <label htmlFor={id}>{label}</label>
                {hint ? (
                    <Popup
                        trigger={() => (
                            <span
                                className={classNames({
                                    [inputStyles.labelHint]: true,
                                })}
                            />
                        )}
                        position="right center"
                        text={hint}
                    />
                ) : null}
                {required ? (
                    <span className={inputStyles.requiredLabel}>Required</span>
                ) : null}
            </div>

            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                showYearDropdown={showYearDropdown}
                placeholderText={dateFormat.toUpperCase()}
                dateFormat={dateFormat}
                className={getCustomClass()}
            />

            {description && (
                <div className={inputStyles.description}>{description}</div>
            )}
            {validationError && (
                <div className={inputStyles.validationError}>{validationError}</div>
            )}
        </div>
    )
}