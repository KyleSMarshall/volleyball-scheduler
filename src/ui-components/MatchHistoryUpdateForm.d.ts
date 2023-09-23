/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MatchHistory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MatchHistoryUpdateFormInputValues = {
    result_1?: string;
    timestamp?: string;
};
export declare type MatchHistoryUpdateFormValidationValues = {
    result_1?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchHistoryUpdateFormOverridesProps = {
    MatchHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    result_1?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: MatchHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    matchHistory?: MatchHistory;
    onSubmit?: (fields: MatchHistoryUpdateFormInputValues) => MatchHistoryUpdateFormInputValues;
    onSuccess?: (fields: MatchHistoryUpdateFormInputValues) => void;
    onError?: (fields: MatchHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchHistoryUpdateFormInputValues) => MatchHistoryUpdateFormInputValues;
    onValidate?: MatchHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MatchHistoryUpdateForm(props: MatchHistoryUpdateFormProps): React.ReactElement;
