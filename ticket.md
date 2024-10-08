# URL Shortening Service User Story

## Job To Be Done (Problem Statement)

As a customer engagement specialist  
I want to be able to shorten long URLs  
So that I can easily share links with customers in a user-friendly way

## Acceptance Criteria

1. The API accepts a long URL as an input
2. The path of the shortened URL can be up to 6 alphanumeric characters in length
3. The shortened URL redirects to the original long URL when accessed
4. The system should not generate duplicate shortened URLs for the same long URL
5. The system should not generate duplicate shortened URLs for a different long URL
6. The system provides an error response if an invalid URL format is entered
7. The system can handle URLs containing special characters and query parameters without losing information
