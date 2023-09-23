/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SubstitutionsRequest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubstitutionsRequestUpdateFormInputValues = {};
export declare type SubstitutionsRequestUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubstitutionsRequestUpdateFormOverridesProps = {
    SubstitutionsRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SubstitutionsRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubstitutionsRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    substitutionsRequest?: SubstitutionsRequest;
    onSubmit?: (fields: SubstitutionsRequestUpdateFormInputValues) => SubstitutionsRequestUpdateFormInputValues;
    onSuccess?: (fields: SubstitutionsRequestUpdateFormInputValues) => void;
    onError?: (fields: SubstitutionsRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubstitutionsRequestUpdateFormInputValues) => SubstitutionsRequestUpdateFormInputValues;
    onValidate?: SubstitutionsRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubstitutionsRequestUpdateForm(props: SubstitutionsRequestUpdateFormProps): React.ReactElement;
