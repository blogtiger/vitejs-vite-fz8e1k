window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-8990",
      object_id: "column-8990",
      name: "IDATE",
      name_without_path: "IDATE",
      description: "History Date",
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
      id: "column-8991",
      object_id: "column-8991",
      name: "ICODE",
      name_without_path: "ICODE",
      description: "History Nature",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "4",
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
      id: "column-8992",
      object_id: "column-8992",
      name: "ITEXT",
      name_without_path: "ITEXT",
      description: "History Text",
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
      id: "column-8993",
      object_id: "column-8993",
      name: "ID",
      name_without_path: "ID",
      description: "ID",
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
        { id: "t412", name: "ALPHA", name_show_schema: "dbo.ALPHA" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-8994",
      object_id: "column-8994",
      name: "CITATION",
      name_without_path: "CITATION",
      description: "History Citation #",
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
      references: [
        { id: "t357", name: "CITATION", name_show_schema: "dbo.CITATION" },
      ],
      linked_lookup: null,
    },
    {
      id: "column-8995",
      object_id: "column-8995",
      name: "CASEN",
      name_without_path: "CASEN",
      description: "History Case #",
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
      id: "column-8996",
      object_id: "column-8996",
      name: "INCNUM",
      name_without_path: "INCNUM",
      description: "History Incident #",
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
      id: "column-8997",
      object_id: "column-8997",
      name: "FINUM",
      name_without_path: "FINUM",
      description: "History FI Card #",
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
      id: "column-8998",
      object_id: "column-8998",
      name: "AGCODE",
      name_without_path: "AGCODE",
      description: "History Agency Code",
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
      id: "column-8999",
      object_id: "column-8999",
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
      id: "column-9000",
      object_id: "column-9000",
      name: "DATEADDED",
      name_without_path: "DATEADDED",
      description: "History Date Added",
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
      id: "column-9001",
      object_id: "column-9001",
      name: "TIMEADDED",
      name_without_path: "TIMEADDED",
      description: "History Time Added",
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
      id: "column-9002",
      object_id: "column-9002",
      name: "USERID",
      name_without_path: "USERID",
      description: "History Entered By",
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
      id: "column-9003",
      object_id: "column-9003",
      name: "CRTNUM",
      name_without_path: "CRTNUM",
      description: "History Terminal #",
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
  ],
  relations: [
    {
      name: "FK_AINFO_AGCODE",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "AINFO",
      foreign_table_show_schema: "dbo.AINFO",
      foreign_table_verbose: "AINFO",
      foreign_table_verbose_show_schema: "dbo.AINFO",
      foreign_table_object_id: "t380",
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
      name: "FK_AINFO_ID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "AINFO",
      foreign_table_show_schema: "dbo.AINFO",
      foreign_table_verbose: "AINFO",
      foreign_table_verbose_show_schema: "dbo.AINFO",
      foreign_table_object_id: "t380",
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
      name: "FK_AINFO_CASES",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "AINFO",
      foreign_table_show_schema: "dbo.AINFO",
      foreign_table_verbose: "AINFO",
      foreign_table_verbose_show_schema: "dbo.AINFO",
      foreign_table_object_id: "t380",
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
      name: "FK_AINFO_CITATION",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "AINFO",
      foreign_table_show_schema: "dbo.AINFO",
      foreign_table_verbose: "AINFO",
      foreign_table_verbose_show_schema: "dbo.AINFO",
      foreign_table_object_id: "t380",
      primary_table: "CITATION",
      primary_table_show_schema: "dbo.CITATION",
      primary_table_verbose: "CITATION",
      primary_table_verbose_show_schema: "dbo.CITATION",
      primary_table_object_id: "t357",
      pk_cardinality: "1x",
      fk_cardinality: "mx",
      constraints: [
        {
          primary_column_path: null,
          primary_column: "CITATION",
          foreign_column_path: null,
          foreign_column: "CITATION",
        },
      ],
      custom_fields: {},
    },
    {
      name: "FK_AINFO_INCNUM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "AINFO",
      foreign_table_show_schema: "dbo.AINFO",
      foreign_table_verbose: "AINFO",
      foreign_table_verbose_show_schema: "dbo.AINFO",
      foreign_table_object_id: "t380",
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
      name: "FK_AINFO_CRTNUM",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "AINFO",
      foreign_table_show_schema: "dbo.AINFO",
      foreign_table_verbose: "AINFO",
      foreign_table_verbose_show_schema: "dbo.AINFO",
      foreign_table_object_id: "t380",
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
    {
      name: "FK_AINFO_USERID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "AINFO",
      foreign_table_show_schema: "dbo.AINFO",
      foreign_table_verbose: "AINFO",
      foreign_table_verbose_show_schema: "dbo.AINFO",
      foreign_table_object_id: "t380",
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
      name: "PK_AINFO",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 8999,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "AINFO",
        object_name_show_schema: "dbo.AINFO",
        object_type: "TABLE",
        object_id: "t380",
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
          {
            object_name: "CITATION",
            object_name_show_schema: "dbo.CITATION",
            object_type: "TABLE",
            object_id: "t357",
            type: "RELATION",
            pk_cardinality: "1x",
            fk_cardinality: "mx",
            object_user_defined: false,
            user_defined: false,
            children: [],
          },
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
  object_id: "t380",
  name: "AINFO",
  subtype: "TABLE",
  is_user_defined: false,
  description:
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n                <html xmlns="http://www.w3.org/1999/xhtml">\r\n                    <head>\r\n                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>\r\n                        </title>\r\n                        <style type="text/css">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:\'Segoe UI\';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class="cs2654AE3A"><span class="cs416E45A4">Alpha History</span></p></body>\r\n                </html>',
  summary: [
    {
      field: "Documentation",
      value: { _type: "link", name: "SUN RIDGE SYSTEMS", id: "d1" },
    },
    { field: "Schema", value: "dbo" },
    { field: "Name", value: "AINFO" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
