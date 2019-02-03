import { IComponentOptions, IController } from 'angular';
import { Hero } from '@/app/hero';
import { HeroService } from '@/app/hero.service';

interface Component extends IComponentOptions {
  selector: string;
  styles?: any[];
}

export const DashboardComponent: Component = {
  selector: 'appDashboard',
  styles: [require('./dashboard.component.scss')],

  template: require('./dashboard.component.html'),
  controller: class implements IController {
    static $inject: string[] = ['HeroService'];

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    $onInit() {
      this.getHeroes();
    }

    getHeroes(): void {
      this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
  }
}
