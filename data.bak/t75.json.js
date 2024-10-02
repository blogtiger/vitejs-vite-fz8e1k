window.repositoryObject = {
  columns_custom_fields: [],
  relations_custom_fields: [],
  unique_keys_custom_fields: [],
  triggers_custom_fields: [],
  columns: [
    {
      id: "column-1725",
      object_id: "column-1725",
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
      id: "column-1726",
      object_id: "column-1726",
      name: "EDUCATIONLEVEL",
      name_without_path: "EDUCATIONLEVEL",
      description: "Education  Level",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "30",
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
      id: "column-1727",
      object_id: "column-1727",
      name: "DEGREE",
      name_without_path: "DEGREE",
      description: "Degree",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "30",
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
      id: "column-1728",
      object_id: "column-1728",
      name: "MAJOR",
      name_without_path: "MAJOR",
      description: "Major",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "30",
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
      id: "column-1729",
      object_id: "column-1729",
      name: "MINOR",
      name_without_path: "MINOR",
      description: "Minor",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "30",
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
      id: "column-1730",
      object_id: "column-1730",
      name: "SCHOOL",
      name_without_path: "SCHOOL",
      description: "School",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "30",
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
      id: "column-1731",
      object_id: "column-1731",
      name: "QuarterUnits",
      name_without_path: "QuarterUnits",
      description: "Quarte Run its",
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
      id: "column-1732",
      object_id: "column-1732",
      name: "SemesterUnits",
      name_without_path: "SemesterUnits",
      description: "Semeste Run its",
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
      id: "column-1733",
      object_id: "column-1733",
      name: "Hours",
      name_without_path: "Hours",
      description: "Hours",
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
      id: "column-1734",
      object_id: "column-1734",
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
      id: "column-1735",
      object_id: "column-1735",
      name: "LOCATION",
      name_without_path: "LOCATION",
      description: "Location",
      is_pk: false,
      is_identity: false,
      data_type: "varchar",
      data_length: "30",
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
      id: "column-1736",
      object_id: "column-1736",
      name: "YEARS",
      name_without_path: "YEARS",
      description: "Year S",
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
      name: "FK_TRAINEDUCATION_USERID",
      title: null,
      description: null,
      is_user_defined: false,
      foreign_table: "TRAINEDUCATION",
      foreign_table_show_schema: "dbo.TRAINEDUCATION",
      foreign_table_verbose: "TRAINEDUCATION",
      foreign_table_verbose_show_schema: "dbo.TRAINEDUCATION",
      foreign_table_object_id: "t75",
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
      name: "PK_TRAINEDUCATION",
      description: null,
      is_pk: true,
      is_user_defined: false,
      columns: [
        {
          path: null,
          name_without_path: "FAKE_KEY",
          name: "FAKE_KEY",
          column_id: 1725,
        },
      ],
      custom_fields: {},
    },
  ],
  triggers: [],
  dependencies: {
    uses: [
      {
        object_name: "TRAINEDUCATION",
        object_name_show_schema: "dbo.TRAINEDUCATION",
        object_type: "TABLE",
        object_id: "t75",
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
  object_id: "t75",
  name: "TRAINEDUCATION",
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
    { field: "Name", value: "TRAINEDUCATION" },
    { field: "Type", value: "Table" },
  ],
  script: "",
  imported_at: "2024-10-01 02:34",
};
