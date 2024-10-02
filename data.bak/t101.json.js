window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-2168",
      object_id: "column-2168",
      name: "UNITID",
      name_without_path: "UNITID",
      description: "Unit  ID",
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
      id: "column-2169",
      object_id: "column-2169",
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
      id: "column-2170",
      object_id: "column-2170",
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
      id: "column-2171",
      object_id: "column-2171",
      name: "DATETIMEX",
      name_without_path: "DATETIMEX",
      description: "Date  Time X",
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
      id: "column-2172",
      object_id: "column-2172",
      name: "HEADING",
      name_without_path: "HEADING",
      description: "Heading",
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
      id: "column-2173",
      object_id: "column-2173",
      name: "MPH",
      name_without_path: "MPH",
      description: null,
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
      id: "column-2174",
      object_id: "column-2174",
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
      id: "column-2175",
      object_id: "column-2175",
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
      id: "column-2176",
      object_id: "column-2176",
      name: "STATUS",
      name_without_path: "STATUS",
      description: "Status",
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
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2177",
      object_id: "column-2177",
      name: "VEHMAINTID",
      name_without_path: "VEHMAINTID",
      description: "VEHMAINT ID",
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
      id: "column-2178",
      object_id: "column-2178",
      name: "SOURCE",
      name_without_path: "SOURCE",
      description: "Source",
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
      id: "column-2179",
      object_id: "column-2179",
      name: "CRTNUM",
      name_without_path: "CRTNUM",
      description: "CRT Num",
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
        { id: "t30", name: "TERMINAL", name_show_schema: "dbo.TERMINAL" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-2180",
      object_id: "column-2180",
      name: "ZCOORD",
      name_without_path: "ZCOORD",
      description: "Altitude in Feet",
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
  ],
  relations: [
    {
      name: "FK_GPSLOG_OFFICER",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "GPSLOG",
      foreign_table_show_schema: "dbo.GPSLOG",
      foreign_table_verbose: "GPSLOG",
      foreign_table_verbose_show_schema: "dbo.GPSLOG",
      foreign_table_object_id: "t101",
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
      name: "FK_GPSLOG_CRTNUM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "GPSLOG",
      foreign_table_show_schema: "dbo.GPSLOG",
      foreign_table_verbose: "GPSLOG",
      foreign_table_verbose_show_schema: "dbo.GPSLOG",
      foreign_table_object_id: "t101",
      primary_table: "TERMINAL",
      primary_table_show_schema: "dbo.TERMINAL",
      primary_table_verbose: "TERMINAL",
      primary_table_verbose_show_schema: "dbo.TERMINAL",
      primary_table_object_id: "t30",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "CRTNUM",
          foreign_column_path: null,
          foreign_column: "CRTNUM",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_GPSLOG",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 2174,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "GPSLOG",
        object_name_show_schema: "dbo.GPSLOG",
        object_type: "TABLE",
        object_id: "t101",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
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
          {
            object_name: "TERMINAL",
            object_name_show_schema: "dbo.TERMINAL",
            object_type: "TABLE",
            object_id: "t30",
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
    used_by: [],
  },
  object_id: "t101",
  name: "GPSLOG",
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
    { field: "Name", value: "GPSLOG" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
