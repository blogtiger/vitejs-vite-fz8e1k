window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-750",
      object_id: "column-750",
      name: "BOOK_NO",
      name_without_path: "BOOK_NO",
      description: "Booking Number",
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
      references: [
        { id: "t69", name: "INM_BOOKING", name_show_schema: "dbo.INM_BOOKING" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-751",
      object_id: "column-751",
      name: "TYPE",
      name_without_path: "TYPE",
      description: "Type",
      is_pk: true,
      is_identity: false,
      data_type: "varchar",
      data_length: "2",
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
      id: "column-752",
      object_id: "column-752",
      name: "VERSION",
      name_without_path: "VERSION",
      description: "Version",
      is_pk: true,
      is_identity: false,
      data_type: "varchar",
      data_length: "10",
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
      id: "column-753",
      object_id: "column-753",
      name: "LINE_INDX",
      name_without_path: "LINE_INDX",
      description: null,
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
      id: "column-754",
      object_id: "column-754",
      name: "LINE_VALUE",
      name_without_path: "LINE_VALUE",
      description: "LINE  Value",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "3",
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
      id: "column-755",
      object_id: "column-755",
      name: "LINE_TEXT",
      name_without_path: "LINE_TEXT",
      description: "LINE  Text",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "500",
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
      id: "column-756",
      object_id: "column-756",
      name: "INMATE_WARNING",
      name_without_path: "INMATE_WARNING",
      description: "INMATE  Warning",
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
      id: "column-757",
      object_id: "column-757",
      name: "NUMVALUE",
      name_without_path: "NUMVALUE",
      description: "Numeric Value",
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
      id: "column-758",
      object_id: "column-758",
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
      id: "column-759",
      object_id: "column-759",
      name: "FACILITY",
      name_without_path: "FACILITY",
      description: "Facility Code",
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
  ],
  relations: [
    {
      name: "FK_INM_INT_QUESTIONS_BOOKNO",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "INM_INT_QUESTIONS",
      foreign_table_show_schema: "dbo.INM_INT_QUESTIONS",
      foreign_table_verbose: "INM_INT_QUESTIONS",
      foreign_table_verbose_show_schema: "dbo.INM_INT_QUESTIONS",
      foreign_table_object_id: "t32",
      primary_table: "INM_BOOKING",
      primary_table_show_schema: "dbo.INM_BOOKING",
      primary_table_verbose: "INM_BOOKING",
      primary_table_verbose_show_schema: "dbo.INM_BOOKING",
      primary_table_object_id: "t69",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "BOOKNO",
          foreign_column_path: null,
          foreign_column: "BOOK_NO",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_INM_INT_QUESTIONS",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "BOOK_NO",
          name: "BOOK_NO",
          column_id: 750,
        },
        { path: null, name_without_path: "TYPE", name: "TYPE", column_id: 751 },
        {
          path: null,
          name_without_path: "VERSION",
          name: "VERSION",
          column_id: 752,
        },
        {
          path: null,
          name_without_path: "LINE_INDX",
          name: "LINE_INDX",
          column_id: 753,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "INM_INT_QUESTIONS",
        object_name_show_schema: "dbo.INM_INT_QUESTIONS",
        object_type: "TABLE",
        object_id: "t32",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "INM_BOOKING",
            object_name_show_schema: "dbo.INM_BOOKING",
            object_type: "TABLE",
            object_id: "t69",
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
  object_id: "t32",
  name: "INM_INT_QUESTIONS",
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
    { field: "Name", value: "INM_INT_QUESTIONS" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
