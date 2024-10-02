window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-3350",
      object_id: "column-3350",
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
      id: "column-3351",
      object_id: "column-3351",
      name: "PROBLEMCODE",
      name_without_path: "PROBLEMCODE",
      description: "Case Items for DA Review",
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
      id: "column-3352",
      object_id: "column-3352",
      name: "PROBLEMDESC",
      name_without_path: "PROBLEMDESC",
      description: "Problem DESC",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "3000",
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
      id: "column-3353",
      object_id: "column-3353",
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
      id: "column-3354",
      object_id: "column-3354",
      name: "APPOFCRNUM",
      name_without_path: "APPOFCRNUM",
      description: "App Officer Num",
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
      id: "column-3355",
      object_id: "column-3355",
      name: "CORRECTED",
      name_without_path: "CORRECTED",
      description: "Correct ED",
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
      id: "column-3356",
      object_id: "column-3356",
      name: "VERIFIED",
      name_without_path: "VERIFIED",
      description: "Verified",
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
      id: "column-3357",
      object_id: "column-3357",
      name: "DATEX",
      name_without_path: "DATEX",
      description: "Date X",
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
      id: "column-3358",
      object_id: "column-3358",
      name: "TIMEX",
      name_without_path: "TIMEX",
      description: "Time X",
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
      id: "column-3359",
      object_id: "column-3359",
      name: "NARRSUPP",
      name_without_path: "NARRSUPP",
      description: null,
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "5",
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
      id: "column-3360",
      object_id: "column-3360",
      name: "DATECORRECTED",
      name_without_path: "DATECORRECTED",
      description: "Date  Correct ED",
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
      id: "column-3361",
      object_id: "column-3361",
      name: "TIMECORRECTED",
      name_without_path: "TIMECORRECTED",
      description: "Time  Correct ED",
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
      id: "column-3362",
      object_id: "column-3362",
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
      name: "FK_CASEITEMSDA_CASES",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "CASEITEMSDA",
      foreign_table_show_schema: "dbo.CASEITEMSDA",
      foreign_table_verbose: "CASEITEMSDA",
      foreign_table_verbose_show_schema: "dbo.CASEITEMSDA",
      foreign_table_object_id: "t153",
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
      name: "FK_CASEITEMSDA_OFFICER",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "CASEITEMSDA",
      foreign_table_show_schema: "dbo.CASEITEMSDA",
      foreign_table_verbose: "CASEITEMSDA",
      foreign_table_verbose_show_schema: "dbo.CASEITEMSDA",
      foreign_table_object_id: "t153",
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
      name: "PK_CASEITEMSDA",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 3362,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "CASEITEMSDA",
        object_name_show_schema: "dbo.CASEITEMSDA",
        object_type: "TABLE",
        object_id: "t153",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
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
  object_id: "t153",
  name: "CASEITEMSDA",
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
    { field: "Name", value: "CASEITEMSDA" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
