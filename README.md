# Overview

This example application provides a minimal setup for the Stytch React SDK using React and Express with Vite.

# Set up

Follow the steps below to get this application fully functional and running using your own Stytch credentials.

## In the Stytch Dashboard

1. Create a [Stytch](https://stytch.com/) account. Once your account is set up, a Project called "My first project" will be automatically created for you.
2. Within your new Project, navigate to [SDK configuration](https://stytch.com/dashboard/sdk-configuration), and click **Enable SDK**.
3. Navigate to [API Keys](https://stytch.com/dashboard/api-keys). You will need the `project_id`, `secret`, and `public_token` values found on this page later on.

## On your machine

In your terminal clone the project and install dependencies:

```bash
git clone https://github.com/stytchauth/stytch-b2b-react-magic-links-example.git
cd stytch-b2b-react-magic-links-example
# Install dependencies using npm
npm install
```

Next, create the `.env.local` file by running the command below which copies the contents of `.env.template`.

```bash
cp .env.template .env.local
```

Open `.env.local` in the text editor of your choice, and set the environment variables using the project_id, secret, and public_token found on [API Keys](https://stytch.com/dashboard/api-keys).

## Running locally

After completing all the set up steps above the application can be run with the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

# Next Steps

This example app showcases a small portion of what you can accomplish with Stytch. Next, explore adding additional login methods, such as [OAuth](https://stytch.com/docs/b2b/guides/oauth/initial-setup) or [SSO](https://stytch.com/docs/b2b/guides/sso/initial-setup).

# :question: Need support?

Come join our [Slack community](https://stytch.com/docs/resources/support/overview) to speak directly with a Stytch auth expert!
