window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-2085",
      object_id: "column-2085",
      name: "ID",
      name_without_path: "ID",
      description: "PERSON ID",
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
      references: [],
      linked_lookup: null,
    },
    {
      id: "column-2086",
      object_id: "column-2086",
      name: "ATTACHCAT",
      name_without_path: "ATTACHCAT",
      description: "ATTACHEMNT CATEGORY",
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
      id: "column-2087",
      object_id: "column-2087",
      name: "CMT",
      name_without_path: "CMT",
      description: "COMMENT",
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
      id: "column-2088",
      object_id: "column-2088",
      name: "ATTACHMENT",
      name_without_path: "ATTACHMENT",
      description: "ATTACHMENT BINARY",
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
      id: "column-2089",
      object_id: "column-2089",
      name: "DATEX",
      name_without_path: "DATEX",
      description: "DATE ENTERED",
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
      id: "column-2090",
      object_id: "column-2090",
      name: "ENTEREDBY",
      name_without_path: "ENTEREDBY",
      description: "ENTERED BY USER ID",
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
      id: "column-2091",
      object_id: "column-2091",
      name: "AGCODE",
      name_without_path: "AGCODE",
      description: "AGENCY CODE",
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
      id: "column-2092",
      object_id: "column-2092",
      name: "FILENAME",
      name_without_path: "FILENAME",
      description: "FILE NAME",
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
      id: "column-2093",
      object_id: "column-2093",
      name: "FILEX",
      name_without_path: "FILEX",
      description: "FILE EXTENSION",
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
      id: "column-2094",
      object_id: "column-2094",
      name: "FILEPATH",
      name_without_path: "FILEPATH",
      description: "FILE PATH FOR LINKED ATTACHMENTS",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "255",
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
      id: "column-2095",
      object_id: "column-2095",
      name: "FAKE_KEY",
      name_without_path: "FAKE_KEY",
      description: "INTERNAL PRIMARY KEY",
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
      name: "FK_PUBLICRECORDSATTACH_AGCODE",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "PUBLICRECORDSATTACH",
      foreign_table_show_schema: "dbo.PUBLICRECORDSATTACH",
      foreign_table_verbose: "PUBLICRECORDSATTACH",
      foreign_table_verbose_show_schema: "dbo.PUBLICRECORDSATTACH",
      foreign_table_object_id: "t96",
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
  ],
  unique_keys: [
    {
      name: "PK_PUBLICRECORDSATTACH",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 2095,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "PUBLICRECORDSATTACH",
        object_name_show_schema: "dbo.PUBLICRECORDSATTACH",
        object_type: "TABLE",
        object_id: "t96",
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
        ],
      },
    ],
    used_by: [],
  },
  object_id: "t96",
  name: "PUBLICRECORDSATTACH",
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
    { field: "Name", value: "PUBLICRECORDSATTACH" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
