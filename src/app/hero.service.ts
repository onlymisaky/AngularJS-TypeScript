import { IPromise, IHttpService, IQService, IDeferred } from 'angular';

import { Hero } from './hero';
import { MessageService } from './message.service';

export class HeroService {

  static $inject: string[] = ['$http', '$q', 'MessageService'];

  private heroesUrl = 'api/heroes';

  constructor(
    private $http: IHttpService,
    private $q: IQService,
    private messageService: MessageService) { }

  getHeroes(): IPromise<Hero[]> {
    const deferred = this.$q.defer<Hero[]>();
    this.$http.get<Hero[]>(this.heroesUrl)
      .then(response => {
        this.log('fetched heroes');
        deferred.resolve(response.data)
      })
      .catch(err => {
        this.log(err);
        deferred.reject(err);
      });
    return deferred.promise;
  }

  getHero(id: number): IPromise<Hero> {
    const deferred = this.$q.defer<Hero>();
    this.$http.get<Hero>(this.heroesUrl)
      .then(({ data }) => {
        this.log(`fetched hero id=${id}`);
        deferred.resolve(data);
      })
      .catch(err => {
        this.log(err);
        deferred.reject(err);
      });
    return deferred.promise;
  }

  searchHeroes(name: string): IPromise<Hero[]> {
    const deferred = this.$q.defer<Hero[]>();
    this.$http.get<Hero[]>(this.heroesUrl, { params: { name } })
      .then(({ data }) => {
        this.log(`found heroes matching "${name}"`);
        deferred.resolve(data)
      })
      .catch(err => {
        this.log(err);
        deferred.reject(err);
      });
    return deferred.promise;
  }

  addHero(hero: Hero): IPromise<Hero> {
    const deferred = this.$q.defer<Hero>();
    this.$http.post<Hero>(this.heroesUrl, hero)
      .then(({ data }) => {
        this.log(`added hero w/ id=${hero.id}`)
        deferred.resolve(data)
      })
      .catch(err => {
        this.log(err);
        deferred.reject(err);
      });
    return deferred.promise;
  }

  deleteHero(hero: Hero | number): IPromise<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    const deferred = this.$q.defer<Hero>();
    this.$http.delete<Hero>(url)
      .then(({ data }) => {
        this.log(`deleted hero id=${id}`);
        deferred.resolve(data)
      })
      .catch(err => {
        this.log(err);
        deferred.reject(err);
      });
    return deferred.promise;
  }

  updateHero(hero: Hero): IPromise<any> {
    const deferred = this.$q.defer<Hero>();
    this.$http.put<Hero>(this.heroesUrl, hero)
      .then(({ data }) => {
        this.log(`updated hero id=${hero.id}`);
        deferred.resolve(data)
      })
      .catch(err => {
        this.log(err);
        deferred.reject(err);
      });
    return deferred.promise;
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
    console.log(this.messageService.messages);

  }
}
