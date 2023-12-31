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
export declare type TeamsCreateFormInputValues = {
    team_name?: string;
    elo_rating?: string;
    played_games?: string;
};
export declare type TeamsCreateFormValidationValues = {
    team_name?: ValidationFunction<string>;
    elo_rating?: ValidationFunction<string>;
    played_games?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamsCreateFormOverridesProps = {
    TeamsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    team_name?: PrimitiveOverrideProps<TextFieldProps>;
    elo_rating?: PrimitiveOverrideProps<TextFieldProps>;
    played_games?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamsCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamsCreateFormInputValues) => TeamsCreateFormInputValues;
    onSuccess?: (fields: TeamsCreateFormInputValues) => void;
    onError?: (fields: TeamsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamsCreateFormInputValues) => TeamsCreateFormInputValues;
    onValidate?: TeamsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamsCreateForm(props: TeamsCreateFormProps): React.ReactElement;
