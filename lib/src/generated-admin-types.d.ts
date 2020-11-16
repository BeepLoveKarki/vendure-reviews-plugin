export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
export declare type AddNoteToOrderInput = {
    id: Scalars['ID'];
    note: Scalars['String'];
    isPublic: Scalars['Boolean'];
};
export declare type Address = Node & {
    __typename?: 'Address';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    country: Country;
    phoneNumber?: Maybe<Scalars['String']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type Adjustment = {
    __typename?: 'Adjustment';
    adjustmentSource: Scalars['String'];
    type: AdjustmentType;
    description: Scalars['String'];
    amount: Scalars['Int'];
};
export declare enum AdjustmentType {
    Tax = "TAX",
    Promotion = "PROMOTION",
    Shipping = "SHIPPING",
    Refund = "REFUND",
    TaxRefund = "TAX_REFUND",
    PromotionRefund = "PROMOTION_REFUND",
    ShippingRefund = "SHIPPING_REFUND"
}
export declare type Administrator = Node & {
    __typename?: 'Administrator';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    emailAddress: Scalars['String'];
    user: User;
};
export declare type AdministratorFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    firstName?: Maybe<StringOperators>;
    lastName?: Maybe<StringOperators>;
    emailAddress?: Maybe<StringOperators>;
};
export declare type AdministratorList = PaginatedList & {
    __typename?: 'AdministratorList';
    items: Array<Administrator>;
    totalItems: Scalars['Int'];
};
export declare type AdministratorListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<AdministratorSortParameter>;
    filter?: Maybe<AdministratorFilterParameter>;
};
export declare type AdministratorSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    firstName?: Maybe<SortOrder>;
    lastName?: Maybe<SortOrder>;
    emailAddress?: Maybe<SortOrder>;
};
export declare type Asset = Node & {
    __typename?: 'Asset';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
    type: AssetType;
    fileSize: Scalars['Int'];
    mimeType: Scalars['String'];
    width: Scalars['Int'];
    height: Scalars['Int'];
    source: Scalars['String'];
    preview: Scalars['String'];
    focalPoint?: Maybe<Coordinate>;
};
export declare type AssetFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    name?: Maybe<StringOperators>;
    type?: Maybe<StringOperators>;
    fileSize?: Maybe<NumberOperators>;
    mimeType?: Maybe<StringOperators>;
    width?: Maybe<NumberOperators>;
    height?: Maybe<NumberOperators>;
    source?: Maybe<StringOperators>;
    preview?: Maybe<StringOperators>;
};
export declare type AssetList = PaginatedList & {
    __typename?: 'AssetList';
    items: Array<Asset>;
    totalItems: Scalars['Int'];
};
export declare type AssetListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<AssetSortParameter>;
    filter?: Maybe<AssetFilterParameter>;
};
export declare type AssetSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    fileSize?: Maybe<SortOrder>;
    mimeType?: Maybe<SortOrder>;
    width?: Maybe<SortOrder>;
    height?: Maybe<SortOrder>;
    source?: Maybe<SortOrder>;
    preview?: Maybe<SortOrder>;
};
export declare enum AssetType {
    Image = "IMAGE",
    Video = "VIDEO",
    Binary = "BINARY"
}
export declare type AssignProductsToChannelInput = {
    productIds: Array<Scalars['ID']>;
    channelId: Scalars['ID'];
    priceFactor?: Maybe<Scalars['Float']>;
};
export declare type BooleanCustomFieldConfig = CustomField & {
    __typename?: 'BooleanCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
};
export declare type BooleanOperators = {
    eq?: Maybe<Scalars['Boolean']>;
};
export declare type Cancellation = Node & StockMovement & {
    __typename?: 'Cancellation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
    orderLine: OrderLine;
};
export declare type CancelOrderInput = {
    /** The id of the order to be cancelled */
    orderId: Scalars['ID'];
    /** Optionally specify which OrderLines to cancel. If not provided, all OrderLines will be cancelled */
    lines?: Maybe<Array<OrderLineInput>>;
    reason?: Maybe<Scalars['String']>;
};
export declare type Channel = Node & {
    __typename?: 'Channel';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    token: Scalars['String'];
    defaultTaxZone?: Maybe<Zone>;
    defaultShippingZone?: Maybe<Zone>;
    defaultLanguageCode: LanguageCode;
    currencyCode: CurrencyCode;
    pricesIncludeTax: Scalars['Boolean'];
};
export declare type Collection = Node & {
    __typename?: 'Collection';
    isPrivate: Scalars['Boolean'];
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode?: Maybe<LanguageCode>;
    name: Scalars['String'];
    breadcrumbs: Array<CollectionBreadcrumb>;
    position: Scalars['Int'];
    description: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    assets: Array<Asset>;
    parent?: Maybe<Collection>;
    children?: Maybe<Array<Collection>>;
    filters: Array<ConfigurableOperation>;
    translations: Array<CollectionTranslation>;
    productVariants: ProductVariantList;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CollectionProductVariantsArgs = {
    options?: Maybe<ProductVariantListOptions>;
};
export declare type CollectionBreadcrumb = {
    __typename?: 'CollectionBreadcrumb';
    id: Scalars['ID'];
    name: Scalars['String'];
};
export declare type CollectionFilterParameter = {
    isPrivate?: Maybe<BooleanOperators>;
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    position?: Maybe<NumberOperators>;
    description?: Maybe<StringOperators>;
};
export declare type CollectionList = PaginatedList & {
    __typename?: 'CollectionList';
    items: Array<Collection>;
    totalItems: Scalars['Int'];
};
export declare type CollectionListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<CollectionSortParameter>;
    filter?: Maybe<CollectionFilterParameter>;
};
export declare type CollectionSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    position?: Maybe<SortOrder>;
    description?: Maybe<SortOrder>;
};
export declare type CollectionTranslation = {
    __typename?: 'CollectionTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    description: Scalars['String'];
};
export declare type CollectionTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ConfigArg = {
    __typename?: 'ConfigArg';
    name: Scalars['String'];
    type: Scalars['String'];
    value: Scalars['String'];
};
export declare type ConfigArgDefinition = {
    __typename?: 'ConfigArgDefinition';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    config?: Maybe<Scalars['JSON']>;
};
export declare type ConfigArgInput = {
    name: Scalars['String'];
    type: Scalars['String'];
    value: Scalars['String'];
};
export declare type ConfigurableOperation = {
    __typename?: 'ConfigurableOperation';
    code: Scalars['String'];
    args: Array<ConfigArg>;
};
export declare type ConfigurableOperationDefinition = {
    __typename?: 'ConfigurableOperationDefinition';
    code: Scalars['String'];
    args: Array<ConfigArgDefinition>;
    description: Scalars['String'];
};
export declare type ConfigurableOperationInput = {
    code: Scalars['String'];
    arguments: Array<ConfigArgInput>;
};
export declare type Coordinate = {
    __typename?: 'Coordinate';
    x: Scalars['Float'];
    y: Scalars['Float'];
};
export declare type CoordinateInput = {
    x: Scalars['Float'];
    y: Scalars['Float'];
};
export declare type Country = Node & {
    __typename?: 'Country';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    code: Scalars['String'];
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    translations: Array<CountryTranslation>;
};
export declare type CountryFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    code?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    enabled?: Maybe<BooleanOperators>;
};
export declare type CountryList = PaginatedList & {
    __typename?: 'CountryList';
    items: Array<Country>;
    totalItems: Scalars['Int'];
};
export declare type CountryListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<CountrySortParameter>;
    filter?: Maybe<CountryFilterParameter>;
};
export declare type CountrySortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    code?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
};
export declare type CountryTranslation = {
    __typename?: 'CountryTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type CountryTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
};
export declare type CreateAddressInput = {
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    countryCode: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateAdministratorInput = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    emailAddress: Scalars['String'];
    password: Scalars['String'];
    roleIds: Array<Scalars['ID']>;
};
export declare type CreateAssetInput = {
    file: Scalars['Upload'];
};
export declare type CreateChannelInput = {
    code: Scalars['String'];
    token: Scalars['String'];
    defaultLanguageCode: LanguageCode;
    pricesIncludeTax: Scalars['Boolean'];
    currencyCode: CurrencyCode;
    defaultTaxZoneId: Scalars['ID'];
    defaultShippingZoneId: Scalars['ID'];
};
export declare type CreateCollectionInput = {
    isPrivate?: Maybe<Scalars['Boolean']>;
    featuredAssetId?: Maybe<Scalars['ID']>;
    assetIds?: Maybe<Array<Scalars['ID']>>;
    parentId?: Maybe<Scalars['ID']>;
    filters: Array<ConfigurableOperationInput>;
    translations: Array<CollectionTranslationInput>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateCountryInput = {
    code: Scalars['String'];
    translations: Array<CountryTranslationInput>;
    enabled: Scalars['Boolean'];
};
export declare type CreateCustomerGroupInput = {
    name: Scalars['String'];
    customerIds?: Maybe<Array<Scalars['ID']>>;
};
export declare type CreateCustomerInput = {
    title?: Maybe<Scalars['String']>;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    emailAddress: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateFacetInput = {
    code: Scalars['String'];
    isPrivate: Scalars['Boolean'];
    translations: Array<FacetTranslationInput>;
    values?: Maybe<Array<CreateFacetValueWithFacetInput>>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateFacetValueInput = {
    facetId: Scalars['ID'];
    code: Scalars['String'];
    translations: Array<FacetValueTranslationInput>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateFacetValueWithFacetInput = {
    code: Scalars['String'];
    translations: Array<FacetValueTranslationInput>;
};
export declare type CreateGroupOptionInput = {
    code: Scalars['String'];
    translations: Array<ProductOptionGroupTranslationInput>;
};
export declare type CreateProductCustomFieldsInput = {
    reviewRating?: Maybe<Scalars['Float']>;
    reviewCount?: Maybe<Scalars['Float']>;
};
export declare type CreateProductInput = {
    featuredAssetId?: Maybe<Scalars['ID']>;
    assetIds?: Maybe<Array<Scalars['ID']>>;
    facetValueIds?: Maybe<Array<Scalars['ID']>>;
    translations: Array<ProductTranslationInput>;
    customFields?: Maybe<CreateProductCustomFieldsInput>;
};
export declare type CreateProductOptionGroupInput = {
    code: Scalars['String'];
    translations: Array<ProductOptionGroupTranslationInput>;
    options: Array<CreateGroupOptionInput>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateProductOptionInput = {
    productOptionGroupId: Scalars['ID'];
    code: Scalars['String'];
    translations: Array<ProductOptionGroupTranslationInput>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateProductVariantInput = {
    productId: Scalars['ID'];
    translations: Array<ProductVariantTranslationInput>;
    facetValueIds?: Maybe<Array<Scalars['ID']>>;
    sku: Scalars['String'];
    price?: Maybe<Scalars['Int']>;
    taxCategoryId?: Maybe<Scalars['ID']>;
    optionIds?: Maybe<Array<Scalars['ID']>>;
    featuredAssetId?: Maybe<Scalars['ID']>;
    assetIds?: Maybe<Array<Scalars['ID']>>;
    stockOnHand?: Maybe<Scalars['Int']>;
    trackInventory?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateProductVariantOptionInput = {
    optionGroupId: Scalars['ID'];
    code: Scalars['String'];
    translations: Array<ProductOptionTranslationInput>;
};
export declare type CreatePromotionInput = {
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    startsAt?: Maybe<Scalars['DateTime']>;
    endsAt?: Maybe<Scalars['DateTime']>;
    couponCode?: Maybe<Scalars['String']>;
    perCustomerUsageLimit?: Maybe<Scalars['Int']>;
    conditions: Array<ConfigurableOperationInput>;
    actions: Array<ConfigurableOperationInput>;
};
export declare type CreateRoleInput = {
    code: Scalars['String'];
    description: Scalars['String'];
    permissions: Array<Permission>;
    channelIds?: Maybe<Array<Scalars['ID']>>;
};
export declare type CreateShippingMethodInput = {
    code: Scalars['String'];
    description: Scalars['String'];
    checker: ConfigurableOperationInput;
    calculator: ConfigurableOperationInput;
};
export declare type CreateTaxCategoryInput = {
    name: Scalars['String'];
};
export declare type CreateTaxRateInput = {
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    value: Scalars['Float'];
    categoryId: Scalars['ID'];
    zoneId: Scalars['ID'];
    customerGroupId?: Maybe<Scalars['ID']>;
};
export declare type CreateZoneInput = {
    name: Scalars['String'];
    memberIds?: Maybe<Array<Scalars['ID']>>;
};
/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export declare enum CurrencyCode {
    /** United Arab Emirates dirham */
    Aed = "AED",
    /** Afghan afghani */
    Afn = "AFN",
    /** Albanian lek */
    All = "ALL",
    /** Armenian dram */
    Amd = "AMD",
    /** Netherlands Antillean guilder */
    Ang = "ANG",
    /** Angolan kwanza */
    Aoa = "AOA",
    /** Argentine peso */
    Ars = "ARS",
    /** Australian dollar */
    Aud = "AUD",
    /** Aruban florin */
    Awg = "AWG",
    /** Azerbaijani manat */
    Azn = "AZN",
    /** Bosnia and Herzegovina convertible mark */
    Bam = "BAM",
    /** Barbados dollar */
    Bbd = "BBD",
    /** Bangladeshi taka */
    Bdt = "BDT",
    /** Bulgarian lev */
    Bgn = "BGN",
    /** Bahraini dinar */
    Bhd = "BHD",
    /** Burundian franc */
    Bif = "BIF",
    /** Bermudian dollar */
    Bmd = "BMD",
    /** Brunei dollar */
    Bnd = "BND",
    /** Boliviano */
    Bob = "BOB",
    /** Brazilian real */
    Brl = "BRL",
    /** Bahamian dollar */
    Bsd = "BSD",
    /** Bhutanese ngultrum */
    Btn = "BTN",
    /** Botswana pula */
    Bwp = "BWP",
    /** Belarusian ruble */
    Byn = "BYN",
    /** Belize dollar */
    Bzd = "BZD",
    /** Canadian dollar */
    Cad = "CAD",
    /** Congolese franc */
    Cdf = "CDF",
    /** Swiss franc */
    Chf = "CHF",
    /** Chilean peso */
    Clp = "CLP",
    /** Renminbi (Chinese) yuan */
    Cny = "CNY",
    /** Colombian peso */
    Cop = "COP",
    /** Costa Rican colon */
    Crc = "CRC",
    /** Cuban convertible peso */
    Cuc = "CUC",
    /** Cuban peso */
    Cup = "CUP",
    /** Cape Verde escudo */
    Cve = "CVE",
    /** Czech koruna */
    Czk = "CZK",
    /** Djiboutian franc */
    Djf = "DJF",
    /** Danish krone */
    Dkk = "DKK",
    /** Dominican peso */
    Dop = "DOP",
    /** Algerian dinar */
    Dzd = "DZD",
    /** Egyptian pound */
    Egp = "EGP",
    /** Eritrean nakfa */
    Ern = "ERN",
    /** Ethiopian birr */
    Etb = "ETB",
    /** Euro */
    Eur = "EUR",
    /** Fiji dollar */
    Fjd = "FJD",
    /** Falkland Islands pound */
    Fkp = "FKP",
    /** Pound sterling */
    Gbp = "GBP",
    /** Georgian lari */
    Gel = "GEL",
    /** Ghanaian cedi */
    Ghs = "GHS",
    /** Gibraltar pound */
    Gip = "GIP",
    /** Gambian dalasi */
    Gmd = "GMD",
    /** Guinean franc */
    Gnf = "GNF",
    /** Guatemalan quetzal */
    Gtq = "GTQ",
    /** Guyanese dollar */
    Gyd = "GYD",
    /** Hong Kong dollar */
    Hkd = "HKD",
    /** Honduran lempira */
    Hnl = "HNL",
    /** Croatian kuna */
    Hrk = "HRK",
    /** Haitian gourde */
    Htg = "HTG",
    /** Hungarian forint */
    Huf = "HUF",
    /** Indonesian rupiah */
    Idr = "IDR",
    /** Israeli new shekel */
    Ils = "ILS",
    /** Indian rupee */
    Inr = "INR",
    /** Iraqi dinar */
    Iqd = "IQD",
    /** Iranian rial */
    Irr = "IRR",
    /** Icelandic króna */
    Isk = "ISK",
    /** Jamaican dollar */
    Jmd = "JMD",
    /** Jordanian dinar */
    Jod = "JOD",
    /** Japanese yen */
    Jpy = "JPY",
    /** Kenyan shilling */
    Kes = "KES",
    /** Kyrgyzstani som */
    Kgs = "KGS",
    /** Cambodian riel */
    Khr = "KHR",
    /** Comoro franc */
    Kmf = "KMF",
    /** North Korean won */
    Kpw = "KPW",
    /** South Korean won */
    Krw = "KRW",
    /** Kuwaiti dinar */
    Kwd = "KWD",
    /** Cayman Islands dollar */
    Kyd = "KYD",
    /** Kazakhstani tenge */
    Kzt = "KZT",
    /** Lao kip */
    Lak = "LAK",
    /** Lebanese pound */
    Lbp = "LBP",
    /** Sri Lankan rupee */
    Lkr = "LKR",
    /** Liberian dollar */
    Lrd = "LRD",
    /** Lesotho loti */
    Lsl = "LSL",
    /** Libyan dinar */
    Lyd = "LYD",
    /** Moroccan dirham */
    Mad = "MAD",
    /** Moldovan leu */
    Mdl = "MDL",
    /** Malagasy ariary */
    Mga = "MGA",
    /** Macedonian denar */
    Mkd = "MKD",
    /** Myanmar kyat */
    Mmk = "MMK",
    /** Mongolian tögrög */
    Mnt = "MNT",
    /** Macanese pataca */
    Mop = "MOP",
    /** Mauritanian ouguiya */
    Mru = "MRU",
    /** Mauritian rupee */
    Mur = "MUR",
    /** Maldivian rufiyaa */
    Mvr = "MVR",
    /** Malawian kwacha */
    Mwk = "MWK",
    /** Mexican peso */
    Mxn = "MXN",
    /** Malaysian ringgit */
    Myr = "MYR",
    /** Mozambican metical */
    Mzn = "MZN",
    /** Namibian dollar */
    Nad = "NAD",
    /** Nigerian naira */
    Ngn = "NGN",
    /** Nicaraguan córdoba */
    Nio = "NIO",
    /** Norwegian krone */
    Nok = "NOK",
    /** Nepalese rupee */
    Npr = "NPR",
    /** New Zealand dollar */
    Nzd = "NZD",
    /** Omani rial */
    Omr = "OMR",
    /** Panamanian balboa */
    Pab = "PAB",
    /** Peruvian sol */
    Pen = "PEN",
    /** Papua New Guinean kina */
    Pgk = "PGK",
    /** Philippine peso */
    Php = "PHP",
    /** Pakistani rupee */
    Pkr = "PKR",
    /** Polish złoty */
    Pln = "PLN",
    /** Paraguayan guaraní */
    Pyg = "PYG",
    /** Qatari riyal */
    Qar = "QAR",
    /** Romanian leu */
    Ron = "RON",
    /** Serbian dinar */
    Rsd = "RSD",
    /** Russian ruble */
    Rub = "RUB",
    /** Rwandan franc */
    Rwf = "RWF",
    /** Saudi riyal */
    Sar = "SAR",
    /** Solomon Islands dollar */
    Sbd = "SBD",
    /** Seychelles rupee */
    Scr = "SCR",
    /** Sudanese pound */
    Sdg = "SDG",
    /** Swedish krona/kronor */
    Sek = "SEK",
    /** Singapore dollar */
    Sgd = "SGD",
    /** Saint Helena pound */
    Shp = "SHP",
    /** Sierra Leonean leone */
    Sll = "SLL",
    /** Somali shilling */
    Sos = "SOS",
    /** Surinamese dollar */
    Srd = "SRD",
    /** South Sudanese pound */
    Ssp = "SSP",
    /** São Tomé and Príncipe dobra */
    Stn = "STN",
    /** Salvadoran colón */
    Svc = "SVC",
    /** Syrian pound */
    Syp = "SYP",
    /** Swazi lilangeni */
    Szl = "SZL",
    /** Thai baht */
    Thb = "THB",
    /** Tajikistani somoni */
    Tjs = "TJS",
    /** Turkmenistan manat */
    Tmt = "TMT",
    /** Tunisian dinar */
    Tnd = "TND",
    /** Tongan paʻanga */
    Top = "TOP",
    /** Turkish lira */
    Try = "TRY",
    /** Trinidad and Tobago dollar */
    Ttd = "TTD",
    /** New Taiwan dollar */
    Twd = "TWD",
    /** Tanzanian shilling */
    Tzs = "TZS",
    /** Ukrainian hryvnia */
    Uah = "UAH",
    /** Ugandan shilling */
    Ugx = "UGX",
    /** United States dollar */
    Usd = "USD",
    /** Uruguayan peso */
    Uyu = "UYU",
    /** Uzbekistan som */
    Uzs = "UZS",
    /** Venezuelan bolívar soberano */
    Ves = "VES",
    /** Vietnamese đồng */
    Vnd = "VND",
    /** Vanuatu vatu */
    Vuv = "VUV",
    /** Samoan tala */
    Wst = "WST",
    /** CFA franc BEAC */
    Xaf = "XAF",
    /** East Caribbean dollar */
    Xcd = "XCD",
    /** CFA franc BCEAO */
    Xof = "XOF",
    /** CFP franc (franc Pacifique) */
    Xpf = "XPF",
    /** Yemeni rial */
    Yer = "YER",
    /** South African rand */
    Zar = "ZAR",
    /** Zambian kwacha */
    Zmw = "ZMW",
    /** Zimbabwean dollar */
    Zwl = "ZWL"
}
export declare type CurrentUser = {
    __typename?: 'CurrentUser';
    id: Scalars['ID'];
    identifier: Scalars['String'];
    channels: Array<CurrentUserChannel>;
};
export declare type CurrentUserChannel = {
    __typename?: 'CurrentUserChannel';
    id: Scalars['ID'];
    token: Scalars['String'];
    code: Scalars['String'];
    permissions: Array<Permission>;
};
export declare type Customer = Node & {
    __typename?: 'Customer';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    title?: Maybe<Scalars['String']>;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    emailAddress: Scalars['String'];
    addresses?: Maybe<Array<Address>>;
    orders: OrderList;
    user?: Maybe<User>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CustomerOrdersArgs = {
    options?: Maybe<OrderListOptions>;
};
export declare type CustomerFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    title?: Maybe<StringOperators>;
    firstName?: Maybe<StringOperators>;
    lastName?: Maybe<StringOperators>;
    phoneNumber?: Maybe<StringOperators>;
    emailAddress?: Maybe<StringOperators>;
};
export declare type CustomerGroup = Node & {
    __typename?: 'CustomerGroup';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
};
export declare type CustomerList = PaginatedList & {
    __typename?: 'CustomerList';
    items: Array<Customer>;
    totalItems: Scalars['Int'];
};
export declare type CustomerListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<CustomerSortParameter>;
    filter?: Maybe<CustomerFilterParameter>;
};
export declare type CustomerSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    title?: Maybe<SortOrder>;
    firstName?: Maybe<SortOrder>;
    lastName?: Maybe<SortOrder>;
    phoneNumber?: Maybe<SortOrder>;
    emailAddress?: Maybe<SortOrder>;
};
export declare type CustomField = {
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
};
export declare type CustomFieldConfig = StringCustomFieldConfig | LocaleStringCustomFieldConfig | IntCustomFieldConfig | FloatCustomFieldConfig | BooleanCustomFieldConfig | DateTimeCustomFieldConfig;
export declare type CustomFields = {
    __typename?: 'CustomFields';
    Address: Array<CustomFieldConfig>;
    Collection: Array<CustomFieldConfig>;
    Customer: Array<CustomFieldConfig>;
    Facet: Array<CustomFieldConfig>;
    FacetValue: Array<CustomFieldConfig>;
    GlobalSettings: Array<CustomFieldConfig>;
    Order: Array<CustomFieldConfig>;
    OrderLine: Array<CustomFieldConfig>;
    Product: Array<CustomFieldConfig>;
    ProductOption: Array<CustomFieldConfig>;
    ProductOptionGroup: Array<CustomFieldConfig>;
    ProductVariant: Array<CustomFieldConfig>;
    User: Array<CustomFieldConfig>;
};
export declare type DateOperators = {
    eq?: Maybe<Scalars['DateTime']>;
    before?: Maybe<Scalars['DateTime']>;
    after?: Maybe<Scalars['DateTime']>;
    between?: Maybe<DateRange>;
};
export declare type DateRange = {
    start: Scalars['DateTime'];
    end: Scalars['DateTime'];
};
/**
 * Expects the same validation formats as the <input type="datetime-local"> HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export declare type DateTimeCustomFieldConfig = CustomField & {
    __typename?: 'DateTimeCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    min?: Maybe<Scalars['String']>;
    max?: Maybe<Scalars['String']>;
    step?: Maybe<Scalars['Int']>;
};
export declare type DeletionResponse = {
    __typename?: 'DeletionResponse';
    result: DeletionResult;
    message?: Maybe<Scalars['String']>;
};
export declare enum DeletionResult {
    /** The entity was successfully deleted */
    Deleted = "DELETED",
    /** Deletion did not take place, reason given in message */
    NotDeleted = "NOT_DELETED"
}
export declare type Facet = Node & {
    __typename?: 'Facet';
    isPrivate: Scalars['Boolean'];
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    code: Scalars['String'];
    values: Array<FacetValue>;
    translations: Array<FacetTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type FacetFilterParameter = {
    isPrivate?: Maybe<BooleanOperators>;
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    code?: Maybe<StringOperators>;
};
export declare type FacetList = PaginatedList & {
    __typename?: 'FacetList';
    items: Array<Facet>;
    totalItems: Scalars['Int'];
};
export declare type FacetListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<FacetSortParameter>;
    filter?: Maybe<FacetFilterParameter>;
};
export declare type FacetSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    code?: Maybe<SortOrder>;
};
export declare type FacetTranslation = {
    __typename?: 'FacetTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type FacetTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type FacetValue = Node & {
    __typename?: 'FacetValue';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    facet: Facet;
    name: Scalars['String'];
    code: Scalars['String'];
    translations: Array<FacetValueTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export declare type FacetValueResult = {
    __typename?: 'FacetValueResult';
    facetValue: FacetValue;
    count: Scalars['Int'];
};
export declare type FacetValueTranslation = {
    __typename?: 'FacetValueTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type FacetValueTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type FloatCustomFieldConfig = CustomField & {
    __typename?: 'FloatCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    min?: Maybe<Scalars['Float']>;
    max?: Maybe<Scalars['Float']>;
    step?: Maybe<Scalars['Float']>;
};
export declare type Fulfillment = Node & {
    __typename?: 'Fulfillment';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    orderItems: Array<OrderItem>;
    method: Scalars['String'];
    trackingCode?: Maybe<Scalars['String']>;
};
export declare type FulfillOrderInput = {
    lines: Array<OrderLineInput>;
    method: Scalars['String'];
    trackingCode?: Maybe<Scalars['String']>;
};
export declare type GlobalSettings = {
    __typename?: 'GlobalSettings';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    availableLanguages: Array<LanguageCode>;
    trackInventory: Scalars['Boolean'];
    serverConfig: ServerConfig;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type HistoryEntry = Node & {
    __typename?: 'HistoryEntry';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    isPublic: Scalars['Boolean'];
    type: HistoryEntryType;
    administrator?: Maybe<Administrator>;
    data: Scalars['JSON'];
};
export declare type HistoryEntryFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    isPublic?: Maybe<BooleanOperators>;
    type?: Maybe<StringOperators>;
};
export declare type HistoryEntryList = PaginatedList & {
    __typename?: 'HistoryEntryList';
    items: Array<HistoryEntry>;
    totalItems: Scalars['Int'];
};
export declare type HistoryEntryListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<HistoryEntrySortParameter>;
    filter?: Maybe<HistoryEntryFilterParameter>;
};
export declare type HistoryEntrySortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
};
export declare enum HistoryEntryType {
    OrderStateTransition = "ORDER_STATE_TRANSITION",
    OrderPaymentTransition = "ORDER_PAYMENT_TRANSITION",
    OrderFullfillment = "ORDER_FULLFILLMENT",
    OrderCancellation = "ORDER_CANCELLATION",
    OrderRefundTransition = "ORDER_REFUND_TRANSITION",
    OrderNote = "ORDER_NOTE",
    OrderCouponApplied = "ORDER_COUPON_APPLIED",
    OrderCouponRemoved = "ORDER_COUPON_REMOVED"
}
export declare type ImportInfo = {
    __typename?: 'ImportInfo';
    errors?: Maybe<Array<Scalars['String']>>;
    processed: Scalars['Int'];
    imported: Scalars['Int'];
};
export declare type IntCustomFieldConfig = CustomField & {
    __typename?: 'IntCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    min?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
};
export declare type Job = Node & {
    __typename?: 'Job';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    startedAt?: Maybe<Scalars['DateTime']>;
    settledAt?: Maybe<Scalars['DateTime']>;
    queueName: Scalars['String'];
    state: JobState;
    progress: Scalars['Float'];
    data?: Maybe<Scalars['JSON']>;
    result?: Maybe<Scalars['JSON']>;
    error?: Maybe<Scalars['JSON']>;
    isSettled: Scalars['Boolean'];
    duration: Scalars['Int'];
};
export declare type JobFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    startedAt?: Maybe<DateOperators>;
    settledAt?: Maybe<DateOperators>;
    queueName?: Maybe<StringOperators>;
    state?: Maybe<StringOperators>;
    progress?: Maybe<NumberOperators>;
    isSettled?: Maybe<BooleanOperators>;
    duration?: Maybe<NumberOperators>;
};
export declare type JobList = PaginatedList & {
    __typename?: 'JobList';
    items: Array<Job>;
    totalItems: Scalars['Int'];
};
export declare type JobListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<JobSortParameter>;
    filter?: Maybe<JobFilterParameter>;
};
export declare type JobQueue = {
    __typename?: 'JobQueue';
    name: Scalars['String'];
    running: Scalars['Boolean'];
};
export declare type JobSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    startedAt?: Maybe<SortOrder>;
    settledAt?: Maybe<SortOrder>;
    queueName?: Maybe<SortOrder>;
    progress?: Maybe<SortOrder>;
    duration?: Maybe<SortOrder>;
};
/**
 * @description
 * The state of a Job in the JobQueue
 *
 * @docsCategory common
 */
