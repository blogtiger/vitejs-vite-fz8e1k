window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-5996",
      object_id: "column-5996",
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
      id: "column-5997",
      object_id: "column-5997",
      name: "DIVID",
      name_without_path: "DIVID",
      description: "DIV ID",
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
      id: "column-5998",
      object_id: "column-5998",
      name: "AUTOROUTETOINV",
      name_without_path: "AUTOROUTETOINV",
      description: "Auto  Route TOINV",
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
      id: "column-5999",
      object_id: "column-5999",
      name: "STATUTEKEY",
      name_without_path: "STATUTEKEY",
      description: "STATUTE Key",
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
        { id: "t276", name: "STATUTE", name_show_schema: "dbo.STATUTE" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-6000",
      object_id: "column-6000",
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
  ],
  relations: [
    {
      name: "FK_STATUTEROUTING_AGCODE",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "STATUTEROUTING",
      foreign_table_show_schema: "dbo.STATUTEROUTING",
      foreign_table_verbose: "STATUTEROUTING",
      foreign_table_verbose_show_schema: "dbo.STATUTEROUTING",
      foreign_table_object_id: "t264",
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
      name: "FK_STATUTEROUTING_STATUTEKEY",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "STATUTEROUTING",
      foreign_table_show_schema: "dbo.STATUTEROUTING",
      foreign_table_verbose: "STATUTEROUTING",
      foreign_table_verbose_show_schema: "dbo.STATUTEROUTING",
      foreign_table_object_id: "t264",
      primary_table: "STATUTE",
      primary_table_show_schema: "dbo.STATUTE",
      primary_table_verbose: "STATUTE",
      primary_table_verbose_show_schema: "dbo.STATUTE",
      primary_table_object_id: "t276",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "FAKE_KEY",
          foreign_column_path: null,
          foreign_column: "STATUTEKEY",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_STATUTEROUTING",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 6000,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "STATUTEROUTING",
        object_name_show_schema: "dbo.STATUTEROUTING",
        object_type: "TABLE",
        object_id: "t264",
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
            object_name: "STATUTE",
            object_name_show_schema: "dbo.STATUTE",
            object_type: "TABLE",
            object_id: "t276",
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
  object_id: "t264",
  name: "STATUTEROUTING",
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
    { field: "Name", value: "STATUTEROUTING" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
