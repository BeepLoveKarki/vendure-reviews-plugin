"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockMovementType = exports.SortOrder = exports.Permission = exports.LanguageCode = exports.HistoryEntryType = exports.DeletionResult = exports.CurrencyCode = exports.AssetType = exports.AdjustmentType = void 0;
var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType["Tax"] = "TAX";
    AdjustmentType["Promotion"] = "PROMOTION";
    AdjustmentType["Shipping"] = "SHIPPING";
    AdjustmentType["Refund"] = "REFUND";
    AdjustmentType["TaxRefund"] = "TAX_REFUND";
    AdjustmentType["PromotionRefund"] = "PROMOTION_REFUND";
    AdjustmentType["ShippingRefund"] = "SHIPPING_REFUND";
})(AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {}));
var AssetType;
(function (AssetType) {
    AssetType["Image"] = "IMAGE";
    AssetType["Video"] = "VIDEO";
    AssetType["Binary"] = "BINARY";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
var CurrencyCode;
(function (CurrencyCode) {
    /** United Arab Emirates dirham */
    CurrencyCode["Aed"] = "AED";
    /** Afghan afghani */
    CurrencyCode["Afn"] = "AFN";
    /** Albanian lek */
    CurrencyCode["All"] = "ALL";
    /** Armenian dram */
    CurrencyCode["Amd"] = "AMD";
    /** Netherlands Antillean guilder */
    CurrencyCode["Ang"] = "ANG";
    /** Angolan kwanza */
    CurrencyCode["Aoa"] = "AOA";
    /** Argentine peso */
    CurrencyCode["Ars"] = "ARS";
    /** Australian dollar */
    CurrencyCode["Aud"] = "AUD";
    /** Aruban florin */
    CurrencyCode["Awg"] = "AWG";
    /** Azerbaijani manat */
    CurrencyCode["Azn"] = "AZN";
    /** Bosnia and Herzegovina convertible mark */
    CurrencyCode["Bam"] = "BAM";
    /** Barbados dollar */
    CurrencyCode["Bbd"] = "BBD";
    /** Bangladeshi taka */
    CurrencyCode["Bdt"] = "BDT";
    /** Bulgarian lev */
    CurrencyCode["Bgn"] = "BGN";
    /** Bahraini dinar */
    CurrencyCode["Bhd"] = "BHD";
    /** Burundian franc */
    CurrencyCode["Bif"] = "BIF";
    /** Bermudian dollar */
    CurrencyCode["Bmd"] = "BMD";
    /** Brunei dollar */
    CurrencyCode["Bnd"] = "BND";
    /** Boliviano */
    CurrencyCode["Bob"] = "BOB";
    /** Brazilian real */
    CurrencyCode["Brl"] = "BRL";
    /** Bahamian dollar */
    CurrencyCode["Bsd"] = "BSD";
    /** Bhutanese ngultrum */
    CurrencyCode["Btn"] = "BTN";
    /** Botswana pula */
    CurrencyCode["Bwp"] = "BWP";
    /** Belarusian ruble */
    CurrencyCode["Byn"] = "BYN";
    /** Belize dollar */
    CurrencyCode["Bzd"] = "BZD";
    /** Canadian dollar */
    CurrencyCode["Cad"] = "CAD";
    /** Congolese franc */
    CurrencyCode["Cdf"] = "CDF";
    /** Swiss franc */
    CurrencyCode["Chf"] = "CHF";
    /** Chilean peso */
    CurrencyCode["Clp"] = "CLP";
    /** Renminbi (Chinese) yuan */
    CurrencyCode["Cny"] = "CNY";
    /** Colombian peso */
    CurrencyCode["Cop"] = "COP";
    /** Costa Rican colon */
    CurrencyCode["Crc"] = "CRC";
    /** Cuban convertible peso */
    CurrencyCode["Cuc"] = "CUC";
    /** Cuban peso */
    CurrencyCode["Cup"] = "CUP";
    /** Cape Verde escudo */
    CurrencyCode["Cve"] = "CVE";
    /** Czech koruna */
    CurrencyCode["Czk"] = "CZK";
    /** Djiboutian franc */
    CurrencyCode["Djf"] = "DJF";
    /** Danish krone */
    CurrencyCode["Dkk"] = "DKK";
    /** Dominican peso */
    CurrencyCode["Dop"] = "DOP";
    /** Algerian dinar */
    CurrencyCode["Dzd"] = "DZD";
    /** Egyptian pound */
    CurrencyCode["Egp"] = "EGP";
    /** Eritrean nakfa */
    CurrencyCode["Ern"] = "ERN";
    /** Ethiopian birr */
    CurrencyCode["Etb"] = "ETB";
    /** Euro */
    CurrencyCode["Eur"] = "EUR";
    /** Fiji dollar */
    CurrencyCode["Fjd"] = "FJD";
    /** Falkland Islands pound */
    CurrencyCode["Fkp"] = "FKP";
    /** Pound sterling */
    CurrencyCode["Gbp"] = "GBP";
    /** Georgian lari */
    CurrencyCode["Gel"] = "GEL";
    /** Ghanaian cedi */
    CurrencyCode["Ghs"] = "GHS";
    /** Gibraltar pound */
    CurrencyCode["Gip"] = "GIP";
    /** Gambian dalasi */
    CurrencyCode["Gmd"] = "GMD";
    /** Guinean franc */
    CurrencyCode["Gnf"] = "GNF";
    /** Guatemalan quetzal */
    CurrencyCode["Gtq"] = "GTQ";
    /** Guyanese dollar */
    CurrencyCode["Gyd"] = "GYD";
    /** Hong Kong dollar */
    CurrencyCode["Hkd"] = "HKD";
    /** Honduran lempira */
    CurrencyCode["Hnl"] = "HNL";
    /** Croatian kuna */
    CurrencyCode["Hrk"] = "HRK";
    /** Haitian gourde */
    CurrencyCode["Htg"] = "HTG";
    /** Hungarian forint */
    CurrencyCode["Huf"] = "HUF";
    /** Indonesian rupiah */
    CurrencyCode["Idr"] = "IDR";
    /** Israeli new shekel */
    CurrencyCode["Ils"] = "ILS";
    /** Indian rupee */
    CurrencyCode["Inr"] = "INR";
    /** Iraqi dinar */
    CurrencyCode["Iqd"] = "IQD";
    /** Iranian rial */
    CurrencyCode["Irr"] = "IRR";
    /** Icelandic króna */
    CurrencyCode["Isk"] = "ISK";
    /** Jamaican dollar */
    CurrencyCode["Jmd"] = "JMD";
    /** Jordanian dinar */
    CurrencyCode["Jod"] = "JOD";
    /** Japanese yen */
    CurrencyCode["Jpy"] = "JPY";
    /** Kenyan shilling */
    CurrencyCode["Kes"] = "KES";
    /** Kyrgyzstani som */
    CurrencyCode["Kgs"] = "KGS";
    /** Cambodian riel */
    CurrencyCode["Khr"] = "KHR";
    /** Comoro franc */
    CurrencyCode["Kmf"] = "KMF";
    /** North Korean won */
    CurrencyCode["Kpw"] = "KPW";
    /** South Korean won */
    CurrencyCode["Krw"] = "KRW";
    /** Kuwaiti dinar */
    CurrencyCode["Kwd"] = "KWD";
    /** Cayman Islands dollar */
    CurrencyCode["Kyd"] = "KYD";
    /** Kazakhstani tenge */
    CurrencyCode["Kzt"] = "KZT";
    /** Lao kip */
    CurrencyCode["Lak"] = "LAK";
    /** Lebanese pound */
    CurrencyCode["Lbp"] = "LBP";
    /** Sri Lankan rupee */
    CurrencyCode["Lkr"] = "LKR";
    /** Liberian dollar */
    CurrencyCode["Lrd"] = "LRD";
    /** Lesotho loti */
    CurrencyCode["Lsl"] = "LSL";
    /** Libyan dinar */
    CurrencyCode["Lyd"] = "LYD";
    /** Moroccan dirham */
    CurrencyCode["Mad"] = "MAD";
    /** Moldovan leu */
    CurrencyCode["Mdl"] = "MDL";
    /** Malagasy ariary */
    CurrencyCode["Mga"] = "MGA";
    /** Macedonian denar */
    CurrencyCode["Mkd"] = "MKD";
    /** Myanmar kyat */
    CurrencyCode["Mmk"] = "MMK";
    /** Mongolian tögrög */
    CurrencyCode["Mnt"] = "MNT";
    /** Macanese pataca */
    CurrencyCode["Mop"] = "MOP";
    /** Mauritanian ouguiya */
    CurrencyCode["Mru"] = "MRU";
    /** Mauritian rupee */
    CurrencyCode["Mur"] = "MUR";
    /** Maldivian rufiyaa */
    CurrencyCode["Mvr"] = "MVR";
    /** Malawian kwacha */
    CurrencyCode["Mwk"] = "MWK";
    /** Mexican peso */
    CurrencyCode["Mxn"] = "MXN";
    /** Malaysian ringgit */
    CurrencyCode["Myr"] = "MYR";
    /** Mozambican metical */
    CurrencyCode["Mzn"] = "MZN";
    /** Namibian dollar */
    CurrencyCode["Nad"] = "NAD";
    /** Nigerian naira */
    CurrencyCode["Ngn"] = "NGN";
    /** Nicaraguan córdoba */
    CurrencyCode["Nio"] = "NIO";
    /** Norwegian krone */
    CurrencyCode["Nok"] = "NOK";
    /** Nepalese rupee */
    CurrencyCode["Npr"] = "NPR";
    /** New Zealand dollar */
    CurrencyCode["Nzd"] = "NZD";
    /** Omani rial */
    CurrencyCode["Omr"] = "OMR";
    /** Panamanian balboa */
    CurrencyCode["Pab"] = "PAB";
    /** Peruvian sol */
    CurrencyCode["Pen"] = "PEN";
    /** Papua New Guinean kina */
    CurrencyCode["Pgk"] = "PGK";
    /** Philippine peso */
    CurrencyCode["Php"] = "PHP";
    /** Pakistani rupee */
    CurrencyCode["Pkr"] = "PKR";
    /** Polish złoty */
    CurrencyCode["Pln"] = "PLN";
    /** Paraguayan guaraní */
    CurrencyCode["Pyg"] = "PYG";
    /** Qatari riyal */
    CurrencyCode["Qar"] = "QAR";
    /** Romanian leu */
    CurrencyCode["Ron"] = "RON";
    /** Serbian dinar */
    CurrencyCode["Rsd"] = "RSD";
    /** Russian ruble */
    CurrencyCode["Rub"] = "RUB";
    /** Rwandan franc */
    CurrencyCode["Rwf"] = "RWF";
    /** Saudi riyal */
    CurrencyCode["Sar"] = "SAR";
    /** Solomon Islands dollar */
    CurrencyCode["Sbd"] = "SBD";
    /** Seychelles rupee */
    CurrencyCode["Scr"] = "SCR";
    /** Sudanese pound */
    CurrencyCode["Sdg"] = "SDG";
    /** Swedish krona/kronor */
    CurrencyCode["Sek"] = "SEK";
    /** Singapore dollar */
    CurrencyCode["Sgd"] = "SGD";
    /** Saint Helena pound */
    CurrencyCode["Shp"] = "SHP";
    /** Sierra Leonean leone */
    CurrencyCode["Sll"] = "SLL";
    /** Somali shilling */
    CurrencyCode["Sos"] = "SOS";
    /** Surinamese dollar */
    CurrencyCode["Srd"] = "SRD";
    /** South Sudanese pound */
    CurrencyCode["Ssp"] = "SSP";
    /** São Tomé and Príncipe dobra */
    CurrencyCode["Stn"] = "STN";
    /** Salvadoran colón */
    CurrencyCode["Svc"] = "SVC";
    /** Syrian pound */
    CurrencyCode["Syp"] = "SYP";
    /** Swazi lilangeni */
    CurrencyCode["Szl"] = "SZL";
    /** Thai baht */
    CurrencyCode["Thb"] = "THB";
    /** Tajikistani somoni */
    CurrencyCode["Tjs"] = "TJS";
    /** Turkmenistan manat */
    CurrencyCode["Tmt"] = "TMT";
    /** Tunisian dinar */
    CurrencyCode["Tnd"] = "TND";
    /** Tongan paʻanga */
    CurrencyCode["Top"] = "TOP";
    /** Turkish lira */
    CurrencyCode["Try"] = "TRY";
    /** Trinidad and Tobago dollar */
    CurrencyCode["Ttd"] = "TTD";
    /** New Taiwan dollar */
    CurrencyCode["Twd"] = "TWD";
    /** Tanzanian shilling */
    CurrencyCode["Tzs"] = "TZS";
    /** Ukrainian hryvnia */
    CurrencyCode["Uah"] = "UAH";
    /** Ugandan shilling */
    CurrencyCode["Ugx"] = "UGX";
    /** United States dollar */
    CurrencyCode["Usd"] = "USD";
    /** Uruguayan peso */
    CurrencyCode["Uyu"] = "UYU";
    /** Uzbekistan som */
    CurrencyCode["Uzs"] = "UZS";
    /** Venezuelan bolívar soberano */
    CurrencyCode["Ves"] = "VES";
    /** Vietnamese đồng */
    CurrencyCode["Vnd"] = "VND";
    /** Vanuatu vatu */
    CurrencyCode["Vuv"] = "VUV";
    /** Samoan tala */
    CurrencyCode["Wst"] = "WST";
    /** CFA franc BEAC */
    CurrencyCode["Xaf"] = "XAF";
    /** East Caribbean dollar */
    CurrencyCode["Xcd"] = "XCD";
    /** CFA franc BCEAO */
    CurrencyCode["Xof"] = "XOF";
    /** CFP franc (franc Pacifique) */
    CurrencyCode["Xpf"] = "XPF";
    /** Yemeni rial */
    CurrencyCode["Yer"] = "YER";
    /** South African rand */
    CurrencyCode["Zar"] = "ZAR";
    /** Zambian kwacha */
    CurrencyCode["Zmw"] = "ZMW";
    /** Zimbabwean dollar */
    CurrencyCode["Zwl"] = "ZWL";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
var DeletionResult;
(function (DeletionResult) {
    /** The entity was successfully deleted */
    DeletionResult["Deleted"] = "DELETED";
    /** Deletion did not take place, reason given in message */
    DeletionResult["NotDeleted"] = "NOT_DELETED";
})(DeletionResult = exports.DeletionResult || (exports.DeletionResult = {}));
var HistoryEntryType;
(function (HistoryEntryType) {
    HistoryEntryType["OrderStateTransition"] = "ORDER_STATE_TRANSITION";
    HistoryEntryType["OrderPaymentTransition"] = "ORDER_PAYMENT_TRANSITION";
    HistoryEntryType["OrderFullfillment"] = "ORDER_FULLFILLMENT";
    HistoryEntryType["OrderCancellation"] = "ORDER_CANCELLATION";
    HistoryEntryType["OrderRefundTransition"] = "ORDER_REFUND_TRANSITION";
    HistoryEntryType["OrderNote"] = "ORDER_NOTE";
    HistoryEntryType["OrderCouponApplied"] = "ORDER_COUPON_APPLIED";
    HistoryEntryType["OrderCouponRemoved"] = "ORDER_COUPON_REMOVED";
})(HistoryEntryType = exports.HistoryEntryType || (exports.HistoryEntryType = {}));
/**
 * @description
 * ISO 639-1 language code
 *
 * @docsCategory common
 */
var LanguageCode;
(function (LanguageCode) {
    /** Afar */
    LanguageCode["Aa"] = "aa";
    /** Abkhazian */
    LanguageCode["Ab"] = "ab";
    /** Afrikaans */
    LanguageCode["Af"] = "af";
    /** Akan */
    LanguageCode["Ak"] = "ak";
    /** Albanian */
    LanguageCode["Sq"] = "sq";
    /** Amharic */
    LanguageCode["Am"] = "am";
    /** Arabic */
    LanguageCode["Ar"] = "ar";
    /** Aragonese */
    LanguageCode["An"] = "an";
    /** Armenian */
    LanguageCode["Hy"] = "hy";
    /** Assamese */
    LanguageCode["As"] = "as";
    /** Avaric */
    LanguageCode["Av"] = "av";
    /** Avestan */
    LanguageCode["Ae"] = "ae";
    /** Aymara */
    LanguageCode["Ay"] = "ay";
    /** Azerbaijani */
    LanguageCode["Az"] = "az";
    /** Bashkir */
    LanguageCode["Ba"] = "ba";
    /** Bambara */
    LanguageCode["Bm"] = "bm";
    /** Basque */
    LanguageCode["Eu"] = "eu";
    /** Belarusian */
    LanguageCode["Be"] = "be";
    /** Bengali */
    LanguageCode["Bn"] = "bn";
    /** Bihari languages */
    LanguageCode["Bh"] = "bh";
    /** Bislama */
    LanguageCode["Bi"] = "bi";
    /** Bosnian */
    LanguageCode["Bs"] = "bs";
    /** Breton */
    LanguageCode["Br"] = "br";
    /** Bulgarian */
    LanguageCode["Bg"] = "bg";
    /** Burmese */
    LanguageCode["My"] = "my";
    /** Catalan; Valencian */
    LanguageCode["Ca"] = "ca";
    /** Chamorro */
    LanguageCode["Ch"] = "ch";
    /** Chechen */
    LanguageCode["Ce"] = "ce";
    /** Chinese */
    LanguageCode["Zh"] = "zh";
    /** Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic */
    LanguageCode["Cu"] = "cu";
    /** Chuvash */
    LanguageCode["Cv"] = "cv";
    /** Cornish */
    LanguageCode["Kw"] = "kw";
    /** Corsican */
    LanguageCode["Co"] = "co";
    /** Cree */
    LanguageCode["Cr"] = "cr";
    /** Czech */
    LanguageCode["Cs"] = "cs";
    /** Danish */
    LanguageCode["Da"] = "da";
    /** Divehi; Dhivehi; Maldivian */
    LanguageCode["Dv"] = "dv";
    /** Dutch; Flemish */
    LanguageCode["Nl"] = "nl";
    /** Dzongkha */
    LanguageCode["Dz"] = "dz";
    /** English */
    LanguageCode["En"] = "en";
    /** Esperanto */
    LanguageCode["Eo"] = "eo";
    /** Estonian */
    LanguageCode["Et"] = "et";
    /** Ewe */
    LanguageCode["Ee"] = "ee";
    /** Faroese */
    LanguageCode["Fo"] = "fo";
    /** Fijian */
    LanguageCode["Fj"] = "fj";
    /** Finnish */
    LanguageCode["Fi"] = "fi";
    /** French */
    LanguageCode["Fr"] = "fr";
    /** Western Frisian */
    LanguageCode["Fy"] = "fy";
    /** Fulah */
    LanguageCode["Ff"] = "ff";
    /** Georgian */
    LanguageCode["Ka"] = "ka";
    /** German */
    LanguageCode["De"] = "de";
    /** Gaelic; Scottish Gaelic */
    LanguageCode["Gd"] = "gd";
    /** Irish */
    LanguageCode["Ga"] = "ga";
    /** Galician */
    LanguageCode["Gl"] = "gl";
    /** Manx */
    LanguageCode["Gv"] = "gv";
    /** Greek, Modern (1453-) */
    LanguageCode["El"] = "el";
    /** Guarani */
    LanguageCode["Gn"] = "gn";
    /** Gujarati */
    LanguageCode["Gu"] = "gu";
    /** Haitian; Haitian Creole */
    LanguageCode["Ht"] = "ht";
    /** Hausa */
    LanguageCode["Ha"] = "ha";
    /** Hebrew */
    LanguageCode["He"] = "he";
    /** Herero */
    LanguageCode["Hz"] = "hz";
    /** Hindi */
    LanguageCode["Hi"] = "hi";
    /** Hiri Motu */
    LanguageCode["Ho"] = "ho";
    /** Croatian */
    LanguageCode["Hr"] = "hr";
    /** Hungarian */
    LanguageCode["Hu"] = "hu";
    /** Igbo */
    LanguageCode["Ig"] = "ig";
    /** Icelandic */
    LanguageCode["Is"] = "is";
    /** Ido */
    LanguageCode["Io"] = "io";
    /** Sichuan Yi; Nuosu */
    LanguageCode["Ii"] = "ii";
    /** Inuktitut */
    LanguageCode["Iu"] = "iu";
    /** Interlingue; Occidental */
    LanguageCode["Ie"] = "ie";
    /** Interlingua (International Auxiliary Language Association) */
    LanguageCode["Ia"] = "ia";
    /** Indonesian */
    LanguageCode["Id"] = "id";
    /** Inupiaq */
    LanguageCode["Ik"] = "ik";
    /** Italian */
    LanguageCode["It"] = "it";
    /** Javanese */
    LanguageCode["Jv"] = "jv";
    /** Japanese */
    LanguageCode["Ja"] = "ja";
    /** Kalaallisut; Greenlandic */
    LanguageCode["Kl"] = "kl";
    /** Kannada */
    LanguageCode["Kn"] = "kn";
    /** Kashmiri */
    LanguageCode["Ks"] = "ks";
    /** Kanuri */
    LanguageCode["Kr"] = "kr";
    /** Kazakh */
    LanguageCode["Kk"] = "kk";
    /** Central Khmer */
    LanguageCode["Km"] = "km";
    /** Kikuyu; Gikuyu */
    LanguageCode["Ki"] = "ki";
    /** Kinyarwanda */
    LanguageCode["Rw"] = "rw";
    /** Kirghiz; Kyrgyz */
    LanguageCode["Ky"] = "ky";
    /** Komi */
    LanguageCode["Kv"] = "kv";
    /** Kongo */
    LanguageCode["Kg"] = "kg";
    /** Korean */
    LanguageCode["Ko"] = "ko";
    /** Kuanyama; Kwanyama */
    LanguageCode["Kj"] = "kj";
    /** Kurdish */
    LanguageCode["Ku"] = "ku";
    /** Lao */
    LanguageCode["Lo"] = "lo";
    /** Latin */
    LanguageCode["La"] = "la";
    /** Latvian */
    LanguageCode["Lv"] = "lv";
    /** Limburgan; Limburger; Limburgish */
    LanguageCode["Li"] = "li";
    /** Lingala */
    LanguageCode["Ln"] = "ln";
    /** Lithuanian */
    LanguageCode["Lt"] = "lt";
    /** Luxembourgish; Letzeburgesch */
    LanguageCode["Lb"] = "lb";
    /** Luba-Katanga */
    LanguageCode["Lu"] = "lu";
    /** Ganda */
    LanguageCode["Lg"] = "lg";
    /** Macedonian */
    LanguageCode["Mk"] = "mk";
    /** Marshallese */
    LanguageCode["Mh"] = "mh";
    /** Malayalam */
    LanguageCode["Ml"] = "ml";
    /** Maori */
    LanguageCode["Mi"] = "mi";
    /** Marathi */
    LanguageCode["Mr"] = "mr";
    /** Malay */
    LanguageCode["Ms"] = "ms";
    /** Malagasy */
    LanguageCode["Mg"] = "mg";
    /** Maltese */
    LanguageCode["Mt"] = "mt";
    /** Mongolian */
    LanguageCode["Mn"] = "mn";
    /** Nauru */
    LanguageCode["Na"] = "na";
    /** Navajo; Navaho */
    LanguageCode["Nv"] = "nv";
    /** Ndebele, South; South Ndebele */
    LanguageCode["Nr"] = "nr";
    /** Ndebele, North; North Ndebele */
    LanguageCode["Nd"] = "nd";
    /** Ndonga */
    LanguageCode["Ng"] = "ng";
    /** Nepali */
    LanguageCode["Ne"] = "ne";
    /** Norwegian Nynorsk; Nynorsk, Norwegian */
    LanguageCode["Nn"] = "nn";
    /** Bokmål, Norwegian; Norwegian Bokmål */
    LanguageCode["Nb"] = "nb";
    /** Norwegian */
    LanguageCode["No"] = "no";
    /** Chichewa; Chewa; Nyanja */
    LanguageCode["Ny"] = "ny";
    /** Occitan (post 1500); Provençal */
    LanguageCode["Oc"] = "oc";
    /** Ojibwa */
    LanguageCode["Oj"] = "oj";
    /** Oriya */
    LanguageCode["Or"] = "or";
    /** Oromo */
    LanguageCode["Om"] = "om";
    /** Ossetian; Ossetic */
    LanguageCode["Os"] = "os";
    /** Panjabi; Punjabi */
    LanguageCode["Pa"] = "pa";
    /** Persian */
    LanguageCode["Fa"] = "fa";
    /** Pali */
    LanguageCode["Pi"] = "pi";
    /** Polish */
    LanguageCode["Pl"] = "pl";
    /** Portuguese */
    LanguageCode["Pt"] = "pt";
    /** Pushto; Pashto */
    LanguageCode["Ps"] = "ps";
    /** Quechua */
    LanguageCode["Qu"] = "qu";
    /** Romansh */
    LanguageCode["Rm"] = "rm";
    /** Romanian; Moldavian; Moldovan */
    LanguageCode["Ro"] = "ro";
    /** Rundi */
    LanguageCode["Rn"] = "rn";
    /** Russian */
    LanguageCode["Ru"] = "ru";
    /** Sango */
    LanguageCode["Sg"] = "sg";
    /** Sanskrit */
    LanguageCode["Sa"] = "sa";
    /** Sinhala; Sinhalese */
    LanguageCode["Si"] = "si";
    /** Slovak */
    LanguageCode["Sk"] = "sk";
    /** Slovenian */
    LanguageCode["Sl"] = "sl";
    /** Northern Sami */
    LanguageCode["Se"] = "se";
    /** Samoan */
    LanguageCode["Sm"] = "sm";
    /** Shona */
    LanguageCode["Sn"] = "sn";
    /** Sindhi */
    LanguageCode["Sd"] = "sd";
    /** Somali */
    LanguageCode["So"] = "so";
    /** Sotho, Southern */
    LanguageCode["St"] = "st";
    /** Spanish; Castilian */
    LanguageCode["Es"] = "es";
    /** Sardinian */
    LanguageCode["Sc"] = "sc";
    /** Serbian */
    LanguageCode["Sr"] = "sr";
    /** Swati */
    LanguageCode["Ss"] = "ss";
    /** Sundanese */
    LanguageCode["Su"] = "su";
    /** Swahili */
    LanguageCode["Sw"] = "sw";
    /** Swedish */
    LanguageCode["Sv"] = "sv";
    /** Tahitian */
    LanguageCode["Ty"] = "ty";
    /** Tamil */
    LanguageCode["Ta"] = "ta";
    /** Tatar */
    LanguageCode["Tt"] = "tt";
    /** Telugu */
    LanguageCode["Te"] = "te";
    /** Tajik */
    LanguageCode["Tg"] = "tg";
    /** Tagalog */
    LanguageCode["Tl"] = "tl";
    /** Thai */
    LanguageCode["Th"] = "th";
    /** Tibetan */
    LanguageCode["Bo"] = "bo";
    /** Tigrinya */
    LanguageCode["Ti"] = "ti";
    /** Tonga (Tonga Islands) */
    LanguageCode["To"] = "to";
    /** Tswana */
    LanguageCode["Tn"] = "tn";
    /** Tsonga */
    LanguageCode["Ts"] = "ts";
    /** Turkmen */
    LanguageCode["Tk"] = "tk";
    /** Turkish */
    LanguageCode["Tr"] = "tr";
    /** Twi */
    LanguageCode["Tw"] = "tw";
    /** Uighur; Uyghur */
    LanguageCode["Ug"] = "ug";
    /** Ukrainian */
    LanguageCode["Uk"] = "uk";
    /** Urdu */
    LanguageCode["Ur"] = "ur";
    /** Uzbek */
    LanguageCode["Uz"] = "uz";
    /** Venda */
    LanguageCode["Ve"] = "ve";
    /** Vietnamese */
    LanguageCode["Vi"] = "vi";
    /** Volapük */
    LanguageCode["Vo"] = "vo";
    /** Welsh */
    LanguageCode["Cy"] = "cy";
    /** Walloon */
    LanguageCode["Wa"] = "wa";
    /** Wolof */
    LanguageCode["Wo"] = "wo";
    /** Xhosa */
    LanguageCode["Xh"] = "xh";
    /** Yiddish */
    LanguageCode["Yi"] = "yi";
    /** Yoruba */
    LanguageCode["Yo"] = "yo";
    /** Zhuang; Chuang */
    LanguageCode["Za"] = "za";
    /** Zulu */
    LanguageCode["Zu"] = "zu";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
/**
 * "
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * @docsCategory common
 */
var Permission;
(function (Permission) {
    /**  The Authenticated role means simply that the user is logged in  */
    Permission["Authenticated"] = "Authenticated";
    /**  SuperAdmin can perform the most sensitive tasks */
    Permission["SuperAdmin"] = "SuperAdmin";
    /**  Owner means the user owns this entity, e.g. a Customer's own Order */
    Permission["Owner"] = "Owner";
    /**  Public means any unauthenticated user may perform the operation  */
    Permission["Public"] = "Public";
    Permission["CreateCatalog"] = "CreateCatalog";
    Permission["ReadCatalog"] = "ReadCatalog";
    Permission["UpdateCatalog"] = "UpdateCatalog";
    Permission["DeleteCatalog"] = "DeleteCatalog";
    Permission["CreateCustomer"] = "CreateCustomer";
    Permission["ReadCustomer"] = "ReadCustomer";
    Permission["UpdateCustomer"] = "UpdateCustomer";
    Permission["DeleteCustomer"] = "DeleteCustomer";
    Permission["CreateAdministrator"] = "CreateAdministrator";
    Permission["ReadAdministrator"] = "ReadAdministrator";
    Permission["UpdateAdministrator"] = "UpdateAdministrator";
    Permission["DeleteAdministrator"] = "DeleteAdministrator";
    Permission["CreateOrder"] = "CreateOrder";
    Permission["ReadOrder"] = "ReadOrder";
    Permission["UpdateOrder"] = "UpdateOrder";
    Permission["DeleteOrder"] = "DeleteOrder";
    Permission["CreatePromotion"] = "CreatePromotion";
    Permission["ReadPromotion"] = "ReadPromotion";
    Permission["UpdatePromotion"] = "UpdatePromotion";
    Permission["DeletePromotion"] = "DeletePromotion";
    Permission["CreateSettings"] = "CreateSettings";
    Permission["ReadSettings"] = "ReadSettings";
    Permission["UpdateSettings"] = "UpdateSettings";
    Permission["DeleteSettings"] = "DeleteSettings";
})(Permission = exports.Permission || (exports.Permission = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "ASC";
    SortOrder["Desc"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var StockMovementType;
(function (StockMovementType) {
    StockMovementType["Adjustment"] = "ADJUSTMENT";
    StockMovementType["Sale"] = "SALE";
    StockMovementType["Cancellation"] = "CANCELLATION";
    StockMovementType["Return"] = "RETURN";
})(StockMovementType = exports.StockMovementType || (exports.StockMovementType = {}));
//# sourceMappingURL=generated-shop-types.js.map