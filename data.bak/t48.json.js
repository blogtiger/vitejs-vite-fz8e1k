window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-1107",
      object_id: "column-1107",
      name: "INCNUM",
      name_without_path: "INCNUM",
      description: "Incident Number",
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
      id: "column-1108",
      object_id: "column-1108",
      name: "UNITID",
      name_without_path: "UNITID",
      description: "Unit ID",
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
      id: "column-1109",
      object_id: "column-1109",
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
      id: "column-1110",
      object_id: "column-1110",
      name: "DISPDATE",
      name_without_path: "DISPDATE",
      description: "Disp Date",
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
      id: "column-1111",
      object_id: "column-1111",
      name: "DISPTIME",
      name_without_path: "DISPTIME",
      description: "Disp Time",
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
      id: "column-1112",
      object_id: "column-1112",
      name: "ENRTDATE",
      name_without_path: "ENRTDATE",
      description: "Enrt Date",
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
      id: "column-1113",
      object_id: "column-1113",
      name: "ENRTTIME",
      name_without_path: "ENRTTIME",
      description: "Enrt Time",
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
      id: "column-1114",
      object_id: "column-1114",
      name: "OSDATE",
      name_without_path: "OSDATE",
      description: "OS Date",
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
      id: "column-1115",
      object_id: "column-1115",
      name: "OSTIME",
      name_without_path: "OSTIME",
      description: "OS Time",
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
      id: "column-1116",
      object_id: "column-1116",
      name: "CLEARDATE",
      name_without_path: "CLEARDATE",
      description: "Clear Date",
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
      id: "column-1117",
      object_id: "column-1117",
      name: "CLEARTIME",
      name_without_path: "CLEARTIME",
      description: "Clear Time",
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
      id: "column-1118",
      object_id: "column-1118",
      name: "DISPTIMEN",
      name_without_path: "DISPTIMEN",
      description: "Disp Time",
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
      id: "column-1119",
      object_id: "column-1119",
      name: "ENRTTIMEN",
      name_without_path: "ENRTTIMEN",
      description: "Enrt Time",
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
      id: "column-1120",
      object_id: "column-1120",
      name: "OSTIMEN",
      name_without_path: "OSTIMEN",
      description: "OS Time",
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
      id: "column-1121",
      object_id: "column-1121",
      name: "CLEARTIMEN",
      name_without_path: "CLEARTIMEN",
      description: "CLEAR Time N",
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
      id: "column-1122",
      object_id: "column-1122",
      name: "DISP_OS",
      name_without_path: "DISP_OS",
      description: "Disp-OS Time",
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
      id: "column-1123",
      object_id: "column-1123",
      name: "OS_CLEAR",
      name_without_path: "OS_CLEAR",
      description: "OS-Clear Time",
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
      id: "column-1124",
      object_id: "column-1124",
      name: "DISP_CLEAR",
      name_without_path: "DISP_CLEAR",
      description: "Disp-Clear Time",
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
      id: "column-1125",
      object_id: "column-1125",
      name: "PRIMARYUNIT",
      name_without_path: "PRIMARYUNIT",
      description: "Primary Unit",
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
      id: "column-1126",
      object_id: "column-1126",
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
      id: "column-1127",
      object_id: "column-1127",
      name: "OFCRNUM2",
      name_without_path: "OFCRNUM2",
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
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-1128",
      object_id: "column-1128",
      name: "ENRT_OS",
      name_without_path: "ENRT_OS",
      description: "Enrt-OS Time",
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
      name: "FK_INCUNITS_INCNUM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "INCUNITS",
      foreign_table_show_schema: "dbo.INCUNITS",
      foreign_table_verbose: "INCUNITS",
      foreign_table_verbose_show_schema: "dbo.INCUNITS",
      foreign_table_object_id: "t48",
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
      name: "FK_INCUNITS_OFFICER",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "INCUNITS",
      foreign_table_show_schema: "dbo.INCUNITS",
      foreign_table_verbose: "INCUNITS",
      foreign_table_verbose_show_schema: "dbo.INCUNITS",
      foreign_table_object_id: "t48",
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
  ],
  unique_keys: [
    {
      name: "PK_INCUNITS",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 1126,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "INCUNITS",
        object_name_show_schema: "dbo.INCUNITS",
        object_type: "TABLE",
        object_id: "t48",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
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
    used_by: [],
  },
  object_id: "t48",
  name: "INCUNITS",
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
    { field: "Name", value: "INCUNITS" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
