import { IComponentOptions, IController } from 'angular';
import { StateService } from '@uirouter/angularjs';
import { Hero } from '@/app/hero';
import { HeroService } from '@/app/hero.service';
import './hero-detail.component.scss';

export const HeroDetailComponent: IComponentOptions = {
  template: require('./hero-detail.component.html'),
  bindings: {
    hero: '<',
  },
  controller: class implements IController {
    static $inject: string[] = ['$state', 'HeroService'];

    hero!: Hero;

    constructor(
      private $state: StateService,
      private heroService: HeroService,
    ) { }

    $onInit() {
      this.getHero();
    }

    getHero(): void {
      const id = +this.$state.params.id;
      this.heroService.getHero(id)
        .then((hero) => {
          this.hero = hero;
        });
    }

    goBack(): void {
      this.$state.go('dashboard');
    }

    save(): void {
      this.heroService.updateHero(this.hero)
        .then(() => this.goBack());
    }
  },
};
