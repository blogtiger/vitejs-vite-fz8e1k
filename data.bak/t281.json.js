window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-6234",
      object_id: "column-6234",
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
      id: "column-6235",
      object_id: "column-6235",
      name: "PROFILENAME",
      name_without_path: "PROFILENAME",
      description: "PRO File  Name",
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
      id: "column-6236",
      object_id: "column-6236",
      name: "CRTNUM",
      name_without_path: "CRTNUM",
      description: "CRT Num",
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
        { id: "t30", name: "TERMINAL", name_show_schema: "dbo.TERMINAL" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-6237",
      object_id: "column-6237",
      name: "FACILITY",
      name_without_path: "FACILITY",
      description: "Facility",
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
      id: "column-6238",
      object_id: "column-6238",
      name: "BUILDING",
      name_without_path: "BUILDING",
      description: "Build ING",
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
      id: "column-6239",
      object_id: "column-6239",
      name: "FLOORS",
      name_without_path: "FLOORS",
      description: "Floors",
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
      id: "column-6240",
      object_id: "column-6240",
      name: "ALLFLOORS",
      name_without_path: "ALLFLOORS",
      description: "All  Floors",
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
      id: "column-6241",
      object_id: "column-6241",
      name: "CAPTION",
      name_without_path: "CAPTION",
      description: "Caption",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "50",
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
      id: "column-6242",
      object_id: "column-6242",
      name: "NUMCOLUMNS",
      name_without_path: "NUMCOLUMNS",
      description: "Num COLUMNS",
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
      id: "column-6243",
      object_id: "column-6243",
      name: "INACTIVE",
      name_without_path: "INACTIVE",
      description: "Inactive",
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
      id: "column-6244",
      object_id: "column-6244",
      name: "ZOOM",
      name_without_path: "ZOOM",
      description: "Zoom",
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
      id: "column-6245",
      object_id: "column-6245",
      name: "DISPLAYMONITOR",
      name_without_path: "DISPLAYMONITOR",
      description: "Display  Monitor",
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
      id: "column-6246",
      object_id: "column-6246",
      name: "EMPTYSECTIONS",
      name_without_path: "EMPTYSECTIONS",
      description: "EMPTY SectionS",
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
  ],
  relations: [
    {
      name: "FK_INM_MONITOR_CRTNUM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "INM_MONITOR",
      foreign_table_show_schema: "dbo.INM_MONITOR",
      foreign_table_verbose: "INM_MONITOR",
      foreign_table_verbose_show_schema: "dbo.INM_MONITOR",
      foreign_table_object_id: "t281",
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
      name: "PK_INM_MONITOR",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 6234,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "INM_MONITOR",
        object_name_show_schema: "dbo.INM_MONITOR",
        object_type: "TABLE",
        object_id: "t281",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
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
  object_id: "t281",
  name: "INM_MONITOR",
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
    { field: "Name", value: "INM_MONITOR" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