export declare enum JobState {
    Pending = "PENDING",
    Running = "RUNNING",
    Completed = "COMPLETED",
    Retrying = "RETRYING",
    Failed = "FAILED"
}
/**
 * @description
 * ISO 639-1 language code
 *
 * @docsCategory common
 */
export declare enum LanguageCode {
    /** Afar */
    Aa = "aa",
    /** Abkhazian */
    Ab = "ab",
    /** Afrikaans */
    Af = "af",
    /** Akan */
    Ak = "ak",
    /** Albanian */
    Sq = "sq",
    /** Amharic */
    Am = "am",
    /** Arabic */
    Ar = "ar",
    /** Aragonese */
    An = "an",
    /** Armenian */
    Hy = "hy",
    /** Assamese */
    As = "as",
    /** Avaric */
    Av = "av",
    /** Avestan */
    Ae = "ae",
    /** Aymara */
    Ay = "ay",
    /** Azerbaijani */
    Az = "az",
    /** Bashkir */
    Ba = "ba",
    /** Bambara */
    Bm = "bm",
    /** Basque */
    Eu = "eu",
    /** Belarusian */
    Be = "be",
    /** Bengali */
    Bn = "bn",
    /** Bihari languages */
    Bh = "bh",
    /** Bislama */
    Bi = "bi",
    /** Bosnian */
    Bs = "bs",
    /** Breton */
    Br = "br",
    /** Bulgarian */
    Bg = "bg",
    /** Burmese */
    My = "my",
    /** Catalan; Valencian */
    Ca = "ca",
    /** Chamorro */
    Ch = "ch",
    /** Chechen */
    Ce = "ce",
    /** Chinese */
    Zh = "zh",
    /** Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic */
    Cu = "cu",
    /** Chuvash */
    Cv = "cv",
    /** Cornish */
    Kw = "kw",
    /** Corsican */
    Co = "co",
    /** Cree */
    Cr = "cr",
    /** Czech */
    Cs = "cs",
    /** Danish */
    Da = "da",
    /** Divehi; Dhivehi; Maldivian */
    Dv = "dv",
    /** Dutch; Flemish */
    Nl = "nl",
    /** Dzongkha */
    Dz = "dz",
    /** English */
    En = "en",
    /** Esperanto */
    Eo = "eo",
    /** Estonian */
    Et = "et",
    /** Ewe */
    Ee = "ee",
    /** Faroese */
    Fo = "fo",
    /** Fijian */
    Fj = "fj",
    /** Finnish */
    Fi = "fi",
    /** French */
    Fr = "fr",
    /** Western Frisian */
    Fy = "fy",
    /** Fulah */
    Ff = "ff",
    /** Georgian */
    Ka = "ka",
    /** German */
    De = "de",
    /** Gaelic; Scottish Gaelic */
    Gd = "gd",
    /** Irish */
    Ga = "ga",
    /** Galician */
    Gl = "gl",
    /** Manx */
    Gv = "gv",
    /** Greek, Modern (1453-) */
    El = "el",
    /** Guarani */
    Gn = "gn",
    /** Gujarati */
    Gu = "gu",
    /** Haitian; Haitian Creole */
    Ht = "ht",
    /** Hausa */
    Ha = "ha",
    /** Hebrew */
    He = "he",
    /** Herero */
    Hz = "hz",
    /** Hindi */
    Hi = "hi",
    /** Hiri Motu */
    Ho = "ho",
    /** Croatian */
    Hr = "hr",
    /** Hungarian */
    Hu = "hu",
    /** Igbo */
    Ig = "ig",
    /** Icelandic */
    Is = "is",
    /** Ido */
    Io = "io",
    /** Sichuan Yi; Nuosu */
    Ii = "ii",
    /** Inuktitut */
    Iu = "iu",
    /** Interlingue; Occidental */
    Ie = "ie",
    /** Interlingua (International Auxiliary Language Association) */
    Ia = "ia",
    /** Indonesian */
    Id = "id",
    /** Inupiaq */
    Ik = "ik",
    /** Italian */
    It = "it",
    /** Javanese */
    Jv = "jv",
    /** Japanese */
    Ja = "ja",
    /** Kalaallisut; Greenlandic */
    Kl = "kl",
    /** Kannada */
    Kn = "kn",
    /** Kashmiri */
    Ks = "ks",
    /** Kanuri */
    Kr = "kr",
    /** Kazakh */
    Kk = "kk",
    /** Central Khmer */
    Km = "km",
    /** Kikuyu; Gikuyu */
    Ki = "ki",
    /** Kinyarwanda */
    Rw = "rw",
    /** Kirghiz; Kyrgyz */
    Ky = "ky",
    /** Komi */
    Kv = "kv",
    /** Kongo */
    Kg = "kg",
    /** Korean */
    Ko = "ko",
    /** Kuanyama; Kwanyama */
    Kj = "kj",
    /** Kurdish */
    Ku = "ku",
    /** Lao */
    Lo = "lo",
    /** Latin */
    La = "la",
    /** Latvian */
    Lv = "lv",
    /** Limburgan; Limburger; Limburgish */
    Li = "li",
    /** Lingala */
    Ln = "ln",
    /** Lithuanian */
    Lt = "lt",
    /** Luxembourgish; Letzeburgesch */
    Lb = "lb",
    /** Luba-Katanga */
    Lu = "lu",
    /** Ganda */
    Lg = "lg",
    /** Macedonian */
    Mk = "mk",
    /** Marshallese */
    Mh = "mh",
    /** Malayalam */
    Ml = "ml",
    /** Maori */
    Mi = "mi",
    /** Marathi */
    Mr = "mr",
    /** Malay */
    Ms = "ms",
    /** Malagasy */
    Mg = "mg",
    /** Maltese */
    Mt = "mt",
    /** Mongolian */
    Mn = "mn",
    /** Nauru */
    Na = "na",
    /** Navajo; Navaho */
    Nv = "nv",
    /** Ndebele, South; South Ndebele */
    Nr = "nr",
    /** Ndebele, North; North Ndebele */
    Nd = "nd",
    /** Ndonga */
    Ng = "ng",
    /** Nepali */
    Ne = "ne",
    /** Norwegian Nynorsk; Nynorsk, Norwegian */
    Nn = "nn",
    /** Bokmål, Norwegian; Norwegian Bokmål */
    Nb = "nb",
    /** Norwegian */
    No = "no",
    /** Chichewa; Chewa; Nyanja */
    Ny = "ny",
    /** Occitan (post 1500); Provençal */
    Oc = "oc",
    /** Ojibwa */
    Oj = "oj",
    /** Oriya */
    Or = "or",
    /** Oromo */
    Om = "om",
    /** Ossetian; Ossetic */
    Os = "os",
    /** Panjabi; Punjabi */
    Pa = "pa",
    /** Persian */
    Fa = "fa",
    /** Pali */
    Pi = "pi",
    /** Polish */
    Pl = "pl",
    /** Portuguese */
    Pt = "pt",
    /** Pushto; Pashto */
    Ps = "ps",
    /** Quechua */
    Qu = "qu",
    /** Romansh */
    Rm = "rm",
    /** Romanian; Moldavian; Moldovan */
    Ro = "ro",
    /** Rundi */
    Rn = "rn",
    /** Russian */
    Ru = "ru",
    /** Sango */
    Sg = "sg",
    /** Sanskrit */
    Sa = "sa",
    /** Sinhala; Sinhalese */
    Si = "si",
    /** Slovak */
    Sk = "sk",
    /** Slovenian */
    Sl = "sl",
    /** Northern Sami */
    Se = "se",
    /** Samoan */
    Sm = "sm",
    /** Shona */
    Sn = "sn",
    /** Sindhi */
    Sd = "sd",
    /** Somali */
    So = "so",
    /** Sotho, Southern */
    St = "st",
    /** Spanish; Castilian */
    Es = "es",
    /** Sardinian */
    Sc = "sc",
    /** Serbian */
    Sr = "sr",
    /** Swati */
    Ss = "ss",
    /** Sundanese */
    Su = "su",
    /** Swahili */
    Sw = "sw",
    /** Swedish */
    Sv = "sv",
    /** Tahitian */
    Ty = "ty",
    /** Tamil */
    Ta = "ta",
    /** Tatar */
    Tt = "tt",
    /** Telugu */
    Te = "te",
    /** Tajik */
    Tg = "tg",
    /** Tagalog */
    Tl = "tl",
    /** Thai */
    Th = "th",
    /** Tibetan */
    Bo = "bo",
    /** Tigrinya */
    Ti = "ti",
    /** Tonga (Tonga Islands) */
    To = "to",
    /** Tswana */
    Tn = "tn",
    /** Tsonga */
    Ts = "ts",
    /** Turkmen */
    Tk = "tk",
    /** Turkish */
    Tr = "tr",
    /** Twi */
    Tw = "tw",
    /** Uighur; Uyghur */
    Ug = "ug",
    /** Ukrainian */
    Uk = "uk",
    /** Urdu */
    Ur = "ur",
    /** Uzbek */
    Uz = "uz",
    /** Venda */
    Ve = "ve",
    /** Vietnamese */
    Vi = "vi",
    /** Volapük */
    Vo = "vo",
    /** Welsh */
    Cy = "cy",
    /** Walloon */
    Wa = "wa",
    /** Wolof */
    Wo = "wo",
    /** Xhosa */
    Xh = "xh",
    /** Yiddish */
    Yi = "yi",
    /** Yoruba */
    Yo = "yo",
    /** Zhuang; Chuang */
    Za = "za",
    /** Zulu */
    Zu = "zu"
}
export declare type LocaleStringCustomFieldConfig = CustomField & {
    __typename?: 'LocaleStringCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    pattern?: Maybe<Scalars['String']>;
};
export declare type LocalizedString = {
    __typename?: 'LocalizedString';
    languageCode: LanguageCode;
    value: Scalars['String'];
};
export declare type LoginResult = {
    __typename?: 'LoginResult';
    user: CurrentUser;
};
export declare type MoveCollectionInput = {
    collectionId: Scalars['ID'];
    parentId: Scalars['ID'];
    index: Scalars['Int'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    /** Create a new Administrator */
    createAdministrator: Administrator;
    /** Update an existing Administrator */
    updateAdministrator: Administrator;
    /** Assign a Role to an Administrator */
    assignRoleToAdministrator: Administrator;
    /** Create a new Asset */
    createAssets: Array<Asset>;
    /** Update an existing Asset */
    updateAsset: Asset;
    /** Delete an Asset */
    deleteAsset: DeletionResponse;
    login: LoginResult;
    logout: Scalars['Boolean'];
    /** Create a new Channel */
    createChannel: Channel;
    /** Update an existing Channel */
    updateChannel: Channel;
    /** Delete a Channel */
    deleteChannel: DeletionResponse;
    /** Create a new Collection */
    createCollection: Collection;
    /** Update an existing Collection */
    updateCollection: Collection;
    /** Delete a Collection and all of its descendants */
    deleteCollection: DeletionResponse;
    /** Move a Collection to a different parent or index */
    moveCollection: Collection;
    /** Create a new Country */
    createCountry: Country;
    /** Update an existing Country */
    updateCountry: Country;
    /** Delete a Country */
    deleteCountry: DeletionResponse;
    /** Create a new CustomerGroup */
    createCustomerGroup: CustomerGroup;
    /** Update an existing CustomerGroup */
    updateCustomerGroup: CustomerGroup;
    /** Add Customers to a CustomerGroup */
    addCustomersToGroup: CustomerGroup;
    /** Remove Customers from a CustomerGroup */
    removeCustomersFromGroup: CustomerGroup;
    /** Create a new Customer. If a password is provided, a new User will also be created an linked to the Customer. */
    createCustomer: Customer;
    /** Update an existing Customer */
    updateCustomer: Customer;
    /** Delete a Customer */
    deleteCustomer: DeletionResponse;
    /** Create a new Address and associate it with the Customer specified by customerId */
    createCustomerAddress: Address;
    /** Update an existing Address */
    updateCustomerAddress: Address;
    /** Update an existing Address */
    deleteCustomerAddress: Scalars['Boolean'];
    /** Create a new Facet */
    createFacet: Facet;
    /** Update an existing Facet */
    updateFacet: Facet;
    /** Delete an existing Facet */
    deleteFacet: DeletionResponse;
    /** Create one or more FacetValues */
    createFacetValues: Array<FacetValue>;
    /** Update one or more FacetValues */
    updateFacetValues: Array<FacetValue>;
    /** Delete one or more FacetValues */
    deleteFacetValues: Array<DeletionResponse>;
    updateGlobalSettings: GlobalSettings;
    importProducts?: Maybe<ImportInfo>;
    /** Remove all settled jobs in the given queues olfer than the given date. Returns the number of jobs deleted. */
    removeSettledJobs: Scalars['Int'];
    settlePayment: Payment;
    fulfillOrder: Fulfillment;
    cancelOrder: Order;
    refundOrder: Refund;
    settleRefund: Refund;
    addNoteToOrder: Order;
    /** Update an existing PaymentMethod */
    updatePaymentMethod: PaymentMethod;
    /** Create a new ProductOptionGroup */
    createProductOptionGroup: ProductOptionGroup;
    /** Update an existing ProductOptionGroup */
    updateProductOptionGroup: ProductOptionGroup;
    /** Create a new ProductOption within a ProductOptionGroup */
    createProductOption: ProductOption;
    /** Create a new ProductOption within a ProductOptionGroup */
    updateProductOption: ProductOption;
    reindex: Job;
    /** Create a new Product */
    createProduct: Product;
    /** Update an existing Product */
    updateProduct: Product;
    /** Delete a Product */
    deleteProduct: DeletionResponse;
    /** Add an OptionGroup to a Product */
    addOptionGroupToProduct: Product;
    /** Remove an OptionGroup from a Product */
    removeOptionGroupFromProduct: Product;
    /** Create a set of ProductVariants based on the OptionGroups assigned to the given Product */
    createProductVariants: Array<Maybe<ProductVariant>>;
    /** Update existing ProductVariants */
    updateProductVariants: Array<Maybe<ProductVariant>>;
    /** Delete a ProductVariant */
    deleteProductVariant: DeletionResponse;
    /** Assigns Products to the specified Channel */
    assignProductsToChannel: Array<Product>;
    /** Removes Products from the specified Channel */
    removeProductsFromChannel: Array<Product>;
    createPromotion: Promotion;
    updatePromotion: Promotion;
    deletePromotion: DeletionResponse;
    /** Create a new Role */
    createRole: Role;
    /** Update an existing Role */
    updateRole: Role;
    /** Delete an existing Role */
    deleteRole: DeletionResponse;
    /** Create a new ShippingMethod */
    createShippingMethod: ShippingMethod;
    /** Update an existing ShippingMethod */
    updateShippingMethod: ShippingMethod;
    /** Delete a ShippingMethod */
    deleteShippingMethod: DeletionResponse;
    /** Create a new TaxCategory */
    createTaxCategory: TaxCategory;
    /** Update an existing TaxCategory */
    updateTaxCategory: TaxCategory;
    /** Deletes a TaxCategory */
    deleteTaxCategory: DeletionResponse;
    /** Create a new TaxRate */
    createTaxRate: TaxRate;
    /** Update an existing TaxRate */
    updateTaxRate: TaxRate;
    /** Delete a TaxRate */
    deleteTaxRate: DeletionResponse;
    /** Create a new Zone */
    createZone: Zone;
    /** Update an existing Zone */
    updateZone: Zone;
    /** Delete a Zone */
    deleteZone: DeletionResponse;
    /** Add members to a Zone */
    addMembersToZone: Zone;
    /** Remove members from a Zone */
    removeMembersFromZone: Zone;
    updateProductReview: ProductReview;
    approveProductReview?: Maybe<ProductReview>;
    rejectProductReview?: Maybe<ProductReview>;
};
export declare type MutationCreateAdministratorArgs = {
    input: CreateAdministratorInput;
};
export declare type MutationUpdateAdministratorArgs = {
    input: UpdateAdministratorInput;
};
export declare type MutationAssignRoleToAdministratorArgs = {
    administratorId: Scalars['ID'];
    roleId: Scalars['ID'];
};
export declare type MutationCreateAssetsArgs = {
    input: Array<CreateAssetInput>;
};
export declare type MutationUpdateAssetArgs = {
    input: UpdateAssetInput;
};
export declare type MutationDeleteAssetArgs = {
    id: Scalars['ID'];
    force?: Maybe<Scalars['Boolean']>;
};
export declare type MutationLoginArgs = {
    username: Scalars['String'];
    password: Scalars['String'];
    rememberMe?: Maybe<Scalars['Boolean']>;
};
export declare type MutationCreateChannelArgs = {
    input: CreateChannelInput;
};
export declare type MutationUpdateChannelArgs = {
    input: UpdateChannelInput;
};
export declare type MutationDeleteChannelArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateCollectionArgs = {
    input: CreateCollectionInput;
};
export declare type MutationUpdateCollectionArgs = {
    input: UpdateCollectionInput;
};
export declare type MutationDeleteCollectionArgs = {
    id: Scalars['ID'];
};
export declare type MutationMoveCollectionArgs = {
    input: MoveCollectionInput;
};
export declare type MutationCreateCountryArgs = {
    input: CreateCountryInput;
};
export declare type MutationUpdateCountryArgs = {
    input: UpdateCountryInput;
};
export declare type MutationDeleteCountryArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateCustomerGroupArgs = {
    input: CreateCustomerGroupInput;
};
export declare type MutationUpdateCustomerGroupArgs = {
    input: UpdateCustomerGroupInput;
};
export declare type MutationAddCustomersToGroupArgs = {
    customerGroupId: Scalars['ID'];
    customerIds: Array<Scalars['ID']>;
};
export declare type MutationRemoveCustomersFromGroupArgs = {
    customerGroupId: Scalars['ID'];
    customerIds: Array<Scalars['ID']>;
};
export declare type MutationCreateCustomerArgs = {
    input: CreateCustomerInput;
    password?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateCustomerArgs = {
    input: UpdateCustomerInput;
};
export declare type MutationDeleteCustomerArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateCustomerAddressArgs = {
    customerId: Scalars['ID'];
    input: CreateAddressInput;
};
export declare type MutationUpdateCustomerAddressArgs = {
    input: UpdateAddressInput;
};
export declare type MutationDeleteCustomerAddressArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateFacetArgs = {
    input: CreateFacetInput;
};
export declare type MutationUpdateFacetArgs = {
    input: UpdateFacetInput;
};
export declare type MutationDeleteFacetArgs = {
    id: Scalars['ID'];
    force?: Maybe<Scalars['Boolean']>;
};
export declare type MutationCreateFacetValuesArgs = {
    input: Array<CreateFacetValueInput>;
};
export declare type MutationUpdateFacetValuesArgs = {
    input: Array<UpdateFacetValueInput>;
};
export declare type MutationDeleteFacetValuesArgs = {
    ids: Array<Scalars['ID']>;
    force?: Maybe<Scalars['Boolean']>;
};
export declare type MutationUpdateGlobalSettingsArgs = {
    input: UpdateGlobalSettingsInput;
};
export declare type MutationImportProductsArgs = {
    csvFile: Scalars['Upload'];
};
export declare type MutationRemoveSettledJobsArgs = {
    queueNames?: Maybe<Array<Scalars['String']>>;
    olderThan?: Maybe<Scalars['DateTime']>;
};
export declare type MutationSettlePaymentArgs = {
    id: Scalars['ID'];
};
export declare type MutationFulfillOrderArgs = {
    input: FulfillOrderInput;
};
export declare type MutationCancelOrderArgs = {
    input: CancelOrderInput;
};
export declare type MutationRefundOrderArgs = {
    input: RefundOrderInput;
};
export declare type MutationSettleRefundArgs = {
    input: SettleRefundInput;
};
export declare type MutationAddNoteToOrderArgs = {
    input: AddNoteToOrderInput;
};
export declare type MutationUpdatePaymentMethodArgs = {
    input: UpdatePaymentMethodInput;
};
export declare type MutationCreateProductOptionGroupArgs = {
    input: CreateProductOptionGroupInput;
};
export declare type MutationUpdateProductOptionGroupArgs = {
    input: UpdateProductOptionGroupInput;
};
export declare type MutationCreateProductOptionArgs = {
    input: CreateProductOptionInput;
};
export declare type MutationUpdateProductOptionArgs = {
    input: UpdateProductOptionInput;
};
export declare type MutationCreateProductArgs = {
    input: CreateProductInput;
};
export declare type MutationUpdateProductArgs = {
    input: UpdateProductInput;
};
export declare type MutationDeleteProductArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddOptionGroupToProductArgs = {
    productId: Scalars['ID'];
    optionGroupId: Scalars['ID'];
};
export declare type MutationRemoveOptionGroupFromProductArgs = {
    productId: Scalars['ID'];
    optionGroupId: Scalars['ID'];
};
export declare type MutationCreateProductVariantsArgs = {
    input: Array<CreateProductVariantInput>;
};
export declare type MutationUpdateProductVariantsArgs = {
    input: Array<UpdateProductVariantInput>;
};
export declare type MutationDeleteProductVariantArgs = {
    id: Scalars['ID'];
};
export declare type MutationAssignProductsToChannelArgs = {
    input: AssignProductsToChannelInput;
};
export declare type MutationRemoveProductsFromChannelArgs = {
    input: RemoveProductsFromChannelInput;
};
export declare type MutationCreatePromotionArgs = {
    input: CreatePromotionInput;
};
export declare type MutationUpdatePromotionArgs = {
    input: UpdatePromotionInput;
};
export declare type MutationDeletePromotionArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateRoleArgs = {
    input: CreateRoleInput;
};
export declare type MutationUpdateRoleArgs = {
    input: UpdateRoleInput;
};
export declare type MutationDeleteRoleArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateShippingMethodArgs = {
    input: CreateShippingMethodInput;
};
export declare type MutationUpdateShippingMethodArgs = {
    input: UpdateShippingMethodInput;
};
export declare type MutationDeleteShippingMethodArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateTaxCategoryArgs = {
    input: CreateTaxCategoryInput;
};
export declare type MutationUpdateTaxCategoryArgs = {
    input: UpdateTaxCategoryInput;
};
export declare type MutationDeleteTaxCategoryArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateTaxRateArgs = {
    input: CreateTaxRateInput;
};
export declare type MutationUpdateTaxRateArgs = {
    input: UpdateTaxRateInput;
};
export declare type MutationDeleteTaxRateArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateZoneArgs = {
    input: CreateZoneInput;
};
export declare type MutationUpdateZoneArgs = {
    input: UpdateZoneInput;
};
export declare type MutationDeleteZoneArgs = {
    id: Scalars['ID'];
};
export declare type MutationAddMembersToZoneArgs = {
    zoneId: Scalars['ID'];
    memberIds: Array<Scalars['ID']>;
};
export declare type MutationRemoveMembersFromZoneArgs = {
    zoneId: Scalars['ID'];
    memberIds: Array<Scalars['ID']>;
};
export declare type MutationUpdateProductReviewArgs = {
    input: UpdateProductReviewInput;
};
export declare type MutationApproveProductReviewArgs = {
    id: Scalars['ID'];
};
export declare type MutationRejectProductReviewArgs = {
    id: Scalars['ID'];
};
export declare type Node = {
    id: Scalars['ID'];
};
export declare type NumberOperators = {
    eq?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    between?: Maybe<NumberRange>;
};
export declare type NumberRange = {
    start: Scalars['Float'];
    end: Scalars['Float'];
};
export declare type Order = Node & {
    __typename?: 'Order';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    /** A unique code for the Order */
    code: Scalars['String'];
    state: Scalars['String'];
    /** An order is active as long as the payment process has not been completed */
    active: Scalars['Boolean'];
    customer?: Maybe<Customer>;
    shippingAddress?: Maybe<OrderAddress>;
    billingAddress?: Maybe<OrderAddress>;
    lines: Array<OrderLine>;
    /** Order-level adjustments to the order total, such as discounts from promotions */
    adjustments: Array<Adjustment>;
    couponCodes: Array<Scalars['String']>;
    promotions: Array<Promotion>;
    payments?: Maybe<Array<Payment>>;
    fulfillments?: Maybe<Array<Fulfillment>>;
    subTotalBeforeTax: Scalars['Int'];
    /** The subTotal is the total of the OrderLines, before order-level promotions and shipping has been applied. */
    subTotal: Scalars['Int'];
    currencyCode: CurrencyCode;
    shipping: Scalars['Int'];
    shippingWithTax: Scalars['Int'];
    shippingMethod?: Maybe<ShippingMethod>;
    totalBeforeTax: Scalars['Int'];
    total: Scalars['Int'];
    history: HistoryEntryList;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type OrderHistoryArgs = {
    options?: Maybe<HistoryEntryListOptions>;
};
export declare type OrderAddress = {
    __typename?: 'OrderAddress';
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1?: Maybe<Scalars['String']>;
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
};
export declare type OrderFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    code?: Maybe<StringOperators>;
    state?: Maybe<StringOperators>;
    active?: Maybe<BooleanOperators>;
    subTotalBeforeTax?: Maybe<NumberOperators>;
    subTotal?: Maybe<NumberOperators>;
    currencyCode?: Maybe<StringOperators>;
    shipping?: Maybe<NumberOperators>;
    shippingWithTax?: Maybe<NumberOperators>;
    totalBeforeTax?: Maybe<NumberOperators>;
    total?: Maybe<NumberOperators>;
};
export declare type OrderItem = Node & {
    __typename?: 'OrderItem';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    cancelled: Scalars['Boolean'];
    unitPrice: Scalars['Int'];
    unitPriceWithTax: Scalars['Int'];
    unitPriceIncludesTax: Scalars['Boolean'];
    taxRate: Scalars['Float'];
    adjustments: Array<Adjustment>;
    fulfillment?: Maybe<Fulfillment>;
    refundId?: Maybe<Scalars['ID']>;
};
export declare type OrderLine = Node & {
    __typename?: 'OrderLine';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    featuredAsset?: Maybe<Asset>;
    unitPrice: Scalars['Int'];
    unitPriceWithTax: Scalars['Int'];
    quantity: Scalars['Int'];
    items: Array<OrderItem>;
    totalPrice: Scalars['Int'];
    adjustments: Array<Adjustment>;
    order: Order;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type OrderLineInput = {
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type OrderList = PaginatedList & {
    __typename?: 'OrderList';
    items: Array<Order>;
    totalItems: Scalars['Int'];
};
export declare type OrderListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<OrderSortParameter>;
    filter?: Maybe<OrderFilterParameter>;
};
export declare type OrderSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    code?: Maybe<SortOrder>;
    state?: Maybe<SortOrder>;
    subTotalBeforeTax?: Maybe<SortOrder>;
    subTotal?: Maybe<SortOrder>;
    shipping?: Maybe<SortOrder>;
    shippingWithTax?: Maybe<SortOrder>;
    totalBeforeTax?: Maybe<SortOrder>;
    total?: Maybe<SortOrder>;
};
export declare type PaginatedList = {
    items: Array<Node>;
    totalItems: Scalars['Int'];
};
export declare type Payment = Node & {
    __typename?: 'Payment';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    method: Scalars['String'];
    amount: Scalars['Int'];
    state: Scalars['String'];
    transactionId?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    refunds: Array<Refund>;
    metadata?: Maybe<Scalars['JSON']>;
};
export declare type PaymentMethod = Node & {
    __typename?: 'PaymentMethod';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    enabled: Scalars['Boolean'];
    configArgs: Array<ConfigArg>;
};
export declare type PaymentMethodFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    code?: Maybe<StringOperators>;
    enabled?: Maybe<BooleanOperators>;
};
export declare type PaymentMethodList = PaginatedList & {
    __typename?: 'PaymentMethodList';
    items: Array<PaymentMethod>;
    totalItems: Scalars['Int'];
};
export declare type PaymentMethodListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<PaymentMethodSortParameter>;
    filter?: Maybe<PaymentMethodFilterParameter>;
};
export declare type PaymentMethodSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    code?: Maybe<SortOrder>;
};
/**
 * "
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * @docsCategory common
 */
