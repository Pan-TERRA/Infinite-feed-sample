# Infinite Feed API

A REST API service designed for building infinite scroll social media feeds, built with serverless functions and deployed on Vercel. Perfect for mobile app development, prototyping, and testing.

## Live API

**Base URL**: `https://infinite-feed-sample.vercel.app/`

## Repository & Hosting

This API is built using:
- **Runtime**: Node.js serverless functions
- **Hosting**: Vercel (with automatic deployments from Git)
- **Data Source**: Static JSON file with realistic sample data
- **CORS**: Enabled for cross-origin requests

The API leverages Vercel's native dynamic routing system for optimal performance and scalability.

## Data Entities

### Post
```json
{
  "id": 1,
  "title": "Morning Coffee Ritual",
  "body": "There's something magical about that first cup of coffee...",
  "mediaType": "image",
  "mediaUrl": "https://picsum.photos/400/600?random=1",
  "thumbnailUrl": "https://picsum.photos/400/600?random=1", // for videos
  "author": "Sarah Chen",
  "avatar": "https://i.pravatar.cc/150?img=1",
  "createdAt": "2024-01-15T08:30:00Z",
  "commentCount": 12,
  "likesCount": 245
}
```

**Media Types**:
- `"text"` - Text-only posts (mediaUrl is null)
- `"image"` - Posts with images
- `"video"` - Posts with video content (includes thumbnailUrl)

### Comment
```json
{
  "id": 1,
  "postId": 1,
  "author": "Emma Davis",
  "avatar": "https://i.pravatar.cc/150?img=16",
  "text": "I feel the same way about my morning coffee!",
  "createdAt": "2024-01-15T09:00:00Z",
  "likesCount": 12
}
```

## API Endpoints

### Posts

#### Get All Posts
```
GET /api/posts
```

**Query Parameters**:
- `_page` (optional) - Page number, default: 1
- `_limit` (optional) - Items per page, default: 10

**Response Headers**:
- `X-Total-Count` - Total number of posts

**Example**:
```bash
curl "https://infinite-feed-sample.vercel.app/api/posts?_page=1&_limit=5"
```

### Comments

#### Get All Comments
```
GET /api/comments
```

**Query Parameters**:
- `_page` (optional) - Page number, default: 1
- `_limit` (optional) - Items per page, default: 10
- `postId` (optional) - Filter comments by post ID

**Response Headers**:
- `X-Total-Count` - Total number of comments (after filtering)

**Example**:
```bash
# Get all comments with pagination
curl "https://infinite-feed-sample.vercel.app/api/comments?_page=1&_limit=10"

# Get comments for a specific post
curl "https://infinite-feed-sample.vercel.app/api/comments?postId=1&_page=1&_limit=5"
```

#### Get Comments for Specific Post
```
GET /api/posts/{id}/comments
```

**Path Parameters**:
- `id` - Post ID

**Query Parameters**:
- `_page` (optional) - Page number, default: 1
- `_limit` (optional) - Items per page, default: 10

**Example**:
```bash
curl "https://infinite-feed-sample.vercel.app/api/posts/1/comments?_page=1&_limit=10"
```

## Sample Data

The API includes:
- **15 posts** with mixed content types (text, images, videos)
- **50 comments** distributed across posts
- **Realistic data**: Usernames, avatars, timestamps, engagement metrics
- **Special cases**: 
  - Post #1 has 12 comments (highest engagement)
  - 3 posts have 0 comments
  - Mix of different media types and content lengths

## Development

### Local Development
```bash
# Clone the repository
git clone <your-repo-url>
cd infinite-feed-api

# Install dependencies
npm install

# Run locally
npm run dev
```
