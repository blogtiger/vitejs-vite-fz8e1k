window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-9441",
      object_id: "column-9441",
      name: "ID",
      name_without_path: "ID",
      description: "ID",
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
        { id: "t412", name: "ALPHA", name_show_schema: "dbo.ALPHA" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-9442",
      object_id: "column-9442",
      name: "NAME",
      name_without_path: "NAME",
      description: "Name",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "48",
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
      id: "column-9443",
      object_id: "column-9443",
      name: "ENTEREDBY",
      name_without_path: "ENTEREDBY",
      description: "Entered By",
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
      id: "column-9444",
      object_id: "column-9444",
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
      id: "column-9445",
      object_id: "column-9445",
      name: "REQUESTEDBY",
      name_without_path: "REQUESTEDBY",
      description: "RequestedBY",
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
      id: "column-9446",
      object_id: "column-9446",
      name: "REQTEL",
      name_without_path: "REQTEL",
      description: "REQ Tel",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "12",
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
      id: "column-9447",
      object_id: "column-9447",
      name: "OTHER1",
      name_without_path: "OTHER1",
      description: "Other 1",
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
      id: "column-9448",
      object_id: "column-9448",
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
      id: "column-9449",
      object_id: "column-9449",
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
      id: "column-9450",
      object_id: "column-9450",
      name: "OTHER2",
      name_without_path: "OTHER2",
      description: "Other 2",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "8000",
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
      id: "column-9451",
      object_id: "column-9451",
      name: "EXPDATE",
      name_without_path: "EXPDATE",
      description: "EXP Date",
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
      id: "column-9452",
      object_id: "column-9452",
      name: "INCLUDEINCITIZENRIMS",
      name_without_path: "INCLUDEINCITIZENRIMS",
      description: "Include IN Citizen  RIMS",
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
      id: "column-9453",
      object_id: "column-9453",
      name: "VEHICLEID",
      name_without_path: "VEHICLEID",
      description: "Vehicle ID",
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
      id: "column-9454",
      object_id: "column-9454",
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
      id: "column-9455",
      object_id: "column-9455",
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
  ],
  relations: [
    {
      name: "FK_BOLO_AGCODE",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "BOLO",
      foreign_table_show_schema: "dbo.BOLO",
      foreign_table_verbose: "BOLO",
      foreign_table_verbose_show_schema: "dbo.BOLO",
      foreign_table_object_id: "t399",
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
      name: "FK_BOLO_ID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "BOLO",
      foreign_table_show_schema: "dbo.BOLO",
      foreign_table_verbose: "BOLO",
      foreign_table_verbose_show_schema: "dbo.BOLO",
      foreign_table_object_id: "t399",
      primary_table: "ALPHA",
      primary_table_show_schema: "dbo.ALPHA",
      primary_table_verbose: "ALPHA",
      primary_table_verbose_show_schema: "dbo.ALPHA",
      primary_table_object_id: "t412",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "ID",
          foreign_column_path: null,
          foreign_column: "ID",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_BOLO_CASES",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "BOLO",
      foreign_table_show_schema: "dbo.BOLO",
      foreign_table_verbose: "BOLO",
      foreign_table_verbose_show_schema: "dbo.BOLO",
      foreign_table_object_id: "t399",
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
  ],
  unique_keys: [
    {
      name: "PK_BOLO",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 9454,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "BOLO",
        object_name_show_schema: "dbo.BOLO",
        object_type: "TABLE",
        object_id: "t399",
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
            object_name: "ALPHA",
            object_name_show_schema: "dbo.ALPHA",
            object_type: "TABLE",
            object_id: "t412",
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
        ],
      },
    ],
    used_by: [],
  },
  object_id: "t399",
  name: "BOLO",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">Be On Look Out</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "BOLO" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
