import {Injectable} from '@angular/core';
import {CountryLocale} from '../interface/country-locale.interface';
import {CountryCode} from "../interface/country-code.interface";

@Injectable()
export class LocaleService {
  private locales: CountryLocale = {
    'en': {
      'ax': 'AALAND ISLANDS',
      'af': 'AFGHANISTAN',
      'al': 'ALBANIA',
      'dz': 'ALGERIA',
      'as': 'AMERICAN SAMOA',
      'ad': 'ANDORRA',
      'ao': 'ANGOLA',
      'ai': 'ANGUILLA',
      'aq': 'ANTARCTICA',
      'ag': 'ANTIGUA AND BARBUDA',
      'ar': 'ARGENTINA',
      'am': 'ARMENIA',
      'aw': 'ARUBA',
      'au': 'AUSTRALIA',
      'at': 'AUSTRIA',
      'az': 'AZERBAIJAN',
      'bs': 'BAHAMAS',
      'bh': 'BAHRAIN',
      'bd': 'BANGLADESH',
      'bb': 'BARBADOS',
      'by': 'BELARUS',
      'be': 'BELGIUM',
      'bz': 'BELIZE',
      'bj': 'BENIN',
      'bm': 'BERMUDA',
      'bt': 'BHUTAN',
      'bo': 'BOLIVIA',
      'ba': 'BOSNIA AND HERZEGOWINA',
      'bw': 'BOTSWANA',
      'bv': 'BOUVET ISLAND',
      'br': 'BRAZIL',
      'io': 'BRITISH INDIAN OCEAN TERRITORY',
      'bn': 'BRUNEI DARUSSALAM',
      'bg': 'BULGARIA',
      'bf': 'BURKINA FASO',
      'bi': 'BURUNDI',
      'bq': 'CARIBBEAN NETHERLANDS',
      'kh': 'CAMBODIA',
      'cm': 'CAMEROON',
      'ca': 'CANADA',
      'cv': 'CAPE VERDE',
      'ky': 'CAYMAN ISLANDS',
      'cf': 'CENTRAL AFRICAN REPUBLIC',
      'td': 'CHAD',
      'cl': 'CHILE',
      'cn': 'CHINA',
      'cx': 'CHRISTMAS ISLAND',
      'cc': 'COCOS ISLANDS',
      'co': 'COLOMBIA',
      'km': 'COMOROS',
      'cd': 'CONGO',
      'cg': 'CONGO REPUBLIC',
      'ck': 'COOK ISLANDS',
      'cr': 'COSTA RICA',
      'ci': 'COTE DIVOIRE',
      'hr': 'CROATIA ',
      'cu': 'CUBA',
      'cw': 'CURACAO',
      'cy': 'CYPRUS',
      'cz': 'CZECH REPUBLIC',
      'dk': 'DENMARK',
      'dj': 'DJIBOUTI',
      'dm': 'DOMINICA',
      'do': 'DOMINICAN REPUBLIC',
      'ec': 'ECUADOR',
      'eg': 'EGYPT',
      'sv': 'EL SALVADOR',
      'gq': 'EQUATORIAL GUINEA',
      'er': 'ERITREA',
      'ee': 'ESTONIA',
      'et': 'ETHIOPIA',
      'fk': 'FALKLAND ISLANDS (MALVINAS)',
      'fo': 'FAROE ISLANDS',
      'fj': 'FIJI',
      'fi': 'FINLAND',
      'fr': 'FRANCE',
      'gf': 'FRENCH GUIANA',
      'pf': 'FRENCH POLYNESIA',
      'tf': 'FRENCH SOUTHERN TERRITORIES',
      'ga': 'GABON',
      'gm': 'GAMBIA',
      'ge': 'GEORGIA',
      'de': 'GERMANY',
      'gh': 'GHANA',
      'gi': 'GIBRALTAR',
      'gr': 'GREECE',
      'gl': 'GREENLAND',
      'gd': 'GRENADA',
      'gp': 'GUADELOUPE',
      'gu': 'GUAM',
      'gt': 'GUATEMALA',
      'gg': 'GUERNSEY',
      'gn': 'GUINEA',
      'gw': 'GUINEA-BISSAU',
      'gy': 'GUYANA',
      'ht': 'HAITI',
      'hm': 'HEARD AND MC DONALD ISLANDS',
      'hn': 'HONDURAS',
      'hk': 'HONG KONG',
      'hu': 'HUNGARY',
      'is': 'ICELAND',
      'in': 'INDIA',
      'id': 'INDONESIA',
      'ir': 'IRAN ',
      'iq': 'IRAQ',
      'ie': 'IRELAND',
      'im': 'ISLA DE MAN',
      'il': 'ISRAEL',
      'it': 'ITALY',
      'jm': 'JAMAICA',
      'jp': 'JAPAN',
      'je': 'JERSEY',
      'jo': 'JORDAN',
      'kz': 'KAZAKHSTAN',
      'ke': 'KENYA',
      'ki': 'KIRIBATI',
      'kp': 'KOREA NORTH ',
      'kr': 'KOREA SOUTH',
      'xk': 'KOSOVO',
      'kw': 'KUWAIT',
      'kg': 'KYRGYZSTAN',
      'la': 'LAO',
      'lv': 'LATVIA',
      'lb': 'LEBANON',
      'ls': 'LESOTHO',
      'lr': 'LIBERIA',
      'ly': 'LIBYAN ARAB JAMAHIRIYA',
      'li': 'LIECHTENSTEIN',
      'lt': 'LITHUANIA',
      'lu': 'LUXEMBOURG',
      'mo': 'MACAU',
      'mk': 'MACEDONIA',
      'mg': 'MADAGASCAR',
      'mw': 'MALAWI',
      'my': 'MALAYSIA',
      'mv': 'MALDIVES',
      'ml': 'MALI',
      'mt': 'MALTA',
      'mh': 'MARSHALL ISLANDS',
      'mq': 'MARTINIQUE',
      'mr': 'MAURITANIA',
      'mu': 'MAURITIUS',
      'yt': 'MAYOTTE',
      'mx': 'MEXICO',
      'fm': 'MICRONESIA',
      'md': 'MOLDOVA',
      'mc': 'MONACO',
      'mn': 'MONGOLIA',
      'me': 'MONTENEGRO',
      'ms': 'MONTSERRAT',
      'ma': 'MOROCCO',
      'mz': 'MOZAMBIQUE',
      'mm': 'MYANMAR',
      'na': 'NAMIBIA',
      'nr': 'NAURU',
      'np': 'NEPAL',
      'nl': 'NETHERLANDS',
      'an': 'NETHERLANDS ANTILLES',
      'nc': 'NEW CALEDONIA',
      'nz': 'NEW ZEALAND',
      'ni': 'NICARAGUA',
      'ne': 'NIGER',
      'ng': 'NIGERIA',
      'nu': 'NIUE',
      'nf': 'NORFOLK ISLAND',
      'mp': 'NORTHERN MARIANA ISLANDS',
      'no': 'NORWAY',
      'om': 'OMAN',
      'pk': 'PAKISTAN',
      'pw': 'PALAU',
      'ps': 'PALESTINA',
      'pa': 'PANAMA',
      'pg': 'PAPUA NEW GUINEA',
      'py': 'PARAGUAY',
      'pe': 'PERU',
      'ph': 'PHILIPPINES',
      'pn': 'PITCAIRN',
      'pl': 'POLAND',
      'pt': 'PORTUGAL',
      'pr': 'PUERTO RICO',
      'qa': 'QATAR',
      're': 'REUNION',
      'ro': 'ROMANIA',
      'ru': 'RUSSIAN FEDERATION',
      'rw': 'RWANDA',
      'sh': 'SAINT HELENA',
      'kn': 'SAINT KITTS AND NEVIS',
      'lc': 'SAINT LUCIA',
      'pm': 'SAINT PIERRE AND MIQUELON',
      'vc': 'SAINT VINCENT AND THE GRENADINES',
      'ws': 'SAMOA',
      'bl': 'SAN BARTOLOMÉ',
      'sm': 'SAN MARINO',
      'st': 'SAO TOME AND PRINCIPE',
      'sa': 'SAUDI ARABIA',
      'sn': 'SENEGAL',
      'cs': 'SERBIA AND MONTENEGRO',
      'rs': 'SERBIA',
      'sc': 'SEYCHELLES',
      'sl': 'SIERRA LEONE',
      'sg': 'SINGAPORE',
      'sx': 'SINT MAARTEN',
      'sk': 'SLOVAKIA',
      'si': 'SLOVENIA',
      'sb': 'SOLOMON ISLANDS',
      'so': 'SOMALIA',
      'za': 'SOUTH AFRICA',
      'gs': 'SOUTH GEORGIA ISLANDS',
      'es': 'SPAIN',
      'lk': 'SRI LANKA',
      'sd': 'SUDAN',
      'ss': 'SOUTH SUDAN',
      'sr': 'SURINAME',
      'sj': 'SVALBARD AND JAN MAYEN ISLANDS',
      'sz': 'SWAZILAND',
      'se': 'SWEDEN',
      'ch': 'SWITZERLAND',
      'sy': 'SYRIAN ARAB REPUBLIC',
      'tw': 'TAIWAN',
      'tj': 'TAJIKISTAN',
      'tz': 'TANZANIA',
      'th': 'THAILAND',
      'tl': 'TIMOR-LESTE',
      'tg': 'TOGO',
      'tk': 'TOKELAU',
      'to': 'TONGA',
      'tt': 'TRINIDAD AND TOBAGO',
      'tn': 'TUNISIA',
      'tr': 'TURKEY',
      'tm': 'TURKMENISTAN',
      'tc': 'TURKS AND CAICOS ISLANDS',
      'tv': 'TUVALU',
      'ug': 'UGANDA',
      'ua': 'UKRAINE',
      'ae': 'UNITED ARAB EMIRATES',
      'gb': 'UNITED KINGDOM',
      'us': 'UNITED STATES',
      'um': 'UNITED STATES MINOR OUTLYING ISLANDS',
      'uy': 'URUGUAY',
      'uz': 'UZBEKISTAN',
      'vu': 'VANUATU',
      'va': 'VATICAN CITY STATE',
      've': 'VENEZUELA',
      'vn': 'VIET NAM',
      'vg': 'VIRGIN ISLANDS (BRITISH)',
      'vi': 'VIRGIN ISLANDS (U.S.)',
      'wf': 'WALLIS AND FUTUNA ISLANDS',
      'eh': 'WESTERN SAHARA',
      'ye': 'YEMEN',
      'zm': 'ZAMBIA',
      'zw': 'ZIMBABWE '
    },
    'es': {
      'ax': 'ISLAS ÁLAND',
      'af': 'AFGHANISTÁN',
      'al': 'ALBANIA',
      'dz': 'ARGEL',
      'as': 'SAMOA AMERICANA',
      'ad': 'ANDORRA',
      'ao': 'ANGOLA',
      'ai': 'ANGUILA',
      'aq': 'ANTÁRTIDA',
      'ag': 'ANTIGUA Y BARBUDA',
      'ar': 'ARGENTINA',
      'am': 'ARMENIA',
      'aw': 'ARUBA',
      'au': 'AUSTRALIA',
      'at': 'AUSTRIA',
      'az': 'AZERBAIYÁN',
      'bs': 'BAHAMAS',
      'bh': 'BAHRÉIN',
      'bd': 'BANGLADESH',
      'bb': 'BARBADOS',
      'by': 'BELARÚS',
      'be': 'BÉLGICA',
      'bz': 'BELICE',
      'bj': 'BENIN',
      'bm': 'BERMUDAAS',
      'bt': 'BHUTÁN',
      'bo': 'BOLIVIA',
      'ba': 'BOSNIA Y HERZEGOVINA',
      'bw': 'BOTSUANA',
      'bv': 'ISLA BOUVET',
      'br': 'BRASIL',
      'io': 'TERRITORIO BRITÁNICO DEL OCÉANO ÍNDICO',
      'bn': 'BRUNÉI',
      'bg': 'BULGARIA',
      'bf': 'BURKINA FASO',
      'bi': 'BURUNDI',
      'bq': 'CARIBE PAÍSES BAJOS',
      'kh': 'CAMBOYA',
      'cm': 'CAMERÚN',
      'ca': 'CANADÁ',
      'cv': 'CABO VERDE',
      'ky': 'ISLAS CAIMÁN',
      'cf': 'REPÚBLICA CENTRO-AFRICANA',
      'td': 'CHAD',
      'cl': 'CHILE',
      'cn': 'CHINA',
      'cx': 'ISLAS CHRISTMAS',
      'cc': 'ISLAS COCOS',
      'co': 'COLOMBIA',
      'km': 'COMOROS',
      'cd': 'CONGO (ZAIRE)',
      'cg': 'CONGO',
      'ck': 'ISLAS COOK',
      'cr': 'COSTA RICA',
      'ci': 'COSTA DE MARFIL',
      'hr': 'CROACIA ',
      'cu': 'CUBA',
      'cw': 'CURAÇAO',
      'cy': 'CHIPRE',
      'cz': 'REPÚBLICA CHECA',
      'dk': 'DINAMARCA',
      'dj': 'YIBUTI',
      'dm': 'DOMÍNICA',
      'do': 'REPÚBLICA DOMINICANA',
      'ec': 'ECUADOR',
      'eg': 'EGIPTO',
      'sv': 'EL SALVADOR',
      'gq': 'GUINEA ECUATORIAL',
      'er': 'ERITREA',
      'ee': 'ESTONIA',
      'et': 'ETIOPÍA',
      'fk': 'ISLAS MALVINAS',
      'fo': 'ISLAS FAROE',
      'fj': 'FIJI',
      'fi': 'FINLANDIA',
      'fr': 'FRANCIA',
      'gf': 'GUIANA FRANCESA',
      'pf': 'POLYNESIA FRANCESA',
      'tf': 'TERRITORIOS AUSTRALES FRANCESES',
      'ga': 'GABÓN',
      'gm': 'GAMBIA',
      'ge': 'GEORGIA',
      'de': 'ALEMANIA',
      'gh': 'GHANA',
      'gi': 'GIBRALTAR',
      'gr': 'GREECE',
      'gl': 'GROENLANDIA',
      'gd': 'GRANADA',
      'gp': 'GUADALUPE',
      'gu': 'GUAM',
      'gt': 'GUATEMALA',
      'gg': 'GUERNSEY',
      'gn': 'GUINEA',
      'gw': 'GUINEA-BISSAU',
      'gy': 'GUYANA',
      'ht': 'HAITI',
      'hm': 'ISLAS HEARD Y MC DONALD',
      'hn': 'HONDURAS',
      'hk': 'HONG KONG',
      'hu': 'HUNGRÍA',
      'is': 'ISLANDIA',
      'in': 'INDIA',
      'id': 'INDONESIA',
      'ir': 'IRÁN',
      'iq': 'IRAK',
      'ie': 'IRLANDA',
      'im': 'ISLA DE MAN',
      'il': 'ISRAEL',
      'it': 'ITALIA',
      'jm': 'JAMAICA',
      'jp': 'JAPÓN',
      'je': 'JERSEY',
      'jo': 'JORDANIA',
      'kz': 'KAZAJSTÁN',
      'ke': 'KENIA',
      'ki': 'KIRIBATI',
      'kp': 'KOREA DEL NORTE',
      'kr': 'KOREA DEL SUR',
      'xk': 'KOSOVO',
      'kw': 'KUWAIT',
      'kg': 'KIRGUISTÁN',
      'la': 'LAOS',
      'lv': 'LETONIA',
      'lb': 'LÍBANO',
      'ls': 'LESOTHO',
      'lr': 'LIBERIA',
      'ly': 'LIBIA',
      'li': 'LIECHTENSTEIN',
      'lt': 'LITUANIA',
      'lu': 'LUXEMBURGO',
      'mo': 'MACAO',
      'mk': 'MACEDONIA',
      'mg': 'MADAGASCAR',
      'mw': 'MALAWI',
      'my': 'MALASIA',
      'mv': 'MALDIVAS',
      'ml': 'MALI',
      'mt': 'MALTA',
      'mh': 'ISLAS MARSHALL',
      'mq': 'MATINICA',
      'mr': 'MAURITANIA',
      'mu': 'MAURICIO',
      'yt': 'MAYOTTE',
      'mx': 'MÉXICO',
      'fm': 'MICRONESIA',
      'md': 'MOLDOVA',
      'mc': 'MÓNACO',
      'mn': 'MONGOLIA',
      'me': 'MONTENEGRO',
      'ms': 'MONTSERRAT',
      'ma': 'MARRUECOS',
      'mz': 'MOZAMBIQUE',
      'mm': 'MYANMAR',
      'na': 'NAMIBIA',
      'nr': 'NAURU',
      'np': 'NEPAL',
      'nl': 'PAÍSES BAJOS',
      'an': 'ANTILLAS NEERLANDESAS',
      'nc': 'NUEVA CALEDONIA',
      'nz': 'NUEVA ZELANDA',
      'ni': 'NICARAGUA',
      'ne': 'NÍGER',
      'ng': 'NIGERIA',
      'nu': 'NIUE',
      'nf': 'ISLAS NORKFOLK',
      'mp': 'ISLAS MARIANAS DEL NORTE',
      'no': 'NORUEGA',
      'om': 'OMÁN',
      'pk': 'PAKISTÁN',
      'pw': 'ISLAS PALAOS',
      'ps': 'PALESTINA',
      'pa': 'PANAMÁ',
      'pg': 'PAPÚA NUEVA GUINEA',
      'py': 'PARAGUAY',
      'pe': 'PERÚ',
      'ph': 'FILIPINAS',
      'pn': 'ISLAS PITCAIRN',
      'pl': 'POLONIA',
      'pt': 'PORTUGAL',
      'pr': 'PUERTO RICO',
      'qa': 'QATAR',
      're': 'REUNIÓN',
      'ro': 'RUMANÍA',
      'ru': 'RUSIA',
      'rw': 'RUANDA',
      'sh': 'SANTA ELENA',
      'kn': 'SAN CRISTÓBAL Y NIEVES',
      'lc': 'SANTA LUCÍA',
      'pm': 'SAN PEDRO Y MIQUELÓN',
      'vc': 'SAN VICENTE Y LAS GRANADINAS',
      'ws': 'SAMOA',
      'bl': 'SAN BARTOLOMÉ',
      'sm': 'SAN MARINO',
      'st': 'SANTO TOMÉ Y PRÍNCIPE',
      'sa': 'ARABIA SAUDITA',
      'sn': 'SENEGAL',
      'cs': 'SERBIA Y MONTENEGRO',
      'rs': 'SERBIA',
      'sc': 'SEYCHELLES',
      'sl': 'SIERRA LEONA',
      'sg': 'SINGAPUR',
      'sx': 'SINT MAARTEN',
      'sk': 'ESLOVAQUIA',
      'si': 'ESLOVENIA',
      'sb': 'ISLAS SOLOMÓN',
      'so': 'SOMALIA',
      'za': 'SUDÁFRICA',
      'gs': 'GEORGIA DEL SUR E ISLAS SANDWICH DEL SUR',
      'es': 'ESPAÑA',
      'lk': 'SRI LANKA',
      'sd': 'SUDÁN',
      'ss': 'SUDÁN DEL SUR',
      'sr': 'SURINAM',
      'sj': 'ISLAS SVALBARD Y JAN MAYEN',
      'sz': 'SUAZILANDIA',
      'se': 'SUECIA',
      'ch': 'SUIZA',
      'sy': 'SIRIA',
      'tw': 'TAIWÁN',
      'tj': 'TAYIKISTÁN',
      'tz': 'TANZANIA',
      'th': 'TAILANDIA',
      'tl': 'TIMOR-LESTE',
      'tg': 'TOGO',
      'tk': 'TOKELAU',
      'to': 'TONGA',
      'tt': 'TRINIDAD Y TOBAGO',
      'tn': 'TÚNEZ',
      'tr': 'TURQUÍA',
      'tm': 'TURKMENISTÁN',
      'tc': 'ISLAS TURCAS Y CAICOS',
      'tv': 'TUVALU',
      'ug': 'UGANDA',
      'ua': 'UCRANIA',
      'ae': 'EMIRATOS ÁRABES UNIDOS',
      'gb': 'REINO UNIDO',
      'us': 'ESTADOS UNIDOS DE AMÉRICA',
      'um': 'ESTADOS UNIDOS ISLAS MINOR OUTLYING',
      'uy': 'URUGUAY',
      'uz': 'UZBEKISTÁN',
      'vu': 'VANUATU',
      'va': 'CIUDAD DEL VATICANO',
      've': 'VENEZUELA',
      'vn': 'VIETNAM',
      'vg': 'ISLAS VÍRGENES (INGLESAS)',
      'vi': 'ISLAS VÍRGENES (U.S.)',
      'wf': 'WALLIS Y FUTUNA',
      'eh': 'SAHARA OCCIDENTAL',
      'ye': 'YEMEN',
      'zm': 'ZAMBIA',
      'zw': 'ZIMBABUE '
    },
    'pt': {
      'ax': 'ILHAS DE ALAND',
      'af': 'AFEGANISTÃO',
      'al': 'ALBÂNIA',
      'dz': 'ARGÉLIA',
      'as': 'SAMOA AMERICANA',
      'ad': 'ANDORRA',
      'ao': 'ANGOLA',
      'ai': 'ANGUILLA',
      'aq': 'ANTÁRTICA',
      'ag': 'ANTÍGUA E BARBUDA',
      'ar': 'ARGENTINA',
      'am': 'ARMÊNIA',
      'aw': 'ARUBA',
      'au': 'AUSTRÁLIA',
      'at': 'ÁUSTRIA',
      'az': 'AZERBAIJÃO',
      'bs': 'BAHAMAS',
      'bh': 'BAHREIN',
      'bd': 'BANGLADESH',
      'bb': 'BARBADOS',
      'by': 'BIELORRÚSSIA',
      'be': 'BÉLGICA',
      'bz': 'BELIZE',
      'bj': 'BENIM',
      'bm': 'BERMUDA',
      'bt': 'BUTÃO',
      'bo': 'BOLÍVIA',
      'ba': 'BÓSNIA E HERZEGOVINA',
      'bw': 'BOTSWANA',
      'bv': 'ILHA BOUVET',
      'br': 'BRASIL',
      'io': 'TERRITÓRIO BRITÂNICO DO OCEANO ÍNDICO',
      'bn': 'BRUNEI',
      'bg': 'BULGÁRIA',
      'bf': 'BURKINA FASO',
      'bi': 'BURUNDI',
      'bq': 'PAÍSES BAIXOS CARIBENHOS',
      'kh': 'CAMBOJA',
      'cm': 'CAMARÕES',
      'ca': 'CANADÁ',
      'cv': 'CABO VERDE',
      'ky': 'ILHAS CAYMAN',
      'cf': 'REPÚBLICA CENTRO-AFRICANA',
      'td': 'CHADE',
      'cl': 'CHILE',
      'cn': 'CHINA',
      'cx': 'ILHA DE NATAL',
      'cc': 'ILHAS COCOS',
      'co': 'COLÔMBIA',
      'km': 'COMORES',
      'cd': 'CONGO',
      'cg': 'REPÚBLICA DO CONGO',
      'ck': 'ILHAS COOK',
      'cr': 'COSTA RICA',
      'ci': 'COSTA DO MARFIM',
      'hr': 'CROÁCIA',
      'cu': 'CUBA',
      'cw': 'CURAÇAO',
      'cy': 'CHIPRE',
      'cz': 'REPÚBLICA CHECA',
      'dk': 'DINAMARCA',
      'dj': 'DJIBOUTI',
      'dm': 'DOMINICA',
      'do': 'REPÚBLICA DOMINICANA',
      'ec': 'EQUADOR',
      'eg': 'EGITO',
      'sv': 'EL SALVADOR',
      'gq': 'GUINÉ EQUATORIAL',
      'er': 'ERITREA',
      'ee': 'ESTÔNIA',
      'et': 'ETIÓPIA',
      'fk': 'ILHAS MALVINAS',
      'fo': 'ILHAS FEROE',
      'fj': 'FIJI',
      'fi': 'FINLÂNDIA',
      'fr': 'FRANÇA',
      'gf': 'GUIANA FRANCESA',
      'pf': 'POLINÉSIA FRANCESA',
      'tf': 'TERRAS AUSTRAIS E ANTÁRTICAS FRANCESAS',
      'ga': 'GABÃO',
      'gm': 'GÂMBIA',
      'ge': 'GEÓRGIA',
      'de': 'ALEMANHA',
      'gh': 'GANA',
      'gi': 'GIBRALTAR',
      'gr': 'GRÉCIA',
      'gl': 'GROENLÂNDIA',
      'gd': 'GRANADA',
      'gp': 'GUADALUPE',
      'gu': 'GUAM',
      'gt': 'GUATEMALA',
      'gg': 'GUERNSEY',
      'gn': 'GUINÉ',
      'gw': 'GUINÉ-BISSAU',
      'gy': 'GUIANA',
      'ht': 'HAITI',
      'hm': 'ILHA HEARD E ILHAS MCDONALD',
      'hn': 'HONDURAS',
      'hk': 'HONG KONG',
      'hu': 'HUNGRIA',
      'is': 'ISLÂNDIA',
      'in': 'Índia',
      'id': 'INDONÉSIA',
      'ir': 'IRÃ',
      'iq': 'IRAQUE',
      'ie': 'IRLANDA',
      'im': 'ILHA DE MAN',
      'il': 'ISRAEL',
      'it': 'ITÁLIA',
      'jm': 'JAMAICA',
      'jp': 'JAPÃO',
      'je': 'JERSEY',
      'jo': 'JORDÂNIA',
      'kz': 'CAZAQUISTÃO',
      'ke': 'KÊNIA',
      'ki': 'KIRIBATI',
      'kp': 'CORÉIA DO NORTE',
      'kr': 'CORÉIA DO SUL',
      'xk': 'KOSOVO',
      'kw': 'KUWAIT',
      'kg': 'QUIRGUISTÃO',
      'la': 'LAO',
      'lv': 'LETÔNIA',
      'lb': 'LÍBANO',
      'ls': 'LESOTO',
      'lr': 'LIBÉRIA',
      'ly': 'LÍBIA',
      'li': 'LIECHTENSTEIN',
      'lt': 'LITUÂNIA',
      'lu': 'LUXEMBURGO',
      'mo': 'MACAU',
      'mk': 'MACEDÔNIA',
      'mg': 'MADAGASCAR',
      'mw': 'MALAWI',
      'my': 'MALÁSIA',
      'mv': 'MALDIVAS',
      'ml': 'MALI',
      'mt': 'MALTA',
      'mh': 'ILHAS MARSHALL',
      'mq': 'MARTINICA',
      'mr': 'MAURITÂNIA',
      'mu': 'ILHAS MAURÍCIO',
      'yt': 'MAYOTTE',
      'mx': 'MÉXICO',
      'fm': 'MICRONÉSIA',
      'md': 'MOLDOVA',
      'mc': 'MÔNACO',
      'mn': 'MONGÓLIA',
      'me': 'MONTENEGRO',
      'ms': 'MONTSERRAT',
      'ma': 'MARROCOS',
      'mz': 'MOÇAMBIQUE',
      'mm': 'MYANMAR',
      'na': 'NAMÍBIA',
      'nr': 'NAURU',
      'np': 'NEPAL',
      'nl': 'PAÍSES BAIXOS',
      'an': 'ANTILHAS HOLANDESAS',
      'nc': 'NOVA CALEDÓNIA',
      'nz': 'NOVA ZELÂNDIA',
      'ni': 'NICARÁGUA',
      'ne': 'NÍGER',
      'ng': 'NIGÉRIA',
      'nu': 'NIUE',
      'nf': 'ILHA NORFOLK',
      'mp': 'ILHA MARIANA DO NORTE',
      'no': 'NORUEGA',
      'om': 'OMÃ',
      'pk': 'PAQUISTÃO',
      'pw': 'PALAU',
      'ps': 'PALESTINA',
      'pa': 'PANAMÁ',
      'pg': 'PAPUA NOVA GUINÉ',
      'py': 'PARAGUAI',
      'pe': 'PERU',
      'ph': 'FILIPINAS',
      'pn': 'PITCAIRN',
      'pl': 'POLÔNIA',
      'pt': 'PORTUGAL',
      'pr': 'PORTO RICO',
      'qa': 'QATAR',
      're': 'REUNIÃO',
      'ro': 'ROMÊNIA',
      'ru': 'RÚSSIA',
      'rw': 'RUANDA',
      'sh': 'SANTA HELENA',
      'kn': 'ILHA DE SÃO CRISTÓVÃO',
      'lc': 'SANTA LÚCIA',
      'pm': 'SÃO PEDRO E MIQUELÃO',
      'vc': 'SÃO VICENTE E GRANADINAS',
      'ws': 'SAMOA',
      'bl': 'SAN BARTOLOMÉ',
      'sm': 'SAN MARINO',
      'st': 'SÃO TOMÉ E PRÍNCIPE',
      'sa': 'ARÁBIA SAUDITA',
      'sn': 'SENEGAL',
      'cs': 'SÉRVIA E MONTENEGRO',
      'rs': 'SÉRVIA',
      'sc': 'SEICHELES',
      'sl': 'SERRA LEOA',
      'sg': 'SINGAPURA',
      'sx': 'SÃO MARTINHO',
      'sk': 'ESLOVÁQUIA',
      'si': 'ESLOVÊNIA',
      'sb': 'ILHAS SALOMÃO',
      'so': 'SOMÁLIA',
      'za': 'ÁFRICA DO SUL',
      'gs': 'ILHAS GEÓRGIA DO SUL E SANDUÍCHE DO SUL',
      'es': 'ESPANHA',
      'lk': 'SRI LANKA',
      'sd': 'SUDÃO',
      'ss': 'SUDÃO DO SUL',
      'sr': 'SURINAME',
      'sj': 'ESVALBARDA',
      'sz': 'SUAZILÂNDIA',
      'se': 'SUÉCIA',
      'ch': 'SUÍÇA',
      'sy': 'SÍRIA',
      'tw': 'TAIWAN',
      'tj': 'TAJIQUISTÃO',
      'tz': 'TANZÂNIA',
      'th': 'TAILÂNDIA',
      'tl': 'TIMOR-LESTE',
      'tg': 'TOGO',
      'tk': 'TOKELAU',
      'to': 'TONGA',
      'tt': 'TRINDADE E TOBAGO',
      'tn': 'TUNÍSIA',
      'tr': 'TURQUIA',
      'tm': 'TURQUEMENISTÃO',
      'tc': 'ILHAS TURCAS E CAICOS',
      'tv': 'TUVALU',
      'ug': 'UGANDA',
      'ua': 'UCRÂNIA',
      'ae': 'EMIRADOS ÁRABES UNIDOS',
      'gb': 'REINO UNIDO',
      'us': 'ESTADOS UNIDOS',
      'um': 'ILHAS MENORES DISTANTES DOS ESTADOS UNIDOS',
      'uy': 'URUGUAI',
      'uz': 'UZBEQUISTÃO',
      'vu': 'VANUATU',
      'va': 'CIDADE DO VATICANO',
      've': 'VENEZUELA',
      'vn': 'VIETNÃ',
      'vg': 'ILHAS VIRGENS BRITÂNICAS',
      'vi': 'ILHAS VIRGENS AMERICANAS',
      'wf': 'WALLIS E FUTUNA',
      'eh': 'SAARA OCIDENTAL',
      'ye': 'IÉMEN',
      'zm': 'ZÂMBIA',
      'zw': 'ZIMBÁBUE'
    }
  };

  getLocales(locale: string): CountryCode {
    if (locale && this.locales.hasOwnProperty(locale)) {
      // User given locale
      return this.locales[locale];
    }
    // Default: en
    return this.locales['en'];
  }
}
