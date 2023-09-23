import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerMatchSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MatchSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly competing_teams?: (Teams | null)[] | null;
  readonly game_time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMatchSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MatchSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly competing_teams: AsyncCollection<Teams>;
  readonly game_time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MatchSchedule = LazyLoading extends LazyLoadingDisabled ? EagerMatchSchedule : LazyMatchSchedule

export declare const MatchSchedule: (new (init: ModelInit<MatchSchedule>) => MatchSchedule) & {
  copyOf(source: MatchSchedule, mutator: (draft: MutableModel<MatchSchedule>) => MutableModel<MatchSchedule> | void): MatchSchedule;
}

type EagerMatchHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MatchHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly result_1?: string | null;
  readonly timestamp?: string | null;
  readonly competing_teams?: (Teams | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMatchHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MatchHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly result_1?: string | null;
  readonly timestamp?: string | null;
  readonly competing_teams: AsyncCollection<Teams>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MatchHistory = LazyLoading extends LazyLoadingDisabled ? EagerMatchHistory : LazyMatchHistory

export declare const MatchHistory: (new (init: ModelInit<MatchHistory>) => MatchHistory) & {
  copyOf(source: MatchHistory, mutator: (draft: MutableModel<MatchHistory>) => MutableModel<MatchHistory> | void): MatchHistory;
}

type EagerSubstitutionsRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubstitutionsRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly team_name?: Teams | null;
  readonly confirmed_players?: (Players | null)[] | null;
  readonly scheduled_match?: MatchSchedule | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly substitutionsRequestTeam_nameId?: string | null;
  readonly substitutionsRequestScheduled_matchId?: string | null;
}

type LazySubstitutionsRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubstitutionsRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly team_name: AsyncItem<Teams | undefined>;
  readonly confirmed_players: AsyncCollection<Players>;
  readonly scheduled_match: AsyncItem<MatchSchedule | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly substitutionsRequestTeam_nameId?: string | null;
  readonly substitutionsRequestScheduled_matchId?: string | null;
}

export declare type SubstitutionsRequest = LazyLoading extends LazyLoadingDisabled ? EagerSubstitutionsRequest : LazySubstitutionsRequest

export declare const SubstitutionsRequest: (new (init: ModelInit<SubstitutionsRequest>) => SubstitutionsRequest) & {
  copyOf(source: SubstitutionsRequest, mutator: (draft: MutableModel<SubstitutionsRequest>) => MutableModel<SubstitutionsRequest> | void): SubstitutionsRequest;
}

type EagerTeams = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teams, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly team_name?: string | null;
  readonly elo_rating?: string | null;
  readonly played_games?: string | null;
  readonly matchscheduleID: string;
  readonly matchhistoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeams = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teams, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly team_name?: string | null;
  readonly elo_rating?: string | null;
  readonly played_games?: string | null;
  readonly matchscheduleID: string;
  readonly matchhistoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Teams = LazyLoading extends LazyLoadingDisabled ? EagerTeams : LazyTeams

export declare const Teams: (new (init: ModelInit<Teams>) => Teams) & {
  copyOf(source: Teams, mutator: (draft: MutableModel<Teams>) => MutableModel<Teams> | void): Teams;
}

type EagerPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phone_number?: string | null;
  readonly gender?: string | null;
  readonly team_name?: Teams | null;
  readonly substitutionsrequestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playersTeam_nameId?: string | null;
}

type LazyPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phone_number?: string | null;
  readonly gender?: string | null;
  readonly team_name: AsyncItem<Teams | undefined>;
  readonly substitutionsrequestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playersTeam_nameId?: string | null;
}

export declare type Players = LazyLoading extends LazyLoadingDisabled ? EagerPlayers : LazyPlayers

export declare const Players: (new (init: ModelInit<Players>) => Players) & {
  copyOf(source: Players, mutator: (draft: MutableModel<Players>) => MutableModel<Players> | void): Players;
}