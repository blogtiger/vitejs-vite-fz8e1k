window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-1292",
      object_id: "column-1292",
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
      id: "column-1293",
      object_id: "column-1293",
      name: "USERID",
      name_without_path: "USERID",
      description: "User ID",
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
      references: [
        { id: "t385", name: "USERS", name_show_schema: "dbo.USERS" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-1294",
      object_id: "column-1294",
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
      id: "column-1295",
      object_id: "column-1295",
      name: "INMUNITFIELDS1",
      name_without_path: "INMUNITFIELDS1",
      description: "INM Unit  Field S1",
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
      id: "column-1296",
      object_id: "column-1296",
      name: "INMUNITCOLORDER1",
      name_without_path: "INMUNITCOLORDER1",
      description: "INM Unit  Color DER1",
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
      id: "column-1297",
      object_id: "column-1297",
      name: "INMUNITCOLWIDTH1",
      name_without_path: "INMUNITCOLWIDTH1",
      description: "INM Unit COLWidth1",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "64",
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
      id: "column-1298",
      object_id: "column-1298",
      name: "INMUNITFIELDS2",
      name_without_path: "INMUNITFIELDS2",
      description: "INM Unit  Field S2",
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
      id: "column-1299",
      object_id: "column-1299",
      name: "INMUNITCOLORDER2",
      name_without_path: "INMUNITCOLORDER2",
      description: "INM Unit  Color DER2",
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
      id: "column-1300",
      object_id: "column-1300",
      name: "INMUNITCOLWIDTH2",
      name_without_path: "INMUNITCOLWIDTH2",
      description: "INM Unit COLWidth2",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "64",
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
      id: "column-1301",
      object_id: "column-1301",
      name: "INMUNITSORTORDER",
      name_without_path: "INMUNITSORTORDER",
      description: "INM UnitsORT Order",
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
      id: "column-1302",
      object_id: "column-1302",
      name: "AUTOLOAD",
      name_without_path: "AUTOLOAD",
      description: "Auto  Load",
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
      id: "column-1303",
      object_id: "column-1303",
      name: "UNITTYPES",
      name_without_path: "UNITTYPES",
      description: "Unit  Types",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "60",
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
      id: "column-1304",
      object_id: "column-1304",
      name: "DATETIME",
      name_without_path: "DATETIME",
      description: "Date  Time",
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
      id: "column-1305",
      object_id: "column-1305",
      name: "FILTER",
      name_without_path: "FILTER",
      description: "Filter",
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
      id: "column-1306",
      object_id: "column-1306",
      name: "DISPLAYHEIGHT",
      name_without_path: "DISPLAYHEIGHT",
      description: "Display  Height",
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
      id: "column-1307",
      object_id: "column-1307",
      name: "DISPLAYWIDTH",
      name_without_path: "DISPLAYWIDTH",
      description: "Display Width",
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
      id: "column-1308",
      object_id: "column-1308",
      name: "DISPLAYTOP",
      name_without_path: "DISPLAYTOP",
      description: "Display  Top",
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
      id: "column-1309",
      object_id: "column-1309",
      name: "DISPLAYLEFT",
      name_without_path: "DISPLAYLEFT",
      description: "Display  Left",
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
      id: "column-1310",
      object_id: "column-1310",
      name: "PRIMARYDISPLAY",
      name_without_path: "PRIMARYDISPLAY",
      description: "Primary  Display",
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
      id: "column-1311",
      object_id: "column-1311",
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
      name: "FK_INM_UNITDISPLAYS_USERID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "INM_UNITDISPLAYS",
      foreign_table_show_schema: "dbo.INM_UNITDISPLAYS",
      foreign_table_verbose: "INM_UNITDISPLAYS",
      foreign_table_verbose_show_schema: "dbo.INM_UNITDISPLAYS",
      foreign_table_object_id: "t63",
      primary_table: "USERS",
      primary_table_show_schema: "dbo.USERS",
      primary_table_verbose: "USERS",
      primary_table_verbose_show_schema: "dbo.USERS",
      primary_table_object_id: "t385",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "USERID",
          foreign_column_path: null,
          foreign_column: "USERID",
        },
      ],
      custom_fields: {},
    },
  ],
  unique_keys: [
    {
      name: "PK_INM_UNITDISPLAYS",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 1311,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "INM_UNITDISPLAYS",
        object_name_show_schema: "dbo.INM_UNITDISPLAYS",
        object_type: "TABLE",
        object_id: "t63",
        type: "NORMAL",
        object_user_defined: false,
        user_defined: false,
        children: [
          {
            object_name: "USERS",
            object_name_show_schema: "dbo.USERS",
            object_type: "TABLE",
            object_id: "t385",
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
  object_id: "t63",
  name: "INM_UNITDISPLAYS",
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
    { field: "Name", value: "INM_UNITDISPLAYS" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
