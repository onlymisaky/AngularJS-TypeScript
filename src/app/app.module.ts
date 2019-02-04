import * as angular from 'angular';

import { RouterModule } from '@/router/router.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from '@/app/dashboard/dashboard.component';
import { HeroDetailComponent } from '@/app/hero-detail/hero-detail.component';
import { HeroSearchComponent } from '@/app/hero-search/hero-search.component';
import { HeroesComponent } from '@/app/heroes/heroes.component';
import { MessagesComponent } from '@/app/messages/messages.component';


import { HeroService } from '@/app/hero.service';
import { MessageService } from '@/app/message.service';

const imports = [RouterModule];
const declarations = {
  components: {
    appRoot: AppComponent,
    appDashboard: DashboardComponent,
    appDetail: HeroDetailComponent,
    appHeroSearch: HeroSearchComponent,
    appHeroes: HeroesComponent,
    appMessages: MessagesComponent
  }
};
const providers = { HeroService, MessageService };

export const AppModule = angular
  .module('App', imports)
  .component(declarations.components)
  .service(providers)
  .name;

