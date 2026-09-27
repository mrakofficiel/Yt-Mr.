# AK Social — Full Website Starter

AK Social is a **browser website** (not a native Android/iOS app) built with Next.js + Supabase. Open it in Chrome/Edge/Firefox on phone or computer.

## Website features
- TikTok-style vertical For You feed
- Responsive desktop + mobile web layout
- Google sign-in through Supabase Auth
- User accounts/profiles
- Upload short videos from the browser
- In-browser trim preview before publishing
- Captions
- Likes, comments and follows database tables
- Search creators/videos
- User and admin roles
- Admin moderation foundation
- Supabase Storage for video files
- Row Level Security policies
- Production-ready structure for video transcoding/CDN later

## Start locally
1. Install Node.js 20+.
2. Create a Supabase project.
3. Run `supabase/schema.sql` in Supabase SQL Editor.
4. Enable Google under Supabase Authentication → Providers.
5. Copy `.env.example` to `.env.local` and add the Supabase URL and anon/publishable key.
6. Run `npm install`.
7. Run `npm run dev`.
8. Open `http://localhost:3000` in a browser.

## Google login
In Supabase Authentication → URL Configuration, add your local site URL and production website URL. Then configure the Google OAuth client in Google Cloud and paste its credentials into Supabase.

## Important production upgrade
The browser editor previews trim points, while the starter stores the original upload plus trim metadata. For true exported clips, add an FFmpeg processing worker, generate HLS/DASH renditions and thumbnails, then serve through a CDN. This is the normal architecture for a serious video social website.

## Admin
The database has `profiles.role` with `user` and `admin`. Promote your own account to admin from Supabase SQL after signing in:

`update public.profiles set role='admin' where id='YOUR_AUTH_USER_ID';`

Do not expose the Supabase service-role key in browser code.
