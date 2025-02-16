import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

export const dynamo = DynamoDBDocument.from(new DynamoDB())
export const TABLE_NAME_CDAP_MGR = 'CDAP-Mgr'
export const TABLE_NAME_CDAP_MARKET = 'CDAP-Market'
