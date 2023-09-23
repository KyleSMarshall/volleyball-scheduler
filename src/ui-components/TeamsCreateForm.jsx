/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Teams } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TeamsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    team_name: "",
    elo_rating: "",
    played_games: "",
  };
  const [team_name, setTeam_name] = React.useState(initialValues.team_name);
  const [elo_rating, setElo_rating] = React.useState(initialValues.elo_rating);
  const [played_games, setPlayed_games] = React.useState(
    initialValues.played_games
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTeam_name(initialValues.team_name);
    setElo_rating(initialValues.elo_rating);
    setPlayed_games(initialValues.played_games);
    setErrors({});
  };
  const validations = {
    team_name: [],
    elo_rating: [],
    played_games: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          team_name,
          elo_rating,
          played_games,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Teams(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TeamsCreateForm")}
      {...rest}
    >
      <TextField
        label="Team name"
        isRequired={false}
        isReadOnly={false}
        value={team_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              team_name: value,
              elo_rating,
              played_games,
            };
            const result = onChange(modelFields);
            value = result?.team_name ?? value;
          }
          if (errors.team_name?.hasError) {
            runValidationTasks("team_name", value);
          }
          setTeam_name(value);
        }}
        onBlur={() => runValidationTasks("team_name", team_name)}
        errorMessage={errors.team_name?.errorMessage}
        hasError={errors.team_name?.hasError}
        {...getOverrideProps(overrides, "team_name")}
      ></TextField>
      <TextField
        label="Elo rating"
        isRequired={false}
        isReadOnly={false}
        value={elo_rating}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              team_name,
              elo_rating: value,
              played_games,
            };
            const result = onChange(modelFields);
            value = result?.elo_rating ?? value;
          }
          if (errors.elo_rating?.hasError) {
            runValidationTasks("elo_rating", value);
          }
          setElo_rating(value);
        }}
        onBlur={() => runValidationTasks("elo_rating", elo_rating)}
        errorMessage={errors.elo_rating?.errorMessage}
        hasError={errors.elo_rating?.hasError}
        {...getOverrideProps(overrides, "elo_rating")}
      ></TextField>
      <TextField
        label="Played games"
        isRequired={false}
        isReadOnly={false}
        value={played_games}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              team_name,
              elo_rating,
              played_games: value,
            };
            const result = onChange(modelFields);
            value = result?.played_games ?? value;
          }
          if (errors.played_games?.hasError) {
            runValidationTasks("played_games", value);
          }
          setPlayed_games(value);
        }}
        onBlur={() => runValidationTasks("played_games", played_games)}
        errorMessage={errors.played_games?.errorMessage}
        hasError={errors.played_games?.hasError}
        {...getOverrideProps(overrides, "played_games")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
