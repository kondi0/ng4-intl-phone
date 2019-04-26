import {Injectable} from '@angular/core';
import {Country} from "../interface/country.interface";

@Injectable()
export class CountryService {

  countries: Country[];

  constructor() {
    this.countries = [
      {
        name: '',
        dialCode: '994',
        countryCode: 'az'
      },
      {
        name: '',
        dialCode: '1242',
        countryCode: 'bs'
      },
      {
        name: '',
        dialCode: '973',
        countryCode: 'bh'
      },
      {
        name: '',
        dialCode: '880',
        countryCode: 'bd'
      },
      {
        name: '',
        dialCode: '1246',
        countryCode: 'bb'
      },
      {
        name: '',
        dialCode: '375',
        countryCode: 'by'
      },
      {
        name: '',
        dialCode: '32',
        countryCode: 'be'
      },
      {
        name: '',
        dialCode: '501',
        countryCode: 'bz'
      },
      {
        name: '',
        dialCode: '229',
        countryCode: 'bj'
      },
      {
        name: '',
        dialCode: '1441',
        countryCode: 'bm'
      },
      {
        name: '',
        dialCode: '975',
        countryCode: 'bt'
      },
      {
        name: '',
        dialCode: '591',
        countryCode: 'bo'
      },
      {
        name: '',
        dialCode: '387',
        countryCode: 'ba'
      },
      {
        name: '',
        dialCode: '267',
        countryCode: 'bw'
      },
      {
        name: '',
        dialCode: '55',
        countryCode: 'br'
      },
      {
        name: '',
        dialCode: '246',
        countryCode: 'io'
      },
      {
        name: '',
        dialCode: '1284',
        countryCode: 'vg'
      },
      {
        name: '',
        dialCode: '673',
        countryCode: 'bn'
      },
      {
        name: '',
        dialCode: '359',
        countryCode: 'bg'
      },
      {
        name: '',
        dialCode: '226',
        countryCode: 'bf'
      },
      {
        name: '',
        dialCode: '257',
        countryCode: 'bi'
      },
      {
        name: '',
        dialCode: '855',
        countryCode: 'kh'
      },
      {
        name: '',
        dialCode: '237',
        countryCode: 'cm'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'ca'
      },
      {
        name: '',
        dialCode: '238',
        countryCode: 'cv'
      },
      {
        name: '',
        dialCode: '599',
        countryCode: 'bq'
      },
      {
        name: '',
        dialCode: '1345',
        countryCode: 'ky'
      },
      {
        name: '',
        dialCode: '236',
        countryCode: 'cf'
      },
      {
        name: '',
        dialCode: '235',
        countryCode: 'td'
      },
      {
        name: '',
        dialCode: '56',
        countryCode: 'cl'
      },
      {
        name: '',
        dialCode: '86',
        countryCode: 'cn'
      },
      {
        name: '',
        dialCode: '61',
        countryCode: 'cx'
      },
      {
        name: '',
        dialCode: '57',
        countryCode: 'co'
      },
      {
        name: '',
        dialCode: '269',
        countryCode: 'km'
      },
      {
        name: '',
        dialCode: '243',
        countryCode: 'cd'
      },
      {
        name: '',
        dialCode: '242',
        countryCode: 'cg'
      },
      {
        name: '',
        dialCode: '682',
        countryCode: 'ck'
      },
      {
        name: '',
        dialCode: '506',
        countryCode: 'cr'
      },
      {
        name: '',
        dialCode: '225',
        countryCode: 'ci'
      },
      {
        name: '',
        dialCode: '385',
        countryCode: 'hr'
      },
      {
        name: '',
        dialCode: '53',
        countryCode: 'cu'
      },
      {
        name: '',
        dialCode: '599',
        countryCode: 'cw'
      },
      {
        name: '',
        dialCode: '357',
        countryCode: 'cy'
      },
      {
        name: '',
        dialCode: '420',
        countryCode: 'cz'
      },
      {
        name: '',
        dialCode: '45',
        countryCode: 'dk'
      },
      {
        name: '',
        dialCode: '253',
        countryCode: 'dj'
      },
      {
        name: '',
        dialCode: '1767',
        countryCode: 'dm'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'do'
      },
      {
        name: '',
        dialCode: '593',
        countryCode: 'ec'
      },
      {
        name: '',
        dialCode: '20',
        countryCode: 'eg'
      },
      {
        name: '',
        dialCode: '503',
        countryCode: 'sv'
      },
      {
        name: '',
        dialCode: '240',
        countryCode: 'gq'
      },
      {
        name: '',
        dialCode: '291',
        countryCode: 'er'
      },
      {
        name: '',
        dialCode: '372',
        countryCode: 'ee'
      },
      {
        name: '',
        dialCode: '251',
        countryCode: 'et'
      },
      {
        name: '',
        dialCode: '500',
        countryCode: 'fk'
      },
      {
        name: '',
        dialCode: '298',
        countryCode: 'fo'
      },
      {
        name: '',
        dialCode: '679',
        countryCode: 'fj'
      },
      {
        name: '',
        dialCode: '358',
        countryCode: 'fi'
      },
      {
        name: '',
        dialCode: '33',
        countryCode: 'fr'
      },
      {
        name: '',
        dialCode: '594',
        countryCode: 'gf'
      },
      {
        name: '',
        dialCode: '689',
        countryCode: 'pf'
      },
      {
        name: '',
        dialCode: '241',
        countryCode: 'ga'
      },
      {
        name: '',
        dialCode: '220',
        countryCode: 'gm'
      },
      {
        name: '',
        dialCode: '995',
        countryCode: 'ge'
      },
      {
        name: '',
        dialCode: '49',
        countryCode: 'de'
      },
      {
        name: '',
        dialCode: '233',
        countryCode: 'gh'
      },
      {
        name: '',
        dialCode: '350',
        countryCode: 'gi'
      },
      {
        name: '',
        dialCode: '30',
        countryCode: 'gr'
      },
      {
        name: '',
        dialCode: '299',
        countryCode: 'gl'
      },
      {
        name: '',
        dialCode: '1473',
        countryCode: 'gd'
      },
      {
        name: '',
        dialCode: '590',
        countryCode: 'gp'
      },
      {
        name: '',
        dialCode: '1671',
        countryCode: 'gu'
      },
      {
        name: '',
        dialCode: '502',
        countryCode: 'gt'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'gg'
      },
      {
        name: '',
        dialCode: '224',
        countryCode: 'gn'
      },
      {
        name: '',
        dialCode: '245',
        countryCode: 'gw'
      },
      {
        name: '',
        dialCode: '592',
        countryCode: 'gy'
      },
      {
        name: '',
        dialCode: '509',
        countryCode: 'ht'
      },
      {
        name: '',
        dialCode: '504',
        countryCode: 'hn'
      },
      {
        name: '',
        dialCode: '852',
        countryCode: 'hk'
      },
      {
        name: '',
        dialCode: '36',
        countryCode: 'hu'
      },
      {
        name: '',
        dialCode: '354',
        countryCode: 'is'
      },
      {
        name: '',
        dialCode: '91',
        countryCode: 'in'
      },
      {
        name: '',
        dialCode: '62',
        countryCode: 'id'
      },
      {
        name: '',
        dialCode: '98',
        countryCode: 'ir'
      },
      {
        name: '',
        dialCode: '964',
        countryCode: 'iq'
      },
      {
        name: '',
        dialCode: '353',
        countryCode: 'ie'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'im'
      },
      {
        name: '',
        dialCode: '972',
        countryCode: 'il'
      },
      {
        name: '',
        dialCode: '39',
        countryCode: 'it'
      },
      {
        name: '',
        dialCode: '1876',
        countryCode: 'jm'
      },
      {
        name: '',
        dialCode: '81',
        countryCode: 'jp'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'je'
      },
      {
        name: '',
        dialCode: '962',
        countryCode: 'jo'
      },
      {
        name: '',
        dialCode: '7',
        countryCode: 'kz'
      },
      {
        name: '',
        dialCode: '254',
        countryCode: 'ke'
      },
      {
        name: '',
        dialCode: '686',
        countryCode: 'ki'
      },
      {
        name: '',
        dialCode: '383',
        countryCode: 'xk'
      },
      {
        name: '',
        dialCode: '965',
        countryCode: 'kw'
      },
      {
        name: '',
        dialCode: '996',
        countryCode: 'kg'
      },
      {
        name: '',
        dialCode: '856',
        countryCode: 'la'
      },
      {
        name: '',
        dialCode: '371',
        countryCode: 'lv'
      },
      {
        name: '',
        dialCode: '961',
        countryCode: 'lb'
      },
      {
        name: '',
        dialCode: '266',
        countryCode: 'ls'
      },
      {
        name: '',
        dialCode: '231',
        countryCode: 'lr'
      },
      {
        name: '',
        dialCode: '218',
        countryCode: 'ly'
      },
      {
        name: '',
        dialCode: '423',
        countryCode: 'li'
      },
      {
        name: '',
        dialCode: '370',
        countryCode: 'lt'
      },
      {
        name: '',
        dialCode: '352',
        countryCode: 'lu'
      },
      {
        name: '',
        dialCode: '853',
        countryCode: 'mo'
      },
      {
        name: '',
        dialCode: '389',
        countryCode: 'mk'
      },
      {
        name: '',
        dialCode: '261',
        countryCode: 'mg'
      },
      {
        name: '',
        dialCode: '265',
        countryCode: 'mw'
      },
      {
        name: '',
        dialCode: '60',
        countryCode: 'my'
      },
      {
        name: '',
        dialCode: '960',
        countryCode: 'mv'
      },
      {
        name: '',
        dialCode: '223',
        countryCode: 'ml'
      },
      {
        name: '',
        dialCode: '356',
        countryCode: 'mt'
      },
      {
        name: '',
        dialCode: '692',
        countryCode: 'mh'
      },
      {
        name: '',
        dialCode: '596',
        countryCode: 'mq'
      },
      {
        name: '',
        dialCode: '222',
        countryCode: 'mr'
      },
      {
        name: '',
        dialCode: '230',
        countryCode: 'mu'
      },
      {
        name: '',
        dialCode: '262',
        countryCode: 'yt'
      },
      {
        name: '',
        dialCode: '52',
        countryCode: 'mx'
      },
      {
        name: '',
        dialCode: '691',
        countryCode: 'fm'
      },
      {
        name: '',
        dialCode: '373',
        countryCode: 'md'
      },
      {
        name: '',
        dialCode: '377',
        countryCode: 'mc'
      },
      {
        name: '',
        dialCode: '976',
        countryCode: 'mn'
      },
      {
        name: '',
        dialCode: '382',
        countryCode: 'me'
      },
      {
        name: '',
        dialCode: '1664',
        countryCode: 'ms'
      },
      {
        name: '',
        dialCode: '212',
        countryCode: 'ma'
      },
      {
        name: '',
        dialCode: '258',
        countryCode: 'mz'
      },
      {
        name: '',
        dialCode: '95',
        countryCode: 'mm'
      },
      {
        name: '',
        dialCode: '264',
        countryCode: 'na'
      },
      {
        name: '',
        dialCode: '674',
        countryCode: 'nr'
      },
      {
        name: '',
        dialCode: '977',
        countryCode: 'np'
      },
      {
        name: '',
        dialCode: '31',
        countryCode: 'nl'
      },
      {
        name: '',
        dialCode: '687',
        countryCode: 'nc'
      },
      {
        name: '',
        dialCode: '64',
        countryCode: 'nz'
      },
      {
        name: '',
        dialCode: '505',
        countryCode: 'ni'
      },
      {
        name: '',
        dialCode: '227',
        countryCode: 'ne'
      },
      {
        name: '',
        dialCode: '234',
        countryCode: 'ng'
      },
      {
        name: '',
        dialCode: '683',
        countryCode: 'nu'
      },
      {
        name: '',
        dialCode: '672',
        countryCode: 'nf'
      },
      {
        name: '',
        dialCode: '850',
        countryCode: 'kp'
      },
      {
        name: '',
        dialCode: '1670',
        countryCode: 'mp'
      },
      {
        name: '',
        dialCode: '47',
        countryCode: 'no'
      },
      {
        name: '',
        dialCode: '968',
        countryCode: 'om'
      },
      {
        name: '',
        dialCode: '92',
        countryCode: 'pk'
      },
      {
        name: '',
        dialCode: '680',
        countryCode: 'pw'
      },
      {
        name: '',
        dialCode: '970',
        countryCode: 'ps'
      },
      {
        name: '',
        dialCode: '507',
        countryCode: 'pa'
      },
      {
        name: '',
        dialCode: '675',
        countryCode: 'pg'
      },
      {
        name: '',
        dialCode: '595',
        countryCode: 'py'
      },
      {
        name: '',
        dialCode: '51',
        countryCode: 'pe'
      },
      {
        name: '',
        dialCode: '63',
        countryCode: 'ph'
      },
      {
        name: '',
        dialCode: '48',
        countryCode: 'pl'
      },
      {
        name: '',
        dialCode: '351',
        countryCode: 'pt'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'pr'
      },
      {
        name: '',
        dialCode: '974',
        countryCode: 'qa'
      },
      {
        name: '',
        dialCode: '262',
        countryCode: 're'
      },
      {
        name: '',
        dialCode: '40',
        countryCode: 'ro'
      },
      {
        name: '',
        dialCode: '7',
        countryCode: 'ru'
      },
      {
        name: '',
        dialCode: '250',
        countryCode: 'rw'
      },
      {
        name: '',
        dialCode: '590',
        countryCode: 'bl'
      },
      {
        name: '',
        dialCode: '290',
        countryCode: 'sh'
      },
      {
        name: '',
        dialCode: '1869',
        countryCode: 'kn'
      },
      {
        name: '',
        dialCode: '1758',
        countryCode: 'lc'
      },
      {
        name: '',
        dialCode: '508',
        countryCode: 'pm'
      },
      {
        name: '',
        dialCode: '1784',
        countryCode: 'vc'
      },
      {
        name: '',
        dialCode: '685',
        countryCode: 'ws'
      },
      {
        name: '',
        dialCode: '378',
        countryCode: 'sm'
      },
      {
        name: '',
        dialCode: '239',
        countryCode: 'st'
      },
      {
        name: '',
        dialCode: '966',
        countryCode: 'sa'
      },
      {
        name: '',
        dialCode: '221',
        countryCode: 'sn'
      },
      {
        name: '',
        dialCode: '381',
        countryCode: 'rs'
      },
      {
        name: '',
        dialCode: '248',
        countryCode: 'sc'
      },
      {
        name: '',
        dialCode: '232',
        countryCode: 'sl'
      },
      {
        name: '',
        dialCode: '65',
        countryCode: 'sg'
      },
      {
        name: '',
        dialCode: '1721',
        countryCode: 'sx'
      },
      {
        name: '',
        dialCode: '421',
        countryCode: 'sk'
      },
      {
        name: '',
        dialCode: '386',
        countryCode: 'si'
      },
      {
        name: '',
        dialCode: '677',
        countryCode: 'sb'
      },
      {
        name: '',
        dialCode: '252',
        countryCode: 'so'
      },
      {
        name: '',
        dialCode: '27',
        countryCode: 'za'
      },
      {
        name: '',
        dialCode: '82',
        countryCode: 'kr'
      },
      {
        name: '',
        dialCode: '211',
        countryCode: 'ss'
      },
      {
        name: '',
        dialCode: '34',
        countryCode: 'es'
      },
      {
        name: '',
        dialCode: '94',
        countryCode: 'lk'
      },
      {
        name: '',
        dialCode: '249',
        countryCode: 'sd'
      },
      {
        name: '',
        dialCode: '597',
        countryCode: 'sr'
      },
      {
        name: '',
        dialCode: '47',
        countryCode: 'sj'
      },
      {
        name: '',
        dialCode: '268',
        countryCode: 'sz'
      },
      {
        name: '',
        dialCode: '46',
        countryCode: 'se'
      },
      {
        name: '',
        dialCode: '41',
        countryCode: 'ch'
      },
      {
        name: '',
        dialCode: '963',
        countryCode: 'sy'
      },
      {
        name: '',
        dialCode: '886',
        countryCode: 'tw'
      },
      {
        name: '',
        dialCode: '992',
        countryCode: 'tj'
      },
      {
        name: '',
        dialCode: '255',
        countryCode: 'tz'
      },
      {
        name: '',
        dialCode: '66',
        countryCode: 'th'
      },
      {
        name: '',
        dialCode: '670',
        countryCode: 'tl'
      },
      {
        name: '',
        dialCode: '228',
        countryCode: 'tg'
      },
      {
        name: '',
        dialCode: '690',
        countryCode: 'tk'
      },
      {
        name: '',
        dialCode: '676',
        countryCode: 'to'
      },
      {
        name: '',
        dialCode: '1868',
        countryCode: 'tt'
      },
      {
        name: '',
        dialCode: '216',
        countryCode: 'tn'
      },
      {
        name: '',
        dialCode: '90',
        countryCode: 'tr'
      },
      {
        name: '',
        dialCode: '993',
        countryCode: 'tm'
      },
      {
        name: '',
        dialCode: '1649',
        countryCode: 'tc'
      },
      {
        name: '',
        dialCode: '688',
        countryCode: 'tv'
      },
      {
        name: '',
        dialCode: '1340',
        countryCode: 'vi'
      },
      {
        name: '',
        dialCode: '256',
        countryCode: 'ug'
      },
      {
        name: '',
        dialCode: '380',
        countryCode: 'ua'
      },
      {
        name: '',
        dialCode: '971',
        countryCode: 'ae'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'gb'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'us'
      },
      {
        name: '',
        dialCode: '598',
        countryCode: 'uy'
      },
      {
        name: '',
        dialCode: '998',
        countryCode: 'uz'
      },
      {
        name: '',
        dialCode: '678',
        countryCode: 'vu'
      },
      {
        name: '',
        dialCode: '39',
        countryCode: 'va'
      },
      {
        name: '',
        dialCode: '58',
        countryCode: 've'
      },
      {
        name: '',
        dialCode: '84',
        countryCode: 'vn'
      },
      {
        name: '',
        dialCode: '681',
        countryCode: 'wf'
      },
      {
        name: '',
        dialCode: '212',
        countryCode: 'eh'
      },
      {
        name: '',
        dialCode: '967',
        countryCode: 'ye'
      },
      {
        name: '',
        dialCode: '260',
        countryCode: 'zm'
      },
      {
        name: '',
        dialCode: '263',
        countryCode: 'zw'
      },
      {
        name: '',
        dialCode: '358',
        countryCode: 'ax'
      },
      {
        name: '',
        dialCode: '374',
        countryCode: 'am'
      },
      {
        name: '',
        dialCode: '61',
        countryCode: 'au'
      }
    ];
  }

  getCountries(): Country[] {
    return this.countries;
  }


}


