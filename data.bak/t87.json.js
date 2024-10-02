window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-1942",
      object_id: "column-1942",
      name: "FINUM",
      name_without_path: "FINUM",
      description: "FI Card #",
      is_pk: true,
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
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-1943",
      object_id: "column-1943",
      name: "IDKEY",
      name_without_path: "IDKEY",
      description: "ID  Key",
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
      id: "column-1944",
      object_id: "column-1944",
      name: "DATEX",
      name_without_path: "DATEX",
      description: "Date",
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
      id: "column-1945",
      object_id: "column-1945",
      name: "TIME",
      name_without_path: "TIME",
      description: "Time",
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
      id: "column-1946",
      object_id: "column-1946",
      name: "PLACE",
      name_without_path: "PLACE",
      description: "Place",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "40",
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
      id: "column-1947",
      object_id: "column-1947",
      name: "ADDRESS",
      name_without_path: "ADDRESS",
      description: "Address",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "40",
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
      id: "column-1948",
      object_id: "column-1948",
      name: "APT",
      name_without_path: "APT",
      description: "Appartment",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "8",
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
      id: "column-1949",
      object_id: "column-1949",
      name: "INCNUM",
      name_without_path: "INCNUM",
      description: "Related Incident #",
      is_pk: false,
      is_identity: false,
      data_type: "bigint",
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
      references: [
        { id: "t347", name: "INCIDENT", name_show_schema: "dbo.INCIDENT" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-1950",
      object_id: "column-1950",
      name: "CMTS",
      name_without_path: "CMTS",
      description: "CMT",
      is_pk: false,
      is_identity: false,
      data_type: "image",
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
      id: "column-1951",
      object_id: "column-1951",
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
      id: "column-1952",
      object_id: "column-1952",
      name: "DISPO",
      name_without_path: "DISPO",
      description: "Disposition",
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
      id: "column-1953",
      object_id: "column-1953",
      name: "OFCRID",
      name_without_path: "OFCRID",
      description: "Officer",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "10",
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
      id: "column-1954",
      object_id: "column-1954",
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
      id: "column-1955",
      object_id: "column-1955",
      name: "CITY",
      name_without_path: "CITY",
      description: "City",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "8",
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
      id: "column-1956",
      object_id: "column-1956",
      name: "OFCRNUM",
      name_without_path: "OFCRNUM",
      description: "Officer",
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
      references: [
        { id: "t404", name: "OFFICER", name_show_schema: "dbo.OFFICER" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-1957",
      object_id: "column-1957",
      name: "CMT1",
      name_without_path: "CMT1",
      description: "CMT",
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
      id: "column-1958",
      object_id: "column-1958",
      name: "FIType",
      name_without_path: "FIType",
      description: "FI Type",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "8",
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
      id: "column-1959",
      object_id: "column-1959",
      name: "XCOORD",
      name_without_path: "XCOORD",
      description: "X-Coordinate",
      is_pk: false,
      is_identity: false,
      data_type: "float",
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
      id: "column-1960",
      object_id: "column-1960",
      name: "YCOORD",
      name_without_path: "YCOORD",
      description: "Y-Coordinate",
      is_pk: false,
      is_identity: false,
      data_type: "float",
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
      id: "column-1961",
      object_id: "column-1961",
      name: "COORDCHECK",
      name_without_path: "COORDCHECK",
      description: "COORD Check",
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
      id: "column-1962",
      object_id: "column-1962",
      name: "CODE1",
      name_without_path: "CODE1",
      description: "Offense Code 1",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "32",
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
      id: "column-1963",
      object_id: "column-1963",
      name: "CODE2",
      name_without_path: "CODE2",
      description: "Offense Code 2",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "32",
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
      id: "column-1964",
      object_id: "column-1964",
      name: "OFFDESC1",
      name_without_path: "OFFDESC1",
      description: "Offense Description 1",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "120",
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
      id: "column-1965",
      object_id: "column-1965",
      name: "OFFDESC2",
      name_without_path: "OFFDESC2",
      description: "Offense Description 2",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "120",
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
      id: "column-1966",
      object_id: "column-1966",
      name: "MF1",
      name_without_path: "MF1",
      description: "Offense Misd/Felony 1",
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
      id: "column-1967",
      object_id: "column-1967",
      name: "MF2",
      name_without_path: "MF2",
      description: "Offense Misd/Felony 2",
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
      id: "column-1968",
      object_id: "column-1968",
      name: "NOTIFIEDOFCRNUM",
      name_without_path: "NOTIFIEDOFCRNUM",
      description: "Officer Notified",
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
      id: "column-1969",
      object_id: "column-1969",
      name: "GEOLOCATION",
      name_without_path: "GEOLOCATION",
      description: "Geocoded Location",
      is_pk: false,
      is_identity: false,
      data_type: "image",
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
  ],
  relations: [
    {
      name: "FK_FI_AGCODE",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "FI",
      foreign_table_show_schema: "dbo.FI",
      foreign_table_verbose: "FI",
      foreign_table_verbose_show_schema: "dbo.FI",
      foreign_table_object_id: "t87",
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
      name: "FK_FI_CASES",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "FI",
      foreign_table_show_schema: "dbo.FI",
      foreign_table_verbose: "FI",
      foreign_table_verbose_show_schema: "dbo.FI",
      foreign_table_object_id: "t87",
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
      name: "FK_FI_INCNUM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "FI",
      foreign_table_show_schema: "dbo.FI",
      foreign_table_verbose: "FI",
      foreign_table_verbose_show_schema: "dbo.FI",
      foreign_table_object_id: "t87",
      primary_table: "INCIDENT",
      primary_table_show_schema: "dbo.INCIDENT",
      primary_table_verbose: "INCIDENT",
      primary_table_verbose_show_schema: "dbo.INCIDENT",
      primary_table_object_id: "t347",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "INCNUM",
          foreign_column_path: null,
          foreign_column: "INCNUM",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_FI_OFFICER",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "FI",
      foreign_table_show_schema: "dbo.FI",
      foreign_table_verbose: "FI",
      foreign_table_verbose_show_schema: "dbo.FI",
      foreign_table_object_id: "t87",
      primary_table: "OFFICER",
      primary_table_show_schema: "dbo.OFFICER",
      primary_table_verbose: "OFFICER",
      primary_table_verbose_show_schema: "dbo.OFFICER",
      primary_table_object_id: "t404",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "OFCRNUM",
          foreign_column_path: null,
          foreign_column: "OFCRNUM",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_FIPERSON_FINUM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "FIPERSON",
      foreign_table_show_schema: "dbo.FIPERSON",
      foreign_table_verbose: "FIPERSON",
      foreign_table_verbose_show_schema: "dbo.FIPERSON",
      foreign_table_object_id: "t210",
      primary_table: "FI",
      primary_table_show_schema: "dbo.FI",
      primary_table_verbose: "FI",
      primary_table_verbose_show_schema: "dbo.FI",
      primary_table_object_id: "t87",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "FINUM",
          foreign_column_path: null,
          foreign_column: "FINUM",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_FI",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FINUM",
          name: "FINUM",
          column_id: 1942,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "FI",
        object_name_show_schema: "dbo.FI",
        object_type: "TABLE",
        object_id: "t87",
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
          {
            object_name: "INCIDENT",
            object_name_show_schema: "dbo.INCIDENT",
            object_type: "TABLE",
            object_id: "t347",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
          {
            object_name: "OFFICER",
            object_name_show_schema: "dbo.OFFICER",
            object_type: "TABLE",
            object_id: "t404",
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
        object_name: "FI",
        object_name_show_schema: "dbo.FI",
        object_type: "TABLE",
        object_id: "t87",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "FIPERSON",
            object_name_show_schema: "dbo.FIPERSON",
            object_type: "TABLE",
            object_id: "t210",
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
  object_id: "t87",
  name: "FI",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">Field Interview Information</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "FI" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