export declare enum Permission {
    /**  The Authenticated role means simply that the user is logged in  */
    Authenticated = "Authenticated",
    /**  SuperAdmin can perform the most sensitive tasks */
    SuperAdmin = "SuperAdmin",
    /**  Owner means the user owns this entity, e.g. a Customer's own Order */
    Owner = "Owner",
    /**  Public means any unauthenticated user may perform the operation  */
    Public = "Public",
    CreateCatalog = "CreateCatalog",
    ReadCatalog = "ReadCatalog",
    UpdateCatalog = "UpdateCatalog",
    DeleteCatalog = "DeleteCatalog",
    CreateCustomer = "CreateCustomer",
    ReadCustomer = "ReadCustomer",
    UpdateCustomer = "UpdateCustomer",
    DeleteCustomer = "DeleteCustomer",
    CreateAdministrator = "CreateAdministrator",
    ReadAdministrator = "ReadAdministrator",
    UpdateAdministrator = "UpdateAdministrator",
    DeleteAdministrator = "DeleteAdministrator",
    CreateOrder = "CreateOrder",
    ReadOrder = "ReadOrder",
    UpdateOrder = "UpdateOrder",
    DeleteOrder = "DeleteOrder",
    CreatePromotion = "CreatePromotion",
    ReadPromotion = "ReadPromotion",
    UpdatePromotion = "UpdatePromotion",
    DeletePromotion = "DeletePromotion",
    CreateSettings = "CreateSettings",
    ReadSettings = "ReadSettings",
    UpdateSettings = "UpdateSettings",
    DeleteSettings = "DeleteSettings"
}
/** The price range where the result has more than one price */
export declare type PriceRange = {
    __typename?: 'PriceRange';
    min: Scalars['Int'];
    max: Scalars['Int'];
};
export declare type Product = Node & {
    __typename?: 'Product';
    enabled: Scalars['Boolean'];
    channels: Array<Channel>;
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    assets: Array<Asset>;
    variants: Array<ProductVariant>;
    optionGroups: Array<ProductOptionGroup>;
    facetValues: Array<FacetValue>;
    translations: Array<ProductTranslation>;
    collections: Array<Collection>;
    reviews: ProductReviewList;
    reviewsHistogram: Array<ProductReviewHistogramItem>;
    customFields?: Maybe<ProductCustomFields>;
};
export declare type ProductReviewsArgs = {
    options?: Maybe<ProductReviewListOptions>;
};
export declare type ProductCustomFields = {
    __typename?: 'ProductCustomFields';
    reviewRating?: Maybe<Scalars['Float']>;
    reviewCount?: Maybe<Scalars['Float']>;
};
export declare type ProductFilterParameter = {
    enabled?: Maybe<BooleanOperators>;
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    slug?: Maybe<StringOperators>;
    description?: Maybe<StringOperators>;
    reviewRating?: Maybe<NumberOperators>;
    reviewCount?: Maybe<NumberOperators>;
};
export declare type ProductList = PaginatedList & {
    __typename?: 'ProductList';
    items: Array<Product>;
    totalItems: Scalars['Int'];
};
export declare type ProductListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductSortParameter>;
    filter?: Maybe<ProductFilterParameter>;
};
export declare type ProductOption = Node & {
    __typename?: 'ProductOption';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    code: Scalars['String'];
    name: Scalars['String'];
    groupId: Scalars['ID'];
    translations: Array<ProductOptionTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductOptionGroup = Node & {
    __typename?: 'ProductOptionGroup';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    code: Scalars['String'];
    name: Scalars['String'];
    options: Array<ProductOption>;
    translations: Array<ProductOptionGroupTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductOptionGroupTranslation = {
    __typename?: 'ProductOptionGroupTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type ProductOptionGroupTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductOptionTranslation = {
    __typename?: 'ProductOptionTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type ProductOptionTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductReview = Node & {
    __typename?: 'ProductReview';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    product: Product;
    productVariant?: Maybe<ProductVariant>;
    summary: Scalars['String'];
    body?: Maybe<Scalars['String']>;
    rating: Scalars['Float'];
    author?: Maybe<Customer>;
    authorName: Scalars['String'];
    authorLocation?: Maybe<Scalars['String']>;
    upvotes: Scalars['Int'];
    downvotes: Scalars['Int'];
    state: Scalars['String'];
    response?: Maybe<Scalars['String']>;
    responseCreatedAt?: Maybe<Scalars['DateTime']>;
};
export declare type ProductReviewFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    summary?: Maybe<StringOperators>;
    body?: Maybe<StringOperators>;
    rating?: Maybe<NumberOperators>;
    authorName?: Maybe<StringOperators>;
    authorLocation?: Maybe<StringOperators>;
    upvotes?: Maybe<NumberOperators>;
    downvotes?: Maybe<NumberOperators>;
    state?: Maybe<StringOperators>;
    response?: Maybe<StringOperators>;
    responseCreatedAt?: Maybe<DateOperators>;
};
export declare type ProductReviewHistogramItem = {
    __typename?: 'ProductReviewHistogramItem';
    bin: Scalars['Int'];
    frequency: Scalars['Int'];
};
export declare type ProductReviewList = PaginatedList & {
    __typename?: 'ProductReviewList';
    items: Array<ProductReview>;
    totalItems: Scalars['Int'];
};
export declare type ProductReviewListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductReviewSortParameter>;
    filter?: Maybe<ProductReviewFilterParameter>;
};
export declare type ProductReviewSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    summary?: Maybe<SortOrder>;
    body?: Maybe<SortOrder>;
    rating?: Maybe<SortOrder>;
    authorName?: Maybe<SortOrder>;
    authorLocation?: Maybe<SortOrder>;
    upvotes?: Maybe<SortOrder>;
    downvotes?: Maybe<SortOrder>;
    state?: Maybe<SortOrder>;
    response?: Maybe<SortOrder>;
    responseCreatedAt?: Maybe<SortOrder>;
};
export declare type ProductSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    slug?: Maybe<SortOrder>;
    description?: Maybe<SortOrder>;
    reviewRating?: Maybe<SortOrder>;
    reviewCount?: Maybe<SortOrder>;
};
export declare type ProductTranslation = {
    __typename?: 'ProductTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Scalars['String'];
};
export declare type ProductTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductVariant = Node & {
    __typename?: 'ProductVariant';
    enabled: Scalars['Boolean'];
    stockOnHand: Scalars['Int'];
    trackInventory: Scalars['Boolean'];
    stockMovements: StockMovementList;
    id: Scalars['ID'];
    productId: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    sku: Scalars['String'];
    name: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    assets: Array<Asset>;
    price: Scalars['Int'];
    currencyCode: CurrencyCode;
    priceIncludesTax: Scalars['Boolean'];
    priceWithTax: Scalars['Int'];
    taxRateApplied: TaxRate;
    taxCategory: TaxCategory;
    options: Array<ProductOption>;
    facetValues: Array<FacetValue>;
    translations: Array<ProductVariantTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductVariantStockMovementsArgs = {
    options?: Maybe<StockMovementListOptions>;
};
export declare type ProductVariantFilterParameter = {
    enabled?: Maybe<BooleanOperators>;
    stockOnHand?: Maybe<NumberOperators>;
    trackInventory?: Maybe<BooleanOperators>;
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    sku?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    price?: Maybe<NumberOperators>;
    currencyCode?: Maybe<StringOperators>;
    priceIncludesTax?: Maybe<BooleanOperators>;
    priceWithTax?: Maybe<NumberOperators>;
};
export declare type ProductVariantList = PaginatedList & {
    __typename?: 'ProductVariantList';
    items: Array<ProductVariant>;
    totalItems: Scalars['Int'];
};
export declare type ProductVariantListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductVariantSortParameter>;
    filter?: Maybe<ProductVariantFilterParameter>;
};
export declare type ProductVariantSortParameter = {
    stockOnHand?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    productId?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    sku?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    price?: Maybe<SortOrder>;
    priceWithTax?: Maybe<SortOrder>;
};
export declare type ProductVariantTranslation = {
    __typename?: 'ProductVariantTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type ProductVariantTranslationInput = {
    id?: Maybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type Promotion = Node & {
    __typename?: 'Promotion';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    startsAt?: Maybe<Scalars['DateTime']>;
    endsAt?: Maybe<Scalars['DateTime']>;
    couponCode?: Maybe<Scalars['String']>;
    perCustomerUsageLimit?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    conditions: Array<ConfigurableOperation>;
    actions: Array<ConfigurableOperation>;
};
export declare type PromotionFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    startsAt?: Maybe<DateOperators>;
    endsAt?: Maybe<DateOperators>;
    couponCode?: Maybe<StringOperators>;
    perCustomerUsageLimit?: Maybe<NumberOperators>;
    name?: Maybe<StringOperators>;
    enabled?: Maybe<BooleanOperators>;
};
export declare type PromotionList = PaginatedList & {
    __typename?: 'PromotionList';
    items: Array<Promotion>;
    totalItems: Scalars['Int'];
};
export declare type PromotionListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<PromotionSortParameter>;
    filter?: Maybe<PromotionFilterParameter>;
};
export declare type PromotionSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    startsAt?: Maybe<SortOrder>;
    endsAt?: Maybe<SortOrder>;
    couponCode?: Maybe<SortOrder>;
    perCustomerUsageLimit?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
};
export declare type Query = {
    __typename?: 'Query';
    administrators: AdministratorList;
    administrator?: Maybe<Administrator>;
    /** Get a list of Assets */
    assets: AssetList;
    /** Get a single Asset by id */
    asset?: Maybe<Asset>;
    me?: Maybe<CurrentUser>;
    channels: Array<Channel>;
    channel?: Maybe<Channel>;
    activeChannel: Channel;
    collections: CollectionList;
    collection?: Maybe<Collection>;
    collectionFilters: Array<ConfigurableOperationDefinition>;
    countries: CountryList;
    country?: Maybe<Country>;
    customerGroups: Array<CustomerGroup>;
    customerGroup?: Maybe<CustomerGroup>;
    customers: CustomerList;
    customer?: Maybe<Customer>;
    facets: FacetList;
    facet?: Maybe<Facet>;
    globalSettings: GlobalSettings;
    job?: Maybe<Job>;
    jobs: JobList;
    jobsById: Array<Job>;
    jobQueues: Array<JobQueue>;
    order?: Maybe<Order>;
    orders: OrderList;
    paymentMethods: PaymentMethodList;
    paymentMethod?: Maybe<PaymentMethod>;
    productOptionGroups: Array<ProductOptionGroup>;
    productOptionGroup?: Maybe<ProductOptionGroup>;
    search: SearchResponse;
    products: ProductList;
    /** Get a Product either by id or slug. If neither id nor slug is speicified, an error will result. */
    product?: Maybe<Product>;
    promotion?: Maybe<Promotion>;
    promotions: PromotionList;
    promotionConditions: Array<ConfigurableOperationDefinition>;
    promotionActions: Array<ConfigurableOperationDefinition>;
    roles: RoleList;
    role?: Maybe<Role>;
    shippingMethods: ShippingMethodList;
    shippingMethod?: Maybe<ShippingMethod>;
    shippingEligibilityCheckers: Array<ConfigurableOperationDefinition>;
    shippingCalculators: Array<ConfigurableOperationDefinition>;
    testShippingMethod: TestShippingMethodResult;
    testEligibleShippingMethods: Array<ShippingMethodQuote>;
    taxCategories: Array<TaxCategory>;
    taxCategory?: Maybe<TaxCategory>;
    taxRates: TaxRateList;
    taxRate?: Maybe<TaxRate>;
    zones: Array<Zone>;
    zone?: Maybe<Zone>;
    productReviews: ProductReviewList;
    productReview?: Maybe<ProductReview>;
};
export declare type QueryAdministratorsArgs = {
    options?: Maybe<AdministratorListOptions>;
};
export declare type QueryAdministratorArgs = {
    id: Scalars['ID'];
};
export declare type QueryAssetsArgs = {
    options?: Maybe<AssetListOptions>;
};
export declare type QueryAssetArgs = {
    id: Scalars['ID'];
};
export declare type QueryChannelArgs = {
    id: Scalars['ID'];
};
export declare type QueryCollectionsArgs = {
    options?: Maybe<CollectionListOptions>;
};
export declare type QueryCollectionArgs = {
    id: Scalars['ID'];
};
export declare type QueryCountriesArgs = {
    options?: Maybe<CountryListOptions>;
};
export declare type QueryCountryArgs = {
    id: Scalars['ID'];
};
export declare type QueryCustomerGroupArgs = {
    id: Scalars['ID'];
};
export declare type QueryCustomersArgs = {
    options?: Maybe<CustomerListOptions>;
};
export declare type QueryCustomerArgs = {
    id: Scalars['ID'];
};
export declare type QueryFacetsArgs = {
    options?: Maybe<FacetListOptions>;
};
export declare type QueryFacetArgs = {
    id: Scalars['ID'];
};
export declare type QueryJobArgs = {
    jobId: Scalars['ID'];
};
export declare type QueryJobsArgs = {
    options?: Maybe<JobListOptions>;
};
export declare type QueryJobsByIdArgs = {
    jobIds: Array<Scalars['ID']>;
};
export declare type QueryOrderArgs = {
    id: Scalars['ID'];
};
export declare type QueryOrdersArgs = {
    options?: Maybe<OrderListOptions>;
};
export declare type QueryPaymentMethodsArgs = {
    options?: Maybe<PaymentMethodListOptions>;
};
export declare type QueryPaymentMethodArgs = {
    id: Scalars['ID'];
};
export declare type QueryProductOptionGroupsArgs = {
    filterTerm?: Maybe<Scalars['String']>;
};
export declare type QueryProductOptionGroupArgs = {
    id: Scalars['ID'];
};
export declare type QuerySearchArgs = {
    input: SearchInput;
};
export declare type QueryProductsArgs = {
    options?: Maybe<ProductListOptions>;
};
export declare type QueryProductArgs = {
    id?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
};
export declare type QueryPromotionArgs = {
    id: Scalars['ID'];
};
export declare type QueryPromotionsArgs = {
    options?: Maybe<PromotionListOptions>;
};
export declare type QueryRolesArgs = {
    options?: Maybe<RoleListOptions>;
};
export declare type QueryRoleArgs = {
    id: Scalars['ID'];
};
export declare type QueryShippingMethodsArgs = {
    options?: Maybe<ShippingMethodListOptions>;
};
export declare type QueryShippingMethodArgs = {
    id: Scalars['ID'];
};
export declare type QueryTestShippingMethodArgs = {
    input: TestShippingMethodInput;
};
export declare type QueryTestEligibleShippingMethodsArgs = {
    input: TestEligibleShippingMethodsInput;
};
export declare type QueryTaxCategoryArgs = {
    id: Scalars['ID'];
};
export declare type QueryTaxRatesArgs = {
    options?: Maybe<TaxRateListOptions>;
};
export declare type QueryTaxRateArgs = {
    id: Scalars['ID'];
};
export declare type QueryZoneArgs = {
    id: Scalars['ID'];
};
export declare type QueryProductReviewsArgs = {
    options?: Maybe<ProductReviewListOptions>;
};
export declare type QueryProductReviewArgs = {
    id: Scalars['ID'];
};
export declare type Refund = Node & {
    __typename?: 'Refund';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    items: Scalars['Int'];
    shipping: Scalars['Int'];
    adjustment: Scalars['Int'];
    total: Scalars['Int'];
    method?: Maybe<Scalars['String']>;
    state: Scalars['String'];
    transactionId?: Maybe<Scalars['String']>;
    reason?: Maybe<Scalars['String']>;
    orderItems: Array<OrderItem>;
    paymentId: Scalars['ID'];
    metadata?: Maybe<Scalars['JSON']>;
};
export declare type RefundOrderInput = {
    lines: Array<OrderLineInput>;
    shipping: Scalars['Int'];
    adjustment: Scalars['Int'];
    paymentId: Scalars['ID'];
    reason?: Maybe<Scalars['String']>;
};
export declare type RemoveProductsFromChannelInput = {
    productIds: Array<Scalars['ID']>;
    channelId: Scalars['ID'];
};
export declare type Return = Node & StockMovement & {
    __typename?: 'Return';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
    orderItem: OrderItem;
};
export declare type Role = Node & {
    __typename?: 'Role';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    description: Scalars['String'];
    permissions: Array<Permission>;
    channels: Array<Channel>;
};
export declare type RoleFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    code?: Maybe<StringOperators>;
    description?: Maybe<StringOperators>;
};
export declare type RoleList = PaginatedList & {
    __typename?: 'RoleList';
    items: Array<Role>;
    totalItems: Scalars['Int'];
};
export declare type RoleListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<RoleSortParameter>;
    filter?: Maybe<RoleFilterParameter>;
};
export declare type RoleSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    code?: Maybe<SortOrder>;
    description?: Maybe<SortOrder>;
};
export declare type Sale = Node & StockMovement & {
    __typename?: 'Sale';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
    orderLine: OrderLine;
};
export declare type SearchInput = {
    term?: Maybe<Scalars['String']>;
    facetValueIds?: Maybe<Array<Scalars['ID']>>;
    collectionId?: Maybe<Scalars['ID']>;
    groupByProduct?: Maybe<Scalars['Boolean']>;
    take?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    sort?: Maybe<SearchResultSortParameter>;
};
export declare type SearchReindexResponse = {
    __typename?: 'SearchReindexResponse';
    success: Scalars['Boolean'];
};
export declare type SearchResponse = {
    __typename?: 'SearchResponse';
    items: Array<SearchResult>;
    totalItems: Scalars['Int'];
    facetValues: Array<FacetValueResult>;
};
export declare type SearchResult = {
    __typename?: 'SearchResult';
    enabled: Scalars['Boolean'];
    /** An array of ids of the Collections in which this result appears */
    channelIds: Array<Scalars['ID']>;
    sku: Scalars['String'];
    slug: Scalars['String'];
    productId: Scalars['ID'];
    productName: Scalars['String'];
    /** @deprecated Use `productAsset.preview` instead */
    productPreview: Scalars['String'];
    productAsset?: Maybe<SearchResultAsset>;
    productVariantId: Scalars['ID'];
    productVariantName: Scalars['String'];
    /** @deprecated Use `productVariantAsset.preview` instead */
    productVariantPreview: Scalars['String'];
    productVariantAsset?: Maybe<SearchResultAsset>;
    price: SearchResultPrice;
    priceWithTax: SearchResultPrice;
    currencyCode: CurrencyCode;
    description: Scalars['String'];
    facetIds: Array<Scalars['ID']>;
    facetValueIds: Array<Scalars['ID']>;
    /** An array of ids of the Collections in which this result appears */
    collectionIds: Array<Scalars['ID']>;
    /** A relevence score for the result. Differs between database implementations */
    score: Scalars['Float'];
};
export declare type SearchResultAsset = {
    __typename?: 'SearchResultAsset';
    id: Scalars['ID'];
    preview: Scalars['String'];
    focalPoint?: Maybe<Coordinate>;
};
/** The price of a search result product, either as a range or as a single price */
export declare type SearchResultPrice = PriceRange | SinglePrice;
export declare type SearchResultSortParameter = {
    name?: Maybe<SortOrder>;
    price?: Maybe<SortOrder>;
};
export declare type ServerConfig = {
    __typename?: 'ServerConfig';
    customFieldConfig: CustomFields;
};
export declare type SettleRefundInput = {
    id: Scalars['ID'];
    transactionId: Scalars['String'];
};
export declare type ShippingMethod = Node & {
    __typename?: 'ShippingMethod';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    description: Scalars['String'];
    checker: ConfigurableOperation;
    calculator: ConfigurableOperation;
};
export declare type ShippingMethodFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    code?: Maybe<StringOperators>;
    description?: Maybe<StringOperators>;
};
export declare type ShippingMethodList = PaginatedList & {
    __typename?: 'ShippingMethodList';
    items: Array<ShippingMethod>;
    totalItems: Scalars['Int'];
};
export declare type ShippingMethodListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<ShippingMethodSortParameter>;
    filter?: Maybe<ShippingMethodFilterParameter>;
};
export declare type ShippingMethodQuote = {
    __typename?: 'ShippingMethodQuote';
    id: Scalars['ID'];
    price: Scalars['Int'];
    priceWithTax: Scalars['Int'];
    description: Scalars['String'];
    metadata?: Maybe<Scalars['JSON']>;
};
export declare type ShippingMethodSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    code?: Maybe<SortOrder>;
    description?: Maybe<SortOrder>;
};
/** The price value where the result has a single price */
export declare type SinglePrice = {
    __typename?: 'SinglePrice';
    value: Scalars['Int'];
};
export declare enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
}
export declare type StockAdjustment = Node & StockMovement & {
    __typename?: 'StockAdjustment';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
};
export declare type StockMovement = {
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
};
export declare type StockMovementItem = StockAdjustment | Sale | Cancellation | Return;
export declare type StockMovementList = {
    __typename?: 'StockMovementList';
    items: Array<StockMovementItem>;
    totalItems: Scalars['Int'];
};
export declare type StockMovementListOptions = {
    type?: Maybe<StockMovementType>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
};
export declare enum StockMovementType {
    Adjustment = "ADJUSTMENT",
    Sale = "SALE",
    Cancellation = "CANCELLATION",
    Return = "RETURN"
}
export declare type StringCustomFieldConfig = CustomField & {
    __typename?: 'StringCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    length?: Maybe<Scalars['Int']>;
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    pattern?: Maybe<Scalars['String']>;
    options?: Maybe<Array<StringFieldOption>>;
};
export declare type StringFieldOption = {
    __typename?: 'StringFieldOption';
    value: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
};
export declare type StringOperators = {
    eq?: Maybe<Scalars['String']>;
    contains?: Maybe<Scalars['String']>;
};
export declare type TaxCategory = Node & {
    __typename?: 'TaxCategory';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
};
export declare type TaxRate = Node & {
    __typename?: 'TaxRate';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    value: Scalars['Float'];
    category: TaxCategory;
    zone: Zone;
    customerGroup?: Maybe<CustomerGroup>;
};
export declare type TaxRateFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    name?: Maybe<StringOperators>;
    enabled?: Maybe<BooleanOperators>;
    value?: Maybe<NumberOperators>;
};
export declare type TaxRateList = PaginatedList & {
    __typename?: 'TaxRateList';
    items: Array<TaxRate>;
    totalItems: Scalars['Int'];
};
export declare type TaxRateListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<TaxRateSortParameter>;
    filter?: Maybe<TaxRateFilterParameter>;
};
export declare type TaxRateSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    value?: Maybe<SortOrder>;
};
export declare type TestEligibleShippingMethodsInput = {
    shippingAddress: CreateAddressInput;
    lines: Array<TestShippingMethodOrderLineInput>;
};
export declare type TestShippingMethodInput = {
    checker: ConfigurableOperationInput;
    calculator: ConfigurableOperationInput;
    shippingAddress: CreateAddressInput;
    lines: Array<TestShippingMethodOrderLineInput>;
};
export declare type TestShippingMethodOrderLineInput = {
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type TestShippingMethodQuote = {
    __typename?: 'TestShippingMethodQuote';
    price: Scalars['Int'];
    priceWithTax: Scalars['Int'];
    description: Scalars['String'];
    metadata?: Maybe<Scalars['JSON']>;
};
export declare type TestShippingMethodResult = {
    __typename?: 'TestShippingMethodResult';
    eligible: Scalars['Boolean'];
    quote?: Maybe<TestShippingMethodQuote>;
};
export declare type UpdateAddressInput = {
    id: Scalars['ID'];
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1?: Maybe<Scalars['String']>;
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateAdministratorInput = {
    id: Scalars['ID'];
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    emailAddress?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    roleIds?: Maybe<Array<Scalars['ID']>>;
};
export declare type UpdateAssetInput = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    focalPoint?: Maybe<CoordinateInput>;
};
export declare type UpdateChannelInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    token?: Maybe<Scalars['String']>;
    defaultLanguageCode?: Maybe<LanguageCode>;
    pricesIncludeTax?: Maybe<Scalars['Boolean']>;
    currencyCode?: Maybe<CurrencyCode>;
    defaultTaxZoneId?: Maybe<Scalars['ID']>;
    defaultShippingZoneId?: Maybe<Scalars['ID']>;
};
export declare type UpdateCollectionInput = {
    id: Scalars['ID'];
    isPrivate?: Maybe<Scalars['Boolean']>;
    featuredAssetId?: Maybe<Scalars['ID']>;
    parentId?: Maybe<Scalars['ID']>;
    assetIds?: Maybe<Array<Scalars['ID']>>;
    filters?: Maybe<Array<ConfigurableOperationInput>>;
    translations?: Maybe<Array<CollectionTranslationInput>>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateCountryInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    translations?: Maybe<Array<CountryTranslationInput>>;
    enabled?: Maybe<Scalars['Boolean']>;
};
export declare type UpdateCustomerGroupInput = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type UpdateCustomerInput = {
    id: Scalars['ID'];
    title?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    emailAddress?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateFacetInput = {
    id: Scalars['ID'];
    isPrivate?: Maybe<Scalars['Boolean']>;
    code?: Maybe<Scalars['String']>;
    translations?: Maybe<Array<FacetTranslationInput>>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateFacetValueInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    translations?: Maybe<Array<FacetValueTranslationInput>>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateGlobalSettingsInput = {
    availableLanguages?: Maybe<Array<LanguageCode>>;
    trackInventory?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdatePaymentMethodInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    enabled?: Maybe<Scalars['Boolean']>;
    configArgs?: Maybe<Array<ConfigArgInput>>;
};
export declare type UpdateProductCustomFieldsInput = {
    reviewRating?: Maybe<Scalars['Float']>;
    reviewCount?: Maybe<Scalars['Float']>;
};
export declare type UpdateProductInput = {
    id: Scalars['ID'];
    enabled?: Maybe<Scalars['Boolean']>;
    featuredAssetId?: Maybe<Scalars['ID']>;
    assetIds?: Maybe<Array<Scalars['ID']>>;
    facetValueIds?: Maybe<Array<Scalars['ID']>>;
    translations?: Maybe<Array<ProductTranslationInput>>;
    customFields?: Maybe<UpdateProductCustomFieldsInput>;
};
export declare type UpdateProductOptionGroupInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    translations?: Maybe<Array<ProductOptionGroupTranslationInput>>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateProductOptionInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    translations?: Maybe<Array<ProductOptionGroupTranslationInput>>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateProductReviewInput = {
    id: Scalars['ID'];
    summary?: Maybe<Scalars['String']>;
    body?: Maybe<Scalars['String']>;
    response?: Maybe<Scalars['String']>;
};
export declare type UpdateProductVariantInput = {
    id: Scalars['ID'];
    enabled?: Maybe<Scalars['Boolean']>;
    translations?: Maybe<Array<ProductVariantTranslationInput>>;
    facetValueIds?: Maybe<Array<Scalars['ID']>>;
    sku?: Maybe<Scalars['String']>;
    taxCategoryId?: Maybe<Scalars['ID']>;
    price?: Maybe<Scalars['Int']>;
    featuredAssetId?: Maybe<Scalars['ID']>;
    assetIds?: Maybe<Array<Scalars['ID']>>;
    stockOnHand?: Maybe<Scalars['Int']>;
    trackInventory?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdatePromotionInput = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    enabled?: Maybe<Scalars['Boolean']>;
    startsAt?: Maybe<Scalars['DateTime']>;
    endsAt?: Maybe<Scalars['DateTime']>;
    couponCode?: Maybe<Scalars['String']>;
    perCustomerUsageLimit?: Maybe<Scalars['Int']>;
    conditions?: Maybe<Array<ConfigurableOperationInput>>;
    actions?: Maybe<Array<ConfigurableOperationInput>>;
};
export declare type UpdateRoleInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    permissions?: Maybe<Array<Permission>>;
    channelIds?: Maybe<Array<Scalars['ID']>>;
};
export declare type UpdateShippingMethodInput = {
    id: Scalars['ID'];
    code?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    checker?: Maybe<ConfigurableOperationInput>;
    calculator?: Maybe<ConfigurableOperationInput>;
};
export declare type UpdateTaxCategoryInput = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type UpdateTaxRateInput = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['Float']>;
    enabled?: Maybe<Scalars['Boolean']>;
    categoryId?: Maybe<Scalars['ID']>;
    zoneId?: Maybe<Scalars['ID']>;
    customerGroupId?: Maybe<Scalars['ID']>;
};
export declare type UpdateZoneInput = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type User = Node & {
    __typename?: 'User';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    identifier: Scalars['String'];
    verified: Scalars['Boolean'];
    roles: Array<Role>;
    lastLogin?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type Zone = Node & {
    __typename?: 'Zone';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
    members: Array<Country>;
};
