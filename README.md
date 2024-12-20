# Tube Buddy

A web application to help you track and manage your YouTube watch-later videos, with reminders to actually watch them.

## Features

- Save YouTube videos to watch later
- Track video watching status (Not Started, Watching, Finished)
- Get email reminders for unwatched videos
- Real-time updates using WebSocket
- Responsive design for mobile and desktop
- User authentication and personalized video lists

## Tech Stack

- **Frontend:** Next.js 14
- **Styling:** TailwindCSS
- **Authentication:** Custom auth with session cookies
- **Real-time Updates:** Socket.IO
- **Form Handling:** Formik
- **HTTP Client:** Axios

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create a `.env` file with the following variables:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3031
   NEXT_PUBLIC_SOCKET_URL=http://localhost:3031
   ```
4. Run the development server:
   ```bash
   yarn run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Setup

- Node.js 18+ recommended
- Backend server running on port 3031 (separate repository)

## Project Structure

- `src/app/*` - Next.js 14 app router pages
- `src/components/*` - Reusable React components
- `src/contexts/*` - React context providers
- `src/lib/*` - Utility functions and services
- `src/styles/*` - Global styles and CSS modules

## Contributing

Feel free to submit issues and pull requests.

## License

© uCode 2024
