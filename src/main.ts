import * as angular from 'angular';

import { AppModule } from '@/app/app.module';

angular.element(document).ready(() => {
  angular.bootstrap(document, [AppModule]);
});
