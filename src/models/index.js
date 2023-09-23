// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MatchSchedule, MatchHistory, SubstitutionsRequest, Teams, Players } = initSchema(schema);

export {
  MatchSchedule,
  MatchHistory,
  SubstitutionsRequest,
  Teams,
  Players
};