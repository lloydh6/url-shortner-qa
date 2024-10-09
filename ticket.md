# URL Shortening Service User Story

## Job To Be Done (Problem Statement)

**As a** customer engagement specialist  
**I want** to be able to shorten long URLs  
**So that** I can easily share links with customers in a user-friendly way

## Acceptance Criteria

1. The API accepts a long URL as input in a JSON body format.
2. The API returns a JSON response containing the shortened URL.
3. The path of the shortened URL is up to 6 alphanumeric characters in length.
4. The shortened URL redirects to the original long URL when accessed.
5. The system does not generate duplicate shortened URLs for the same long URL.
6. The system ensures unique shortened URLs are generated for different long URLs.
7. The system provides an error response if an invalid URL format is entered.
8. The system can handle URLs containing special characters and query parameters.
9. The API provides a decode endpoint that accepts a shortened URL in a JSON body and returns the original URL in a JSON response.
10. The system includes a "follow" endpoint that accepts requests to previously shortened URLs and redirects to the original URL.
11. The API returns the same shortened URL for a long URL that has already been shortened (within the uniqueness period).
12. All API responses are in JSON format.
