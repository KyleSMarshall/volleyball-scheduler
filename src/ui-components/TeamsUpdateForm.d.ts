/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Teams } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamsUpdateFormInputValues = {
    team_name?: string;
    elo_rating?: string;
    played_games?: string;
};
export declare type TeamsUpdateFormValidationValues = {
    team_name?: ValidationFunction<string>;
    elo_rating?: ValidationFunction<string>;
    played_games?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamsUpdateFormOverridesProps = {
    TeamsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    team_name?: PrimitiveOverrideProps<TextFieldProps>;
    elo_rating?: PrimitiveOverrideProps<TextFieldProps>;
    played_games?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teams?: Teams;
    onSubmit?: (fields: TeamsUpdateFormInputValues) => TeamsUpdateFormInputValues;
    onSuccess?: (fields: TeamsUpdateFormInputValues) => void;
    onError?: (fields: TeamsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamsUpdateFormInputValues) => TeamsUpdateFormInputValues;
    onValidate?: TeamsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamsUpdateForm(props: TeamsUpdateFormProps): React.ReactElement;
