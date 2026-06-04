import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { SignInPage } from '@backstage/core-components';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { SignInPageBlueprint } from '@backstage/plugin-app-react';
import { navModule } from './modules/nav';

const githubSignInPage = SignInPageBlueprint.make({
  params: {
    loader: async () => props => (
      <SignInPage
        {...props}
        providers={[
          {
            id: 'github-auth-provider',
            title: 'GitHub',
            message: 'Sign in with GitHub',
            apiRef: githubAuthApiRef,
          },
        ]}
      />
    ),
  },
});

export default createApp({
  features: [catalogPlugin, navModule, githubSignInPage],
});
