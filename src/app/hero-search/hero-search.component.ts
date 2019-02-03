import { IComponentOptions, IController } from 'angular';
import { Hero } from '@/app/hero';
import { HeroService } from '@/app/hero.service';


interface Component extends IComponentOptions {
  selector: string;
  styles?: any[];
}

export const HeroSearchComponent: Component = {
  selector: 'appHeroSearch',
  styles: [require('./hero-search.component.scss')],

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
