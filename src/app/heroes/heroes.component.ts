import { IComponentOptions, IController } from 'angular';
import { Hero } from '@/app/hero';
import { HeroService } from '@/app/hero.service';
import './heroes.component.scss';

export const HeroesComponent: IComponentOptions = {
  template: require('./heroes.component.html'),
  controller: class implements IController {

    static $inject: string[] = ['HeroService'];

    heroes: Hero[];
    heroName: string = '';

    constructor(private heroService: HeroService) { }

    $onInit() {
      this.getHeroes();
    }

    getHeroes(): void {
      this
        .heroService.getHeroes()
        .then(heroes => this.heroes = heroes);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .then(() => this.getHeroes());
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero)
        .then();
    }
  }
}
