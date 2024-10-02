window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-7640",
      object_id: "column-7640",
      name: "VEHICLEID",
      name_without_path: "VEHICLEID",
      description: "Vehicle ID",
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
        { id: "t88", name: "VEHICLE", name_show_schema: "dbo.VEHICLE" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-7641",
      object_id: "column-7641",
      name: "DESCX",
      name_without_path: "DESCX",
      description: null,
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
      id: "column-7642",
      object_id: "column-7642",
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
      id: "column-7643",
      object_id: "column-7643",
      name: "PHOTOINDEX",
      name_without_path: "PHOTOINDEX",
      description: "Photo  Index",
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
      id: "column-7644",
      object_id: "column-7644",
      name: "PICTURE",
      name_without_path: "PICTURE",
      description: "Picture",
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
      name: "FK_VEHPHOTOS_VEHICLEID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "VEHPHOTOS",
      foreign_table_show_schema: "dbo.VEHPHOTOS",
      foreign_table_verbose: "VEHPHOTOS",
      foreign_table_verbose_show_schema: "dbo.VEHPHOTOS",
      foreign_table_object_id: "t335",
      primary_table: "VEHICLE",
      primary_table_show_schema: "dbo.VEHICLE",
      primary_table_verbose: "VEHICLE",
      primary_table_verbose_show_schema: "dbo.VEHICLE",
      primary_table_object_id: "t88",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "VEHICLEID",
          foreign_column_path: null,
          foreign_column: "VEHICLEID",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_VEHPHOTOS",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "VEHICLEID",
          name: "VEHICLEID",
          column_id: 7640,
        },
        {
          path: null,
          name_without_path: "PHOTOINDEX",
          name: "PHOTOINDEX",
          column_id: 7643,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "VEHPHOTOS",
        object_name_show_schema: "dbo.VEHPHOTOS",
        object_type: "TABLE",
        object_id: "t335",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "VEHICLE",
            object_name_show_schema: "dbo.VEHICLE",
            object_type: "TABLE",
            object_id: "t88",
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
  object_id: "t335",
  name: "VEHPHOTOS",
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
    { field: "Name", value: "VEHPHOTOS" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
