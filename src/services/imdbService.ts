const baseGoodsUrl = 'https://imdb8.p.rapidapi.com';
const APIKey = '2c2aa355d4msh8dd98a418cda1b0p1a857ajsnadb14156dc08';

import { FindResponse } from './models';

export interface APIResponse<T extends object> {
  success: boolean;
  error?: string;
  response?: T;
}

export interface APIRequest {
  path: string;
  method?: 'GET' | 'POST';
  body?: object;
}

const commonHeaders = { 
  "Content-Type": "application/json",
  "X-RapidAPI-Key": APIKey,
  "X-RapidAPI-Host": 'imdb8.p.rapidapi.com',
};

export const findMovies = async (queryString: string): Promise<APIResponse<FindResponse>> => {
  const response = await performRequest <FindResponse>({
    path: 'title/find?q=' + queryString,
  });
  return response;
}

export const performRequest = async <T extends object>({ path, method = 'GET', body }: APIRequest): Promise<APIResponse<T>> => {
  try {
    const bodyString = body ? JSON.stringify(body) : undefined;
    console.log('request method: ', method);
    console.log('headers: ', commonHeaders);
    console.log('body: ', body);
    const response = await fetch([baseGoodsUrl, path].join('/'), { 
      method,
      headers: commonHeaders,
      body: bodyString,
    });
    if (response.ok) {
      const responseJson = await response.json();
      console.log('Response: ', responseJson);
      return { success: true, response: responseJson };
    } 
    return {success: false, error: 'Something Went Wrong'};  
    
  } catch(error) {
    console.log('Something went wrong: ', error);
    return {success: false, error: 'Something Went Wrong'};
  }
};