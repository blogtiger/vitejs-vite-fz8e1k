window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-10054",
      object_id: "column-10054",
      name: "ID",
      name_without_path: "ID",
      description: "Person ID",
      is_pk: false,
      is_identity: false,
      data_type: "int",
      data_length: null,
      is_nullable: false,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [
        { id: "t412", name: "ALPHA", name_show_schema: "dbo.ALPHA" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-10055",
      object_id: "column-10055",
      name: "NAME",
      name_without_path: "NAME",
      description: "Name",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "48",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10056",
      object_id: "column-10056",
      name: "ENTEREDBY",
      name_without_path: "ENTEREDBY",
      description: "Entered By",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "20",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10057",
      object_id: "column-10057",
      name: "DATEX",
      name_without_path: "DATEX",
      description: "Date Entered",
      is_pk: false,
      is_identity: false,
      data_type: "datetime",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10058",
      object_id: "column-10058",
      name: "PAR_OFCR",
      name_without_path: "PAR_OFCR",
      description: "Parole Officer",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "24",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10059",
      object_id: "column-10059",
      name: "PAR_TEL",
      name_without_path: "PAR_TEL",
      description: "Parole Phone #",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "12",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10060",
      object_id: "column-10060",
      name: "PAR_ENDS",
      name_without_path: "PAR_ENDS",
      description: "Date Parole Ends",
      is_pk: false,
      is_identity: false,
      data_type: "datetime",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10061",
      object_id: "column-10061",
      name: "OFFENSES",
      name_without_path: "OFFENSES",
      description: "Offenses",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "72",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10062",
      object_id: "column-10062",
      name: "OTHER1",
      name_without_path: "OTHER1",
      description: "Details",
      is_pk: false,
      is_identity: false,
      data_type: "text",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10063",
      object_id: "column-10063",
      name: "CASEN",
      name_without_path: "CASEN",
      description: "Case Number",
      is_pk: false,
      is_identity: false,
      data_type: "int",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [{ id: "t65", name: "CASES", name_show_schema: "dbo.CASES" }],
      linked_lookup: null,
    },
    {
      id: "column-10064",
      object_id: "column-10064",
      name: "AGCODE",
      name_without_path: "AGCODE",
      description: "Agency Code",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "6",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [
        { id: "t113", name: "AGENCY", name_show_schema: "dbo.AGENCY" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-10065",
      object_id: "column-10065",
      name: "STARTDATE",
      name_without_path: "STARTDATE",
      description: "Date Parole Starts",
      is_pk: false,
      is_identity: false,
      data_type: "datetime",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10066",
      object_id: "column-10066",
      name: "ENDDATE",
      name_without_path: "ENDDATE",
      description: "Date Parole Ends",
      is_pk: false,
      is_identity: false,
      data_type: "datetime",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10067",
      object_id: "column-10067",
      name: "TERM",
      name_without_path: "TERM",
      description: "Term of Parole",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "16",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10068",
      object_id: "column-10068",
      name: "COUNTY",
      name_without_path: "COUNTY",
      description: "County",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "16",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10069",
      object_id: "column-10069",
      name: "COURT",
      name_without_path: "COURT",
      description: "Court",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "16",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10070",
      object_id: "column-10070",
      name: "JUDGE",
      name_without_path: "JUDGE",
      description: "Judge",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "16",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10071",
      object_id: "column-10071",
      name: "DA",
      name_without_path: "DA",
      description: "District Attorney",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "16",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10072",
      object_id: "column-10072",
      name: "COURTNUM",
      name_without_path: "COURTNUM",
      description: "Court Number",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "12",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10073",
      object_id: "column-10073",
      name: "FILENUM",
      name_without_path: "FILENUM",
      description: "File Number",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "12",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10074",
      object_id: "column-10074",
      name: "FINE",
      name_without_path: "FINE",
      description: "Fine",
      is_pk: false,
      is_identity: false,
      data_type: "int",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10075",
      object_id: "column-10075",
      name: "RESTIT",
      name_without_path: "RESTIT",
      description: "Restitution",
      is_pk: false,
      is_identity: false,
      data_type: "int",
      data_length: null,
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10076",
      object_id: "column-10076",
      name: "FORMAL",
      name_without_path: "FORMAL",
      description: "Formal Prob (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10077",
      object_id: "column-10077",
      name: "INFORMAL",
      name_without_path: "INFORMAL",
      description: "Informal Prob (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10078",
      object_id: "column-10078",
      name: "FELONY",
      name_without_path: "FELONY",
      description: "Felony (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10079",
      object_id: "column-10079",
      name: "MISD",
      name_without_path: "MISD",
      description: "Misdemeanor (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10080",
      object_id: "column-10080",
      name: "COUNSELING",
      name_without_path: "COUNSELING",
      description: "Counseling (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10081",
      object_id: "column-10081",
      name: "EMPLOYMENT",
      name_without_path: "EMPLOYMENT",
      description: "Employment (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10082",
      object_id: "column-10082",
      name: "NOALCOHOL",
      name_without_path: "NOALCOHOL",
      description: "No Alcohol (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10083",
      object_id: "column-10083",
      name: "NOWEAPONS",
      name_without_path: "NOWEAPONS",
      description: "No Weapons (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10084",
      object_id: "column-10084",
      name: "OBEYLAWS",
      name_without_path: "OBEYLAWS",
      description: "Obey Laws (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10085",
      object_id: "column-10085",
      name: "SEARCH",
      name_without_path: "SEARCH",
      description: "Searchable (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10086",
      object_id: "column-10086",
      name: "NODRIVEL",
      name_without_path: "NODRIVEL",
      description: "No Drivng After Dark",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10087",
      object_id: "column-10087",
      name: "NODRIVE",
      name_without_path: "NODRIVE",
      description: "No Driving (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10088",
      object_id: "column-10088",
      name: "NODRVDNK",
      name_without_path: "NODRVDNK",
      description: "No Drink/Drive (T/F)",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10089",
      object_id: "column-10089",
      name: "NOCONTACT",
      name_without_path: "NOCONTACT",
      description: "NO Contact",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10090",
      object_id: "column-10090",
      name: "NOTASSOC",
      name_without_path: "NOTASSOC",
      description: null,
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10091",
      object_id: "column-10091",
      name: "REGISTER",
      name_without_path: "REGISTER",
      description: "Register",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10092",
      object_id: "column-10092",
      name: "DRUGTEST",
      name_without_path: "DRUGTEST",
      description: "Drug TEST",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10093",
      object_id: "column-10093",
      name: "ATTEND",
      name_without_path: "ATTEND",
      description: "Att End",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10094",
      object_id: "column-10094",
      name: "CCONTACT",
      name_without_path: "CCONTACT",
      description: "No Contact With",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "80",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10095",
      object_id: "column-10095",
      name: "CASSOC",
      name_without_path: "CASSOC",
      description: "Not Associated With",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "80",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10096",
      object_id: "column-10096",
      name: "CREG",
      name_without_path: "CREG",
      description: "Register With",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "80",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10097",
      object_id: "column-10097",
      name: "CATTEND",
      name_without_path: "CATTEND",
      description: "Attend School With",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "80",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10098",
      object_id: "column-10098",
      name: "CDRUG",
      name_without_path: "CDRUG",
      description: "Drug/Alchl Test With",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "80",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10099",
      object_id: "column-10099",
      name: "OTHER2",
      name_without_path: "OTHER2",
      description: "Conditions",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "8000",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10100",
      object_id: "column-10100",
      name: "INACTIVE",
      name_without_path: "INACTIVE",
      description: "Inactive",
      is_pk: false,
      is_identity: false,
      data_type: "char",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10101",
      object_id: "column-10101",
      name: "NODRUGS",
      name_without_path: "NODRUGS",
      description: "NO Drug S",
      is_pk: false,
      is_identity: false,
      data_type: "char",
      data_length: "1",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10102",
      object_id: "column-10102",
      name: "BONDCONDITIONS",
      name_without_path: "BONDCONDITIONS",
      description: "Bond Conditions",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "200",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10103",
      object_id: "column-10103",
      name: "CATEGORY",
      name_without_path: "CATEGORY",
      description: "Probation Category",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "2",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10104",
      object_id: "column-10104",
      name: "FAKE_KEY",
      name_without_path: "FAKE_KEY",
      description: "Internal Key",
      is_pk: true,
      is_identity: true,
      data_type: "int",
      data_length: null,
      is_nullable: false,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-10105",
      object_id: "column-10105",
      name: "PAR_CELL",
      name_without_path: "PAR_CELL",
      description: null,
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "12",
      is_nullable: true,
      computed_formula: null,
      default_value: null,
      path: null,
      level: 1,
      item_type: "COLUMN",
      is_user_defined: false,
      custom_fields: {},
      linked_terms: [],
      references: [],
      linked_lookup: null,
    },
  ],
  relations: [
    {
      name: "FK_PROBATN_AGCODE",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PROBATN",
      foreign_table_show_schema: "dbo.PROBATN",
      foreign_table_verbose: "PROBATN",
      foreign_table_verbose_show_schema: "dbo.PROBATN",
      foreign_table_object_id: "t417",
      primary_table: "AGENCY",
      primary_table_show_schema: "dbo.AGENCY",
      primary_table_verbose: "AGENCY",
      primary_table_verbose_show_schema: "dbo.AGENCY",
      primary_table_object_id: "t113",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "AGCODE",
          foreign_column_path: null,
          foreign_column: "AGCODE",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_PROBATN_ID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PROBATN",
      foreign_table_show_schema: "dbo.PROBATN",
      foreign_table_verbose: "PROBATN",
      foreign_table_verbose_show_schema: "dbo.PROBATN",
      foreign_table_object_id: "t417",
      primary_table: "ALPHA",
      primary_table_show_schema: "dbo.ALPHA",
      primary_table_verbose: "ALPHA",
      primary_table_verbose_show_schema: "dbo.ALPHA",
      primary_table_object_id: "t412",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "ID",
          foreign_column_path: null,
          foreign_column: "ID",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_PROBATN_CASES",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PROBATN",
      foreign_table_show_schema: "dbo.PROBATN",
      foreign_table_verbose: "PROBATN",
      foreign_table_verbose_show_schema: "dbo.PROBATN",
      foreign_table_object_id: "t417",
      primary_table: "CASES",
      primary_table_show_schema: "dbo.CASES",
      primary_table_verbose: "CASES",
      primary_table_verbose_show_schema: "dbo.CASES",
      primary_table_object_id: "t65",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "CASEN",
          foreign_column_path: null,
          foreign_column: "CASEN",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_PROBattach_ID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PROBATTACH",
      foreign_table_show_schema: "dbo.PROBATTACH",
      foreign_table_verbose: "PROBATTACH",
      foreign_table_verbose_show_schema: "dbo.PROBATTACH",
      foreign_table_object_id: "t187",
      primary_table: "PROBATN",
      primary_table_show_schema: "dbo.PROBATN",
      primary_table_verbose: "PROBATN",
      primary_table_verbose_show_schema: "dbo.PROBATN",
      primary_table_object_id: "t417",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "ID",
          foreign_column_path: null,
          foreign_column: "ID",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_PROBATN",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 10104,
        },
      ],
      custom_fields: {},
    },
    {
      name: "PROBATN_IDINDEX",
      description: null,
      is_pk: false,
      is_user_defined: false,
      columns: [
        { path: null, name_without_path: "ID", name: "ID", column_id: 10054 },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "PROBATN",
        object_name_show_schema: "dbo.PROBATN",
        object_type: "TABLE",
        object_id: "t417",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "AGENCY",
            object_name_show_schema: "dbo.AGENCY",
            object_type: "TABLE",
            object_id: "t113",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
          {
            object_name: "ALPHA",
            object_name_show_schema: "dbo.ALPHA",
            object_type: "TABLE",
            object_id: "t412",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
          {
            object_name: "CASES",
            object_name_show_schema: "dbo.CASES",
            object_type: "TABLE",
            object_id: "t65",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
        ],
      },
    ],
    used_by: [
      {
        object_name: "PROBATN",
        object_name_show_schema: "dbo.PROBATN",
        object_type: "TABLE",
        object_id: "t417",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "PROBATTACH",
            object_name_show_schema: "dbo.PROBATTACH",
            object_type: "TABLE",
            object_id: "t187",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
        ],
      },
    ],
  },
  object_id: "t417",
  name: "PROBATN",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">Need a description</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "PROBATN" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
