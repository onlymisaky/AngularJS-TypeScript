import { IComponentOptions, IController } from 'angular';
import { Hero } from '@/app/hero';
import { HeroService } from '@/app/hero.service';
import './hero-search.component.scss';

export const HeroSearchComponent: IComponentOptions = {
  template: require('./hero-search.component.html'),
  controller: class implements IController {
    static $inject: string[] = ['HeroService'];

    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    search(term: string): void {
      this.heroService.searchHeroes(term)
        .then(heroes => this.heroes = heroes);
    }
  }
}
