/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    Guides: [
      'deploysamiksha',
      'deploysamwad',
      'deploypariksha',
      'GettingStarted',
    ],
    Components: [
      'ComponentsOverview',
      {
        'Mobile Application': [
          'COMobileApplication',
          'GettingStartedMobileComponent',
          'FormManagementModule',
          'AncillaryScreensModule',
          'AndroidProfileManagementModule',
          'CascadingSearchModule',
          'NotificationModule',
          'OfflineHandlingModule',
          'Grove',
          {
            Guides: [
              'CommunicatingAmongModules',
            ],
          },
        ],
      },
      {
        'Application Control': [
          'COAppControl',
          'AppControlPanel',
          'UserManagement',
          'UserAuthentication',
          'UserAuthorisation',
          'AppDataManagement',
          'AppConfig',
          {
            Guides: [
              'AdminAddingCustomRoutes',
              'AdminArchitectureAndDesign',
            ],
          },
        ],
      },
      {
        'PDF Generator': [
          'COPDFGenerator',
          'GoogleDoc2PDF',
          'FormResponses2PDF',
          'HTML2PDF',
          {
            Guides: [
              'BuildingGDocTemplate',
              'BuildingFieldsMapping',
              'ExtendingBase',
            ],
          },
        ],
      },
      {'Data Analytics': ['CODataAnalytics']},
      {'Application Logging': ['COApplicationLogging']},
      {
        'Database Management': [
          'CODatabaseManagement',
          {
            PostgreSQL: [
              'dSmall',
              'dMedium',
              'pSmall',
              'pMedium',
              'pLarge',
              {Guides: ['PSQLReplication']},
            ],
          },
          {MongoDB: []},
          {Redis: []},
          {Cassandra: []},
          {Elasticsearch: []},
        ],
      },
    ],
    Products: ['SamikshaFuncSpecs', 'SamwadFuncSpecs', 'ParikshaFuncSpecs'],
  },
};
