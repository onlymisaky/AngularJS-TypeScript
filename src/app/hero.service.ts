import { IPromise, IHttpService, IQService, IDeferred } from 'angular';

import { HEROES } from '@/app/mock-heroes';
import { Hero } from './hero';
import { MessageService } from './message.service';

export class HeroService {

  static $inject: string[] = ['$http', '$q', 'MessageService'];

  // private heroesUrl = 'api/heroes';
  private heroes: Hero[] = HEROES;

  constructor(
    private $http: IHttpService,
    private $q: IQService,
    private messageService: MessageService) { }

  getHeroes(): IPromise<Hero[]> {
    const deferred = this.$q.defer<Hero[]>();
    this.log('fetched heroes');
    deferred.resolve(this.heroes);
    // this.$http.get<Hero[]>(this.heroesUrl)
    //   .then(response => {
    //     this.log('fetched heroes');
    //     deferred.resolve(response.data);
    //   })
    //   .catch(err => {
    //     this.log(err);
    //     deferred.reject(err);
    //   });
    return deferred.promise;
  }

  getHero(id: number): IPromise<Hero> {
    const deferred = this.$q.defer<Hero>();
    this.log(`fetched hero id=${id}`);
    deferred.resolve(this.heroes.filter(hero => hero.id === id)[0])
    // this.$http.get<Hero>(this.heroesUrl)
    //   .then(({ data }) => {
    //     this.log(`fetched hero id=${id}`);
    //     deferred.resolve(data);
    //   })
    //   .catch(err => {
    //     this.log(err);
    //     deferred.reject(err);
    //   });
    return deferred.promise;
  }

  searchHeroes(name: string): IPromise<Hero[]> {
    const deferred = this.$q.defer<Hero[]>();
    const heroes = this.heroes.filter(hero => hero.name.includes(name));
    if (heroes.length) {
      this.log(`found ${heroes.length} heroes whose name contains ${name}`);
    } else {
      this.log(`no heroes with name that contains ${name}`);
    }
    deferred.resolve(heroes);

    // this.$http.get<Hero[]>(this.heroesUrl, { params: { name } })
    //   .then(({ data }) => {
    //     this.log(`found heroes matching "${name}"`);
    //     deferred.resolve(data)
    //   })
    //   .catch(err => {
    //     this.log(err);
    //     deferred.reject(err);
    //   });
    return deferred.promise;
  }

  addHero(hero: Hero): IPromise<Hero> {
    const deferred = this.$q.defer<Hero>();
    let ids = this.heroes.map(hero => hero.id);
    if (ids.length === 0) {
      ids = [10];
    }
    const id = Math.max(...ids) + 1;
    let newHero = { id, name: hero.name };
    this.heroes.push(newHero);
    this.log('added new hero');
    deferred.resolve(newHero);
    // this.$http.post<Hero>(this.heroesUrl, hero)
    //   .then(({ data }) => {
    //     this.log(`added hero w/ id=${hero.id}`);
    //     deferred.resolve(data);
    //   })
    //   .catch(err => {
    //     this.log(err);
    //     deferred.reject(err);
    //   });
    return deferred.promise;
  }

  deleteHero(hero: Hero | number): IPromise<Hero> {
    const deferred = this.$q.defer<Hero>();
    const id = typeof hero === 'number' ? hero : hero.id;
    let index = this.heroes.findIndex(hero => hero.id === id);
    this.log(`deleted hero id=${id}`);
    deferred.resolve(this.heroes.splice(index, 1)[0]);
    // const url = `${this.heroesUrl}/${id}`;
    // this.$http.delete<Hero>(url)
    //   .then(({ data }) => {
    //     this.log(`deleted hero id=${id}`);
    //     deferred.resolve(data)
    //   })
    //   .catch(err => {
    //     this.log(err);
    //     deferred.reject(err);
    //   });
    return deferred.promise;
  }

  updateHero(hero: Hero): IPromise<any> {
    const deferred = this.$q.defer<Hero>();
    for (const item of this.heroes) {
      if (item.id === hero.id) {
        item.name = hero.name;
        this.log(`updated hero id=${hero.id}`);
        break;
      }
    }
    deferred.resolve();
    // this.$http.put<Hero>(this.heroesUrl, hero)
    //   .then(({ data }) => {
    //     this.log(`updated hero id=${hero.id}`);
    //     deferred.resolve(data)
    //   })
    //   .catch(err => {
    //     this.log(err);
    //     deferred.reject(err);
    //   });
    return deferred.promise;
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
