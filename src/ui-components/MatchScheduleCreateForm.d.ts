/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MatchScheduleCreateFormInputValues = {
    game_time?: string;
};
export declare type MatchScheduleCreateFormValidationValues = {
    game_time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchScheduleCreateFormOverridesProps = {
    MatchScheduleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchScheduleCreateFormProps = React.PropsWithChildren<{
    overrides?: MatchScheduleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MatchScheduleCreateFormInputValues) => MatchScheduleCreateFormInputValues;
    onSuccess?: (fields: MatchScheduleCreateFormInputValues) => void;
    onError?: (fields: MatchScheduleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchScheduleCreateFormInputValues) => MatchScheduleCreateFormInputValues;
    onValidate?: MatchScheduleCreateFormValidationValues;
} & React.CSSProperties>;
export default function MatchScheduleCreateForm(props: MatchScheduleCreateFormProps): React.ReactElement;
