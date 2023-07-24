import AWS from 'aws-sdk';
import { AWSRegions } from './types/aws';
AWS.config.update({region: AWSRegions.AP_SOUTH_1});
const { DynamoDB } = AWS;
const dynamodb = new DynamoDB();

//create a table 
export const dynamodbCreateTable = async (params: AWS.DynamoDB.CreateTableInput) => {
    try
    {
        const result = await dynamodb.createTable(params).promise();
        console.log('Table created',result);
        return result;
    }
    catch(e)
    {
        if(e instanceof Error)
        {
            throw e
        }
        throw new Error('dynamodbCreateTable error object unknown type');
    }
}

//describe a table


//delete a table 


//create a record 
