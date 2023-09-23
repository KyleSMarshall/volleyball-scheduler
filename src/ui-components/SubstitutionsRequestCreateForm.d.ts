/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubstitutionsRequestCreateFormInputValues = {};
export declare type SubstitutionsRequestCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubstitutionsRequestCreateFormOverridesProps = {
    SubstitutionsRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SubstitutionsRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: SubstitutionsRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubstitutionsRequestCreateFormInputValues) => SubstitutionsRequestCreateFormInputValues;
    onSuccess?: (fields: SubstitutionsRequestCreateFormInputValues) => void;
    onError?: (fields: SubstitutionsRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubstitutionsRequestCreateFormInputValues) => SubstitutionsRequestCreateFormInputValues;
    onValidate?: SubstitutionsRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubstitutionsRequestCreateForm(props: SubstitutionsRequestCreateFormProps): React.ReactElement;
