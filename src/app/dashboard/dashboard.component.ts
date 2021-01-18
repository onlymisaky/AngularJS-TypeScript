import { IComponentOptions, IController } from 'angular';
import { Hero } from '@/app/hero';
import { HeroService } from '@/app/hero.service';
import './dashboard.component.scss';

export const DashboardComponent: IComponentOptions = {
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
        .then((heroes) => {
          this.heroes = heroes.slice(1, 5);
        });
    }
  },
};
