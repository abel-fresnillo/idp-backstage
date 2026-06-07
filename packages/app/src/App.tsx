import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import techdocsPlugin from '@backstage/plugin-techdocs/alpha';
import githubActionsPlugin from '@backstage-community/plugin-github-actions/alpha';
import apiDocsPlugin from '@backstage/plugin-api-docs/alpha';
import { SignInPage } from '@backstage/core-components';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { SignInPageBlueprint } from '@backstage/plugin-app-react';
import { navModule } from './modules/nav';

const signInModule = createFrontendModule({
  pluginId: 'app',
  extensions: [
    SignInPageBlueprint.make({
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
    }),
  ],
});

export default createApp({
  features: [catalogPlugin, techdocsPlugin, githubActionsPlugin, apiDocsPlugin, navModule, signInModule],
});
