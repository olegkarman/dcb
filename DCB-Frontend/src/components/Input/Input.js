import styles from "./Input.module.css";
import classNames from "classnames";
import Popup from "reactjs-popup";
import { isEmpty } from "../../utils/helpers";
import { useState } from "react";
import { Icon } from "../Icon/Icon";
import ShowIcon from "../../assets/eye.svg";
import HideIcon from "../../assets/no-eye.svg";

export const Input = ({
    type = "text",
    width,
    description = undefined,
    validationError = undefined,
    required = false,
    hint = undefined,
    // todo fix id
    id = Math.floor(Math.random() * 1000000000),
    hideLabel = false,
    label = "",
    pinnedText = undefined,
    pinnedTextPosition = undefined,
    disabled = false,
    placeholder = "",
    inputRef = undefined,
    value = null,
    autoComplete = "on",
    onChange = () => {},
    onKeyPress = () => {},
    min = undefined,
    max = undefined,
    step = undefined,
    invalid = false,
    enableNumberArrows,
}) => {
    const internalValue = value === null ? undefined : value;
    const [buttonType, setButtonType] = useState(type);

    const changeInputType = () => {
        setButtonType(buttonType === type ? "text" : "password");
    }

    return (
        <div className={styles.inputContainer}>
            <div
                className={classNames({
                    [styles.labelRow]: !hideLabel && !isEmpty(label),
                })}
            >
                <label htmlFor={id}>{label}</label>
                {hint ? (
                    <Popup
                        trigger={() => (
                            <span
                                className={classNames({
                                    [styles.labelHint]: true,
                                })}
                            />
                        )}
                        position="right center"
                        text={hint}
                    />
                ) : null}
                {required ? (
                    <span className={styles.requiredLabel}>Required</span>
                ) : null}
            </div>

            <div
                className={classNames({
                    [styles.inputRow]: true,
                    [styles.inputRowPinnedTextLeft]:
                    pinnedText && pinnedTextPosition === "left",
                    [styles.inputRowPinnedTextRight]:
                    pinnedText && pinnedTextPosition === "right",
                })}
                style={{ width }}
            >
                {pinnedText ? (
                    <span
                        className={classNames({
                            [styles.inputPinnedText]: true,
                            [styles.inputPinnedTextLeft]: pinnedTextPosition === "left",
                            [styles.inputPinnedTextRight]: pinnedTextPosition === "right",
                            [styles.inputPinnedTextDisabled]: disabled,
                        })}
                    >
                        {pinnedText}
                    </span>
                ) : null}

                <input
                    ref={inputRef}
                    id={id}
                    type={buttonType}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    value={internalValue}
                    autoComplete={autoComplete}
                    onChange={(e) => onChange(e, e.target.value)}
                    onKeyPress={(e) => onKeyPress(e)}
                    className={classNames({
                        [styles.inputWithIcon]: type === "password",
                        [styles.inputValidationError]: invalid || !!validationError,
                        [styles.disableNumberArrows]: !enableNumberArrows,
                    })}
                    min={min}
                    max={max}
                    step={step}
                />

                {type === "password" && (
                    <span className={styles.passwordIcon}>
                        <Icon
                            src={buttonType === "password" ? ShowIcon : HideIcon}
                            onClick={changeInputType}
                        />
                    </span>
                )}
            </div>

            {description && (
                <div className={styles.description}>{description}</div>
            )}
            {validationError && (
                <div className={styles.validationError}>{validationError}</div>
            )}
        </div>
    );
}