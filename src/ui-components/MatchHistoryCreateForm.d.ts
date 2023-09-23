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
export declare type MatchHistoryCreateFormInputValues = {
    result_1?: string;
    timestamp?: string;
};
export declare type MatchHistoryCreateFormValidationValues = {
    result_1?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchHistoryCreateFormOverridesProps = {
    MatchHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    result_1?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: MatchHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MatchHistoryCreateFormInputValues) => MatchHistoryCreateFormInputValues;
    onSuccess?: (fields: MatchHistoryCreateFormInputValues) => void;
    onError?: (fields: MatchHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchHistoryCreateFormInputValues) => MatchHistoryCreateFormInputValues;
    onValidate?: MatchHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function MatchHistoryCreateForm(props: MatchHistoryCreateFormProps): React.ReactElement;
